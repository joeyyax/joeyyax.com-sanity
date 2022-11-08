import SlugInput from "sanity-plugin-better-slug"
import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list"

export default {
  title: "Tags",
  name: "tag",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      title: "Abbreviated Title",
      name: "abbreviatedTitle",
      type: "string",
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
      title: "Category",
      name: "category",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
    },
    {
      title: "Description",
      name: "description",
      type: "string",
    },
    orderRankField({ type: "category" }),
  ],
  orderings: [orderRankOrdering],
}
