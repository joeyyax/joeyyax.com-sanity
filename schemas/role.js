import SlugInput from "sanity-plugin-better-slug"

export default {
  title: "Roles",
  name: "role",
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
      title: "Description",
      name: "description",
      type: "string",
    },
    {
      title: "Order",
      name: "order",
      type: "number",
      hidden: true,
    },
  ],
}
