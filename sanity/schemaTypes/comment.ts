import { defineType, defineField } from "sanity"

export const comment = defineType({
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
    }),
    defineField({
      name: "post",
      title: "Blog Post",
      type: "reference",
      to: [{ type: "post" }],
    }),
  ],
})
