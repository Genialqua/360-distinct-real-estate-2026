import { createImageUrlBuilder } from "@sanity/image-url"
import { sanityClient } from "./sanity.client"

const builder = createImageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}



// import imageUrlBuilder from "@sanity/image-url"
// import { dataset, projectId } from "../sanity/env"

// // https://www.sanity.io/docs/image-url
// const builder = imageUrlBuilder({
//   projectId,
//   dataset,
// })

// export function urlFor(source: any) {
//   return builder.image(source)
// }


