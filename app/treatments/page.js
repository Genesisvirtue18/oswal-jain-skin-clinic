'use client'

import Link from 'next/link'
import { Playfair_Display } from 'next/font/google'
import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  CalendarDays,
  ArrowRight,
  Phone,
  Sparkles,
  Zap,
  UserRound,
  HeartHandshake,
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  CheckCircle2,
  GraduationCap,
  Award,
  Droplet,
  Sun,
  Star,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})
const PHONE_1 = '+91 94172 37526'
const WHATSAPP = '919417237526'

// Doctor credentials — used in the hero trust strip
const credentials = [
  { icon: GraduationCap, label: 'MBBS, MD (Skin & VD) — Gold Medalist' },
  { icon: Award, label: 'Ex-PCMS-I, Govt. Dermatologist' },
  { icon: Stethoscope, label: '10+ Years of Practice' },
]


const treatmentCategories = [
  {
    id: 'face-treatments',
    title: 'Face Treatments',
    desc: 'Acne, pigmentation, scars, dullness and skin rejuvenation care.',
    href: '/treatments/face-treatments',
    image: '/images/treatments/face-treatments.jpg',
    features: [
      'Acne & Scar Treatment',
      'Skin Lightening & Pigmentation',
      'Anti-Ageing Treatment',
      'Clinical Facials',
      'Chemical Peels',
      'Lips & Eyes',
    ],
  },

  {
    id: 'hair-treatments',
    title: 'Hair Treatments',
    desc: 'Hair fall, scalp disorders and advanced hair restoration.',
    href: '/treatments/hair-treatments',
    image: '/images/treatments/hair-treatments.jpg',
    features: [
      'Hair Loss',
      'Hair Transplant',
      'Growth Factor Therapy',
      'Dandruff',
      'Laser Hair Reduction',
      'Scalp Microneedling',
    ],
  },

  {
    id: 'skin-conditions',
    title: 'Skin Conditions',
    desc: 'Diagnosis-led care for chronic and infectious skin diseases.',
    href: '/treatments/skin-conditions',
    image: '/images/treatments/skin-conditions.jpg',
    features: [
      'Eczema',
      'Psoriasis',
      'Vitiligo',
      'Fungal Infections',
      'Wart & Mole Care',
      'Allergy Management',
    ],
  },

  {
    id: 'laser-treatments',
    title: 'Laser Treatments',
    desc: 'Advanced laser procedures for skin rejuvenation and hair reduction.',
    href: '/treatments/laser-treatments',
    image: '/images/treatments/laser-treatments.jpg',
    features: [
      'Laser Hair Removal',
      'Laser Resurfacing',
    ],
  },

  {
    id: 'treatments-men',
    title: 'Treatments for Men',
    desc: 'Specialized skin, beard and hair treatments for men.',
    href: '/treatments/treatments-men',
    image: '/images/treatments/treatments-men.jpg',
    features: [
      'Beard Grooming & Growth',
      'Hair Loss & PRP',
      'Dark Lips Treatment',
      'Anti-Ageing for Men',
      'Skin Brightening',
      'Acne & Skin Clarity',
    ],
  },

  {
    id: 'sexual-wellness',
    title: 'Sexual Wellness',
    desc: 'Confidential consultation and treatment for intimate wellness.',
    href: '/treatments/sexual-wellness',
    image: '/images/treatments/sexual-wellness.jpg',
    tag: 'Confidential',
    features: [
      'Confidential Consultation',
      'Sexual Health',
      'Erectile Dysfunction',
      'Premature Ejaculation',
      'PRP Therapy',
      'Laser Procedures',
    ],
  },
]

// Signature treatments — the clinic's flagship, harder-to-find-elsewhere procedures
const signatureTreatments = [
  {
    id: 'sugarcane-hydrafacial',
    title: 'Sugarcane Hydrafacial',
    desc: 'A gentle, glycolic-rich exfoliation drawn from sugarcane extract that lifts away dullness and deep-cleans pores, finishing with intense hydration for an instant, natural glow.',
    icon: Droplet,
    href: '/treatments/sugarcane-hydrafacial',
    image: '/images/treatments/sugarcane-hydrafacial.jpg',
  },
  {
    id: 'melasma-treatment',
    title: 'Melasma Treatment',
    desc: 'A layered protocol combining peels, targeted actives and laser support to treat stubborn pigmentation at its root, restoring an even skin tone over a structured course.',
    icon: Sun,
    href: '/treatments/melasma-treatment',
    image: '/images/treatments/melasma-treatment.jpg',
  },
]

