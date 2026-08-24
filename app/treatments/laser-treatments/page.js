'use client'

import Link from 'next/link'
import { Playfair_Display } from 'next/font/google'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Activity,
  ArrowRight,
  Award,
  CalendarDays,
  ChevronRight,
  Clock,
  Droplets,
  HeartHandshake,
  Phone,
  Scissors,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  Target,
  Waves,
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

const treatmentData = {
  title: 'Laser Treatments',
  icon: Scissors,
  subtitle: 'Advanced Laser Care for Skin & Hair',
  description:
    'Find the right technology for unwanted hair, acne scars, pigmentation, texture, lifting and event-ready glow.',
  image: '/images/treatments/laser-treatments.jpg',
  credentials: [
    { label: 'MBBS, MD - Gold Medalist', icon: Award },
    { label: '10+ Years in Dermatology', icon: Stethoscope },
    { label: 'Personalised Laser Plans', icon: ShieldCheck },
  ],
}

const laserTreatments = [
  {
    title: 'Diode Laser Hair Removal',
    icon: Activity,
    href: '/treatments/laser-treatments/laser-hair-removal',
    image: '/images/treatments/laser-treatments/Laser-Hair-Removal.jpg',
    concern: 'Unwanted face or body hair',
    summary: 'High-speed targeted light disables active hair follicles for smoother skin with less shaving, waxing and ingrown-hair trouble.',
    skinTypes: 'Works well across most skin tones, especially coarse dark hair.',
  },
  {
    title: 'Laser Resurfacing',
    icon: Sparkles,
    href: '/treatments/laser-treatments/laser-resurfacing',
    image: '/images/treatments/laser-treatments/LaserResurfacing.jpg',
    concern: 'Wrinkles, scars and rough texture',
    summary: 'A resurfacing pathway selected after skin assessment to smooth damaged texture, soften lines and stimulate fresh collagen.',
    skinTypes: 'Settings depend on depth, skin tone and treatment goal.',
  },
  {
    title: 'Q-Switch Laser',
    icon: Sparkles,
    href: '/treatments/laser-treatments/q-switch-laser',
    image: '/images/treatments/laser-treatments/q-switch-laser-generated.png',
    concern: 'Pigmentation, sunspots and tattoo fading',
    summary: 'Ultra-short pulses break stubborn pigment into smaller particles, helping dark spots and selected tattoos fade over planned sessions.',
    skinTypes: 'Suitable for many skin tones with careful settings on deeper tones.',
  },
  {
    title: 'MNRF',
    icon: Syringe,
    href: '/treatments/laser-treatments/mnrf',
    image: '/images/treatments/laser-treatments/mnrf-generated.png',
    concern: 'Deep acne scars, pores and early laxity',
    summary: 'Medical microneedles deliver radiofrequency heat below the surface to remodel collagen from within.',
    skinTypes: 'A strong option for all skin tones, including deeper Indian skin.',
  },
  {
    title: 'CO2 Laser',
    icon: Target,
    href: '/treatments/laser-treatments/co2-laser',
    image: '/images/treatments/laser-treatments/co2-laser-generated.png',
    concern: 'Severe scars, deeper lines and select growths',
    summary: 'An ablative resurfacing option that removes damaged outer layers for more dramatic renewal when clinically appropriate.',
    skinTypes: 'Best selected carefully, often for lighter or lower-risk skin profiles.',
  },
  {
    title: 'Fractional Laser',
    icon: Sparkles,
    href: '/treatments/laser-treatments/fractional-laser',
    image: '/images/treatments/laser-treatments/fractional-laser-generated.png',
    concern: 'Fine lines, stretch marks and mild scars',
    summary: 'Pixelated laser energy treats tiny zones while leaving surrounding skin intact, so healing is faster than full-field resurfacing.',
    skinTypes: 'More versatile across varied skin tones than fully ablative resurfacing.',
  },
  {
    title: 'Dermapen',
    icon: Syringe,
    href: '/treatments/laser-treatments/dermapen',
    image: '/images/treatments/laser-treatments/dermapen-generated.png',
    concern: 'Superficial scars, dullness and fine lines',
    summary: 'Automated microneedling creates controlled micro-channels without heat, supporting a plumper, brighter skin response.',
    skinTypes: 'Generally suitable for all skin tones after assessment.',
  },
  {
    title: 'HIFU',
    icon: Waves,
    href: '/treatments/laser-treatments/hifu',
    image: '/images/treatments/laser-treatments/hifu-generated.png',
    concern: 'Sagging, jawline softness and double chin',
    summary: 'Focused ultrasound works below the skin surface to firm deeper support layers and sharpen facial contours without surgery.',
    skinTypes: 'Safe across skin tones because it works beneath the surface.',
  },
  {
    title: 'Carbon Laser Peel',
    icon: Droplets,
    href: '/treatments/laser-treatments/carbon-laser-peel',
    image: '/images/treatments/laser-treatments/carbon-laser-peel-generated.png',
    concern: 'Oiliness, pores and instant brightness',
    summary: 'A carbon layer is applied and gently lasered away to refresh the complexion, reduce oiliness and create a clean event-ready glow.',
    skinTypes: 'Popular across most skin tones when performed conservatively.',
  },
]

