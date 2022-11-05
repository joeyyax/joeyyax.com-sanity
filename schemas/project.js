import SlugInput from "sanity-plugin-better-slug"

export default {
  title: "Projects",
  name: "project",
  type: "document",
  groups: [
    {
      name: "page",
      title: "Page",
      default: true,
    },
    {
      name: "meta",
      title: "Meta",
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      group: "page",
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
      group: "page",
    },
    {
      title: "Hero Image",
      name: "heroImage",
      type: "image",
      options: {
        hotspot: true,
      },
      group: "page",
    },
    {
      title: "Thumbnail",
      name: "thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
      group: "meta",
    },
    {
      title: "Intro",
      name: "intro",
      type: "array",
      of: [{ type: "block" }],
      group: "page",
    },
    {
      title: "URL",
      name: "url",
      type: "url",
      group: "meta",
    },
    {
      name: "color",
      title: "Color",
      type: "colorPicker",
      group: "meta",
    },
    {
      title: "Status",
      name: "status",
      type: "string",
      options: {
        list: [
          { title: "Active Development", value: "active-development" },
          { title: "Actively Maintained", value: "actively-maintained" },
          { title: "No Longer Maintained", value: "not-maintained" },
          { title: "Handed Off", value: "handed-off" },
          { title: "Sunsetted", value: "sunsetted" },
        ],
      },
      group: "meta",
    },
    {
      title: "Notice",
      name: "notice",
      type: "string",
      group: "meta",
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "tag" }],
        },
      ],
      group: "meta",
    },
    {
      title: "Role",
      name: "role",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "role" }],
        },
      ],
      group: "meta",
    },
    {
      title: "Employer",
      name: "employer",
      type: "reference",
      to: [{ type: "partner" }],
      group: "meta",
    },
    {
      title: "Partner",
      name: "partner",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "partner" }],
        },
      ],
      group: "meta",
    },
    {
      title: "Next Project",
      name: "nextProject",
      type: "reference",
      to: [{ type: "project" }],
      group: "meta",
    },
    {
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description: "If left blank, the page title will be used",
      group: "seo",
    },
    {
      name: "seoKeywords",
      title: "SEO Keywords",
      type: "string",
      group: "seo",
    },
    {
      name: "facebookImage",
      title: "Facebook Image",
      type: "image",
      group: ["seo"],
    },
    {
      name: "twitterImage",
      title: "Twitter Image",
      type: "image",
      group: ["seo"],
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
}
