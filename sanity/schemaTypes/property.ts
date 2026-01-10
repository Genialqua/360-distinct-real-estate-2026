import { defineType, defineField } from "sanity"

export const property = defineType({
  name: "property",
  title: "Property",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Property Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "gallery",
      title: "Image Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),

    defineField({
      name: "video",
      title: "Property Video",
      type: "file",
      options: {
        accept: "video/*",
      },
    }),

    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),
  ],
})
