import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { allServices, servicesByCategory } from '../lib/services'
import CTABand from '../components/site/CTABand'

export const Route = createFileRoute('/services/')({
  head: () => ({
    meta: [
      { title: 'All Services | Elegant Brows & Wax' },
      { name: 'description', content: 'Browse all threading, waxing, and premium facial services at Elegant Brows & Wax in Toronto. From $3 eyebrow threading to 24K gold facials.' },
      { property: 'og:title', content: 'Services | Elegant Brows & Wax' },
    ],
  }),
  component: ServicesPage,
})

const categoryLabel: Record<string, string> = {
  threading: 'Threading',
  waxing: 'Waxing',
  facial: 'Premium Facial',
}

function ServiceCard({ service }: { service: (typeof allServices)[0] }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <Link
        to={`/services/${service.slug}`}
        className="group flex items-center justify-between py-5 border-b border-border hover:border-primary transition-colors"
      >
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 rounded-sm shrink-0" style={{ background: service.heroGradient }} />
          <div>
            <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">{service.name}</h3>
            <p className="text-sm text-muted-foreground">{service.tagline}</p>
          </div>
        </div>
        <div className="flex items-center gap-6 shrink-0 ml-4">
          <span className="font-display text-xl text-foreground">{service.price}</span>
          <ArrowRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </Link>
    </motion.div>
  )
}

function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="pt-32 pb-20 lg:pt-48 lg:pb-28 hero-grain"
        style={{ background: 'linear-gradient(135deg, oklch(0.14 0.04 68) 0%, oklch(0.22 0.07 73) 100%)' }}
      >
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-5">What We Offer</p>
          <h1 className="font-display text-5xl lg:text-7xl text-ivory leading-tight mb-6 max-w-2xl">
            All Services
          </h1>
          <p className="text-ivory/60 max-w-lg text-lg">
            Threading, waxing, and premium facials. Every service performed with precision and care — by appointment only.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Book', body: 'Call or message to reserve your appointment. We are appointment-only to guarantee your time.' },
              { step: '02', title: 'Consult', body: 'Every appointment starts with a brief consultation so we understand exactly what you want.' },
              { step: '03', title: 'Leave Glowing', body: 'Leave with a result you love and a clear plan for your next visit.' },
            ].map(item => (
              <div key={item.step} className="flex gap-5">
                <span className="text-xs font-semibold text-primary/50 tracking-widest mt-1">{item.step}</span>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threading */}
      <section id="threading" className="bg-muted py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Hair Removal</p>
              <h2 className="font-display text-3xl lg:text-4xl text-foreground">Threading</h2>
            </div>
            <span className="text-sm text-muted-foreground">{servicesByCategory.threading.length} services</span>
          </div>
          <p className="text-muted-foreground max-w-xl mb-8">
            The most precise hair removal method available. A single cotton thread removes hair at the follicle — no chemicals, no heat, no adhesives.
          </p>
          <div className="bg-background rounded-sm px-6">
            {servicesByCategory.threading.map(service => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Waxing */}
      <section id="waxing" className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Hair Removal</p>
              <h2 className="font-display text-3xl lg:text-4xl text-foreground">Waxing</h2>
            </div>
            <span className="text-sm text-muted-foreground">{servicesByCategory.waxing.length} services</span>
          </div>
          <p className="text-muted-foreground max-w-xl mb-8">
            Professional waxing for face and body. Long-lasting smoothness that outperforms shaving for weeks.
          </p>
          <div className="rounded-sm px-6 border border-border">
            {servicesByCategory.waxing.map(service => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Facials */}
      <section id="facials" className="bg-muted py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Skin Care</p>
              <h2 className="font-display text-3xl lg:text-4xl text-foreground">Premium Facials</h2>
            </div>
            <span className="text-sm text-muted-foreground">{servicesByCategory.facial.length} services</span>
          </div>
          <p className="text-muted-foreground max-w-xl mb-8">
            Clinically inspired facials for every skin goal — from glass skin hydration to 24-karat gold radiance.
          </p>
          <div className="bg-background rounded-sm px-6">
            {servicesByCategory.facial.map(service => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CTABand heading="Ready to find your service?" sub="Call to book or use our online form. We'll match you to the right treatment." />
    </main>
  )
}
