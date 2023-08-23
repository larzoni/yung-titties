import { defineField, defineType } from "sanity";
import { PinIcon } from "@sanity/icons";

export default defineType({
  name: "gigs",
  title: "Gigs",
  type: "object",
  icon: PinIcon,

  fields: [
    defineField({
      title: "Date",
      name: "date",
      type: "datetime",
      description: "When is the gig?",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "h:mm a",
      },
      validation: (Rule) => Rule.required().min(Rule.valueOfField("date")),
    }),
    defineField({
      type: "string",
      name: "location",
      title: "Location",
      description: "City - Venue",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "url",
      name: "tickets",
      title: "Tickets",
      description: "Link to the event",
    }),
    defineField({
      title: "Upcoming gig?",
      name: "gigStatus",
      description: "Is it a future gig or a past gig?",
      type: "boolean",
      validation: (Rule) => Rule.required().warning("Answer this"),
    }),
  ],
  preview: {
    select: {
      title: "location",
    },
    prepare({ title }) {
      return {
        title,
      };
    },
  },
});
