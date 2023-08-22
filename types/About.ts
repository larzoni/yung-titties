import { PortableTextBlock } from "sanity";

export type About = {
  _id: string;
  _createdAt: Date;
  heading: string;
  about: PortableTextBlock[];
  image: string;
  alt: string;
  // Adding other properties as needed
};
