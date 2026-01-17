'use client'

import { useState } from 'react'

export default function CommentForm({ postId }: { postId: string }) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const data = {
      name: form.name.valueOf,
      email: form.email.value,
      message: form.message.value,
      postId,
    }

    const res = await fetch('/api/comment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    setLoading(false)

    if (res.ok) {
      setSuccess(true)
      form.reset()
    }
  }

  if (success) {
    return <p className="text-green-600 mt-6">Comment submitted for review 🙌</p>
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-4">
      <h3 className="text-xl font-semibold">Leave a comment</h3>

      <input
        name="name"
        placeholder="Your name"
        required
        className="w-full border p-2 rounded"
      />

      <input
        name="email"
        placeholder="Your email (optional)"
        className="w-full border p-2 rounded"
      />

      <textarea
        name="message"
        placeholder="Your comment"
        required
        rows={4}
        className="w-full border p-2 rounded"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded"
      >
        {loading ? 'Submitting…' : 'Submit comment'}
      </button>
    </form>
  )
}
