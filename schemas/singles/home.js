export default {
  name: "home",
  type: "document",
  title: "Home",
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
