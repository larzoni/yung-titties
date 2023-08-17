import { defineType } from "sanity";
import { MobileDeviceIcon } from "@sanity/icons";

export default defineType({
  type: "object",
  name: "socials",
  icon: MobileDeviceIcon,
  fieldsets: [{ name: "social" }],
  options: {
    collapsible: false, // Makes the whole fieldset collapsible
    collapsed: false, // Defines if the fieldset should be collapsed by default or not
    columns: 1, // Defines a grid for the fields and how many columns it should have
    modal: { type: "popover" }, //Makes the modal type a popover
  },
  fields: [
    {
      title: "Twitter",
      name: "twitter",
      type: "url",
      fieldset: "social",
    },
    {
      title: "Instagram",
      name: "instagram",
      type: "url",
      fieldset: "social",
    },
    {
      title: "Facebook",
      name: "facebook",
      type: "url",
      fieldset: "social",
    },
  ],
});
