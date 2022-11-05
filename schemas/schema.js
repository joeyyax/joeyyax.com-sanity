// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"

// singles
import home from "./singles/home"
import about from "./singles/about"
import work from "./singles/work"
import contact from "./singles/contact"
import settings from "./singles/settings"

// collections
import project from "./project"
import partner from "./partner"
import tag from "./tag"
import category from "./category"
import role from "./role"
import social from "./social"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    home,
    about,
    work,
    contact,
    project,
    partner,
    tag,
    category,
    role,
    social,
    settings,
  ]),
})
