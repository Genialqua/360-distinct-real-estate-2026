import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const blogPosts: Record<string, any> = {
  "1": {
    title: "The Future of Luxury Real Estate in Lagos",
    date: "January 15, 2025",
    category: "Market Trends",
    content: `
      <p>Lagos is experiencing a real estate revolution, with luxury properties commanding unprecedented interest from both local and international investors. This article explores the trends defining the future of premium residential developments in Nigeria's economic hub.</p>
      
      <h3>Market Dynamics</h3>
      <p>The luxury real estate market in Lagos has evolved significantly over the past decade. With the rise of urban professionals and international investments, the demand for high-end residential properties has increased exponentially. Developers are now focusing on creating more sophisticated, technology-enabled living spaces that cater to the modern investor's needs.</p>
      
      <h3>Key Trends to Watch</h3>
      <ul>
        <li>Smart home integration becoming standard</li>
        <li>Sustainability and green building practices</li>
        <li>Mixed-use developments</li>
        <li>Premium location value appreciation</li>
      </ul>
      
      <p>These trends reflect a broader shift in how luxury properties are conceived and valued in the current market. Investors are increasingly seeking developments that combine elegance with functionality and environmental consciousness.</p>
    `,
  },
  "2": {
    title: "Investment Guide: Why Victoria Island Properties Are a Smart Choice",
    date: "January 10, 2025",
    category: "Investment",
    content: `
      <p>Victoria Island has established itself as Lagos' premier destination for luxury real estate investment. With its strategic location, world-class amenities, and consistent property appreciation, it remains an attractive choice for discerning investors.</p>
      
      <h3>Location Advantages</h3>
      <p>Victoria Island's central position offers unparalleled access to business districts, entertainment venues, and international institutions. This accessibility, combined with the area's upscale ambiance, makes it highly desirable for both residential and commercial purposes.</p>
      
      <h3>Investment Returns</h3>
      <p>Properties in Victoria Island have demonstrated consistent value appreciation. The area's supply constraints and high demand create favorable conditions for capital growth, making it an excellent long-term investment.</p>
      
      <h3>Lifestyle Benefits</h3>
      <p>Beyond financial returns, Victoria Island offers a premium lifestyle with exclusive restaurants, high-end shopping, and vibrant cultural experiences. These amenities enhance property values and attract quality tenants and buyers.</p>
    `,
  },
  "3": {
    title: "Smart Home Technology in Modern Residences",
    date: "January 5, 2025",
    category: "Technology",
    content: `
      <p>Smart home technology is revolutionizing modern living spaces. From security systems to climate control, these innovations enhance comfort, efficiency, and property value.</p>
      
      <h3>Essential Smart Home Features</h3>
      <p>Modern luxury residences now incorporate integrated smart systems that control lighting, temperature, security, and entertainment from a central hub or mobile device. These systems not only provide convenience but also contribute to energy efficiency and cost savings.</p>
      
      <h3>Security and Surveillance</h3>
      <p>Advanced security systems with AI-powered monitoring, real-time alerts, and remote access provide peace of mind for residents. These features are becoming increasingly important in premium residential developments.</p>
      
      <h3>Future Outlook</h3>
      <p>As technology continues to evolve, smart home integration will become more sophisticated and intuitive. Forward-thinking developers are prioritizing these features to meet growing consumer expectations and enhance property competitiveness.</p>
    `,
  },
  "4": {
    title: "Sustainable Living: Green Features in Contemporary Architecture",
    date: "December 28, 2024",
    category: "Sustainability",
    content: `
      <p>Sustainability is no longer optional in premium real estate development. Modern luxury residences are incorporating green features that reduce environmental impact while enhancing quality of life.</p>
      
      <h3>Energy-Efficient Design</h3>
      <p>From solar panels to high-efficiency HVAC systems, contemporary developments prioritize energy conservation. These features reduce operational costs and appeal to environmentally conscious investors.</p>
      
      <h3>Water Conservation</h3>
      <p>Advanced water management systems, including rainwater harvesting and smart irrigation, are becoming standard in sustainable residences. These systems minimize waste while maintaining lush landscapes.</p>
      
      <h3>Material Selection</h3>
      <p>Premium developments now source sustainable building materials that minimize environmental footprint without compromising quality or aesthetics. This approach supports both environmental responsibility and long-term value retention.</p>
    `,
  },
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = blogPosts[params.id]
  return {
    title: `${post?.title || "Blog Post"} | 360 Distinct Real Estate`,
    description: "Read the full article on our blog.",
  }
}

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }]
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id]

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Post not found</h1>
          <Link href="/blog" className="text-primary font-semibold hover:text-primary/80">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-background">
      {/* Article Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-primary font-semibold hover:text-primary/80 inline-flex items-center gap-2 mb-6"
          >
            <ArrowLeft size={18} /> Back to Blog
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{post.title}</h1>

          <div className="flex items-center gap-4 flex-wrap text-foreground/60">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full">
              {post.category}
            </span>
            <span>{post.date}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto bg-card rounded-xl p-8 border border-border">
          <div className="prose prose-invert max-w-none text-foreground/80">
            {post.content && <div dangerouslySetInnerHTML={{ __html: post.content }} className="space-y-6"></div>}
          </div>
        </article>
      </section>
    </div>
  )
}
