import SlugInput from "sanity-plugin-better-slug"
import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list"
export default {
  title: "Partners",
  name: "partner",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      inputComponent: SlugInput, //Reference the SlugInput
      options: {
        source: "title",
        maxLength: 30,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .slice(0, 200)
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ""), //Remove special characters
        validation: (Rule) => Rule.required(),
      },
    },
    {
      title: "Logo",
      name: "logo",
      type: "image",
      options: {
        hotspot: false,
      },
    },
    {
      title: "Featured",
      name: "featured",
      type: "boolean",
    },
    orderRankField({ type: "category" }),
  ],
  orderings: [orderRankOrdering],
}
