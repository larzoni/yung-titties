// import { createClient, groq } from "next-sanity";
// import { Project } from "@/types/Project";

// //testing it out
// export async function getProjects(): Promise<Project[]> {
//   const client = createClient({
//     projectId: "k3tws825",
//     dataset: "production",
//     apiVersion: "2023-08-17",
//   });

//   return client.fetch(
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

import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import { News } from "@/types/News";
import clientConfig from "./config/client-config";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,   
      url,
      content
    }`
  );
}

export async function getNews(): Promise<News[]> {
  // const client = createClient({
  //   projectId: "ivylruw4",
  //   dataset: "production",
  //   apiVersion: "2023-08-17",
  // });

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
