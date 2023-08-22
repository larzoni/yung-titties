import { defineField, defineType } from "sanity";
import { UsersIcon } from "@sanity/icons";

export default defineType({
  name: "about",
  title: "About Us",
  type: "object",
  icon: UsersIcon,
  fields: [
    defineField({
      type: "string",
      name: "heading",
      title: "Heading",
      //description: "The heading of this section",
      validation: (Rule) => [
        Rule.required()
          .min(3)
          .error("A title of min. 10 characters is required"),
        Rule.max(50).warning("Shorter titles are usually better"),
      ],
    }),
    defineField({
      type: "array",
      of: [{ type: "block" }],
      name: "about",
      title: "About",
      //description: "Write your bio!",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "image",
      name: "image",
      options: {
        hotspot: true,
      },
      title: "Image",
      fields: [{ name: "alt", title: "Alt", type: "string" }],
      //description: "Upload a picture of you",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      media: "image",
    },
    prepare({ media }) {
      return {
        title: "About Us",
        subtitle: "Update your bio here",
        media,
      };
    },
  },
});
