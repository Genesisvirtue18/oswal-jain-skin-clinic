'use client'

import Link from 'next/link'
import { Playfair_Display } from 'next/font/google'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  CalendarDays,
  ArrowRight,
  Phone,
  Sparkles,
  Scissors,
  TrendingDown,
  Wand2,
  Shield,
  Sun,
  Target,
  Clock,
  Star,
  Award,
  Stethoscope,
  ShieldCheck,
  HeartHandshake,
  Syringe,
  Zap,
  Layers,
  Waves,
  CircleDot,
  ChevronRight,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

const PHONE_1 = '+91 94172 37526'
const WHATSAPP = '919417237526'

function ImageCard({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return <div className={`bg-gradient-to-br from-[#F8FBFF] to-[#FCE8F2] ${className}`} aria-label={alt} />
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      draggable={false}
      loading="lazy"
    />
  )
}

// Core page data — rewritten in our own words, informed by the clinic's real men's-treatment offering
const treatmentData = {
  title: 'Treatments for Men',
  icon: Sparkles,
  subtitle: 'Grooming, Skin & Hair Care Built Around a Man\u2019s Routine',
  description: 'Beard, hair, skin and anti-ageing care designed for men.',
  longDescription:
    "Men's skin and hair concerns don't always fit a package built for anyone — beard-line breakouts, a receding hairline or sun-darkened skin each need their own approach, so every visit starts with figuring out what's actually going on before deciding what to do about it.",
  image: '/images/treatments/treatments-men.jpg',
  credentials: [
    { label: 'MBBS, MD — Gold Medalist', icon: Award },
    { label: '10+ Years in Dermatology', icon: Stethoscope },
    { label: 'Diagnosis-Led Treatment Plans', icon: ShieldCheck },
  ],
}

// Sub-categories — paraphrased from the clinic's men's-focused offerings;
// each will get its own dedicated page later, so these link out rather than expand inline.
const menSubTreatments = [
  {
    id: 'beard-grooming',
    title: 'Beard Grooming & Growth',
    icon: Scissors,
    href: '/treatments/men/beard-grooming',
    image: '/images/treatments/men/beardgrowth.jpg',
    summary: 'Shaping, thickening and treating patchy or irritated beard growth.',
    details:
      'Patchy growth, ingrown hairs and beard-line breakouts are treated together, since the skin beneath the beard needs its own care routine — not just a trim and an oil.',
  },
  {
    id: 'hair-loss-men',
    title: 'Hair Loss & PRP for Men',
    icon: TrendingDown,
    href: '/treatments/men/hair-loss',
    image: '/images/treatments/men/hairlossandprp.jpg',
    summary: 'Pattern baldness and thinning addressed early, before options narrow.',
    details:
      'Male pattern hair loss responds best to early intervention, so topical treatment is combined with PRP therapy to support existing follicles rather than waiting until regrowth options are more limited.',
  },
  {
    id: 'dark-lips',
    title: 'Dark Lips Treatment',
    icon: Wand2,
    href: '/treatments/men/dark-lips',
    image: '/images/treatments/men/darkliptreatment.jpg',
    summary: 'Lightening lip pigmentation caused by smoking, genetics or excess melanin.',
    details:
      "Darkened lips are one of the most common concerns we see in male patients, often linked to smoking or hereditary pigmentation \u2014 treatable at any stage with a plan matched to the underlying cause rather than a one-size lip balm.",
  },
  {
    id: 'anti-ageing-men',
    title: 'Anti-Ageing for Men',
    icon: Shield,
    href: '/treatments/men/anti-ageing',
    image: '/images/treatments/men/anti-ageing-men.jpg',
    summary: 'Softening lines and sagging without changing how you look like yourself.',
    details:
      "Fillers, threads and wrinkle treatment are dosed conservatively for a man's facial structure, aiming for less tired rather than visibly \"done.\"",
  },
  {
    id: 'skin-brightening',
    title: 'Skin Brightening & Tan Removal',
    icon: Sun,
    href: '/treatments/men/skin-brightening',
    image: '/images/treatments/men/skin-bright-tan-men.jpg',
    summary: 'Reversing sun-darkened, uneven tone from daily outdoor exposure.',
    details:
      'Years of unprotected sun exposure show up as patchy tan and dullness, addressed through peels and brightening actives alongside practical sunscreen habits that actually fit a daily routine.',
  },
  {
    id: 'acne-men',
    title: 'Acne & Skin Clarity',
    icon: Target,
    href: '/treatments/men/acne',
    image: '/images/treatments/men/acne&skinclarity.jpg',
    summary: 'Clearing breakouts often worsened by shaving, sweat and product buildup.',
    details:
      'Shaving irritation, sweat and heavier grooming products can all aggravate acne, so treatment accounts for your actual routine rather than assuming a standard skincare regimen.',
  },
]

