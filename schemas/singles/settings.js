import { GoSettings as SettingsIcon } from "react-icons/go"

export default {
  title: "Settings",
  name: "settings",
  type: "document",
  icon: SettingsIcon,
  schemaType: "settings",
  fields: [
    {
      title: "Email Address",
      name: "email",
      type: "string",
    },
    {
      title: "Phone Number",
      name: "phone",
      type: "string",
    },
    {
      title: "Available for work",
      name: "available",
      type: "boolean",
      initalValue: true,
    },
  ],
}
