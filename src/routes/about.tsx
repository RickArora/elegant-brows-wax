import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowRight, Heart, Sparkles, Shield } from 'lucide-react'
import { BUSINESS } from '../lib/constants'
import CTABand from '../components/site/CTABand'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About | Elegant Brows & Wax' },
      { name: 'description', content: 'The story behind Elegant Brows & Wax — our philosophy, values, and commitment to every client who walks through our door.' },
      { property: 'og:title', content: 'About Elegant Brows & Wax' },
    ],
  }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="pt-32 pb-24 lg:pt-48 lg:pb-32 hero-grain relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, oklch(0.88 0.05 355) 0%, oklch(0.95 0.025 85) 100%)' }}
      >
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-5">Our Story</p>
          <h1 className="font-display text-5xl lg:text-7xl text-foreground leading-tight mb-6 max-w-2xl">
            Elegant Brows<br />& Wax
          </h1>
          <p className="text-foreground/70 max-w-xl text-lg font-display italic">
            Built on precision. Grounded in care.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-5">How It Started</p>
              <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-8 leading-tight">
                A belief that every client deserves more.
              </h2>
              <div className="space-y-5 text-foreground/70 leading-relaxed">
                <p>
                  Elegant Brows & Wax was founded with one core belief: that precision and care are not extras — they are the minimum a client should expect from a beauty professional.
                </p>
                <p>
                  Too many salons treat threading and waxing as quick, high-volume services. Shape the brows, take the money, next client. The result is brows that look different every visit, skin that reacts badly, and clients who leave not quite happy but unsure why.
                </p>
                <p>
                  We built Elegant Brows & Wax differently. Every appointment starts with a consultation. Every brow is mapped before a thread is pulled. Every facial is planned around your skin — not a protocol template. We stay appointment-only so that every client gets our full attention.
                </p>
                <p>
                  We have grown through word of mouth — clients who leave happy and tell their friends. That is the only growth we want.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div
                className="aspect-square rounded-sm relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, oklch(0.16 0.04 68) 0%, oklch(0.26 0.08 74) 100%)' }}
              >
                <div className="absolute inset-0 dot-pattern opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-ivory">
                    <div className="text-8xl font-display text-primary/30 mb-4">EB</div>
                    <p className="font-display text-2xl italic text-ivory/40">Est. {BUSINESS.founded}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">What We Stand For</p>
            <h2 className="font-display text-4xl lg:text-5xl text-foreground leading-tight">
              Our philosophy
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: 'Precision first',
                body: 'We map before we thread. We consult before we wax. The five minutes we spend understanding what you want saves thirty minutes of fixing a result you did not ask for.',
              },
              {
                icon: Heart,
                title: 'Every client is different',
                body: 'Your face shape, skin type, growth pattern, and preferences are yours alone. We treat you accordingly — not according to a template.',
              },
              {
                icon: Shield,
                title: 'Skin safety above all',
                body: 'We track your skincare routines, flag contraindications, and never proceed with a treatment that could harm your skin. Trust is built through honesty.',
              },
            ].map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-8 rounded-sm"
              >
                <val.icon size={24} className="text-primary mb-5" />
                <h3 className="font-display text-2xl text-foreground mb-4">{val.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{val.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Our Journey</p>
            <h2 className="font-display text-4xl lg:text-5xl text-foreground">Milestones</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            {[
              { year: '2020', event: 'Elegant Brows & Wax opens, offering threading and waxing by appointment.' },
              { year: '2021', event: 'Premium Facials service line launched — Korean Glass, Hydra Boost, and Clean Up first introduced.' },
              { year: '2022', event: 'Red Wine Rejuvenation and O3+ Radiance Facials added based on client demand.' },
              { year: '2023', event: 'Luster Gold Facial introduced — our most luxurious treatment. Waitlist within first month.' },
              { year: '2024', event: 'Expanded waxing menu to include full body services. Over 500 five-star reviews across platforms.' },
            ].map((m, i) => (
              <div key={m.year} className="flex gap-8 mb-10 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary mt-1.5 shrink-0" />
                  {i < 4 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-2">
                  <p className="text-xs tracking-widest uppercase text-primary mb-1">{m.year}</p>
                  <p className="text-foreground/70 leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Specialist */}
      <section
        className="py-24 lg:py-32 hero-grain"
        style={{ background: 'linear-gradient(135deg, oklch(0.88 0.05 355) 0%, oklch(0.94 0.03 85) 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-5">Your Specialist</p>
              <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-7 leading-tight">
                Trained hands.<br />Genuine care.
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-5">
                Every service at Elegant Brows & Wax is performed by a trained specialist with deep knowledge of both the technical and skin-care side of each treatment.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-8">
                We stay current with developments in professional skincare and hair removal — bringing clinical knowledge to a boutique, personal setting. You are not getting a chain salon experience. You are getting expertise delivered with attention.
              </p>
              <Link
                to="/book"
                className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-primary hover:gap-3 transition-all"
              >
                Book Your First Visit <ArrowRight size={14} />
              </Link>
            </div>
            <div
              className="aspect-[4/5] rounded-sm relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, oklch(0.16 0.04 68) 0%, oklch(0.26 0.08 74) 100%)' }}
            >
              <div className="absolute inset-0 dot-pattern opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-ivory">
                  <div className="w-24 h-24 rounded-full border-2 border-primary mx-auto mb-4 flex items-center justify-center">
                    <span className="font-display text-3xl text-primary">EB</span>
                  </div>
                  <p className="font-display text-2xl text-ivory mb-1">Your Specialist</p>
                  <p className="text-xs tracking-widest uppercase text-primary">Elegant Brows & Wax</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand heading="Ready to experience it?" sub="Book your first appointment and discover the Elegant difference." />
    </main>
  )
}
