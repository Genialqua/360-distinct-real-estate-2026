import { writeClient } from "@/lib/sanity.write"

export async function POST(req: Request) {
  const body = await req.json()

  await writeClient.create({
    _type: "comment",
    name: body.name,
    email: body.email,
    message: body.message,
    post: {
      _type: "reference",
      _ref: body.postId,
    },
  })

  return Response.json({ success: true })
}
