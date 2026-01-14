"use client"

import { useEffect, useState } from "react"
import { createClient } from "@sanity/client"

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2026-01-09",
  useCdn: false,
})

export default function LiveComments({ postId }: any) {
  const [comments, setComments] = useState<any[]>([])

  useEffect(() => {
    const query = `
      *[_type=="comment" && post._ref==$postId && approved==true]
    `
    client.fetch(query, { postId }).then(setComments)

    const sub = client
      .listen(query, { postId })
      .subscribe(() => {
        client.fetch(query, { postId }).then(setComments)
      })

    return () => sub.unsubscribe()
  }, [postId])

  return (
    <div>
      {comments.map((c) => (
        <p key={c._id}><b>{c.name}</b>: {c.message}</p>
      ))}
    </div>
  )
}
