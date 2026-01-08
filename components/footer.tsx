import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">360 Distinct</h3>
            <p className="text-sm opacity-90">
              Transforming dreams into enduring legacies through innovative luxury real estate development.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+2349032373430" className="hover:underline">
                  +234-903 237 3430
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@360distinctrealestate.com" className="hover:underline">
                  info@360distinctrealestate.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <p>B18, Platinum Mall, Ikota, Lekki, Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/360distinct.realestate"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/360.distinctrealestate"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com/company/360-distinct-real-estate-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/360_distinct"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2025 360 Distinct Real Estate Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
