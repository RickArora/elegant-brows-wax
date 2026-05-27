import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Star, ArrowRight } from 'lucide-react'
import CTABand from '../components/site/CTABand'

export const Route = createFileRoute('/reviews')({
  head: () => ({
    meta: [
      { title: 'Reviews | Elegant Brows & Wax' },
      { name: 'description', content: 'See what clients say about Elegant Brows & Wax. Five-star threading, waxing and facial services in Toronto.' },
      { property: 'og:title', content: 'Client Reviews | Elegant Brows & Wax' },
    ],
  }),
  component: ReviewsPage,
})

const testimonials = [
  { name: 'Sarah M.', service: 'Eyebrow Threading', rating: 5, text: "I've been getting my brows threaded here for over a year. Every single time, they know exactly what shape I want — and deliver it. I've tried other places and always come back. The shape lasts longer, looks better, and my skin never reacts." },
  { name: 'Priya K.', service: 'Luster Gold Facial', rating: 5, text: "Booked the Gold Facial before my wedding and honestly could not believe the results. My skin looked like I had professional lighting on it all day. Every guest asked what I did. Worth every penny." },
  { name: 'Michelle T.', service: 'Full Body Wax', rating: 5, text: "I was nervous about a full body wax but they made it so comfortable. The whole session was efficient, professional, and the results lasted over 5 weeks. I've already booked my next one." },
  { name: 'Ananya R.', service: 'Korean Glass Rice Water Facial', rating: 5, text: "The glass skin facial is INCREDIBLE. I have dry, uneven skin and after the first session I literally stopped wearing foundation for two weeks. My skin looked better than it has in years." },
  { name: 'Jessica L.', service: 'Full Face Threading', rating: 5, text: "First time getting a full face thread and I was amazed at how thorough and painless it was. My face looked so clean and polished. I had no idea how much a difference forehead threading makes." },
  { name: 'Devika S.', service: 'Red Wine Rejuvenation Facial', rating: 5, text: "I go every month for the Red Wine facial. After 3 sessions my skin tone has visibly evened out and the fine lines around my eyes are noticeably softer. It's become essential to my routine." },
  { name: 'Maria C.', service: 'Underarms Wax', rating: 5, text: "Quick, clean, painless. I've tried so many places — this is the first one that gets every hair and leaves zero redness. My underarms are smooth for nearly 5 weeks every time." },
  { name: 'Tanya B.', service: 'Eyebrow Threading', rating: 5, text: "The brow mapping consultation before threading is something I've never had anywhere else. She takes 3 minutes to understand your face before picking up the thread. The result is always exactly right." },
  { name: 'Fatima Z.', service: 'O3+ Radiance Facial', rating: 5, text: "My skin looked brighter the day after the O3+ facial than it has in years. I've been recommending this to everyone. The specialist explained everything she was doing — incredibly knowledgeable." },
]

const stars = (n: number) => Array(n).fill(0).map((_, i) => <Star key={i} size={14} className="fill-primary text-primary" />)

function ReviewsPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="pt-32 pb-24 lg:pt-48 lg:pb-32 hero-grain relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, oklch(0.14 0.04 68) 0%, oklch(0.22 0.07 73) 100%)' }}
      >
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-5">What Clients Say</p>
          <h1 className="font-display text-5xl lg:text-7xl text-ivory leading-tight mb-6 max-w-2xl">
            Reviews
          </h1>
          <p className="text-ivory/60 max-w-xl text-lg">
            We grow through word of mouth. Every five-star review represents a client who left happier than when they arrived.
          </p>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Average Rating', value: '5.0', sub: 'out of 5 stars' },
              { label: 'Total Reviews', value: '500+', sub: 'across platforms' },
              { label: 'Repeat Clients', value: '80%', sub: 'come back regularly' },
              { label: 'Word of Mouth', value: '100%', sub: 'how we grow' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl lg:text-5xl text-primary mb-1">{stat.value}</p>
                <p className="text-xs tracking-wider uppercase text-foreground mb-1">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section
        className="py-24 lg:py-28 hero-grain"
        style={{ background: 'linear-gradient(135deg, oklch(0.16 0.04 68) 0%, oklch(0.20 0.06 72) 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <div className="flex justify-center gap-1 mb-8">{stars(5)}</div>
          <blockquote className="font-display text-3xl lg:text-4xl text-ivory italic leading-snug mb-8">
            "Booked the Gold Facial before my wedding and could not believe the results. My skin looked like I had professional lighting on it all day. Every guest asked what I did."
          </blockquote>
          <cite className="text-primary text-sm tracking-wider not-italic uppercase">— Priya K., Toronto · Luster Gold Facial</cite>
        </div>
      </section>

      {/* Review Grid */}
      <section className="py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Client Testimonials</p>
            <h2 className="font-display text-4xl lg:text-5xl text-foreground">What they said.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08 }}
                className="bg-muted p-7 rounded-sm"
              >
                <div className="flex gap-0.5 mb-4">{stars(review.rating)}</div>
                <p className="text-foreground/75 leading-relaxed mb-6 text-sm">"{review.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground text-sm">{review.name}</p>
                  <p className="text-xs text-primary tracking-wide">{review.service}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review */}
      <section className="bg-muted py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Visited Us?</p>
          <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-5 leading-tight">Share your experience.</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">Your review helps other clients find the right service and helps us keep improving.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground text-sm tracking-wider uppercase rounded-sm hover:bg-gold-dark transition-colors"
            >
              Review on Google <ArrowRight size={14} />
            </a>
            <a
              href="https://www.instagram.com/__elegant_brows__wax"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3.5 border border-border text-foreground text-sm tracking-wider uppercase rounded-sm hover:border-primary hover:text-primary transition-colors"
            >
              Tag us on Instagram
            </a>
          </div>
        </div>
      </section>

      <CTABand heading="See it for yourself." sub="Read what clients say, then come experience it." />
    </main>
  )
}
