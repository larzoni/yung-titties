import { createClient, groq, FilteredResponseQueryOptions } from "next-sanity";
import { News } from "@/types/News";
import { About } from "@/types/About";
import { Gigs } from "@/types/Gigs";
import { Socials } from "@/types/Socials";
import clientConfig from "./config/client-config";


const fetchOptions: FilteredResponseQueryOptions = {
  cache: "no-cache",
};

export async function getNews(): Promise<News[]> {
  const response = await createClient(clientConfig).fetch(
    groq`*[_type == "homepage"][0] {
      "newsItems": pages[_type == "news"] {
        heading,
        songtitle,
        songlink,
        'coverart': coverart.asset->url,
        'alt': coverart.alt,
        aboutrelease
      }
    }`,
    {},
    fetchOptions
  );
  return response.newsItems;
}
export async function getAbout(): Promise<About[]> {
  const response = await createClient(clientConfig).fetch(
    groq`*[_type == "homepage"][0] {
      "aboutItems": pages[_type == "about"] {
        heading,
        about,
        'image': image.asset->url,
        'alt': image.alt,
      }
    }`,
    {},
    fetchOptions
  );
  return response.aboutItems;
}
export async function getGigs(): Promise<Gigs[]> {
  const response = await createClient(clientConfig).fetch(
    groq`*[_type == "homepage"][0] {
      "gigItems": gigs[_type == "gigs"] {
        date,
        location,
        tickets,
        gigStatus
      }
    }`,
    {},
    fetchOptions
  );
  return response.gigItems;
}
export async function getSocials(): Promise<Socials> {
  const response = await createClient(clientConfig).fetch(
    groq`*[_type == "homepage"][0] {
      "socials": socials {
        instagram,
        spotify,
        youtube,
        facebook,
        tiktok
      }
    }`,
    {},
    fetchOptions
  );
  return response.socials;
}
