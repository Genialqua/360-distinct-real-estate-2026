import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Check, ArrowRight, Play } from "lucide-react"

export const metadata: Metadata = {
  title: "Residences by Alex and Bill | 360 Distinct Real Estate Ltd",
  description:
    "Luxury apartments in Eti-Osa, Lagos with private beach, swimming pool, and premium amenities.",
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
      type: "2 Bedroom Apartment + BQ",
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

  const galleryImages = [
    "/images/projects/alex-and-bill/1.jpg",
    "/images/projects/alex-and-bill/2.jpg",
    "/images/projects/alex-and-bill/3.jpg",
    "/images/projects/alex-and-bill/4.jpg",
    "/images/projects/alex-and-bill/5.jpg",
    "/images/projects/alex-and-bill/7.jpg",
    "/images/projects/alex-and-bill/9.jpg",
    "/images/projects/alex-and-bill/10.jpg",
    "/images/projects/alex-and-bill/11.jpg",
  ]

  const galleryVideos = [
    {
      video: "/videos/projects/alex-and-bill/1.mp4",
      thumbnail: "/images/projects/alex-and-bill/video-thumb-1.jpg",
    },
    {
      video: "/videos/projects/alex-and-bill/2.mp4",
      thumbnail: "/images/projects/alex-and-bill/video-thumb-2.jpg",
    },
  ]

  return (
    <div className="bg-background">
      {/* ================= HERO ================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Residences by Alex and Bill
          </h1>
          <p className="text-xl text-foreground/70">
            Luxury living in Eti-Osa, Lagos
          </p>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Project Gallery</h2>
            <p className="text-foreground/60 text-lg">
              Images & videos of the residences
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Images */}
            {galleryImages.map((src, i) => (
              <div
                key={`img-${i}`}
                className="relative aspect-square overflow-hidden rounded-xl shadow-lg group"
              >
                <Image
                  src={src}
                  alt={`Residences by Alex and Bill image ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
            ))}

            {/* Videos with thumbnails */}
            {galleryVideos.map((item, i) => (
              <div
                key={`vid-${i}`}
                className="relative aspect-square overflow-hidden rounded-xl shadow-lg bg-black group"
              >
                <video
                  src={item.video}
                  poster={item.thumbnail}
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover"
                />

                {/* Play Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-black/50 rounded-full p-4">
                    <Play size={32} className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= APARTMENT TYPES ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Available Apartments
          </h2>

          <div className="space-y-12">
            {apartments.map((apt, i) => (
              <div
                key={i}
                className="bg-card rounded-xl shadow-lg border border-border"
              >
                <div className="grid md:grid-cols-3 gap-8 p-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{apt.type}</h3>
                    <p className="text-lg">
                      <span className="text-foreground/60">Price:</span>{" "}
                      <strong className="text-primary">{apt.price}</strong>
                    </p>
                    <p className="text-lg">
                      <span className="text-foreground/60">
                        Units Available:
                      </span>{" "}
                      <strong>{apt.units}</strong>
                    </p>
                  </div>

                  <div className="md:col-span-2">
                    <h4 className="font-bold mb-4">Premium Features</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {apt.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <Check size={20} className="text-primary" />
                          <span className="text-foreground/70">
                            {feature}
                          </span>
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

      {/* ================= CTA ================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Schedule a Virtual Tour?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Experience luxury from anywhere
          </p>
          <Link
            href="/virtual-tour"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold"
          >
            Book Your Tour <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
