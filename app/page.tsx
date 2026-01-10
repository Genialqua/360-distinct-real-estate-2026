import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin } from "lucide-react"

const projects = [
  {
    name: "Residences by Alex and Bill",
    description:
      "Luxurious apartments in Eti-Osa, Lagos with private beach, swimming pool, and smart amenities",
    location: "Atlantic View Estate, Lekki",
    href: "/projects/alex-and-bill",
    images: [
      "/images/projects/alex-and-bill/1.jpg",
      "/images/projects/alex-and-bill/2.jpg",
      "/images/projects/alex-and-bill/3.jpg",
    ],
  },
  {
    name: "David's Hill",
    description:
      "7-storey architectural masterpiece with 2, 3-bedroom apartments and a penthouse",
    location: "Victoria Island, Lagos",
    href: "/projects/davids-hill",
    images: [
      "/images/projects/davids-hill/1.jpg",
      "/images/projects/davids-hill/2.jpg",
      "/images/projects/davids-hill/3.jpg",
    ],
  },
]

export default function HomePage() {
  return (
    <div className="bg-background">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">

          {/* 🔄 Spinning Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 animate-spin-slow">
              <Image
                src="/logo.png"
                alt="360 Distinct Real Estate Logo"
                width={96}
                height={96}
                priority
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Transforming Dreams Into
            <span className="block text-primary">Enduring Legacies</span>
          </h1>

          <p className="text-xl text-foreground/70 mb-10">
            Premium residential properties crafted with excellence and innovation
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/virtual-tour"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg inline-flex items-center justify-center gap-2"
            >
              Explore Projects <ArrowRight size={20} />
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS SECTION ================= */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h2>
            <p className="text-xl text-foreground/60">
              Discover our portfolio of luxury residences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Image Carousel */}
                <div className="relative h-80 overflow-x-auto flex snap-x snap-mandatory scrollbar-hide">
                  {project.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative min-w-full h-80 snap-center"
                    >
                      <Image
                        src={img}
                        alt={`${project.name} image ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={idx === 0}
                      />
                    </div>
                  ))}
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">
                    {project.name}
                  </h3>

                  <p className="text-foreground/60 mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 text-primary mb-6 font-semibold">
                    <MapPin size={18} />
                    {project.location}
                  </div>

                  <Link
                    href={project.href}
                    className="text-primary font-semibold inline-flex items-center gap-2"
                  >
                    View Details <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-foreground/60">
              Excellence in every detail
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description:
                  "High-quality projects meeting the highest standards of construction",
              },
              {
                title: "Innovation",
                description:
                  "Modern solutions adapted to evolving market needs",
              },
              {
                title: "Customer First",
                description:
                  "Exceptional service ensuring your aspirations come first",
              },
            ].map((item, i) => (
              <div key={i} className="bg-card p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-foreground/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}







