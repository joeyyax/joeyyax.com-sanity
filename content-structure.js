import S from "@sanity/desk-tool/structure-builder"
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list"
import { IoIosContacts as PartnerIcon } from "react-icons/io"
import {
  AiOutlineFolder as ProjectIcon,
  // AiFillContacts as PartnerIcon,
  AiOutlineTags as TagIcon,
  AiOutlineTags as CategoryIcon,
  AiOutlineOrderedList as RoleIcon,
  AiOutlineHome as HomeIcon,
  AiOutlineInfoCircle as AboutIcon,
  AiOutlineCode as WorkIcon,
  AiOutlineContacts as ContactIcon,
  AiOutlineControl as SettingsIcon,
} from "react-icons/ai"

// const singles = (listItem) =>
//   !["home", "about", "work", "contact", "settings"].includes(listItem.getId())

export default () =>
  S.list()
    .title("Content")
    // singles
    .items([
      S.listItem()
        .title("Home")
        .icon(HomeIcon)
        .child(S.editor().id("home").schemaType("home").documentId("home")),
      S.listItem()
        .title("About")
        .icon(AboutIcon)
        .child(S.editor().id("about").schemaType("about").documentId("about")),
      S.listItem()
        .title("Work")
        .icon(WorkIcon)
        .child(S.editor().id("work").schemaType("work").documentId("work")),
      S.listItem()
        .title("Contact")
        .icon(ContactIcon)
        .child(
          S.editor().id("contact").schemaType("contact").documentId("contact")
        ),
      S.divider(),
      // collections
      // ...S.documentTypeListItems().filter(singles),
      orderableDocumentListDeskItem({
        type: "project",
        title: "Projects",
        icon: ProjectIcon,
      }),
      orderableDocumentListDeskItem({
        type: "partner",
        title: "Partners",
        icon: PartnerIcon,
      }),
      orderableDocumentListDeskItem({
        type: "tag",
        title: "Tags",
        icon: TagIcon,
      }),
      orderableDocumentListDeskItem({
        type: "category",
        title: "Categories",
        icon: CategoryIcon,
      }),
      orderableDocumentListDeskItem({
        type: "role",
        title: "Roles",
        icon: RoleIcon,
      }),
      S.divider(),
      // settings
      S.listItem()
        .title("Settings")
        .icon(SettingsIcon)
        .child(
          S.editor()
            .title("Settings")
            .id("settings")
            .schemaType("settings")
            .documentId("settings")
        ),
    ])