function ImageCard({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-[#F8FBFF] to-[#FCE8F2] ${className}`}
      >
        <div className="px-4 text-center">
          <Sparkles className="mx-auto mb-2 h-8 w-8 text-[#D4146A]/60" />
          <p className="text-xs font-bold text-[#0A3F86]">{alt}</p>
          <p className="mt-1 text-[10px] text-[#5A5A72]">Add image here</p>
        </div>
      </div>
    )
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

// Faint clinical cross motif — a quiet nod to the medical setting, used sparingly
function CrossPattern({ className = '' }) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="cross-motif" width="56" height="56" patternUnits="userSpaceOnUse">
          <path
            d="M10 4v12M4 10h12"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#cross-motif)" />
    </svg>
  )
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

function ScrollReveal({ children, className = '', delay = 0, once = true }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.15 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function TreatmentsPage() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  const callNow = () => {
    window.location.href = `tel:${PHONE_1.replaceAll(' ', '')}`
  }

  const whatsappNow = () => {
    window.open(`https://wa.me/${WHATSAPP}`, '_blank')
  }

  return (
    <main className={`${playfair.className} min-h-screen bg-white text-[#1A1A2E]`}>
      <Header />

      {/* Treatments Hero */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-20">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#FFF5F8] opacity-60" />
        <div className="absolute -bottom-60 -left-60 h-[600px] w-[600px] rounded-full bg-[#F0F7FF] opacity-40" />
        <CrossPattern className="pointer-events-none absolute inset-0 text-[#1A1A2E]/[0.035]" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollReveal>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D4146A]/20 bg-[#FFF5F8] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#D4146A]">
                <Stethoscope className="h-3.5 w-3.5" />
                Dermatology, Trichology &amp; Cosmetology
              </span>
              <h1 className="mt-5 text-4xl font-bold leading-[1.1] text-[#1A1A2E] md:text-5xl lg:text-6xl">
                Our <span className="text-[#D4146A]">Treatments</span>
              </h1>
              <div className="mt-4 h-1 w-16 rounded-full bg-[#D4146A] mx-auto" />
              <p className="mt-6 text-base leading-relaxed text-[#5A5A72] md:text-lg max-w-2xl mx-auto">
                Comprehensive dermatology care for all your skin, hair and cosmetic concerns —
                led by Dr. Varun Jain and built around precise diagnosis, not guesswork.
              </p>
            </ScrollReveal>

            {/* Credential strip */}
            <ScrollReveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {credentials.map((c, i) => {
                  const CIcon = c.icon
                  return (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 rounded-full border border-[#EFE3CB] bg-[#FFFBF2] px-4 py-2 text-xs font-medium text-[#1A1A2E] shadow-sm"
                    >
                      <CIcon className="h-3.5 w-3.5 shrink-0 text-[#B4841F]" />
                      {c.label}
                    </span>
                  )
                })}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <motion.button
                  onClick={callNow}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4146A] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#D4146A]/25 transition hover:bg-[#B01058]"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </motion.button>
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#1A1A2E]/15 px-6 py-3 text-sm font-semibold text-[#1A1A2E] transition hover:border-[#D4146A]/40 hover:text-[#D4146A]"
                >
                  <CalendarDays className="h-4 w-4" />
                  Book a Consultation
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Treatment Categories Grid - With Images */}
      <section className="bg-[#FAFBFD] py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ScrollReveal className="mb-10 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-[#D4146A]">
              Browse by Concern
            </p>
            <h2 className="mt-3 text-2xl font-bold text-[#1A1A2E] md:text-3xl">
              Six Areas of Focused Care
            </h2>
          </ScrollReveal>

          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {treatmentCategories.map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.id}
                  variants={staggerItem}
                  whileHover={prefersReducedMotion ? {} : { y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/[0.03] transition hover:shadow-xl"
                >
                  <Link href={item.href} className="block">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden bg-[#F7F9FC]">
                      <motion.div
                        whileHover={prefersReducedMotion ? {} : { scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                        className="h-full w-full"
                      >
                        <ImageCard
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover object-center"
                        />
                      </motion.div>
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/70 via-[#1A1A2E]/10 to-transparent" />

                      {item.tag && (
                        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-[#D4146A] backdrop-blur-sm">
                          {item.tag}
                        </span>
                      )}

                      
                      <h3 className="absolute bottom-4 left-5 pr-4 text-lg font-bold text-white drop-shadow-sm">
                        {item.title}
                      </h3>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-sm text-[#5A5A72] leading-relaxed">
                        {item.desc}
                      </p>

                      {/* Features */}
                      <div className="mt-4 space-y-1.5 border-t border-[#F0F2F5] pt-4">
                        {item.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-[#5A5A72]">
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#D4146A]" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#D4146A] transition group-hover:gap-3">
                        Know More
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

      {/* Signature Treatments */}
      <section className="relative overflow-hidden bg-[#1A1A2E] py-16">
        <CrossPattern className="pointer-events-none absolute inset-0 text-white/[0.04]" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <ScrollReveal className="mb-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#E8B95A]">
              <Star className="h-3.5 w-3.5 fill-[#E8B95A]" />
              Signature Treatments
            </span>
            <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
              Procedures the Clinic Is Known For
            </h2>
          </ScrollReveal>

          <motion.div
            className="grid gap-6 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {signatureTreatments.map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.id}
                  variants={staggerItem}
                  className="group overflow-hidden rounded-2xl bg-white/[0.04] ring-1 ring-white/10 transition hover:bg-white/[0.07]"
                >
                  <Link href={item.href} className="flex h-full flex-col sm:flex-row">
                    <div className="relative h-48 w-full overflow-hidden sm:h-auto sm:w-2/5">
                      <ImageCard
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8B95A]/15 text-[#E8B95A]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">{item.desc}</p>
                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#E8B95A] transition group-hover:gap-3">
                        Know More
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

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-sm font-medium uppercase tracking-wider text-[#D4146A]">
                Why Choose Us
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#1A1A2E] md:text-4xl">
                Expert Care You Can <span className="text-[#D4146A]">Trust</span>
              </h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-[#D4146A] mx-auto" />
            </div>
          </ScrollReveal>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {[
              {
                icon: Stethoscope,
                title: 'Expert Doctors',
                desc: 'Led by Dr. Varun Jain, MBBS, MD (Gold Medalist), with 10+ years of experience.',
              },
              {
                icon: Sparkles,
                title: 'Advanced Technology',
                desc: 'State-of-the-art equipment for best results.',
              },
              {
                icon: ShieldCheck,
                title: 'Safe Treatments',
                desc: 'Scientifically sound and proven procedures.',
              },
              {
                icon: HeartHandshake,
                title: 'Personalized Care',
                desc: 'Tailored treatment plans for every patient.',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  whileHover={prefersReducedMotion ? {} : { y: -6 }}
                  className="rounded-2xl border border-[#F0F2F5] bg-white p-6 text-center shadow-sm transition hover:shadow-md"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF5F8] text-[#D4146A]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 font-bold text-[#1A1A2E]">{item.title}</h3>
                  <p className="mt-1 text-sm text-[#5A5A72]">{item.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-5 py-12 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-xl bg-[#D4146A] p-8 text-white shadow-lg shadow-[#D4146A]/20 md:p-10">
          <CrossPattern className="pointer-events-none absolute inset-0 text-white/10" />
          <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">
                Ready to start your treatment?
              </h2>
              <p className="mt-2 text-white/85 text-sm md:text-base">
                Book your consultation today and get expert care for your skin, hair and laser needs.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <motion.button
                onClick={callNow}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:text-[#D4146A]"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </motion.button>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-[#D4146A] transition hover:bg-[#FFF5F8]"
                >
                  <CalendarDays className="h-4 w-4" />
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
