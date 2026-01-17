import { NextResponse } from 'next/server'
import { writeClient } from '@/sanity/lib/writeClient'

export async function POST(req: Request) {
  try {
    const { name, email, message, postId } = await req.json()

    if (!name || !message || !postId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    await writeClient.create({
      _type: 'comment',
      name,
      email,
      message,
      approved: false, // 🔒 admin approves later
      post: {
        _type: 'reference',
        _ref: postId,
      },
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: 'Failed to submit comment' },
      { status: 500 }
    )
  }
}
