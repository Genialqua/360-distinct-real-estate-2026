import { PortableText } from "@portabletext/react"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import CommentForm from '@/components/CommentForm'


export const revalidate = 60

/* ---------------------------------------------
   Types
--------------------------------------------- */
type BlogPost = {
  _id: string
  title: string
  content: any[]
  coverImage?: any
  publishedAt: Date
  author?: {
    name: string
    bio?: string
    avatar?: any
  }
}

type Comment = {
  _id: string
  name: string
  message: string
  _createdAt: Date
}

/* ---------------------------------------------
   Page
--------------------------------------------- */
export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  /* ---------------------------------------------
     Fetch Blog Post + Author
  --------------------------------------------- */
  const post: BlogPost | null = await client.fetch(
    `
    *[_type == "blog" && slug.current == $slug][0]{
      _id,
      title,
      content,
      coverImage,
      publishedAt,
      author->{
        name,
        bio,
        avatar
      }
    }
    `,
    { slug }
  )

  if (!post) return <div className="p-10">Post not found</div>

  /* ---------------------------------------------
     Fetch Approved Comments
  --------------------------------------------- */
  const comments: Comment[] = await client.fetch(
    `
    *[_type == "comment" && post._ref == $postId && approved == true] | order(_createdAt desc){
      _id,
      name,
      message,
      _createdAt
    }
    `,
    { postId: post._id }
  )

  /* ---------------------------------------------
     Render
  --------------------------------------------- */
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* Author */}
      {post.author && (
        <div className="flex items-center gap-4 mb-6">
          {post.author.avatar?.asset && (
            <Image
              src={urlFor(post.author.avatar).width(80).height(80).url()}
              alt={post.author.name}
              width={80}
              height={80}
              className="rounded-full"
            />
          )}
          <div>
            <p className="font-semibold">{post.author.name}</p>
            {post.author.bio && (
              <p className="text-gray-500 text-sm">{post.author.bio}</p>
            )}
          </div>
        </div>
      )}

      {/* Cover Image */}
      {post.coverImage?.asset && (
        <Image
          src={urlFor(post.coverImage).width(1200).height(600).url()}
          alt={post.title}
          width={1200}
          height={600}
          className="rounded-xl mb-10"
        />
      )}

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      {/* Published Date */}
      <p className="text-gray-500 mb-8">
        Published on {new Date(post.publishedAt).toLocaleDateString()}
      </p>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <PortableText
          value={post.content}
          components={{
            types: {
              image: ({ value }) =>
                value?.asset ? (
                  <img
                    src={urlFor(value).width(800).url()}
                    alt={value.alt || "Blog image"}
                    className="rounded-lg my-6"
                  />
                ) : null,
              videoBlock: ({ value }) => (
                <div className="my-8">
                  {value.title && (
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                  )}
                  <video
                    src={value.url}
                    controls
                    className="w-full rounded-lg"
                  />
                </div>
              ),
            },
          }}
        />
      </div>

      {/* Comments */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Comments</h2>
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet.</p>
        ) : (
          <ul className="space-y-6">
            {comments.map((comment) => (
              <li key={comment._id} className="border-b pb-4">
                <p className="font-semibold">{comment.name}</p>
                <p className="text-gray-700">{comment.message}</p>
              </li>
            ))}
          </ul>
        )}
        <CommentForm postId={post._id} />
      </section>
    </main>
  )
}

