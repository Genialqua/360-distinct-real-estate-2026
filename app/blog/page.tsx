import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | 360 Distinct Real Estate",
  description: "Stay updated with the latest in real estate investment, trends, and tips.",
}

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Luxury Real Estate in Lagos",
      excerpt:
        "Explore the emerging trends shaping the premium property market in Lagos and what investors should know.",
      date: "January 15, 2025",
      category: "Market Trends",
      readTime: "5 min",
    },
    {
      id: 2,
      title: "Investment Guide: Why Victoria Island Properties Are a Smart Choice",
      excerpt: "A comprehensive guide to understanding why Victoria Island remains Lagos' most sought-after location.",
      date: "January 10, 2025",
      category: "Investment",
      readTime: "7 min",
    },
    {
      id: 3,
      title: "Smart Home Technology in Modern Residences",
      excerpt: "Discover how cutting-edge technology is transforming the way we live in luxury residential spaces.",
      date: "January 5, 2025",
      category: "Technology",
      readTime: "6 min",
    },
    {
      id: 4,
      title: "Sustainable Living: Green Features in Contemporary Architecture",
      excerpt:
        "Learn about eco-friendly design principles that are becoming essential in premium residential developments.",
      date: "December 28, 2024",
      category: "Sustainability",
      readTime: "8 min",
    },
  ]

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Our Blog</h1>
          <p className="text-xl text-foreground/70">Stay updated with the latest in real estate trends and insights</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4 flex-wrap">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-foreground/60 text-sm">
                    <Calendar size={16} />
                    {post.date}
                  </div>
                  <span className="text-foreground/60 text-sm">{post.readTime} read</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{post.title}</h2>
                <p className="text-foreground/70 mb-6 leading-relaxed">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.id}`}
                  className="text-primary font-semibold hover:text-primary/80 transition-colors inline-flex items-center gap-2"
                >
                  Read Article <ArrowRight size={18} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