const concerns = [
  'Unwanted Hair',
  'Acne Scars & Pores',
  'Pigmentation & Tattoos',
  'Wrinkles & Texture',
  'Sagging & Jawline',
  'Stretch Marks',
  'Dullness & Oiliness',
]

const concernPathways = [
  {
    title: 'Smooth Body',
    desc: 'For long-term hair reduction, shaving bumps and waxing fatigue.',
    treatments: 'Diode Laser Hair Removal',
  },
  {
    title: 'Scars & Texture',
    desc: 'For pitted acne scars, enlarged pores, stretch marks and uneven skin.',
    treatments: 'MNRF, Dermapen, Fractional Laser',
  },
  {
    title: 'Pigmentation & Tattoos',
    desc: 'For freckles, sunspots, stubborn pigmentation and selected tattoo removal plans.',
    treatments: 'Q-Switch Laser, Carbon Laser Peel',
  },
  {
    title: 'Anti-Ageing & Lifting',
    desc: 'For fine lines, deeper wrinkles, sagging, jawline definition and skin tightening.',
    treatments: 'HIFU, Fractional Laser, CO2 Laser',
  },
]

const treatmentTimeline = [
  {
    title: 'Skin & Laser Compatibility Check',
    desc: 'We assess your concern, treatment history, skin tone and sensitivity before choosing a device.',
  },
  {
    title: 'Clear Session Plan',
    desc: 'You leave knowing the likely number of sessions, how the treatment may feel and how to prepare.',
  },
  {
    title: 'Before & After Guidance',
    desc: 'Pre-care, sunscreen, aftercare and follow-up reviews are explained so your result is protected.',
  },
]

const laserFaqs = [
  {
    question: 'How will the dermatologist choose the right laser for me?',
    answer:
      'Your dermatologist will assess your concern, skin tone, sensitivity, medical history and treatment goals. Based on this assessment, the most suitable technology and settings will be selected for you.',
  },
  {
    question: 'Can I use my normal skincare products after laser treatment?',
    answer:
      'Not always. Some active ingredients and irritating products may need to be avoided temporarily. Your dermatologist will tell you when you can restart them.',
  },
  {
    question: 'How many sessions will I need?',
    answer:
      'The number of sessions depends on the concern being treated, the treatment area and how your skin responds. Your dermatologist will recommend a session plan after examining your skin.',
  },
  {
    question: 'What precautions should I take before laser treatment?',
    answer:
      'Before treatment, avoid tanning, excessive sun exposure, waxing and irritating skincare products as advised. Tell your dermatologist about any medicines, active infections or recent procedures. Specific preparation instructions will be provided for your selected laser treatment.',
  },
  {
    question: 'Can I return to my normal routine after treatment?',
    answer:
      'This depends on the procedure. Some treatments cause only mild temporary redness, while deeper resurfacing may need more recovery time. Your dermatologist will explain what to expect before the treatment begins.',
  },
]

