export type ServiceCategory = 'threading' | 'waxing' | 'facial'

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface ServiceData {
  slug: string
  name: string
  tagline: string
  price: string
  priceNote?: string
  category: ServiceCategory
  description: string[]
  included: string[]
  experience: { title: string; description: string }[]
  benefits: { title: string; description: string }[]
  forWho: string[]
  notForWho: string[]
  faqs: ServiceFAQ[]
  related: string[]
  metaDescription: string
  heroGradient: string
}

export const services: Record<string, ServiceData> = {
  'eyebrow-threading': {
    slug: 'eyebrow-threading',
    name: 'Eyebrow Threading',
    tagline: 'Precise shape. Clean arch. Perfect definition.',
    price: '$5',
    category: 'threading',
    description: [
      'Threading is the most precise hair removal technique available — bar none. Using a single twisted cotton thread, our specialists remove hair at the follicle level with accuracy that a wax strip simply cannot match. Every hair is addressed individually, allowing us to sculpt your exact ideal arch.',
      'The result is a brow shape that looks intentional. Not over-done. Not template-forced. Shaped to your bone structure, your face, your expression. We take the time before every appointment to discuss the look you want and map it onto your natural brow before a single hair is removed.',
      'At $5 per session, it is the highest-value beauty service you will find — and with results lasting 3 to 4 weeks, it becomes part of your regular routine without a second thought.',
    ],
    included: [
      'Brow shape consultation',
      'Precise brow mapping before threading',
      'Full eyebrow threading (both brows)',
      'Post-thread finishing tweeze',
      'Soothing aloe gel application',
    ],
    experience: [
      { title: 'Arrive & Consult', description: 'We discuss your preferred shape — natural, defined, arched, or straight — and assess your brow growth.' },
      { title: 'Brow Mapping', description: 'Using a brow pencil, we mark your ideal arch, peak, and tail before removing anything.' },
      { title: 'Threading', description: 'Using a single cotton thread, we remove each hair with precise, swift motions. Most clients are surprised by how gentle it feels.' },
      { title: 'Refine & Tweeze', description: 'Any stragglers outside the mapped line are removed with precision tweezers.' },
      { title: 'Soothe & Finish', description: 'A cooling aloe gel calms the skin. You leave with clean, defined brows — no redness that stays.' },
    ],
    benefits: [
      { title: 'Surgical Precision', description: 'Thread targets individual hairs — something wax cannot do.' },
      { title: 'No Chemicals', description: 'Pure cotton thread. Nothing else touches your skin.' },
      { title: 'Gentle on Sensitive Skin', description: 'No heat, no adhesives, no irritants. Ideal for retinol or acne-prone skin.' },
      { title: 'Lasts 3–4 Weeks', description: 'Hair is removed from the root, so regrowth takes significantly longer.' },
      { title: 'No Breakouts', description: 'Unlike wax, threading does not lift skin or clog pores.' },
    ],
    forWho: [
      'Anyone wanting precise, defined brows',
      'Sensitive skin types including retinol users',
      'Those who have had wax reactions before',
      'Clients wanting a natural but polished look',
    ],
    notForWho: [
      'Active skin rashes or open cuts directly on the brow bone',
      'Skin with active, uncontrolled eczema in the brow area',
    ],
    faqs: [
      { question: 'Does eyebrow threading hurt?', answer: 'Most clients describe it as a mild stinging sensation — much less than waxing. The discomfort lasts only during the threading (about 5 minutes) and fades immediately after.' },
      { question: 'How long does eyebrow threading last?', answer: 'Threading removes hair from the root, so results typically last 3 to 4 weeks depending on your hair growth cycle.' },
      { question: 'How often should I get my brows threaded?', answer: 'Most clients come every 3 to 4 weeks. Coming regularly helps maintain a consistent shape and prevents the regrowth from becoming unruly.' },
      { question: 'Can I get threading if I use retinol or prescription skincare?', answer: 'Yes — threading is the preferred method for clients on retinol, AHAs, or acne medications like Accutane. Always mention your skincare at consultation.' },
      { question: 'Should I grow my brows out before threading?', answer: 'Ideally, yes — at least 2 weeks of growth gives us the most to work with when shaping. But we can work with most lengths.' },
    ],
    related: ['eyebrow-wax', 'full-face-threading', 'upper-lip-threading'],
    metaDescription: 'Professional eyebrow threading in Toronto. Precise brow shaping using the ancient cotton thread technique. $5 per session. Book now at Elegant Brows & Wax.',
    heroGradient: 'linear-gradient(135deg, oklch(0.18 0.05 70) 0%, oklch(0.28 0.08 75) 100%)',
  },

  'upper-lip-threading': {
    slug: 'upper-lip-threading',
    name: 'Upper Lip Threading',
    tagline: 'Soft. Smooth. Flawless finish.',
    price: '$3',
    category: 'threading',
    description: [
      'The upper lip is one of the most visible areas of the face — and one of the most sensitive. Threading removes fine and coarse hair alike with a precision and gentleness that waxing cannot replicate in such a delicate zone.',
      'Our threading technique uses a single cotton thread and takes under three minutes. No chemicals touch your skin, no heat is applied, and there is no risk of the skin lifting that comes with wax on thin, sensitive lip skin.',
      'At just $3, it is the quickest upgrade to your appearance. Clean upper lip — instant polish.',
    ],
    included: [
      'Upper lip threading (full lip area)',
      'Cooling aloe gel finish',
      'Single-use hygienic thread',
    ],
    experience: [
      { title: 'Cleanse', description: 'The upper lip area is gently wiped to remove any makeup or oil.' },
      { title: 'Thread', description: 'A single cotton thread removes all fine and coarse hair in swift, precise movements — typically under 3 minutes.' },
      { title: 'Soothe', description: 'Cooling aloe is applied to calm any brief redness.' },
    ],
    benefits: [
      { title: 'Ultra-Gentle', description: 'No heat or adhesives on sensitive lip skin.' },
      { title: 'Chemical-Free', description: 'Pure cotton thread — nothing else.' },
      { title: 'Fast & Precise', description: 'Done in minutes with precise hair-by-hair removal.' },
      { title: 'No Wax Burns', description: 'Delicate skin around the lip is never at risk of lifting or burning.' },
    ],
    forWho: [
      'Anyone wanting a smooth upper lip',
      'Sensitive skin types',
      'Clients on retinol or topical acne treatments',
    ],
    notForWho: [
      'Active cold sores or open cuts on the lip area',
    ],
    faqs: [
      { question: 'Will upper lip threading cause my hair to grow back thicker?', answer: 'No — this is a common myth. Threading removes hair at the root, and repeated threading can actually cause follicles to weaken over time, leading to finer regrowth.' },
      { question: 'How long does upper lip threading last?', answer: 'Typically 2 to 3 weeks, depending on your individual hair growth cycle.' },
      { question: 'Is it safe if I am using retinol near my mouth?', answer: 'Yes, threading is the safest hair removal method for clients on active skincare. Just let us know what you are using at your appointment.' },
    ],
    related: ['eyebrow-threading', 'upper-lip-wax', 'full-face-threading'],
    metaDescription: 'Upper lip threading in Toronto. Gentle, chemical-free hair removal for smooth, confident skin. $3. Book at Elegant Brows & Wax.',
    heroGradient: 'linear-gradient(135deg, oklch(0.20 0.06 65) 0%, oklch(0.30 0.09 78) 100%)',
  },

  'forehead-threading': {
    slug: 'forehead-threading',
    name: 'Forehead Threading',
    tagline: 'Smooth your canvas. Define your face.',
    price: '$3',
    category: 'threading',
    description: [
      'Fine forehead hair is barely visible until you see yourself in the wrong light — then it catches everything. Forehead threading removes the vellus (fine) hairs that create that fuzzy, uneven texture and leaves your forehead with a clean, polished surface.',
      'It is also the difference between makeup sitting smoothly and makeup settling into fine hair. After forehead threading, foundation, powder, and highlighter apply more evenly and last longer.',
      'A three-dollar treatment with an outsized impact on how polished you look day to day.',
    ],
    included: [
      'Full forehead threading',
      'Cooling aloe gel finish',
      'Single-use hygienic thread',
    ],
    experience: [
      { title: 'Assess', description: 'We check the hair distribution across your forehead to plan coverage.' },
      { title: 'Thread', description: 'Fine forehead hairs are removed in smooth, swift passes across the full forehead.' },
      { title: 'Finish', description: 'Cooling aloe is applied to calm the skin.' },
    ],
    benefits: [
      { title: 'Smoother Makeup Application', description: 'Foundation and powder sit flat without fine hair interrupting the surface.' },
      { title: 'Even Skin Texture', description: 'Removes the fuzziness that catches light unevenly.' },
      { title: 'Instant Polish', description: 'One of the most underrated grooming treatments for an immediate glow-up.' },
    ],
    forWho: [
      'Anyone wanting a smoother, more polished complexion',
      'Makeup wearers noticing uneven foundation application',
    ],
    notForWho: [
      'Active skin conditions like psoriasis on the forehead',
    ],
    faqs: [
      { question: 'Will the hair grow back thicker?', answer: 'No. Fine vellus hairs grow back fine. Repeated threading can actually cause hairs to grow back finer over time.' },
      { question: 'How often should I get forehead threading?', answer: 'Typically every 4 to 6 weeks.' },
    ],
    related: ['eyebrow-threading', 'full-face-threading', 'upper-lip-threading'],
    metaDescription: 'Forehead threading in Toronto. Remove fine forehead hair for smoother skin and better makeup application. $3 at Elegant Brows & Wax.',
    heroGradient: 'linear-gradient(135deg, oklch(0.22 0.07 70) 0%, oklch(0.32 0.10 80) 100%)',
  },

  'full-face-threading': {
    slug: 'full-face-threading',
    name: 'Full Face Threading',
    tagline: 'Complete facial definition. One session.',
    price: '$20',
    priceNote: 'Includes chin & sides',
    category: 'threading',
    description: [
      'The full face threading service is a complete facial grooming treatment — brows, upper lip, chin, sides of the face, and forehead all threaded in a single session. The result is a polished, defined face that looks intentional from every angle.',
      'This is the service for anyone who wants a consistent, maintained look without booking multiple separate appointments. Everything is done in sequence, with the full brow mapping consultation at the start and a soothing gel finish at the end.',
      'At $20 for a complete face treatment, it delivers more value than any single-area service combined — and the cohesive result of having everything shaped by the same hands in one session is worth the difference.',
    ],
    included: [
      'Eyebrow threading with full brow mapping consultation',
      'Upper lip threading',
      'Chin threading',
      'Sides of face threading',
      'Forehead threading',
      'Soothing aloe gel finish on all areas',
    ],
    experience: [
      { title: 'Full Consultation', description: 'We discuss desired brow shape and overall face threading preferences before starting.' },
      { title: 'Brow Mapping', description: 'Your ideal arch, peak, and tail are mapped before any threading begins.' },
      { title: 'Brows First', description: 'We start with eyebrows — the focal point of the face — threading both to perfection.' },
      { title: 'Full Face', description: 'Upper lip, chin, sides, and forehead are threaded in sequence.' },
      { title: 'Soothe & Finish', description: 'A cooling aloe gel is applied to every treated area to calm and refresh the skin.' },
    ],
    benefits: [
      { title: 'Cohesive Result', description: 'One specialist shapes your entire face — no inconsistency between areas.' },
      { title: 'Complete Polish', description: 'Every angle of your face is clean and defined.' },
      { title: 'Time-Efficient', description: 'Everything done in one session rather than multiple bookings.' },
      { title: 'No Chemicals Anywhere', description: 'Pure cotton thread on every area — gentle on all skin types.' },
    ],
    forWho: [
      'Anyone wanting a comprehensive facial grooming session',
      'Busy clients who want everything done in one visit',
      'Sensitive skin types needing chemical-free hair removal',
    ],
    notForWho: [
      'Active skin conditions or open cuts on multiple facial areas',
    ],
    faqs: [
      { question: 'How long does the full face threading take?', answer: 'Approximately 20 to 30 minutes for a complete full face threading session.' },
      { question: 'How often should I book a full face threading?', answer: 'Every 3 to 4 weeks is ideal to maintain a consistent look across all areas.' },
      { question: 'Can I choose which areas to include or exclude?', answer: 'Absolutely. Just let us know at the start of your appointment. We can skip any area you prefer.' },
    ],
    related: ['eyebrow-threading', 'upper-lip-threading', 'full-face-wax'],
    metaDescription: 'Full face threading in Toronto — brows, lip, chin, sides and forehead in one session. $20. Book at Elegant Brows & Wax.',
    heroGradient: 'linear-gradient(135deg, oklch(0.16 0.04 68) 0%, oklch(0.26 0.08 73) 100%)',
  },

  'full-face-wax': {
    slug: 'full-face-wax',
    name: 'Full Face Wax',
    tagline: 'Total smoothness. Lasting radiance.',
    price: '$30',
    category: 'waxing',
    description: [
      'A full face wax removes all unwanted facial hair in one thorough treatment — brows, upper lip, chin, cheeks, and forehead — leaving the skin silky smooth and luminous. Unlike threading, waxing removes hair from a larger surface area in one motion, making it efficient and extremely smooth.',
      'We use high-quality wax formulated for facial skin — gentle, low-heat, and designed to grip hair without sticking aggressively to the skin. The result lasts 3 to 6 weeks, significantly longer than shaving.',
      'The full face wax is a favourite among clients who want maximum smoothness and the brightening effect that comes from removing surface hair — skin literally looks more radiant after.',
    ],
    included: [
      'Brow waxing with shaping',
      'Upper lip wax',
      'Chin wax',
      'Cheek wax',
      'Forehead wax',
      'Post-wax soothing treatment',
    ],
    experience: [
      { title: 'Skin Assessment', description: 'We check for any sensitivity, active skin concerns, or recent skincare treatments before starting.' },
      { title: 'Prep', description: 'Skin is cleaned and lightly dusted with pre-wax powder to protect it.' },
      { title: 'Wax Application', description: 'Warm wax is applied in sections and removed swiftly with precise strips.' },
      { title: 'Tweeze & Refine', description: 'Any remaining fine hairs are removed with tweezers for a flawless finish.' },
      { title: 'Soothe', description: 'Post-wax calming lotion is applied to remove residue and calm the skin.' },
    ],
    benefits: [
      { title: 'Ultra-Smooth Skin', description: 'Hair is removed cleanly from the root across the entire face.' },
      { title: 'Brighter Complexion', description: 'Removing surface hair reveals more luminous skin immediately.' },
      { title: 'Lasts 3–6 Weeks', description: 'Far longer than any shaving or depilatory method.' },
      { title: 'Better Makeup Application', description: 'Makeup goes on smoother and stays longer on hair-free skin.' },
    ],
    forWho: [
      'Anyone wanting complete facial smoothness',
      'Clients who find threading too time-intensive',
      'Those whose skin responds well to waxing',
    ],
    notForWho: [
      'Current retinol or AHA users (minimum 5 days off before waxing)',
      'Clients on Accutane or similar medications',
      'Sunburned or freshly peeled skin',
    ],
    faqs: [
      { question: 'Should I stop retinol before a face wax?', answer: 'Yes — stop retinol, AHAs, and BHAs at least 5 days before your appointment to avoid skin lifting.' },
      { question: 'How long does a full face wax take?', answer: 'Approximately 20 to 30 minutes.' },
      { question: 'Will my skin be red after?', answer: 'Light redness is normal and typically fades within 1 to 2 hours. We recommend avoiding makeup for at least 2 hours post-wax.' },
    ],
    related: ['full-face-threading', 'eyebrow-wax', 'upper-lip-wax'],
    metaDescription: 'Full face wax in Toronto. Complete facial hair removal for silky smooth skin. $30 at Elegant Brows & Wax.',
    heroGradient: 'linear-gradient(135deg, oklch(0.20 0.06 65) 0%, oklch(0.30 0.10 72) 100%)',
  },

  'eyebrow-wax': {
    slug: 'eyebrow-wax',
    name: 'Eyebrow Wax',
    tagline: 'Sculpted. Clean. Defined.',
    price: '$10',
    category: 'waxing',
    description: [
      'Eyebrow waxing delivers a clean, defined shape with smooth lines and sharp edges. Hot wax is applied precisely to the areas outside your ideal brow shape and removed in one swift motion — leaving behind the clean architecture that defines your face.',
      'We combine waxing with precision tweezing for any fine stragglers, so every session results in a polished, intentional shape — not just a rough clean-up.',
      'At $10, it is the most affordable way to consistently maintained, professionally shaped brows.',
    ],
    included: [
      'Brow shape consultation',
      'Brow mapping before wax',
      'Wax application and removal',
      'Precision finishing tweeze',
      'Post-wax calming treatment',
    ],
    experience: [
      { title: 'Consult & Map', description: 'We map your ideal brow shape before any wax is applied.' },
      { title: 'Wax Application', description: 'Warm wax is applied precisely to areas outside the mapped shape.' },
      { title: 'Remove & Refine', description: 'Wax strips are removed in one swift motion; tweezers handle any remaining hairs.' },
      { title: 'Soothe', description: 'Post-wax calming lotion reduces redness and removes wax residue.' },
    ],
    benefits: [
      { title: 'Sharp, Clean Lines', description: 'Waxing creates very clean edges perfect for bold, defined brows.' },
      { title: 'Fast Service', description: 'Full brow wax takes under 15 minutes.' },
      { title: 'Long-Lasting', description: 'Results last 3 to 4 weeks.' },
    ],
    forWho: [
      'Anyone wanting defined, sculpted brows',
      'Clients who prefer waxing over threading',
    ],
    notForWho: [
      'Retinol or AHA users within 5 days of appointment',
      'Accutane users',
    ],
    faqs: [
      { question: 'Threading vs. waxing — which is better for brows?', answer: 'Both achieve great results. Threading offers more precision on individual hairs; waxing is faster and creates very clean lines. We can discuss which suits your goals best.' },
      { question: 'How long does brow waxing last?', answer: 'Typically 3 to 4 weeks.' },
    ],
    related: ['eyebrow-threading', 'full-face-wax', 'upper-lip-wax'],
    metaDescription: 'Eyebrow waxing in Toronto. Professional brow shaping for sculpted, defined brows. $10 at Elegant Brows & Wax.',
    heroGradient: 'linear-gradient(135deg, oklch(0.22 0.07 68) 0%, oklch(0.32 0.11 75) 100%)',
  },

  'upper-lip-wax': {
    slug: 'upper-lip-wax',
    name: 'Upper Lip Wax',
    tagline: 'Quick. Smooth. Confident.',
    price: '$5',
    category: 'waxing',
    description: [
      'A smooth upper lip in under five minutes. Upper lip waxing removes all fine and coarse hair cleanly, leaving the area polished and soft.',
      'We use a gentle, low-heat wax formulated specifically for sensitive facial skin to minimise irritation on this delicate area.',
    ],
    included: [
      'Upper lip waxing',
      'Post-wax soothing lotion',
    ],
    experience: [
      { title: 'Cleanse', description: 'The area is cleaned before any wax is applied.' },
      { title: 'Wax', description: 'Warm, gentle wax is applied and removed swiftly.' },
      { title: 'Soothe', description: 'Calming lotion is applied immediately after.' },
    ],
    benefits: [
      { title: 'Fast', description: 'Under 5 minutes.' },
      { title: 'Smooth Result', description: 'Completely hair-free surface.' },
      { title: 'Affordable', description: 'At $5, it is part of any grooming routine.' },
    ],
    forWho: ['Anyone wanting a smooth upper lip'],
    notForWho: ['Retinol users within 5 days', 'Active cold sores'],
    faqs: [
      { question: 'Is upper lip wax or threading more gentle?', answer: 'Threading is generally more gentle for very sensitive skin. Waxing provides a very smooth result but can be slightly more irritating on the thin lip skin.' },
    ],
    related: ['upper-lip-threading', 'full-face-wax', 'chin-wax'],
    metaDescription: 'Upper lip waxing in Toronto. Quick, smooth, gentle hair removal. $5 at Elegant Brows & Wax.',
    heroGradient: 'linear-gradient(135deg, oklch(0.24 0.07 68) 0%, oklch(0.34 0.10 75) 100%)',
  },

  'chin-wax': {
    slug: 'chin-wax',
    name: 'Chin Wax',
    tagline: 'Clean lines. Confident skin.',
    price: '$5',
    category: 'waxing',
    description: [
      'Chin waxing removes unwanted hair from the chin area cleanly and precisely. Whether you are dealing with fine peach fuzz or coarser hairs, waxing removes everything at the root for a smooth, clean finish that lasts weeks.',
      'A quick, affordable service that makes a significant difference in how clean and polished your face looks overall.',
    ],
    included: [
      'Chin area waxing',
      'Post-wax soothing treatment',
    ],
    experience: [
      { title: 'Cleanse & Prep', description: 'Area is prepped with a light pre-wax powder.' },
      { title: 'Wax', description: 'Warm wax is applied and removed precisely.' },
      { title: 'Soothe', description: 'Calming lotion finishes the treatment.' },
    ],
    benefits: [
      { title: 'Precise Hair Removal', description: 'Removes all hair from the root cleanly.' },
      { title: 'Lasts 3–4 Weeks', description: 'Long-lasting results vs. daily shaving.' },
    ],
    forWho: ['Anyone wanting a clean, hair-free chin area'],
    notForWho: ['Active skin conditions on the chin', 'Retinol users within 5 days'],
    faqs: [
      { question: 'How long does chin waxing last?', answer: 'Typically 3 to 4 weeks depending on individual hair growth.' },
    ],
    related: ['upper-lip-wax', 'full-face-wax', 'full-face-threading'],
    metaDescription: 'Chin waxing in Toronto. Clean, precise hair removal for a polished finish. $5 at Elegant Brows & Wax.',
    heroGradient: 'linear-gradient(135deg, oklch(0.20 0.06 65) 0%, oklch(0.30 0.09 72) 100%)',
  },

  'underarms-wax': {
    slug: 'underarms-wax',
    name: 'Underarms Wax',
    tagline: 'Smooth underarms. Lasting confidence.',
    price: '$15',
    category: 'waxing',
    description: [
      'Underarm waxing removes hair from the root for smooth, soft underarms that stay hair-free for 3 to 6 weeks. Unlike shaving, which leaves a shadow and stubble within days, waxing removes the entire hair including the root — so regrowth is finer and the result lasts significantly longer.',
      'Regular underarm waxing also leads to sparser, finer regrowth over time as the follicle weakens with repeated treatments.',
    ],
    included: [
      'Full underarm waxing (both sides)',
      'Post-wax soothing treatment',
    ],
    experience: [
      { title: 'Prep', description: 'The area is cleansed and prepped for waxing.' },
      { title: 'Wax', description: 'Warm wax is applied and removed quickly in the direction of hair growth.' },
      { title: 'Soothe', description: 'Post-wax lotion is applied to calm the skin.' },
    ],
    benefits: [
      { title: 'No Stubble', description: 'No razor shadow. No next-day regrowth.' },
      { title: 'Lasts 3–6 Weeks', description: 'Weeks of smoothness vs. days from shaving.' },
      { title: 'Finer Regrowth Over Time', description: 'Consistent waxing weakens the follicle gradually.' },
    ],
    forWho: [
      'Anyone tired of daily shaving',
      'Those wanting longer-lasting smoothness',
    ],
    notForWho: [
      'Underarms with active irritation or cuts',
      'Within 72 hours of deodorant use (please come with clean underarms)',
    ],
    faqs: [
      { question: 'Do I need to let my underarm hair grow before waxing?', answer: 'Yes — hair should be at least 1/4 inch (about the length of a rice grain) for the wax to grip effectively. Typically 2 to 3 weeks after the last shave.' },
      { question: 'Will underarm waxing reduce hair growth permanently?', answer: 'Not permanently, but consistent waxing over time does cause hairs to grow back finer and more sparsely.' },
    ],
    related: ['half-arms-legs-wax', 'full-arms-legs-wax', 'full-body-wax'],
    metaDescription: 'Underarm waxing in Toronto. Smooth underarms that last 3–6 weeks. $15 at Elegant Brows & Wax.',
    heroGradient: 'linear-gradient(135deg, oklch(0.18 0.05 68) 0%, oklch(0.28 0.09 74) 100%)',
  },

  'half-arms-legs-wax': {
    slug: 'half-arms-legs-wax',
    name: 'Half Arms & Legs Wax',
    tagline: 'Silky smooth. Half the time.',
    price: '$20',
    category: 'waxing',
    description: [
      'Our half arms and legs wax covers the lower half of both arms and both legs — the areas most frequently exposed. If you wear short sleeves and shorts, this covers everything you need.',
      'We use a professional warm wax that grips hair firmly without sticking aggressively to the skin, removing everything cleanly in one swift motion. The result lasts 4 to 6 weeks.',
    ],
    included: [
      'Lower arm waxing (both arms)',
      'Lower leg waxing (both legs)',
      'Post-wax soothing lotion',
    ],
    experience: [
      { title: 'Consultation', description: 'We confirm the areas to be covered and check for any skin concerns.' },
      { title: 'Wax', description: 'Warm wax is applied section by section and removed swiftly.' },
      { title: 'Soothe & Finish', description: 'Post-wax lotion is applied across all treated areas.' },
    ],
    benefits: [
      { title: 'Covers Key Areas', description: 'Arms and legs from the elbow and knee down — everything most visible.' },
      { title: 'Lasts 4–6 Weeks', description: 'Smooth, hair-free skin for over a month.' },
      { title: 'Cost-Effective', description: 'Four areas in one session at one low price.' },
    ],
    forWho: [
      'Anyone wanting smooth arms and legs for warm weather',
      'Clients wanting to cover key visible areas efficiently',
    ],
    notForWho: [
      'Hair shorter than 1/4 inch (allow 2 weeks regrowth from last shave)',
      'Sunburned or irritated skin',
    ],
    faqs: [
      { question: 'What counts as "half" arms and legs?', answer: 'Half arms covers from the wrist to the elbow. Half legs covers from the ankle to the knee.' },
      { question: 'How long does the appointment take?', answer: 'Approximately 30 to 40 minutes.' },
    ],
    related: ['full-arms-legs-wax', 'underarms-wax', 'full-body-wax'],
    metaDescription: 'Half arms & legs waxing in Toronto. Smooth lower arms and legs for 4–6 weeks. $20 at Elegant Brows & Wax.',
    heroGradient: 'linear-gradient(135deg, oklch(0.22 0.06 70) 0%, oklch(0.32 0.10 76) 100%)',
  },

  'full-arms-legs-wax': {
    slug: 'full-arms-legs-wax',
    name: 'Full Arms & Legs Wax',
    tagline: 'Completely smooth. Head to toe ready.',
    price: '$30',
    category: 'waxing',
    description: [
      'The full arms and legs wax is the complete body smoothness treatment — both arms from wrist to shoulder, and both legs from ankle to upper thigh. Everything in one session.',
      'Perfect for weddings, holidays, or anyone who simply does not want to think about body hair for the next 4 to 6 weeks. We work efficiently and thoroughly to ensure every inch is covered.',
    ],
    included: [
      'Full arm waxing — wrist to shoulder (both arms)',
      'Full leg waxing — ankle to upper thigh (both legs)',
      'Post-wax soothing lotion on all treated areas',
    ],
    experience: [
      { title: 'Full Consultation', description: 'We review all areas to be covered and any skin sensitivities.' },
      { title: 'Arms', description: 'Full arm waxing from wrist to shoulder on both arms.' },
      { title: 'Legs', description: 'Full leg waxing from ankle to upper thigh on both legs.' },
      { title: 'Soothe', description: 'Post-wax lotion across all treated areas.' },
    ],
    benefits: [
      { title: 'Complete Smoothness', description: 'Arms and legs fully hair-free for over a month.' },
      { title: 'Ready for Anything', description: 'Weddings, holidays, special events — no prep needed for 4–6 weeks.' },
      { title: 'Best Value Body Waxing', description: 'Four full areas covered at one low combined price.' },
    ],
    forWho: [
      'Brides, event attendees, vacationers',
      'Anyone wanting fully smooth arms and legs',
    ],
    notForWho: [
      'Hair shorter than 1/4 inch',
      'Sunburned or irritated skin on any area',
    ],
    faqs: [
      { question: 'How long does a full arms and legs wax take?', answer: 'Approximately 50 to 60 minutes.' },
      { question: 'How often should I book full arms and legs wax?', answer: 'Every 4 to 6 weeks is ideal for maintaining smoothness.' },
    ],
    related: ['half-arms-legs-wax', 'underarms-wax', 'full-body-wax'],
    metaDescription: 'Full arms & legs waxing in Toronto. Complete smoothness for 4–6 weeks. $30 at Elegant Brows & Wax.',
    heroGradient: 'linear-gradient(135deg, oklch(0.18 0.05 68) 0%, oklch(0.26 0.08 73) 100%)',
  },

  'stomach-wax': {
    slug: 'stomach-wax',
    name: 'Stomach Wax',
    tagline: 'Smooth and clean. Ready for anything.',
    price: '$10',
    category: 'waxing',
    description: [
      'Stomach waxing removes the fine to coarse hair that runs along the abdomen and linea alba. Whether it is a dusting of fine hair or a more prominent line of growth, a clean stomach wax leaves the area smooth and confident.',
      'Quick, affordable, and lasting up to 4 weeks — a simple addition to any body waxing routine.',
    ],
    included: [
      'Full stomach/abdomen waxing',
      'Post-wax soothing treatment',
    ],
    experience: [
      { title: 'Prep', description: 'Skin is cleansed and prepped.' },
      { title: 'Wax', description: 'Wax is applied and removed across the stomach area.' },
      { title: 'Soothe', description: 'Calming lotion is applied after.' },
    ],
    benefits: [
      { title: 'Smooth Abdomen', description: 'Clean, hair-free stomach.' },
      { title: 'Affordable', description: 'At $10, easy to add to any appointment.' },
    ],
    forWho: ['Anyone wanting a smooth stomach'],
    notForWho: ['Active skin irritation on the stomach area', 'Recent abdominal surgery'],
    faqs: [
      { question: 'Does stomach waxing hurt?', answer: 'It is generally considered one of the less painful waxing areas, though the areas closer to the hip bones can be more sensitive.' },
    ],
    related: ['full-body-wax', 'back-wax', 'underarms-wax'],
    metaDescription: 'Stomach waxing in Toronto. Smooth, clean abdomen. $10 at Elegant Brows & Wax.',
    heroGradient: 'linear-gradient(135deg, oklch(0.20 0.06 66) 0%, oklch(0.30 0.10 73) 100%)',
  },

  'back-wax': {
    slug: 'back-wax',
    name: 'Back Wax',
    tagline: 'Smooth back. Renewed confidence.',
    price: '$15',
    category: 'waxing',
    description: [
      'Back waxing removes hair from the full back surface cleanly and thoroughly. We work systematically across the entire back — upper, mid, and lower — ensuring complete coverage in a single session.',
      'Back waxing is also known for having a less intense sensation than the chest or face, making it one of the more comfortable body waxing services despite covering a large area.',
    ],
    included: [
      'Full back waxing — upper, mid, and lower back',
      'Post-wax soothing lotion',
    ],
    experience: [
      { title: 'Prep', description: 'Back is cleansed and pre-wax powder applied.' },
      { title: 'Upper Back', description: 'Upper back and shoulders area is waxed first.' },
      { title: 'Mid & Lower Back', description: 'Waxing continues down to the lower back.' },
      { title: 'Soothe', description: 'Post-wax lotion is applied across the full back.' },
    ],
    benefits: [
      { title: 'Complete Back Coverage', description: 'Entirely smooth from shoulders to lower back.' },
      { title: 'Comfortable Service', description: 'Back skin is less sensitive than facial areas.' },
      { title: 'Lasts 4–6 Weeks', description: 'Long-lasting smoothness.' },
    ],
    forWho: ['Anyone wanting a smooth, clean back'],
    notForWho: ['Recent back surgery or healing wounds', 'Severe back acne'],
    faqs: [
      { question: 'How long does a back wax take?', answer: 'Approximately 20 to 30 minutes for a full back.' },
    ],
    related: ['full-body-wax', 'stomach-wax', 'underarms-wax'],
    metaDescription: 'Back waxing in Toronto. Full back hair removal for lasting smoothness. $15 at Elegant Brows & Wax.',
    heroGradient: 'linear-gradient(135deg, oklch(0.18 0.05 65) 0%, oklch(0.28 0.09 72) 100%)',
  },

  'full-body-wax': {
    slug: 'full-body-wax',
    name: 'Full Body Wax',
    tagline: 'Complete transformation. Total smoothness.',
    price: '$70',
    category: 'waxing',
    description: [
      'The full body wax is our most comprehensive waxing service — head to toe smoothness in a single session. Face, arms, legs, underarms, back, and stomach are all treated, leaving every surface of your body hair-free for 4 to 6 weeks.',
      'This is the treatment for weddings, vacations, special events, or simply anyone who wants the freedom of not thinking about body hair for over a month. Our specialist works systematically and efficiently to minimise appointment time while ensuring complete coverage.',
      'At $70 for a complete body treatment, the value is exceptional compared to booking individual services.',
    ],
    included: [
      'Full face waxing',
      'Full arm waxing (both arms)',
      'Full leg waxing (both legs)',
      'Underarm waxing',
      'Stomach waxing',
      'Back waxing',
      'Post-wax soothing treatment on all areas',
    ],
    experience: [
      { title: 'Consultation', description: 'We review all areas, check for skin concerns, and plan the session order.' },
      { title: 'Face & Sensitive Areas', description: 'Face is waxed first while the specialist is fresh and most precise.' },
      { title: 'Arms & Underarms', description: 'Arms and underarms are treated next.' },
      { title: 'Legs & Body', description: 'Legs, stomach, and back are completed in sequence.' },
      { title: 'Full Soothe', description: 'Post-wax lotion is applied across every treated area.' },
    ],
    benefits: [
      { title: 'Total Body Smoothness', description: 'Every surface treated in one appointment.' },
      { title: 'Best Value', description: '$70 for every area — exceptional compared to individual service pricing.' },
      { title: '4–6 Weeks of Freedom', description: 'No body hair maintenance for over a month.' },
      { title: 'Wedding & Event Ready', description: 'The go-to preparation service before any major occasion.' },
    ],
    forWho: [
      'Brides and wedding party members',
      'Vacation and travel preparation',
      'Anyone wanting maximum smoothness with minimal maintenance',
    ],
    notForWho: [
      'Retinol or AHA users (stop 5 days before)',
      'Accutane users',
      'Active skin irritation on any major area',
    ],
    faqs: [
      { question: 'How long does a full body wax take?', answer: 'Between 90 minutes and 2 hours for a complete full body wax.' },
      { question: 'How should I prepare for a full body wax?', answer: 'Stop retinol and AHAs 5 days before, ensure hair is at least 1/4 inch long, exfoliate gently 24 hours before, and come with clean skin (no moisturiser day-of).' },
    ],
    related: ['half-arms-legs-wax', 'full-arms-legs-wax', 'back-wax'],
    metaDescription: 'Full body wax in Toronto. Complete head-to-toe hair removal in one session. $70 at Elegant Brows & Wax.',
    heroGradient: 'linear-gradient(135deg, oklch(0.16 0.04 65) 0%, oklch(0.24 0.07 70) 100%)',
  },

  'korean-glass-facial': {
    slug: 'korean-glass-facial',
    name: 'Korean Glass Rice Water Facial',
    tagline: 'Luminous. Hydrated. Glass skin perfection.',
    price: '$45',
    category: 'facial',
    description: [
      'The Korean Glass Skin Facial is rooted in the K-beauty philosophy that perfect skin starts with deep, layered hydration — not concealment. Fermented rice water, a centuries-old Korean beauty secret, is at the heart of this treatment. Rich in inositol, ferulic acid, and amino acids, it brightens, smooths, and rebuilds skin clarity from within.',
      'The result is the "glass skin" effect — skin that looks translucent, poreless, and luminous. Not glassy from products sitting on top, but genuinely clear and healthy from the inside out.',
      'This treatment works for all skin types and delivers visible results from the very first session. Clients with dull, uneven, or dry skin typically see the most dramatic transformation.',
    ],
    included: [
      'Double cleanse with gentle foam cleanser',
      'Rice water enzyme exfoliation',
      'Fermented rice water essence treatment',
      'Brightening serum infusion',
      'Hydrating sheet mask',
      'Rice water toner and moisturiser finish',
    ],
    experience: [
      { title: 'Arrival & Skin Analysis', description: 'We assess your skin type, concerns, and hydration levels before starting.' },
      { title: 'Double Cleanse', description: 'Oil cleanse followed by gentle foam to completely clear the skin.' },
      { title: 'Rice Water Exfoliation', description: 'Fermented rice water enzyme exfoliant gently removes dead skin cells.' },
      { title: 'Treatment Layers', description: 'Rice water essence, brightening serum, and targeted serums are layered in Korean skincare style.' },
      { title: 'Sheet Mask', description: 'A hydrating sheet mask saturates the skin with moisture.' },
      { title: 'Finish', description: 'Rice water toner and moisturiser seal in all the treatment layers.' },
    ],
    benefits: [
      { title: 'Glass Skin Effect', description: 'The luminous, translucent look associated with K-beauty perfection.' },
      { title: 'Deep Hydration', description: 'Layered hydration that reaches below the surface.' },
      { title: 'Brightening', description: 'Rice water fades hyperpigmentation and evens skin tone.' },
      { title: 'Smoothing', description: 'Enzyme exfoliation refines texture and minimises the look of pores.' },
      { title: 'Anti-Aging', description: 'Ferulic acid and amino acids support collagen and skin elasticity.' },
    ],
    forWho: [
      'Dull, dehydrated, or uneven skin',
      'Anyone wanting a luminous, glass-skin glow',
      'All skin types including sensitive',
    ],
    notForWho: [
      'Rice allergies (rare but please mention)',
      'Active cystic acne requiring medical treatment',
    ],
    faqs: [
      { question: 'What is the "glass skin" effect?', answer: 'Glass skin refers to skin that appears smooth, clear, and luminous — like glass. It is achieved through deep hydration and a healthy skin barrier, not makeup or filters.' },
      { question: 'How many sessions do I need to see results?', answer: 'Most clients see visible brightening and smoothing after the first session. For lasting skin transformation, a series of 4 to 6 sessions is recommended.' },
      { question: 'Is this facial suitable for sensitive skin?', answer: 'Yes — rice water is very gentle and soothing. This is one of the best facials for sensitive skin types.' },
    ],
    related: ['hydra-boost-facial', 'o3-radiance-facial', 'clean-up-jelly-mask'],
    metaDescription: 'Korean Glass Rice Water Facial in Toronto. Achieve luminous, glass skin with K-beauty techniques. $45 at Elegant Brows & Wax.',
    heroGradient: 'linear-gradient(135deg, oklch(0.90 0.04 355) 0%, oklch(0.95 0.025 85) 100%)',
  },

  'o3-radiance-facial': {
    slug: 'o3-radiance-facial',
    name: 'O3+ Radiance Facial',
    tagline: 'Oxygen-powered glow. Visibly brighter skin.',
    price: '$50',
    category: 'facial',
    description: [
      'The O3+ Radiance Facial uses ozone therapy — a clinical-grade approach that delivers active oxygen (O3+) deep into the skin. Active oxygen breaks down toxins, kills bacteria, stimulates cell turnover, and dramatically brightens the complexion.',
      'This treatment is a gold standard for clients dealing with dullness, uneven tone, or a tired-looking complexion. The ozone component also has antibacterial properties that make it effective for congested, breakout-prone skin.',
      'One session delivers a visible brightness boost. A full course of four sessions can visibly even skin tone and restore a healthy, natural radiance.',
    ],
    included: [
      'Deep cleanse',
      'O3+ ozone therapy treatment',
      'Brightening serum application',
      'Oxygen infusion',
      'Radiance-boosting mask',
      'Toner, serum, and SPF finish',
    ],
    experience: [
      { title: 'Cleanse & Prep', description: 'Skin is deeply cleansed and prepped for the ozone treatment.' },
      { title: 'Ozone Therapy', description: 'O3+ active oxygen is delivered to the skin surface, breaking down toxins and stimulating renewal.' },
      { title: 'Brightening Serums', description: 'Targeted brightening serums are applied while the skin is most receptive.' },
      { title: 'Oxygen Infusion', description: 'Pressurised oxygen infuses serums deeper into the skin.' },
      { title: 'Mask & Finish', description: 'A brightening mask sets the treatment; toner, serum, and SPF complete the session.' },
    ],
    benefits: [
      { title: 'Dramatic Brightness', description: 'Visible radiance boost from the first session.' },
      { title: 'Antibacterial', description: 'Ozone kills acne-causing bacteria without harsh chemicals.' },
      { title: 'Detoxifying', description: 'Active oxygen breaks down skin surface toxins and pollutants.' },
      { title: 'Even Skin Tone', description: 'Fades dark spots and hyperpigmentation with consistent use.' },
      { title: 'Stimulates Cell Renewal', description: 'Accelerates natural skin turnover for younger-looking skin.' },
    ],
    forWho: [
      'Dull, tired, or uneven complexion',
      'Breakout-prone or congested skin',
      'Anyone wanting a clinically visible glow',
    ],
    notForWho: [
      'Ozone-sensitive individuals',
      'Severe rosacea or broken capillaries',
    ],
    faqs: [
      { question: 'What is O3+ ozone therapy?', answer: 'O3+ is active oxygen — three oxygen atoms bonded together. Applied to skin, it breaks down toxins, kills bacteria, and stimulates cellular renewal at a level regular skincare cannot reach.' },
      { question: 'How quickly will I see results?', answer: 'Most clients notice brighter, more even skin immediately after. The full brightening effect develops over 48 to 72 hours.' },
    ],
    related: ['luster-gold-facial', 'korean-glass-facial', 'hydra-boost-facial'],
    metaDescription: 'O3+ Radiance Facial in Toronto. Ozone therapy for a visible brightness boost. $50 at Elegant Brows & Wax.',
    heroGradient: 'linear-gradient(135deg, oklch(0.88 0.05 355) 0%, oklch(0.94 0.03 80) 100%)',
  },

  'hydra-boost-facial': {
    slug: 'hydra-boost-facial',
    name: 'Hydra Boost Facial',
    tagline: 'Deep hydration. Plump. Radiant.',
    price: '$55',
    category: 'facial',
    description: [
      'The Hydra Boost Facial is a deep hydration treatment designed for skin that is chronically dry, dehydrated, or stripped by environment, diet, or over-cleansing. Where most facials work on the surface, the Hydra Boost delivers moisture at multiple layers of the skin.',
      'Using hyaluronic acid, ceramides, and botanical humectants, this treatment restores the skin barrier, plumps fine lines caused by dehydration, and leaves the face looking genuinely supple — not just surface-moisturised.',
      'If your skin feels tight, looks dull despite moisturising, or shows surface creasing, this is the treatment designed for you.',
    ],
    included: [
      'Hydrating double cleanse',
      'Gentle enzyme exfoliation',
      'Multi-layer hyaluronic acid serum treatment',
      'Ceramide barrier repair infusion',
      'Intensive hydration mask (20 min)',
      'Moisture-sealing finish moisturiser and SPF',
    ],
    experience: [
      { title: 'Skin Consultation', description: 'We assess dehydration levels and skin barrier condition.' },
      { title: 'Gentle Cleanse', description: 'Non-stripping hydrating cleansers to avoid disrupting existing moisture.' },
      { title: 'Exfoliate', description: 'Light enzyme exfoliation to allow maximum product penetration.' },
      { title: 'Hydration Layers', description: 'Multiple layers of hyaluronic acid and ceramide serums are applied and gently pressed in.' },
      { title: 'Intensive Mask', description: '20-minute deeply moisturising mask applied.' },
      { title: 'Seal & Protect', description: 'Barrier repair moisturiser and SPF lock in all the hydration.' },
    ],
    benefits: [
      { title: 'Deep Moisture', description: 'Hydration delivered at multiple skin layers, not just the surface.' },
      { title: 'Plumps Fine Lines', description: 'Dehydration lines visibly soften.' },
      { title: 'Barrier Repair', description: 'Ceramides rebuild the skin barrier that keeps moisture in.' },
      { title: 'Instant Glow', description: 'Skin looks plump, supple, and radiant immediately after.' },
    ],
    forWho: [
      'Dry, tight, dehydrated skin',
      'Skin that looks dull despite regular moisturising',
      'Anyone in dry or cold climates',
    ],
    notForWho: [
      'Skin that needs extractions as its primary concern (try the Clean Up instead)',
    ],
    faqs: [
      { question: 'What is the difference between dry and dehydrated skin?', answer: 'Dry skin is a skin type (lacks oil). Dehydrated skin is a condition (lacks water) — and it can affect any skin type including oily skin. This facial addresses the water component.' },
      { question: 'How long do results last?', answer: 'Immediately, skin feels plump and smooth. With regular sessions every 3 to 4 weeks, skin hydration levels improve cumulatively.' },
    ],
    related: ['korean-glass-facial', 'clean-up-jelly-mask', 'luster-gold-facial'],
    metaDescription: 'Hydra Boost Facial in Toronto. Deep hydration, plump skin, radiant glow. $55 at Elegant Brows & Wax.',
    heroGradient: 'linear-gradient(135deg, oklch(0.86 0.06 220) 0%, oklch(0.94 0.03 200) 100%)',
  },

  'red-wine-facial': {
    slug: 'red-wine-facial',
    name: 'Red Wine Rejuvenation Facial',
    tagline: 'Antioxidant-rich. Age-defying. Luxurious.',
    price: '$60',
    category: 'facial',
    description: [
      'The Red Wine Rejuvenation Facial harnesses the extraordinary antioxidant power of resveratrol — the compound that makes red wine a subject of longevity research — and delivers it directly to your skin. Free radical damage is the primary driver of skin aging, and resveratrol neutralises it at a cellular level.',
      'This treatment also includes polyphenols, grape seed extract, and tartaric acid — a gentle natural AHA that resurfaces the skin while the antioxidant complex repairs and protects. The result is firmer, brighter skin with a visible reduction in fine lines after just a few sessions.',
      'Rich, indulgent, and genuinely effective — the Red Wine Facial is a luxury experience backed by real skincare science.',
    ],
    included: [
      'Luxurious double cleanse with grape seed oil',
      'Tartaric acid gentle resurfacing treatment',
      'Resveratrol antioxidant concentrate',
      'Red wine polyphenol serum',
      'Firming massage (10 min)',
      'Red wine extract mask',
      'Antioxidant moisturiser and SPF finish',
    ],
    experience: [
      { title: 'Welcome & Consultation', description: 'Skin is assessed for signs of aging, free radical damage, and dehydration.' },
      { title: 'Double Cleanse', description: 'Grape seed oil cleanse followed by a gentle foam.' },
      { title: 'Resurfacing', description: 'Tartaric acid (from grapes) gently resurfaces without the sensitivity of synthetic AHAs.' },
      { title: 'Antioxidant Infusion', description: 'Resveratrol concentrate and red wine polyphenol serum are applied and massaged in.' },
      { title: 'Firming Massage', description: '10-minute sculpting facial massage to lift and firm.' },
      { title: 'Red Wine Mask', description: 'A rich antioxidant mask completes the treatment.' },
      { title: 'Protect & Finish', description: 'Antioxidant moisturiser and SPF to protect the treatment results.' },
    ],
    benefits: [
      { title: 'Anti-Aging', description: 'Resveratrol fights the free radicals responsible for fine lines and loss of firmness.' },
      { title: 'Resurfacing', description: 'Natural tartaric acid reveals fresher, smoother skin.' },
      { title: 'Firming', description: 'Facial massage and polyphenols visibly lift and firm.' },
      { title: 'Brightening', description: 'Grape seed extract and resveratrol even and brighten tone.' },
      { title: 'Luxurious Experience', description: 'Rich, sensory treatment — genuinely indulgent from start to finish.' },
    ],
    forWho: [
      'Skin showing early to moderate signs of aging',
      'Dull, sun-damaged skin',
      'Anyone wanting a luxurious, result-driven treatment',
    ],
    notForWho: [
      'Wine/grape allergies (rare but please disclose)',
    ],
    faqs: [
      { question: 'Does this facial use actual red wine?', answer: 'The treatment uses concentrated red wine extracts, resveratrol, and grape-derived compounds — not wine itself. All ingredients are formulated for cosmetic skin application.' },
      { question: 'How many sessions for visible anti-aging results?', answer: 'You will notice improved radiance and smoothness after the first session. For visible firmness and fine line reduction, a course of 4 to 6 sessions is recommended.' },
    ],
    related: ['luster-gold-facial', 'o3-radiance-facial', 'hydra-boost-facial'],
    metaDescription: 'Red Wine Rejuvenation Facial in Toronto. Resveratrol antioxidant treatment for anti-aging radiance. $60 at Elegant Brows & Wax.',
    heroGradient: 'linear-gradient(135deg, oklch(0.50 0.12 15) 0%, oklch(0.65 0.10 25) 100%)',
  },

  'luster-gold-facial': {
    slug: 'luster-gold-facial',
    name: 'Luster Gold Facial',
    tagline: '24-karat luxury. Golden glow.',
    price: '$65',
    category: 'facial',
    description: [
      'The Luster Gold Facial is our most luxurious skin treatment — a 24-karat gold-infused experience that delivers visible radiance, firmness, and a golden luminosity unlike any standard facial. Gold has been used in skincare since antiquity, and modern formulation has revealed why: gold nanoparticles activate skin cells, boost collagen synthesis, and deliver antioxidant protection at a microscopic level.',
      'This is the treatment you book when you want to look the best you have ever looked. Special events, important occasions, or simply because you deserve it. The gold facial is an experience from the first moment to the last — warm gold serums, a sculpting massage, and a luminous finish that photographs like nothing else.',
      'At $65, it is our most premium facial and our most unforgettable.',
    ],
    included: [
      'Gold enzyme cleansing treatment',
      'Gold-infused gentle exfoliation',
      '24-karat gold serum application',
      'Collagen-boosting gold massage (15 min)',
      'Gold leaf mask treatment',
      'Luminising gold moisturiser finish',
    ],
    experience: [
      { title: 'Arrival & Gold Ritual', description: 'The session begins with a warm gold enzyme cleanser — the scent and texture signal this is something different.' },
      { title: 'Gold Exfoliation', description: 'Gentle gold-infused exfoliants polish the skin surface.' },
      { title: 'Gold Serum', description: '24-karat gold serum is applied and gently pressed into the skin.' },
      { title: 'Sculpting Massage', description: '15-minute lifting facial massage with gold balm — the most requested part of this treatment.' },
      { title: 'Gold Mask', description: 'A gold leaf or gold-infused setting mask completes the active treatment phase.' },
      { title: 'Luminous Finish', description: 'Gold-infused moisturiser seals the treatment with a warm, radiant glow.' },
    ],
    benefits: [
      { title: '24K Radiance', description: 'Skin glows with a warm, golden luminosity immediately after.' },
      { title: 'Collagen Stimulation', description: 'Gold nanoparticles activate fibroblasts for firmer skin.' },
      { title: 'Anti-Aging', description: 'Gold antioxidants neutralise free radicals and slow skin aging.' },
      { title: 'Lifting Effect', description: 'The sculpting massage visibly lifts and firms the face.' },
      { title: 'Luxury Experience', description: 'Sensory, indulgent, and deeply relaxing from start to finish.' },
    ],
    forWho: [
      'Special occasions — weddings, events, milestones',
      'Anyone wanting our most visible, immediate skin transformation',
      'Clients wanting an indulgent, spa-level experience',
    ],
    notForWho: [
      'Gold allergies (extremely rare, but please disclose)',
    ],
    faqs: [
      { question: 'Will my skin literally look gold?', answer: 'Not gold — but luminous and warm. The gold particles impart a radiance that makes skin look glowing and healthy, not metallic.' },
      { question: 'How long before an event should I book this facial?', answer: 'Ideally 2 to 3 days before to allow any brief redness to fully subside and the full radiance effect to settle.' },
    ],
    related: ['red-wine-facial', 'o3-radiance-facial', 'hydra-boost-facial'],
    metaDescription: 'Luster Gold Facial in Toronto. 24-karat gold treatment for ultimate radiance and luminosity. $65 at Elegant Brows & Wax.',
    heroGradient: 'linear-gradient(135deg, oklch(0.55 0.13 70) 0%, oklch(0.72 0.14 78) 100%)',
  },

  'clean-up-jelly-mask': {
    slug: 'clean-up-jelly-mask',
    name: 'Clean Up + Jelly Mask',
    tagline: 'Fresh start. Clear skin. Natural glow.',
    price: '$35',
    category: 'facial',
    description: [
      'The Clean Up + Jelly Mask is our essential maintenance facial — the treatment you book every few weeks to keep your skin clear, balanced, and radiant. A thorough deep cleanse removes buildup, gentle extractions clear congestion, and the iconic jelly mask finishes with a burst of hydration and glow.',
      'The jelly mask is a sensory highlight: cool, bouncy, and deeply nourishing — it sets as a firm, wobbly mask and is peeled off to reveal skin that looks fresh and dewy.',
      'This is the starting-point facial for new clients and the reliable regular for clients maintaining healthy skin. At $35, it is accessible enough to make part of your monthly routine.',
    ],
    included: [
      'Deep cleanse (double cleanse)',
      'Steam to open pores',
      'Gentle manual extractions',
      'Balancing toner and brightening serum',
      'Signature jelly mask (20 min)',
      'Moisturiser and SPF finish',
    ],
    experience: [
      { title: 'Double Cleanse', description: 'Full deep cleanse to remove makeup, SPF, and surface debris.' },
      { title: 'Steam', description: 'Gentle steam opens pores and prepares skin for extractions.' },
      { title: 'Extractions', description: 'Gentle, precise manual extractions to clear blackheads and congestion.' },
      { title: 'Serum', description: 'A brightening and balancing serum is applied.' },
      { title: 'Jelly Mask', description: 'The cool, bouncy jelly mask is applied and left for 20 minutes.' },
      { title: 'Finish', description: 'Moisturiser and SPF complete the treatment.' },
    ],
    benefits: [
      { title: 'Deep Clean', description: 'Thorough cleanse and extractions for truly clean, uncongested skin.' },
      { title: 'Immediate Glow', description: 'Skin looks fresh, clear, and radiant immediately after.' },
      { title: 'Balanced Skin', description: 'Addresses both oiliness and dehydration for balanced skin.' },
      { title: 'Jelly Mask Experience', description: 'The signature jelly mask is deeply hydrating and a client favourite.' },
    ],
    forWho: [
      'Skin maintenance clients — everyone wanting regular upkeep',
      'First-time facial clients starting their skin journey',
      'Congested or breakout-prone skin',
    ],
    notForWho: [
      'Severe inflammatory cystic acne requiring medical treatment',
    ],
    faqs: [
      { question: 'What is a jelly mask?', answer: 'A jelly mask is a gel-based mask that sets firm when applied. It is deeply hydrating, soothing, and one of the most satisfying parts of a facial — it is removed as one piece to reveal fresh, dewy skin underneath.' },
      { question: 'How often should I get a clean-up facial?', answer: 'Every 4 to 6 weeks is ideal for maintenance. Some clients with congested skin prefer every 3 weeks initially.' },
    ],
    related: ['korean-glass-facial', 'hydra-boost-facial', 'o3-radiance-facial'],
    metaDescription: 'Clean Up + Jelly Mask facial in Toronto. Deep cleanse, extractions and iconic jelly mask for fresh, glowing skin. $35 at Elegant Brows & Wax.',
    heroGradient: 'linear-gradient(135deg, oklch(0.85 0.05 350) 0%, oklch(0.93 0.03 85) 100%)',
  },
}

export const servicesByCategory = {
  threading: Object.values(services).filter(s => s.category === 'threading'),
  waxing: Object.values(services).filter(s => s.category === 'waxing'),
  facial: Object.values(services).filter(s => s.category === 'facial'),
}

export const allServices = Object.values(services)

export const featuredServices = [
  services['eyebrow-threading'],
  services['luster-gold-facial'],
  services['full-body-wax'],
]
