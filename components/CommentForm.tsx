"use client"

export default function CommentForm({ postId }: { postId: string }) {
  async function submit(e: any) {
    e.preventDefault()

    await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
        postId,
      }),
    })

    alert("Comment submitted for review")
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <input name="name" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <textarea name="message" placeholder="Comment" required />
      <button>Submit</button>
    </form>
  )
}