const whyChoose = [
  {
    title: 'Expert Diagnosis',
    desc: 'Dr. Varun Jain assesses your skin concern before recommending treatment.',
    icon: Stethoscope,
  },
  {
    title: 'Advanced Options',
    desc: 'Medical dermatology, infection management and precise skin procedures in one clinic.',
    icon: Sparkles,
  },
  {
    title: 'Safe, Proven Care',
    desc: 'Every plan is medically supervised and tailored to your skin and medical history.',
    icon: ShieldCheck,
  },
  {
    title: 'Long-Term Support',
    desc: 'Clear guidance helps you support your skin health beyond the consultation.',
    icon: HeartHandshake,
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function LaserTreatmentsPage() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    const handleChange = (event) => setPrefersReducedMotion(event.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const callNow = () => {
    window.location.href = `tel:${PHONE_1.replaceAll(' ', '')}`
  }

  const whatsappNow = () => {
    window.open(`https://wa.me/${WHATSAPP}`, '_blank')
  }

  return (
    <main className={`${playfairDisplay.className} min-h-screen bg-white text-[#1A1A2E]`}>
      <Header />

      <section className="relative overflow-hidden bg-white pb-0 pt-10 lg:pt-14">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#FFF5F8] opacity-60" />
        <div className="absolute -bottom-60 -left-60 h-[600px] w-[600px] rounded-full bg-[#F0F7FF] opacity-40" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <nav className="mb-6 flex items-center gap-1.5 text-xs font-medium text-[#5A5A72]">
            <Link href="/treatments" className="transition hover:text-[#D4146A]">Treatments</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#1A1A2E]">Laser Treatments</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="flex flex-col justify-center">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#FFF5F8] px-4 py-1.5 text-xs font-medium text-[#D4146A]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4146A] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D4146A]" />
                </span>
                Advanced Dermatology
              </div>

              <span className="mt-4 text-sm font-medium uppercase tracking-wider text-[#D4146A]">{treatmentData.subtitle}</span>
              <h1 className="mt-4 text-4xl font-bold leading-[1.1] text-[#1A1A2E] md:text-5xl lg:text-6xl">{treatmentData.title}</h1>
              <div className="mt-4 h-1 w-20 rounded-full bg-[#D4146A]" />
              <p className="mt-6 text-lg leading-relaxed text-[#5A5A72]">{treatmentData.description}</p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {treatmentData.credentials.map((credential) => {
                  const CredentialIcon = credential.icon
                  return (
                    <span key={credential.label} className="inline-flex items-center gap-2 rounded-full border border-[#EFE3CB] bg-[#FFFBF2] px-3.5 py-1.5 text-xs font-medium text-[#1A1A2E]">
                      <CredentialIcon className="h-3.5 w-3.5 shrink-0 text-[#B4841F]" />
                      {credential.label}
                    </span>
                  )
                })}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/book-appointment" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D4146A] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#D4146A]/25 transition hover:bg-[#B70F58]">
                    <CalendarDays className="h-4.5 w-4.5" />
                    Check My Laser Compatibility
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button onClick={callNow} className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#E0E0E8] bg-white px-8 py-3.5 text-sm font-semibold text-[#1A1A2E] transition hover:border-[#D4146A] hover:text-[#D4146A]">
                    <Phone className="h-4.5 w-4.5" />
                    Call Now
                  </button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }} className="relative">
              <div className="overflow-hidden rounded-2xl bg-[#F7F9FC] shadow-xl ring-1 ring-[#F0F2F5]">
                <ImageCard src={treatmentData.image} alt="Laser treatment consultation" className="h-[420px] w-full object-cover object-center md:h-[480px]" />
              </div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.5 }} className="absolute -bottom-4 -right-4 rounded-xl bg-white px-4 py-3 shadow-lg ring-1 ring-[#F0F2F5]">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#D4146A]" />
                  <span className="text-sm font-semibold text-[#1A1A2E]">Concern-Led Laser Care</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="mb-6">
            <p className="text-sm font-medium uppercase tracking-wider text-[#D4146A]">Concerns We Treat</p>
            <h2 className="mt-2 text-2xl font-bold text-[#1A1A2E] md:text-3xl">Recognise Your Concern?</h2>
          </motion.div>
          <motion.div className="flex flex-wrap gap-2.5" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
            {concerns.map((concern) => <motion.span key={concern} variants={staggerItem} className="rounded-full border border-[#F0F2F5] bg-[#FAFBFD] px-4 py-2 text-sm font-medium text-[#1A1A2E] transition hover:border-[#D4146A]/30 hover:bg-[#FFF5F8] hover:text-[#D4146A]">{concern}</motion.span>)}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#FAFBFD] py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp} className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-[#D4146A]">Shop by Concern</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1A1A2E] md:text-4xl">Start With What You Want to Improve</h2>
            <p className="mt-4 text-[#5A5A72]">You do not need to know the machine name. Choose the concern, then we match the safest technology for your skin.</p>
          </motion.div>

          <motion.div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>
            {concernPathways.map((pathway) => {
              return (
                <motion.div key={pathway.title} variants={staggerItem} whileHover={prefersReducedMotion ? {} : { y: -6 }} className="flex h-full min-h-[190px] flex-col rounded-2xl border border-[#F0F2F5] bg-white p-6 shadow-sm transition hover:shadow-md">
                  <h3 className="text-lg font-bold text-[#1A1A2E]">{pathway.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5A5A72]">{pathway.desc}</p>
                  <p className="mt-auto pt-4 text-sm font-semibold text-[#D4146A]">{pathway.treatments}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp} className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-[#D4146A]">What to Expect</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1A1A2E] md:text-4xl">Transparent Before You Begin</h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {treatmentTimeline.map((item, index) => (
              <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="rounded-2xl bg-[#FAFBFD] p-6 ring-1 ring-[#EEF0F4]">
                <span className="text-sm font-bold text-[#D4146A]">0{index + 1}</span>
                <h3 className="mt-4 text-lg font-bold text-[#1A1A2E]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5A5A72]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAFBFD] py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp} className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-[#D4146A]">Explore by Treatment</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1A1A2E] md:text-4xl">Care That Starts at <span className="text-[#D4146A]">the Root</span></h2>
            <p className="mt-4 text-[#5A5A72]">Each profile explains the benefit, best-fit concern and skin-tone note.</p>
          </motion.div>

          <motion.div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>
            {laserTreatments.map((treatment) => (
              <motion.div key={treatment.title} variants={staggerItem} whileHover={prefersReducedMotion ? {} : { y: -6 }} transition={{ duration: 0.3 }} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/[0.03] transition hover:shadow-lg">
                <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
                  <ImageCard src={treatment.image} alt={treatment.title} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#D4146A]">{treatment.concern}</p>
                  <h3 className="mt-2 font-bold text-[#1A1A2E]">{treatment.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#5A5A72]">{treatment.summary}</p>
                  <div className="mt-4 grid gap-2 text-xs font-medium text-[#5A5A72]">
                    <span className="rounded-lg bg-[#FAFBFD] px-3 py-2">Skin types: {treatment.skinTypes}</span>
                  </div>
                  <Link href={treatment.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#D4146A] transition group-hover:gap-3">
                    Explore Treatment <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#FAFBFD] py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp} className="lg:pt-5">
            <p className="text-sm font-medium uppercase tracking-wider text-[#D4146A]">Laser Treatment FAQs</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#1A1A2E] md:text-4xl">Know What to Expect Before Treatment</h2>
            <p className="mt-4 max-w-md leading-relaxed text-[#5A5A72]">Find clear answers about treatment selection, skincare, sessions, skin-tone suitability and recovery.</p>
            <Link href="/book-appointment" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#D4146A] transition hover:gap-3">
              Book a Laser Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div className="space-y-3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>
            {laserFaqs.map((faq, index) => (
              <motion.details key={faq.question} variants={staggerItem} className="group overflow-hidden rounded-xl border border-[#E8EAF0] bg-white shadow-sm open:border-[#D4146A]/25 open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-5 text-left marker:content-none md:px-6">
                  <span className="text-xs font-bold text-[#D4146A]">0{index + 1}</span>
                  <span className="flex-1 font-bold text-[#1A1A2E]">{faq.question}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFF1F6] text-[#D4146A]">
                    <ChevronRight className="h-4 w-4 transition-transform duration-200 group-open:rotate-90" aria-hidden="true" />
                  </span>
                </summary>
                <p className="border-t border-[#F0F1F4] px-5 py-5 pl-[3.75rem] text-sm leading-7 text-[#5A5A72] md:px-6 md:pl-[4.25rem]">{faq.answer}</p>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-5 pb-16 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl bg-[#1A1A2E] p-8 text-center md:p-12">
          <Sparkles className="mx-auto h-6 w-6 fill-[#E8B95A] text-[#E8B95A]" />
          <p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-relaxed text-white md:text-xl">Safe, effective laser care starts with the right assessment. We select the appropriate technology and settings for your concern, skin tone and treatment goals.</p>
          <p className="mt-5 text-sm font-semibold text-[#E8B95A]">Dr. Varun Jain, MBBS, MD (Skin &amp; VD) - Gold Medalist</p>
        </motion.div>
      </section>

      <section className="bg-[#FAFBFD] py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp} className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-[#D4146A]">Why Choose Us</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1A1A2E] md:text-4xl">Expert Care You Can <span className="text-[#D4146A]">Trust</span></h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#D4146A]" />
          </motion.div>
          <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>
            {whyChoose.map((item) => {
              const ItemIcon = item.icon
              return <motion.div key={item.title} variants={staggerItem} whileHover={prefersReducedMotion ? {} : { y: -6 }} className="rounded-2xl border border-[#F0F2F5] bg-white p-6 text-center shadow-sm transition hover:shadow-md"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF5F8] text-[#D4146A]"><ItemIcon className="h-7 w-7" /></div><h3 className="mt-4 font-bold text-[#1A1A2E]">{item.title}</h3><p className="mt-1 text-sm text-[#5A5A72]">{item.desc}</p></motion.div>
            })}
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl bg-[#D4146A] p-8 text-white shadow-xl shadow-[#D4146A]/20 md:p-12">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div><div className="flex items-center gap-3"><Clock className="h-6 w-6 text-white/80" /><span className="text-sm font-medium text-white/80">Same Day Appointment Available</span></div><h2 className="mt-3 text-2xl font-bold md:text-3xl">Ready to Choose the Right Laser?</h2><p className="mt-2 max-w-lg text-sm text-white/85 md:text-base">Book a consultation and get a laser plan built around your concern, skin tone and treatment history.</p></div>
            <div className="flex flex-col gap-3 sm:flex-row"><motion.button onClick={callNow} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#D4146A]"><Phone className="h-4.5 w-4.5" />Call Now</motion.button><motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><Link href="/book-appointment" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#D4146A] transition hover:bg-[#FFF5F8]"><CalendarDays className="h-4.5 w-4.5" />Book My Skin Consultation</Link></motion.div></div>
          </div>
        </div>
      </section>

      <Footer />

      <motion.div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-[#F0F2F5] bg-white/95 p-3 shadow-lg backdrop-blur-sm lg:hidden" initial={{ y: 100 }} animate={{ y: 0 }} transition={{ delay: 0.5, duration: 0.4 }}>
        <motion.button onClick={callNow} whileTap={{ scale: 0.95 }} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1A1A2E] px-4 py-2.5 text-sm font-medium text-white"><Phone className="h-4 w-4" />Call</motion.button>
        <motion.button onClick={whatsappNow} whileTap={{ scale: 0.95 }} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4146A] px-4 py-2.5 text-sm font-medium text-white"><FaWhatsapp className="h-4 w-4" />WhatsApp</motion.button>
      </motion.div>
    </main>
  )
}
