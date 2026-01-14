// lib/sanity.client.ts
import { createClient } from "@sanity/client"

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  useCdn: true,
})





// // sanity/lib/sanity.client.ts
// import { createClient } from "@sanity/client"
// import { apiVersion, dataset, projectId } from "@/sanity/env"

// // ✅ Sanity client
// export const sanityClient = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true, // caching for faster responses
// })
