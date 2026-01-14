import { defineType, defineField } from "sanity"

export const video = defineType({
  name: "video",
  type: "object",
  title: "Video",

  fields: [
    defineField({
      name: "url",
      title: "Video URL",
      type: "url",
    }),

    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: { hotspot: true },
    }),
  ],
})
