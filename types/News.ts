import { PortableTextBlock } from "sanity";

export type News = {
  _id: string;
  _createdAt: Date;
  heading: string;
  songtitle: string;
  songlink: string;
  coverart: string;
  alt: string;
  aboutrelease: PortableTextBlock[];
  // Adding other properties as needed
};
