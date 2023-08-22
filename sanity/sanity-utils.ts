import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import { News } from "@/types/News";
import { About } from "@/types/About";
import clientConfig from "./config/client-config";

// export async function getProjects(): Promise<Project[]> {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "project"]{
//       _id,
//       _createdAt,
//       name,
//       "slug": slug.current,
//       "image": image.asset->url,
//       url,
//       content
//     }`
//   );
// }

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
    }`
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
    }`
  );
  return response.aboutItems;
}
