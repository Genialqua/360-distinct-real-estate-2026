"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Alex and Bill", href: "/projects/alex-and-bill" },
    { label: "David's Hill", href: "/projects/davids-hill" },
    { label: "Virtual Tour", href: "/virtual-tour" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo1.png"
              alt="360 Distinct Real Estate Logo"
              width={48}
              height={48}
              priority
              className="object-contain rounded-full border border-border"
            />
            <span className="text-xl font-bold text-primary hidden sm:block">
              360<span className="text-foreground"> Distinct Real Estate Ltd</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-foreground hover:text-primary font-medium transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
