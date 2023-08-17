import { PortableTextBlock } from "sanity";

export type News = {
  _id: string;
  _createdAt: Date;
  name: string;
  heading: string;
  songtitle: string;
  songlink: string;
  coverart: string;
  aboutrelease: PortableTextBlock[]; // Matching the property name with my GROQ queries
  // Adding other properties as needed
};
