import { PortableText } from "@portabletext/react"
import { createImageUrlBuilder } from "@sanity/image-url"
import Image from "next/image"
import { sanityClient } from "@/lib/sanity.client"
import { projectId, dataset } from "@/sanity/env"

export const revalidate = 60 // ISR (revalidate every 60 seconds)

/* ---------------------------------------------
   Sanity Image Builder
--------------------------------------------- */
const builder = createImageUrlBuilder({ projectId, dataset })
const urlFor = (source: any) => builder.image(source)

/* ---------------------------------------------
   Types
--------------------------------------------- */
type PageProps = {
  params: Promise<{ slug: string }>
}

/* ---------------------------------------------
   Page
--------------------------------------------- */
export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params

  /* ---------------------------------------------
     Fetch Blog Post + Author
  --------------------------------------------- */
  const post = await sanityClient.fetch(
    `
    *[_type == "blog" && slug.current == $slug][0]{
      _id,
      title,
      publishedAt,
      coverImage,
      content,
      author->{
        name,
        bio,
        avatar
      }
    }
    `,
    { slug }
  )

  if (!post) {
    return <div className="p-10">Post not found</div>
  }

  /* ---------------------------------------------
     Fetch Approved Comments
  --------------------------------------------- */
  const comments = await sanityClient.fetch(
    `
    *[_type == "comment"
      && post._ref == $postId
      && approved == true
    ] | order(_createdAt desc){
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
    <article className="max-w-3xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

      {/* Author */}
      {post.author && (
        <div className="flex items-center gap-4 mb-8">
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
              <p className="text-sm text-gray-600">{post.author.bio}</p>
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

      {/* Content */}
      <PortableText
        value={post.content}
        components={{
          types: {
            image: ({ value }) => {
              if (!value?.asset) return null

              return (
                <Image
                  src={urlFor(value).width(800).url()}
                  alt=""
                  width={800}
                  height={500}
                  className="rounded-lg my-6"
                />
              )
            },

            videoBlock: ({ value }) => (
              <div className="my-8">
                <video
                  controls
                  className="rounded-xl w-full"
                >
                  <source src={value.url} />
                </video>
                {value.title && (
                  <p className="text-sm text-gray-500 mt-2">{value.title}</p>
                )}
              </div>
            ),
          },
        }}
      />

      {/* Comments */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Comments</h2>

        {comments.length === 0 && (
          <p className="text-gray-500">No comments yet.</p>
        )}

        <ul className="space-y-6">
          {comments.map((comment: any) => (
            <li key={comment._id} className="border-b pb-4">
              <p className="font-semibold">{comment.name}</p>
              <p className="text-gray-700">{comment.message}</p>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
