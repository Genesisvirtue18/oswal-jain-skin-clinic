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

const treatmentData = {
  title: 'Hair Treatments',
  icon: Scissors,
  subtitle: 'Root-Cause Care for Stronger Hair',
  description:
    'Hair fall, thinning and scalp concerns deserve a diagnosis before a treatment plan.',
  image: '/images/treatments/hair-treatments.jpg',
  credentials: [
    { label: 'MBBS, MD — Gold Medalist', icon: Award },
    { label: '10+ Years in Dermatology', icon: Stethoscope },
    { label: 'Personalised Hair Plans', icon: ShieldCheck },
  ],
}

const hairTreatments = [
  {
    title: 'Hair Loss',
    icon: Target,
    href: '/treatments/hair-treatments/hairloss',
    image: '/images/treatments/hair-treatments/hairloss.jpg',
    summary: 'Diagnosis-led care for excessive shedding, thinning and pattern-related hair loss.',
    accent: 'from-[#FFF5F8] to-[#FCE8F2]',
  },
  {
    title: 'Hair Transplant',
    icon: Scissors,
    href: '/treatments/hair-treatments/hairtransplant',
    image: '/images/treatments/hair-treatments/hairtransplant.jpg',
    summary: 'A personalised restoration option for suitable candidates seeking natural-looking coverage.',
    accent: 'from-[#F0F7FF] to-[#E4F1FF]',
  },
  {
    title: 'Growth Factor Therapy for Hair',
    icon: Sparkles,
    href: '/treatments/hair-treatments/Growththerapy',
    image: '/images/treatments/hair-treatments/Growththerapy.jpg',
    summary: 'Regenerative treatment designed to support improved density and healthier hair growth.',
    accent: 'from-[#F3F8F3] to-[#E4F4E7]',
  },
  {
    title: 'Dandruff',
    icon: Droplets,
    href: '/treatments/hair-treatments/Dandruff',
    image: '/images/treatments/hair-treatments/Dandruff.jpg',
    summary: 'Medical scalp care for flakes, itching and irritation that can affect hair health.',
    accent: 'from-[#FFF9ED] to-[#FFF0D3]',
  },
  {
    title: 'Laser Hair Reduction',
    icon: Activity,
    href: '/treatments/hair-treatments/Laser-Hair-Reduction',
    image: '/images/treatments/hair-treatments/Laser-Hair-Reduction.jpg',
    summary: 'A dermatologist-supervised laser option for long-lasting reduction of unwanted body hair.',
    accent: 'from-[#F4F1FF] to-[#EAE4FF]',
  },
  {
    title: 'Scalp Microneedling',
    icon: Syringe,
    href: '/treatments/hair-treatments/Scalp-Microneeding',
    image: '/images/treatments/hair-treatments/Scalp-Microneedling.jpg',
    summary: 'A targeted scalp treatment that supports follicle health and natural hair growth.',
    accent: 'from-[#FFF4F6] to-[#FCE4EC]',
  },
]
const concerns = [
  'Excess Hair Fall',
  'Thinning Hair',
  'Receding Hairline',
  'Pattern Baldness',
  'Patchy Hair Loss',
  'Dandruff & Itching',
  'Weak Hair Roots',
  'Low Hair Density',
]

const whyChoose = [
  {
    title: 'Expert Diagnosis',
    desc: 'Dr. Varun Jain assesses the cause of hair loss before recommending treatment.',
    icon: Stethoscope,
  },
  {
    title: 'Advanced Options',
    desc: 'PRP, mesotherapy, growth-factor therapy and transplant planning in one clinic.',
    icon: Sparkles,
  },
  {
    title: 'Safe, Proven Care',
    desc: 'Every plan is medically supervised and tailored to your scalp and hair history.',
    icon: ShieldCheck,
  },
  {
    title: 'Long-Term Support',
    desc: 'Clear guidance helps you maintain the health and strength of your hair over time.',
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

export default function HairTreatmentsPage() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const Icon = treatmentData.icon

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
            <span className="text-[#1A1A2E]">Hair Treatments</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
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
                Advanced Dermatology
              </div>

              <div className="mt-4 flex items-center gap-3">
                <span className="text-sm font-medium uppercase tracking-wider text-[#D4146A]">
                  {treatmentData.subtitle}
                </span>
              </div>

              <h1 className="mt-4 text-4xl font-bold leading-[1.1] text-[#1A1A2E] md:text-5xl lg:text-6xl">
                {treatmentData.title}
              </h1>
              <div className="mt-4 h-1 w-20 rounded-full bg-[#D4146A]" />
              <p className="mt-6 text-lg leading-relaxed text-[#5A5A72]">
                {treatmentData.description}
              </p>

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
                    Book Appointment
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
                <img src={treatmentData.image} alt="Hair treatment consultation" className="h-[420px] w-full object-cover object-center md:h-[480px]" />
              </div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.5 }} className="absolute -bottom-4 -right-4 rounded-xl bg-white px-4 py-3 shadow-lg ring-1 ring-[#F0F2F5]">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#D4146A]" />
                  <span className="text-sm font-semibold text-[#1A1A2E]">Expert Hair Care</span>
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
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp} className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-[#D4146A]">Explore by Treatment</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1A1A2E] md:text-4xl">Care That Starts at <span className="text-[#D4146A]">the Root</span></h2>
            <p className="mt-4 text-[#5A5A72]">Your treatment is selected around the cause of hair loss, scalp health and your goals.</p>
          </motion.div>

          <motion.div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>
            {hairTreatments.map((treatment) => {
              return (
                <motion.div key={treatment.title} variants={staggerItem} whileHover={prefersReducedMotion ? {} : { y: -6 }} transition={{ duration: 0.3 }} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/[0.03] transition hover:shadow-lg">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
                    <img
                      src={treatment.image}
                      alt={treatment.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#1A1A2E]">{treatment.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#5A5A72]">{treatment.summary}</p>
                    <Link href={treatment.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#D4146A] transition group-hover:gap-3">
                      Explore Treatment <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>


      <section className="bg-white px-5 pb-16 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl bg-[#1A1A2E] p-8 text-center md:p-12">
          <Sparkles className="mx-auto h-6 w-6 fill-[#E8B95A] text-[#E8B95A]" />
          <p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-relaxed text-white md:text-xl">Healthy hair begins with understanding why it is changing. A clear diagnosis lets us choose care that is safe, realistic and built around you.</p>
          <p className="mt-5 text-sm font-semibold text-[#E8B95A]">Dr. Varun Jain, MBBS, MD (Skin &amp; VD) — Gold Medalist</p>
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
            <div><div className="flex items-center gap-3"><Clock className="h-6 w-6 text-white/80" /><span className="text-sm font-medium text-white/80">Same Day Appointment Available</span></div><h2 className="mt-3 text-2xl font-bold md:text-3xl">Ready to Start Your Hair Journey?</h2><p className="mt-2 max-w-lg text-sm text-white/85 md:text-base">Book a consultation and get a hair plan built around your scalp, goals and medical history.</p></div>
            <div className="flex flex-col gap-3 sm:flex-row"><motion.button onClick={callNow} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#D4146A]"><Phone className="h-4.5 w-4.5" />Call Now</motion.button><motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><Link href="/book-appointment" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#D4146A] transition hover:bg-[#FFF5F8]"><CalendarDays className="h-4.5 w-4.5" />Book Appointment</Link></motion.div></div>
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
