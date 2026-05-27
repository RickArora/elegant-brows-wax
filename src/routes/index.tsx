import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, MapPin, Clock, Star } from 'lucide-react'
import { BUSINESS } from '../lib/constants'
import { featuredServices, servicesByCategory } from '../lib/services'
import CTABand from '../components/site/CTABand'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Elegant Brows & Wax | Threading, Waxing & Facials in Toronto' },
      { name: 'description', content: 'Expert eyebrow threading, professional waxing, and premium facials in Toronto. Define your beauty. Appointments only — call 647-613-1675.' },
      { property: 'og:title', content: 'Elegant Brows & Wax | Threading, Waxing & Facials' },
      { property: 'og:description', content: 'Expert threading, waxing & premium facials in Toronto.' },
    ],
  }),
  component: HomePage,
})

function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center hero-grain overflow-hidden"
        style={{ background: 'linear-gradient(135deg, oklch(0.14 0.04 68) 0%, oklch(0.22 0.07 73) 50%, oklch(0.18 0.05 75) 100%)' }}
      >
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <div
          className="absolute right-[-10%] top-[-10%] w-[60vw] h-[60vw] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, oklch(0.65 0.13 75) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-32 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center text-sm font-semibold tracking-wider text-primary font-display">
                {BUSINESS.monogram}
              </div>
            </div>
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-5">Threading · Waxing · Facials</p>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-ivory mb-6 leading-[0.9] tracking-tight">
              Elegant<br />
              <span className="text-primary">Brows</span><br />
              & Wax
            </h1>
            <p className="font-display text-xl lg:text-2xl text-ivory/60 italic mb-12 max-w-lg mx-auto">
              {BUSINESS.tagline}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/book"
                className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-medium hover:bg-gold-dark transition-colors rounded-sm"
              >
                Book Now <ArrowRight size={14} />
              </Link>
              <Link
                to="/services"
                className="flex items-center gap-2 px-8 py-4 border border-ivory/20 text-ivory text-sm tracking-widest uppercase hover:border-primary hover:text-primary transition-colors rounded-sm"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <div className="w-px h-12 bg-gradient-to-b from-transparent to-primary/50" />
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-5">Our Philosophy</p>
              <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-7 leading-tight">
                Beauty that starts<br />with precision.
              </h2>
              <p className="text-foreground/65 leading-relaxed mb-5 max-w-md">
                Elegant Brows & Wax is built on a simple belief: every client deserves a specialist who takes the time to understand their face, their goals, and their skin before touching anything.
              </p>
              <p className="text-foreground/65 leading-relaxed mb-8 max-w-md">
                We offer threading, waxing, and premium facials — performed with precision, care, and the attention to detail that makes the difference between a routine appointment and a result you love.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-primary hover:gap-3 transition-all">
                Our Story <ArrowRight size={14} />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <div
                className="aspect-[4/5] rounded-sm relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, oklch(0.92 0.04 85) 0%, oklch(0.96 0.02 90) 100%)' }}
              >
                <div className="absolute inset-0 dot-pattern opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl font-display text-primary/20 mb-4">EB</div>
                    <p className="font-display text-xl italic text-foreground/30">Est. {BUSINESS.founded}</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-foreground p-6 text-ivory max-w-[200px]">
                <p className="text-3xl font-display text-primary mb-1">20+</p>
                <p className="text-xs text-ivory/60 tracking-wider uppercase">Services offered</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="bg-muted py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Most Requested</p>
              <h2 className="font-display text-4xl lg:text-5xl text-foreground leading-tight">Signature Services</h2>
            </div>
            <Link to="/services" className="hidden sm:flex items-center gap-2 text-sm tracking-wider uppercase text-primary hover:gap-3 transition-all">
              All Services <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredServices.map((service, i) => (
              <motion.div key={service.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group block bg-background rounded-sm overflow-hidden border border-border hover:border-primary transition-colors"
                >
                  <div className="h-48 relative" style={{ background: service.heroGradient }}>
                    <div className="absolute inset-0 dot-pattern opacity-30" />
                    <div className="absolute bottom-4 left-5">
                      <span className="text-xs tracking-widest uppercase text-primary/80 bg-foreground/40 px-2 py-1 backdrop-blur-sm">
                        {service.category === 'threading' ? 'Threading' : service.category === 'waxing' ? 'Waxing' : 'Facial'}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">{service.name}</h3>
                    <p className="text-sm text-muted-foreground mb-5">{service.tagline}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-display text-foreground">{service.price}</span>
                      <span className="text-xs text-primary flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <ArrowRight size={12} /></span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">What We Offer</p>
            <h2 className="font-display text-4xl lg:text-5xl text-foreground leading-tight">Three areas of expertise.</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { title: 'Threading', sub: 'Ancient precision for modern brows. Cotton thread, no chemicals.', count: servicesByCategory.threading.length, gradient: 'linear-gradient(135deg, oklch(0.18 0.05 70) 0%, oklch(0.28 0.08 75) 100%)' },
              { title: 'Waxing', sub: 'Professional wax for every body area. Long-lasting smoothness.', count: servicesByCategory.waxing.length, gradient: 'linear-gradient(135deg, oklch(0.20 0.06 65) 0%, oklch(0.30 0.10 72) 100%)' },
              { title: 'Premium Facials', sub: 'Clinically inspired facials. Glass skin to 24K gold.', count: servicesByCategory.facial.length, gradient: 'linear-gradient(135deg, oklch(0.88 0.05 355) 0%, oklch(0.94 0.03 85) 100%)' },
            ].map((cat, i) => (
              <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to="/services" className="group block relative overflow-hidden rounded-sm" style={{ background: cat.gradient }}>
                  <div className="absolute inset-0 dot-pattern opacity-20" />
                  <div className="relative p-10 min-h-[280px] flex flex-col justify-between">
                    <div>
                      <p className="text-xs tracking-widest uppercase text-primary mb-4">{cat.count} services</p>
                      <h3 className="font-display text-4xl text-ivory mb-4 leading-tight">{cat.title}</h3>
                      <p className="text-ivory/60 text-sm leading-relaxed">{cat.sub}</p>
                    </div>
                    <div className="flex items-center gap-2 text-primary text-xs tracking-wider uppercase mt-8 group-hover:gap-3 transition-all">
                      Explore <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 lg:py-32 hero-grain" style={{ background: 'linear-gradient(135deg, oklch(0.16 0.04 68) 0%, oklch(0.20 0.06 72) 100%)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <div className="flex justify-center gap-1 mb-8">
            {Array(5).fill(0).map((_, i) => <Star key={i} size={16} className="fill-primary text-primary" />)}
          </div>
          <blockquote className="font-display text-3xl lg:text-4xl text-ivory italic leading-snug mb-8">
            "I've been getting my brows threaded here for over a year. Every single time, they know exactly what shape I want — and deliver it."
          </blockquote>
          <cite className="text-primary text-sm tracking-wider not-italic uppercase">— Sarah M., Toronto</cite>
        </div>
      </section>

      {/* Visit */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-5">Find Us</p>
              <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-8 leading-tight">Come see us.</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">{BUSINESS.address.full}</p>
                    <p className="text-sm text-muted-foreground mt-1">By appointment only</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={18} className="text-primary mt-1 shrink-0" />
                  <a href={`tel:${BUSINESS.phone}`} className="font-medium text-foreground hover:text-primary transition-colors">
                    {BUSINESS.phone}
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={18} className="text-primary mt-1 shrink-0" />
                  <div className="space-y-1.5">
                    {BUSINESS.hours.map(h => (
                      <div key={h.day} className="flex gap-6 text-sm">
                        <span className="w-20 text-muted-foreground">{h.day}</span>
                        <span className="text-foreground">{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Link to="/location" className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-primary hover:gap-3 transition-all">
                  More Details <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            <div className="rounded-sm overflow-hidden aspect-square lg:min-h-[400px] relative" style={{ background: 'linear-gradient(135deg, oklch(0.92 0.03 85) 0%, oklch(0.88 0.04 80) 100%)' }}>
              <div className="absolute inset-0 dot-pattern opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin size={40} className="text-primary mx-auto mb-4" />
                  <p className="font-display text-2xl text-foreground mb-2">Toronto, ON</p>
                  <p className="text-sm text-muted-foreground">Appointments only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  )
}
