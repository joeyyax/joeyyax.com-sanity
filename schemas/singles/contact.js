export default {
  title: "Contact",
  name: "contact",
  type: "document",
  schemaType: "page",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Body",
      name: "body",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
}
