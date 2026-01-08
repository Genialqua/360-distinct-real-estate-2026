import type { Metadata } from "next"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Residences by Alex and Bill | 360 Distinct Real Estate",
  description: "Luxury apartments in Eti-Osa, Lagos with private beach, swimming pool, and premium amenities.",
}

export default function AlexAndBillPage() {
  const apartments = [
    {
      type: "Terraces",
      bedrooms: 4,
      price: "₦200 Million",
      units: 13,
      features: [
        "All Rooms Ensuite",
        "Security Doors",
        "Spacious Layout",
        "Modern Amenities",
        "Private Terrace",
        "Prime Location",
      ],
    },
    {
      type: "2 Bedroom Apartment",
      bedrooms: 2,
      price: "₦110 Million",
      units: 6,
      features: [
        "All Rooms Ensuite",
        "Security Doors",
        "Spacious Layout",
        "Modern Amenities",
        "Private Terrace",
        "Prime Location",
      ],
    },
    {
      type: "Mini Flat",
      bedrooms: 1,
      price: "₦55 Million",
      units: 2,
      features: [
        "Ensuite Bedroom",
        "Security Door",
        "Efficient Layout",
        "Modern Amenities",
        "Exclusive Balcony",
        "Prime Location",
      ],
    },
  ]

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Residences by Alex and Bill</h1>
          <p className="text-xl text-foreground/70">Luxury living in Eti-Osa, Lagos</p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">13+</div>
              <p className="text-foreground/60">Available Units</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Prime</div>
              <p className="text-foreground/60">Eti-Osa Location</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4-Tier</div>
              <p className="text-foreground/60">Luxury Options</p>
            </div>
          </div>
        </div>
      </section>

      {/* Apartment Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Available Apartments</h2>

          <div className="space-y-12">
            {apartments.map((apt, i) => (
              <div key={i} className="bg-card rounded-xl overflow-hidden shadow-lg border border-border">
                <div className="grid md:grid-cols-3 gap-8 p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{apt.type}</h3>
                    <div className="space-y-2 mb-6">
                      <p className="text-lg">
                        <span className="text-foreground/60">Price:</span>{" "}
                        <strong className="text-primary">{apt.price}</strong>
                      </p>
                      <p className="text-lg">
                        <span className="text-foreground/60">Units Available:</span> <strong>{apt.units}</strong>
                      </p>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <h4 className="font-bold text-foreground mb-4">Premium Features</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {apt.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <Check size={20} className="text-primary flex-shrink-0" />
                          <span className="text-foreground/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Schedule a Virtual Tour?</h2>
          <p className="text-lg mb-8 opacity-90">Explore the luxury of Residences by Alex and Bill</p>
          <Link
            href="/virtual-tour"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Book Your Tour <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
