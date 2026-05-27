import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Phone, Clock, AlertCircle, CheckCircle } from 'lucide-react'
import { BUSINESS } from '../lib/constants'
import { allServices } from '../lib/services'

export const Route = createFileRoute('/book')({
  head: () => ({
    meta: [
      { title: 'Book an Appointment | Elegant Brows & Wax' },
      { name: 'description', content: `Book an appointment at Elegant Brows & Wax in Toronto. Call ${BUSINESS.phone} or fill in the form and we will confirm your time.` },
      { property: 'og:title', content: 'Book | Elegant Brows & Wax' },
    ],
  }),
  component: BookPage,
  validateSearch: (search: Record<string, unknown>) => ({
    service: typeof search.service === 'string' ? search.service : undefined,
  }),
})

function BookPage() {
  const { service: preselected } = Route.useSearch()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: preselected ?? '',
    date: '',
    time: '',
    guests: '1',
    notes: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      {/* Hero */}
      <section
        className="pt-32 pb-16 lg:pt-48 lg:pb-20 hero-grain relative"
        style={{ background: 'linear-gradient(135deg, oklch(0.14 0.04 68) 0%, oklch(0.22 0.07 73) 100%)' }}
      >
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-5">Reserve Your Time</p>
          <h1 className="font-display text-5xl lg:text-7xl text-ivory leading-tight max-w-2xl">
            Book an<br />Appointment
          </h1>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Form — 2 cols */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="flex items-start gap-5 bg-muted rounded-sm p-8">
                  <CheckCircle size={24} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <h2 className="font-display text-3xl text-foreground mb-3">Request received.</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Thank you, {form.name}. We will contact you at {form.email || form.phone} to confirm your appointment. If you need to reach us sooner, call{' '}
                      <a href={`tel:${BUSINESS.phone}`} className="text-primary">{BUSINESS.phone}</a>.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Full Name *</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Phone *</label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Service *</label>
                    <select
                      required
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">Select a service</option>
                      <optgroup label="Threading">
                        {allServices.filter(s => s.category === 'threading').map(s => (
                          <option key={s.slug} value={s.slug}>{s.name} — {s.price}</option>
                        ))}
                      </optgroup>
                      <optgroup label="Waxing">
                        {allServices.filter(s => s.category === 'waxing').map(s => (
                          <option key={s.slug} value={s.slug}>{s.name} — {s.price}</option>
                        ))}
                      </optgroup>
                      <optgroup label="Premium Facials">
                        {allServices.filter(s => s.category === 'facial').map(s => (
                          <option key={s.slug} value={s.slug}>{s.name} — {s.price}</option>
                        ))}
                      </optgroup>
                    </select>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Preferred Date</label>
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Preferred Time</label>
                      <select
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                      >
                        <option value="">Any time</option>
                        <option value="morning">Morning (10am – 12pm)</option>
                        <option value="afternoon">Afternoon (12pm – 4pm)</option>
                        <option value="evening">Evening (4pm – 7pm)</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Additional Notes</label>
                    <textarea
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Skin concerns, preferred brow shape, or anything we should know..."
                      className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-medium hover:bg-gold-dark transition-colors rounded-sm"
                  >
                    Send Booking Request
                  </button>
                  <p className="text-xs text-muted-foreground">
                    We will confirm your appointment within 24 hours. For immediate booking, call{' '}
                    <a href={`tel:${BUSINESS.phone}`} className="text-primary">{BUSINESS.phone}</a>.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="bg-foreground text-ivory rounded-sm p-7">
                <Phone size={20} className="text-primary mb-4" />
                <h3 className="font-display text-2xl mb-3">Prefer to call?</h3>
                <p className="text-ivory/60 text-sm mb-4">Call or text us directly and we will lock in your appointment immediately.</p>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="text-xl font-display text-primary hover:text-ivory transition-colors"
                >
                  {BUSINESS.phone}
                </a>
              </div>

              {/* Hours */}
              <div className="bg-muted rounded-sm p-7">
                <Clock size={18} className="text-primary mb-4" />
                <h3 className="font-display text-xl text-foreground mb-4">Hours</h3>
                <div className="space-y-2">
                  {BUSINESS.hours.map(h => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="text-foreground">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Policy */}
              <div className="rounded-sm p-7 border border-border">
                <AlertCircle size={18} className="text-primary mb-4" />
                <h3 className="font-display text-xl text-foreground mb-4">Policies</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p><span className="text-foreground font-medium">Cancellation:</span> Please give 24 hours notice if you need to cancel or reschedule.</p>
                  <p><span className="text-foreground font-medium">Late arrivals:</span> Arriving more than 10 minutes late may result in rescheduling.</p>
                  <p><span className="text-foreground font-medium">Skin prep:</span> Mention any active skincare (retinol, AHAs, Accutane) at booking — some treatments require a pause.</p>
                  <p><span className="text-foreground font-medium">Waxing:</span> Hair must be at least 1/4 inch for effective waxing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
