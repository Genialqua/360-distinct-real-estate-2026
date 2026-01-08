"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function VirtualTourPage() {
  const [selectedProject, setSelectedProject] = useState("alex-and-bill")
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", phone: "" })
    }, 3000)
  }

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Virtual Tour</h1>
          <p className="text-xl text-foreground/70">Schedule a tour of our luxury residences</p>
        </div>
      </section>

      {/* Tour Booking */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-xl p-8 border border-border">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Tour Booked Successfully!</h3>
                <p className="text-foreground/60">
                  We'll contact you shortly to confirm your virtual tour appointment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-foreground font-semibold mb-2">Select Project</label>
                  <select
                    name="project"
                    value={selectedProject}
                    onChange={(e) => setSelectedProject(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="alex-and-bill">Residences by Alex and Bill</option>
                    <option value="davids-hill">David's Hill</option>
                  </select>
                </div>

                <div>
                  <label className="block text-foreground font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+234..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-semibold py-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  Book Virtual Tour <ArrowRight size={20} />
                </button>
              </form>
            )}
          </div>

          {/* Project Info Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-3">Residences by Alex and Bill</h3>
              <p className="text-foreground/70 text-sm mb-4">
                Luxury apartments in Eti-Osa with private beach, swimming pool, and premium amenities.
              </p>
              <p className="text-sm text-primary font-semibold">📍 Eti-Osa, Lagos</p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-3">David's Hill</h3>
              <p className="text-foreground/70 text-sm mb-4">
                7-storey architectural masterpiece in Victoria Island with premium residences.
              </p>
              <p className="text-sm text-primary font-semibold">📍 Victoria Island, Lagos</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
