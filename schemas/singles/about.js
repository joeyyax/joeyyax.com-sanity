export default {
  title: "About",
  name: "about",
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
    {
      title: "Resume",
      name: "resume",
      type: "file",
    },
    {
      title: "Photo",
      name: "photo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
}
