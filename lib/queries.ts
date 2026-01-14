export const BLOG_QUERY = `
*[_type == "blogPost"] | order(publishedAt desc) {
  title,
  slug,
  excerpt,
  coverImage,
  publishedAt
}
`

export const PROPERTY_QUERY = `
*[_type == "property"] {
  name,
  slug,
  location,
  gallery,
  videos
}
`