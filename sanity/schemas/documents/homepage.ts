import { defineField, defineType } from "sanity";
import { HomeIcon } from "@sanity/icons";

export default defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  icon: HomeIcon,
  fieldsets: [
    {
      name: "concerts",
      title: "GIGS",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: false, // Defines if the fieldset should be collapsed by default or not
        columns: 1, // Defines a grid for the fields and how many columns it should have
        modal: { type: "popover" }, //Makes the modal type a popover
      },
    },
  ],

  fields: [
    defineField({
      name: "pages",
      title: "Pages",
      description:
        "Edit the sections here by clicking them, but don't click Add Item below",
      type: "array",
      of: [{ type: "news" }, { type: "about" }],
    }),
    defineField({
      type: "boolean",
      name: "isComponentVisible",
      title: "Is Visible?",
      description: "Set if the gigs component is visible",
      initialValue: true,
      fieldset: "concerts",
    }),
    defineField({
      name: "gigs",
      title: "GIGS",
      type: "array",
      description:
        "Add, Edit and Remove gigs here! (Okay to click Add Item here)",
      of: [{ type: "gigs" }],
      fieldset: "concerts",
    }),

    defineField({
      name: "socials",
      title: "Social Media Links",
      type: "socials",
    }),
  ],
  preview: {
    prepare() {
      return {
        subtitle: "This is the version you edit",
        title: "Landing page",
      };
    },
  },
});
