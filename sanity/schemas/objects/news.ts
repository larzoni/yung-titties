import { StarIcon } from "@sanity/icons";

const news = {
  name: "news",
  title: "News",
  type: "object",
  icon: StarIcon,
  fields: [
    {
      name: "heading",
      title: "Heading",
      description: "Heading of the section News",
      type: "string",
    },
    {
      name: "songtitle",
      title: "Song Title",
      description: "Name of the release",
      type: "string",
    },

    {
      type: "url",
      name: "songlink",
      title: "Link to the song",
    },
    {
      name: "coverart",
      title: "coverArt",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    },
    {
      name: "aboutrelease",
      title: "About the release",
      description: "Write something about the release",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  preview: {
    prepare() {
      return {
        subtitle: "change to the latest/most recently released song",
        title: "News - Latest release / New release",
      };
    },
  },
};

export default news;
