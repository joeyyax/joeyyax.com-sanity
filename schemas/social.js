import { AiOutlineShareAlt as SocialIcon } from "react-icons/ai"

export default {
  title: "Socials",
  name: "social",
  type: "document",
  icon: SocialIcon,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Network",
      name: "network",
      type: "string",
      options: {
        list: [
          { title: "Facebook", value: "facebook" },
          { title: "Instagram", value: "instagram" },
          { title: "Twitter", value: "twitter" },
          { title: "LinkedIn", value: "linkedin" },
          { title: "YouTube", value: "youtube" },
          { title: "GitHub", value: "github" },
          { title: "TikTok", value: "tiktok" },
        ],
      },
    },
    {
      name: "username",
      title: "Username",
      type: "string",
    },
    {
      title: "URL",
      name: "url",
      type: "url",
    },
    {
      title: "Order",
      name: "order",
      type: "number",
      hidden: true,
    },
  ],
}
