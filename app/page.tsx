import Link from "next/link"
import { ArrowRight, Home, MapPin, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
            Transforming Dreams Into
            <span className="block text-primary">Enduring Legacies</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 mb-10 text-balance">
            Premium residential properties crafted with excellence, innovation, and lasting value
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/virtual-tour"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              Explore Projects <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Projects</h2>
            <p className="text-xl text-foreground/60">Discover our portfolio of luxury residences</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Residences by Alex and Bill */}
            <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-80 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Home size={120} className="text-primary/30" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Residences by Alex and Bill</h3>
                <p className="text-foreground/60 mb-4">
                  Luxurious apartments in Eti-Osa, Lagos with private beach, swimming pool, and smart amenities
                </p>
                <div className="flex items-center gap-2 text-primary mb-6 font-semibold">
                  <MapPin size={18} />
                  Atlantic View Estate, Lekki
                </div>
                <Link
                  href="/projects/alex-and-bill"
                  className="text-primary font-semibold hover:text-primary/80 transition-colors inline-flex items-center gap-2"
                >
                  View Details <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* David's Hill */}
            <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-80 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Users size={120} className="text-primary/30" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">David's Hill</h3>
                <p className="text-foreground/60 mb-4">
                  7-storey architectural masterpiece with 2, 3-bedroom apartments and a penthouse
                </p>
                <div className="flex items-center gap-2 text-primary mb-6 font-semibold">
                  <MapPin size={18} />
                  Victoria Island, Lagos
                </div>
                <Link
                  href="/projects/davids-hill"
                  className="text-primary font-semibold hover:text-primary/80 transition-colors inline-flex items-center gap-2"
                >
                  View Details <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose Us</h2>
            <p className="text-xl text-foreground/60">Excellence in every detail</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "High-quality projects meeting the highest standards of design and construction",
              },
              {
                title: "Innovation",
                description: "Cutting-edge solutions adapted to the evolving needs of the market",
              },
              {
                title: "Customer First",
                description: "Exceptional service ensuring your aspirations are our priority",
              },
            ].map((item, i) => (
              <div key={i} className="bg-card p-8 rounded-xl">
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
