import { PortableText } from "@portabletext/react"
import { createImageUrlBuilder } from "@sanity/image-url"
import { sanityClient } from "@/lib/sanity.client"
import { dataset, projectId } from "@/sanity/env"
import Image from "next/image"

export const revalidate = 60 // ⚡ ISR (revalidate every 60s)

// ✅ Image builder (new API)
const builder = createImageUrlBuilder({ projectId, dataset })
const urlFor = (source: any) => builder.image(source)

type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function BlogPage({ params }: PageProps) {
  // ✅ REQUIRED in Next 16
  const { slug } = await params

  const post = await sanityClient.fetch(
    `
    *[_type == "blog" && slug.current == $slug][0]{
      _id,
      title,
      content,
      coverImage,
      publishedAt
    }
    `,
    { slug }
  )

  if (!post) {
    return <div className="p-10">Post not found</div>
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

      {/* ✅ Cover image */}
      {post.coverImage && (
        <Image
          src={urlFor(post.coverImage).width(1200).height(600).url()}
          alt={post.title}
          width={1200}
          height={600}
          className="rounded-xl mb-8"
        />
      )}

      {/* ✅ Content (text + images + video blocks) */}
      <PortableText
        value={post.content}
        components={{
          types: {
            image: ({ value }) => (
              <Image
                src={urlFor(value).width(800).url()}
                alt=""
                width={800}
                height={500}
                className="rounded-lg my-6"
              />
            ),
            videoBlock: ({ value }) => (
              <div className="my-8">
                <video
                  controls
                  poster={value.thumbnail ? urlFor(value.thumbnail).url() : undefined}
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
    </article>
  )
}
