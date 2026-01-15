import { sanityClient } from "./sanity.client"

export function subscribeToComments(postId: string, callback: (comments: any[]) => void) {
  const query = `
    *[_type == "comment" && post._ref == $postId && approved == true] | order(_createdAt desc)
  `
  const params = { postId }

  const subscription = sanityClient.listen(query, params).subscribe((update) => {
    sanityClient.fetch(query, params).then(callback)
  })

  return () => subscription.unsubscribe() // cleanup
}
