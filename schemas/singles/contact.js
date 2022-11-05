export default {
  title: "Contact",
  name: "contact",
  type: "document",
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
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
