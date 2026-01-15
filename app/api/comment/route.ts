import { NextRequest, NextResponse } from "next/server"
import { sanityClient } from "@/lib/sanity.client"

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, postId } = await req.json()

    if (!name || !message || !postId) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    const createdComment = await sanityClient.create({
      _type: "comment",
      name,
      email,
      message,
      approved: false, // Admin must approve
      post: {
        _type: "reference",
        _ref: postId,
      },
    })

    return NextResponse.json({ success: true, comment: createdComment })
  } catch (err: any) {
    console.error(err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
