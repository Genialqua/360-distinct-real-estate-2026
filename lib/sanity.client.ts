// sanity/lib/sanity.client.ts
import { createClient } from "@sanity/client"
import { apiVersion, dataset, projectId } from "@/sanity/env"

// ✅ Sanity client
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // caching for faster responses
})
