import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | 360 Distinct Real Estate",
  description: "Learn about 360 Distinct Real Estate Ltd and our team of experienced professionals.",
}

export default function AboutPage() {
  const team = [
    {
      name: "Oluwaseyi Fakolujo",
      role: "Managing Director",
      bio: "15+ years in real estate. Visionary leader delivering innovative and high-quality properties.",
    },
    {
      name: "Chief (Dr.) Olukayode Akinbola",
      role: "Director",
      bio: "Proven track record in large-scale projects with expertise in development, investment, and management.",
    },
    {
      name: "Emmanuel Sunola",
      role: "Director",
      bio: "13+ years in logistics and procurement. Associate member of Nigeria Institute of Mechanical Engineers.",
    },
    {
      name: "Busayo Omowunmi",
      role: "Executive Director",
      bio: "10+ years HR experience across retail, oil & gas, hospitality. CIPD and CIPM member.",
    },
    {
      name: "Bode Araba",
      role: "Project Manager",
      bio: "Chartered Estate Surveyor with 30 years in construction, estate management, and consultancy.",
    },
    {
      name: "Frederick Aleoke-Malachi",
      role: "Brands and Marketing",
      bio: "Decade of experience in real estate marketing with exceptional brand development skills.",
    },
  ]

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">About Us</h1>
          <p className="text-xl text-foreground/70">
            Leading property development and management company transforming dreams into enduring legacies
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Who We Are</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              360 Distinct Real Estate Ltd is a leading property development and management company dedicated to
              transforming dreams into enduring legacies. Founded with the vision of providing top-notch real estate
              solutions, we have established ourselves as a trusted name in the industry. Our commitment to excellence,
              integrity, and customer satisfaction sets us apart in the competitive real estate market.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              To be the foremost real estate company, delivering innovative and sustainable property solutions that
              exceed expectations and create lasting value for our clients, communities, and stakeholders.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
            <div className="space-y-3 text-foreground/70">
              <p>
                <strong className="text-foreground">Excellence:</strong> Deliver high-quality real estate projects
                meeting the highest standards of design, construction, and sustainability.
              </p>
              <p>
                <strong className="text-foreground">Innovation:</strong> Continuously innovate and adapt to evolving
                market needs, offering cutting-edge solutions.
              </p>
              <p>
                <strong className="text-foreground">Customer Satisfaction:</strong> Provide exceptional service ensuring
                clients' needs and aspirations are always prioritized.
              </p>
              <p>
                <strong className="text-foreground">Community Impact:</strong> Contribute positively to communities
                through vibrant and sustainable living environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Team</h2>
            <p className="text-xl text-foreground/60">Experienced professionals dedicated to your success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-card p-6 rounded-xl">
                <div className="w-16 h-16 bg-primary/10 rounded-full mb-4 flex items-center justify-center">
                  <div className="text-2xl font-bold text-primary">{member.name[0]}</div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-foreground/70 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
