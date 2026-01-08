"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 3000)
  }

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-xl text-foreground/70">We'd love to hear from you. Get in touch with our team today.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">Get In Touch</h2>

              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Phone</h3>
                    <a href="tel:+2349032373430" className="text-primary font-semibold hover:text-primary/80">
                      +234-903 237 3430
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:info@360distinctrealestate.com"
                      className="text-primary font-semibold hover:text-primary/80"
                    >
                      info@360distinctrealestate.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Address</h3>
                    <p className="text-foreground/70">
                      B18, Platinum Mall
                      <br />
                      Ikota First Gate Bus-stop
                      <br />
                      Lekki Expressway
                      <br />
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <h3 className="font-bold text-foreground mb-4">Connect With Us</h3>
                <div className="flex gap-4 flex-wrap">
                  <a
                    href="https://instagram.com/360distinct.realestate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-semibold"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://facebook.com/360.distinctrealestate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-semibold"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://linkedin.com/company/360-distinct-real-estate-ltd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-semibold"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-card rounded-xl p-8 border border-border">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">✓</div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-foreground/60">Thank you for contacting us. We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-foreground font-semibold mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your name"
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
                      <label className="block text-foreground font-semibold mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+234..."
                      />
                    </div>

                    <div>
                      <label className="block text-foreground font-semibold mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Your message..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground font-semibold py-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                    >
                      Send Message <ArrowRight size={20} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
