import { createFileRoute, Link } from '@tanstack/react-router'
import { Phone, MapPin, Clock, Instagram, ArrowRight } from 'lucide-react'
import { BUSINESS } from '../lib/constants'
import CTABand from '../components/site/CTABand'

export const Route = createFileRoute('/location')({
  head: () => ({
    meta: [
      { title: 'Location & Hours | Elegant Brows & Wax' },
      { name: 'description', content: `Find Elegant Brows & Wax in Toronto. Hours, contact, and directions. Call ${BUSINESS.phone} to book your appointment.` },
      { property: 'og:title', content: 'Location | Elegant Brows & Wax' },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BeautySalon',
          name: BUSINESS.name,
          telephone: BUSINESS.phone,
          address: { '@type': 'PostalAddress', addressLocality: BUSINESS.address.city, addressRegion: BUSINESS.address.province, addressCountry: 'CA' },
          openingHoursSpecification: BUSINESS.hours.map(h => ({
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: h.day,
            opens: h.hours.split('–')[0].trim(),
            closes: h.hours.split('–')[1].trim(),
          })),
        }),
      },
    ],
  }),
  component: LocationPage,
})

function LocationPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="pt-32 pb-24 lg:pt-48 lg:pb-32 hero-grain relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, oklch(0.92 0.04 85) 0%, oklch(0.96 0.02 90) 100%)' }}
      >
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-5">Find Us</p>
          <h1 className="font-display text-5xl lg:text-7xl text-foreground leading-tight mb-6 max-w-2xl">
            Location &<br />Hours
          </h1>
          <p className="text-foreground/65 max-w-lg text-lg">
            We are appointment-only. Call or message to secure your time before visiting.
          </p>
        </div>
      </section>

      {/* Contact + Hours */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact */}
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-8">Contact</p>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-sm bg-muted flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Location</p>
                    <p className="text-foreground/70">{BUSINESS.address.full}</p>
                    <p className="text-sm text-muted-foreground mt-1">Appointments only — exact address provided on booking</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-sm bg-muted flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <a href={`tel:${BUSINESS.phone}`} className="text-foreground/70 hover:text-primary transition-colors text-lg font-display">
                      {BUSINESS.phone}
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Call or text to book</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-sm bg-muted flex items-center justify-center shrink-0">
                    <Instagram size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Instagram</p>
                    <a
                      href={BUSINESS.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      @{BUSINESS.instagram}
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">DMs open for bookings and enquiries</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-8">Hours</p>
              <div className="space-y-0">
                {BUSINESS.hours.map((h, i) => (
                  <div key={h.day} className={`flex items-center justify-between py-4 ${i < BUSINESS.hours.length - 1 ? 'border-b border-border' : ''}`}>
                    <span className="font-medium text-foreground">{h.day}</span>
                    <span className="text-foreground/70">{h.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-muted rounded-sm p-5">
                <p className="text-xs tracking-wider uppercase text-primary mb-2">Appointments Only</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We are appointment-only to ensure every client receives our full attention. Walk-ins cannot be accommodated. Please call or message to book before visiting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-muted py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div
            className="w-full h-64 lg:h-80 rounded-sm relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, oklch(0.88 0.03 80) 0%, oklch(0.92 0.025 85) 100%)' }}
          >
            <div className="absolute inset-0 dot-pattern opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={32} className="text-primary mx-auto mb-3" />
                <p className="font-display text-xl text-foreground mb-2">Toronto, ON</p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-primary hover:gap-3 transition-all"
                >
                  Open in Google Maps <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* On Arrival Guide */}
      <section className="py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">First Visit?</p>
            <h2 className="font-display text-4xl lg:text-5xl text-foreground">What to expect on arrival.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Confirm your booking', body: 'You should have a confirmed appointment time. If not, call us to book before visiting.' },
              { step: '02', title: 'Arrive on time', body: 'Please arrive at your appointment time. Late arrivals may need to be rescheduled to avoid affecting other clients.' },
              { step: '03', title: 'Come prepared', body: 'For facials, arrive with clean skin or a light makeup look you are happy to remove. For waxing, ensure hair is at least 1/4 inch long.' },
              { step: '04', title: 'Consult first', body: 'Your appointment starts with a brief consultation. Please mention any skin conditions, medications, or preferences.' },
            ].map(item => (
              <div key={item.step} className="flex gap-4">
                <span className="text-xs font-semibold text-primary/50 tracking-widest mt-1 shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand heading="Ready to visit?" sub="Book your appointment before you come. We look forward to seeing you." />
    </main>
  )
}
