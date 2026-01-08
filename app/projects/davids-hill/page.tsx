import type { Metadata } from "next"
import Link from "next/link"
import { Check, ArrowRight, Building2 } from "lucide-react"

export const metadata: Metadata = {
  title: "David's Hill | 360 Distinct Real Estate",
  description: "7-storey architectural masterpiece in Victoria Island with 2, 3-bedroom apartments and penthouse.",
}

export default function DavidsHillPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">David's Hill</h1>
          <p className="text-xl text-foreground/70">Premium residences in Victoria Island, Lagos</p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Location</h3>
                <p className="text-2xl font-bold text-foreground">Victoria Island, Lagos</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Architecture</h3>
                <p className="text-2xl font-bold text-foreground">7-Storey Development</p>
              </div>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed">
              David's Hill is a testament to luxury living, nestled in the vibrant heart of Victoria Island, Lagos. This
              exquisite 7-storey residential development by 360 Distinct Real Estate offers a rare opportunity to
              experience the pinnacle of urban sophistication and comfort with striking architectural design and
              meticulously crafted residences.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-8">Available Units</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "2-Bedroom Apartments",
                units: 3,
                icon: "2️⃣",
                features: ["Ensuite Bedrooms", "Modern Kitchen", "Spacious Living", "Prime Views"],
              },
              {
                title: "3-Bedroom Apartments",
                units: 3,
                icon: "3️⃣",
                features: ["Ensuite Bedrooms", "Modern Kitchen", "Spacious Living", "Prime Views"],
              },
              {
                title: "4-Bedroom Penthouse",
                units: 1,
                icon: "🏆",
                features: ["Luxury Finishes", "Panoramic Views", "Private Terrace", "Smart Home"],
              },
            ].map((unit, i) => (
              <div key={i} className="bg-card rounded-xl p-8 border border-border">
                <div className="text-4xl mb-4">{unit.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{unit.title}</h3>
                <p className="text-primary font-semibold mb-6">
                  {unit.units} Unit{unit.units !== 1 ? "s" : ""} Available
                </p>
                <div className="space-y-2">
                  {unit.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <Check size={18} className="text-primary" />
                      <span className="text-foreground/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Exceptional Features</h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Elegant architectural design",
              "State-of-the-art security systems",
              "Modern smart home technology",
              "Premium finishes throughout",
              "Strategic Victoria Island location",
              "Professional property management",
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-3 bg-card p-6 rounded-lg border border-border">
                <Building2 size={24} className="text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Discover David's Hill Today</h2>
          <p className="text-lg mb-8 opacity-90">Schedule your exclusive tour of this architectural masterpiece</p>
          <Link
            href="/virtual-tour"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Book Virtual Tour <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