// Conditions this category actually addresses — helps a visitor self-identify quickly
const conditionsWeTreat = [
  'Patchy Beard Growth',
  'Pattern Hair Loss',
  'Dark or Pigmented Lips',
  'Sun Tan & Uneven Tone',
  'Acne & Razor Bumps',
  'Fine Lines & Sagging',
  'Ingrown Hairs',
]

// Techniques and technology used across the treatments above
const technologyStrip = [
  { label: 'PRP Therapy', icon: Syringe },
  { label: 'Laser Hair Reduction', icon: Zap },
  { label: 'Chemical Peels', icon: Layers },
  { label: 'Thread Lift', icon: Waves },
  { label: 'Q-Switch Laser', icon: CircleDot },
  { label: 'Medical-Grade Sunscreen Care', icon: ShieldCheck },
]

const whyChoose = [
  {
    title: 'Expert Doctor',
    desc: 'Dr. Varun Jain, MBBS, MD (Gold Medalist), brings 10+ years in dermatology and cosmetology to every consultation.',
    icon: Stethoscope,
  },
  {
    title: 'Built Around Your Routine',
    desc: 'Shaving habits, sun exposure and grooming products are all factored in, not assumed away.',
    icon: Sparkles,
  },
  {
    title: 'Safe, Proven Care',
    desc: 'Procedures chosen for scientific soundness and patient comfort, not novelty.',
    icon: ShieldCheck,
  },
  {
    title: 'Personalised Plans',
    desc: "Your treatment sequence is built around your skin and hair history, not a fixed package.",
    icon: HeartHandshake,
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
}

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

export default function MenTreatmentsPage() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  const Icon = treatmentData.icon

  const callNow = () => {
    window.location.href = `tel:${PHONE_1.replaceAll(' ', '')}`
  }

  const whatsappNow = () => {
    window.open(`https://wa.me/${WHATSAPP}`, '_blank')
  }

  return (
    <main className={`${playfairDisplay.className} min-h-screen bg-white text-[#1A1A2E]`}>
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-10 pb-0 lg:pt-14">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#FFF5F8] opacity-60" />
        <div className="absolute -bottom-60 -left-60 h-[600px] w-[600px] rounded-full bg-[#F0F7FF] opacity-40" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-1.5 text-xs font-medium text-[#5A5A72]">
            <Link href="/treatments" className="transition hover:text-[#D4146A]">Treatments</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#1A1A2E]">Treatments for Men</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="flex flex-col justify-center"
            >
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#FFF5F8] px-4 py-1.5 text-xs font-medium text-[#D4146A]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4146A] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D4146A]" />
                </span>
                Grooming &amp; Dermatology for Men
              </div>

              <div className="mt-4 flex items-center gap-3">
                <span className="text-sm font-medium text-[#D4146A] uppercase tracking-wider">
                  {treatmentData.subtitle}
                </span>
              </div>

              <h1 className="mt-4 text-4xl font-bold leading-[1.1] text-[#1A1A2E] md:text-5xl lg:text-6xl">
                {treatmentData.title}
              </h1>

              <div className="mt-4 h-1 w-20 rounded-full bg-[#D4146A]" />

              <p className="mt-6 text-lg leading-relaxed text-[#5A5A72]">
                {treatmentData.longDescription}
              </p>

              {/* Credentials */}
              <div className="mt-8 flex flex-wrap gap-2.5">
                {treatmentData.credentials.map((c, index) => {
                  const CIcon = c.icon
                  return (
                    <span
                      key={index}
                      className="inline-flex items-center gap-2 rounded-full border border-[#EFE3CB] bg-[#FFFBF2] px-3.5 py-1.5 text-xs font-medium text-[#1A1A2E]"
                    >
                      <CIcon className="h-3.5 w-3.5 shrink-0 text-[#B4841F]" />
                      {c.label}
                    </span>
                  )
                })}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/book-appointment"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D4146A] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#D4146A]/25 transition hover:bg-[#B70F58] hover:shadow-[#D4146A]/35"
                  >
                    <CalendarDays className="h-4.5 w-4.5" />
                    Book Appointment
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button
                    onClick={callNow}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#E0E0E8] bg-white px-8 py-3.5 text-sm font-semibold text-[#1A1A2E] transition hover:border-[#D4146A] hover:text-[#D4146A]"
                  >
                    <Phone className="h-4.5 w-4.5" />
                    Call Now
                  </button>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl bg-[#F7F9FC] shadow-xl ring-1 ring-[#F0F2F5]">
                <ImageCard
                  src={treatmentData.image}
                  alt={treatmentData.title}
                  className="h-[420px] w-full object-cover object-center md:h-[480px]"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 rounded-xl bg-white px-4 py-3 shadow-lg ring-1 ring-[#F0F2F5]"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#D4146A]" />
                  <span className="text-sm font-semibold text-[#1A1A2E]">Expert Care</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="mb-6"
          >
            <p className="text-sm font-medium uppercase tracking-wider text-[#D4146A]">
              Conditions We Treat
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#1A1A2E] md:text-3xl">
              Recognise Your Concern?
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-2.5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {conditionsWeTreat.map((condition, index) => (
              <motion.span
                key={index}
                variants={staggerItem}
                className="rounded-full border border-[#F0F2F5] bg-[#FAFBFD] px-4 py-2 text-sm font-medium text-[#1A1A2E] transition hover:border-[#D4146A]/30 hover:bg-[#FFF5F8] hover:text-[#D4146A]"
              >
                {condition}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Men's Treatment Sub-Categories */}
      <section className="bg-[#FAFBFD] py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <p className="text-sm font-medium uppercase tracking-wider text-[#D4146A]">
              Explore by Treatment
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#1A1A2E] md:text-4xl">
              Six Areas We Focus On <span className="text-[#D4146A]">for Men</span>
            </h2>
            <p className="mt-4 text-[#5A5A72]">
              Each treatment below has its own dedicated page with full detail — this is where to start.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {menSubTreatments.map((t) => {
              return (
                <motion.div
                  key={t.id}
                  variants={staggerItem}
                  whileHover={prefersReducedMotion ? {} : { y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/[0.03] transition hover:shadow-lg"
                >
                  <Link href={t.href} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl bg-[#F7F9FC]">
                      <ImageCard
                        src={t.image}
                        alt={t.title}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/65 via-transparent to-transparent" />
                    </div>

                    <div className="p-5">
                      <h3 className="font-bold text-[#1A1A2E]">{t.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#5A5A72]">
                        {t.summary}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#D4146A] transition group-hover:gap-3">
                        Explore Treatment
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>


      {/* Doctor Quote */}
      <section className="bg-white px-5 pb-16 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl bg-[#1A1A2E] p-8 text-center md:p-12"
        >
          <Star className="mx-auto h-6 w-6 fill-[#E8B95A] text-[#E8B95A]" />
          <p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-relaxed text-white md:text-xl">
            Men's skin and hair carry different daily habits behind them — shaving, sun exposure,
            less layering — so the plan has to account for that, not just the diagnosis.
          </p>
          <p className="mt-5 text-sm font-semibold text-[#E8B95A]">
            Dr. Varun Jain, MBBS, MD (Skin &amp; VD) — Gold Medalist
          </p>
        </motion.div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-[#FAFBFD] py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <p className="text-sm font-medium uppercase tracking-wider text-[#D4146A]">
              Why Choose Us
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#1A1A2E] md:text-4xl">
              Expert Care You Can <span className="text-[#D4146A]">Trust</span>
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-[#D4146A] mx-auto" />
          </motion.div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {whyChoose.map((item, index) => {
              const WCIcon = item.icon
              return (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  whileHover={prefersReducedMotion ? {} : { y: -6 }}
                  className="rounded-2xl border border-[#F0F2F5] bg-white p-6 text-center shadow-sm transition hover:shadow-md"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF5F8] text-[#D4146A]">
                    <WCIcon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 font-bold text-[#1A1A2E]">{item.title}</h3>
                  <p className="mt-1 text-sm text-[#5A5A72]">{item.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl bg-[#D4146A] p-8 text-white shadow-xl shadow-[#D4146A]/20 md:p-12">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-white/80" />
                <span className="text-sm font-medium text-white/80">Personalised Skin &amp; Hair Assessment Available</span>
              </div>
              <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                Ready to Upgrade Your Routine?
              </h2>
              <p className="mt-2 text-white/85 text-sm md:text-base max-w-lg">
                Book your consultation today and get expert care built around how men actually live and groom.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <motion.button
                onClick={callNow}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#D4146A]"
              >
                <Phone className="h-4.5 w-4.5" />
                Call Now
              </motion.button>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#D4146A] transition hover:bg-[#FFF5F8]"
                >
                  <CalendarDays className="h-4.5 w-4.5" />
                  Book Appointment
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Mobile Sticky CTA */}
      <motion.div
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-[#F0F2F5] bg-white/95 backdrop-blur-sm p-3 shadow-lg lg:hidden"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <motion.button
          onClick={callNow}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1A1A2E] px-4 py-2.5 text-sm font-medium text-white"
        >
          <Phone className="h-4 w-4" />
          Call
        </motion.button>
        <motion.button
          onClick={whatsappNow}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4146A] px-4 py-2.5 text-sm font-medium text-white"
        >
          <FaWhatsapp className="h-4 w-4" />
          WhatsApp
        </motion.button>
      </motion.div>
    </main>
  )
}
