import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";

//testing it out
export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "k3tws825",
    dataset: "production",
    apiVersion: "2023-08-17",
  });

  return client.fetch(
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
