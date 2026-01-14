import { defineType, defineField } from "sanity"

const comment = defineType({
  name: "comment",
  title: "Comment",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),

    defineField({
      name: "message",
      title: "Message",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "approved",
      title: "Approved",
      type: "boolean",
      initialValue: false,

      // 🔐 LOCK APPROVAL TO ADMINS ONLY
      readOnly: ({ currentUser }) =>
        !currentUser?.roles?.some(
          (role) => role.name === "administrator"
        ),
    }),

    defineField({
      name: "post",
      title: "Blog Post",
      type: "reference",
      to: [{ type: "blog" }],
    }),
  ],
})

export default comment
