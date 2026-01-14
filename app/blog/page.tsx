import { client } from "@/sanity/lib/client"
import { BLOGS_QUERY } from "@/sanity/lib/queries"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import Link from "next/link"

export const revalidate = 60 // ⚡ ISR

export default async function BlogPage() {
  const posts = await client.fetch(BLOGS_QUERY)

  return (
    <section className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8">
      {posts.map((post: any) => (
        <Link key={post._id} href={`/blog/${post.slug.current}`}>
          <article className="border rounded-xl overflow-hidden hover:shadow-lg transition">
            {post.coverImage && (
              <Image
                src={urlFor(post.coverImage).width(800).height(500).url()}
                alt={post.title}
                width={800}
                height={500}
              />
            )}

            <div className="p-5">
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <p className="text-muted-foreground mt-2">{post.excerpt}</p>
            </div>
          </article>
        </Link>
      ))}
    </section>
  )
}




// import { client } from "@/sanity/lib/client";

// const BLOG_QUERY = `
// *[_type == "blog"]{
//   _id,
//   title,
//   slug,
//   coverImage,
//   publishedAt
// }
// `;

// export default async function BlogPage() {
//   const blogs = await client.fetch(BLOG_QUERY);

//   return (
//     <div className="max-w-5xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Blog</h1>

//       {blogs.map((blog: any) => (
//         <div key={blog._id} className="mb-4">
//           <h2 className="text-xl font-semibold">{blog.title}</h2>
//         </div>
//       ))}
//     </div>
//   );
// }