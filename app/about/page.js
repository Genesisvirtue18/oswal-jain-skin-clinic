'use client'

import Link from 'next/link'
import { Playfair_Display } from 'next/font/google'
import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  CalendarDays,
  ArrowRight,
  Phone,
  Sparkles,
  BookOpen,
  HeartHandshake,
  Award,
  GraduationCap,
  Building2,
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

const HERO_DOCTOR_IMAGE =
  '/images/doctor-varun-jain.png'

const doctorHighlights = [
  {
    title: 'MD - Skin & VD',
    desc: 'Specialized training in dermatology and venereology from a premier medical institution.',
    icon: GraduationCap,
  },
  {
    title: 'Gold Medalist',
    desc: 'Recognized for academic excellence and outstanding performance in dermatology.',
    icon: Award,
  },
  {
    title: 'Ex-PGIMS, Rohtak',
    desc: 'Formerly associated with PGIMS, Rohtak, gaining extensive clinical experience.',
    icon: Building2,
  },
  {
    title: '10+ Years Experience',
    desc: 'Over a decade of experience in dermatology, cosmetology and laser procedures.',
    icon: CalendarDays,
  },
  {
    title: 'Advanced Training',
    desc: 'Trained in advanced dermatological procedures and cosmetic treatments.',
    icon: BookOpen,
  },
  {
    title: 'Patient First Approach',
    desc: 'Committed to personalized care with patient comfort and long-term results.',
    icon: HeartHandshake,
  },
]

const stats = [
  { number: '10,000+', label: 'Happy Patients' },
  { number: '10+', label: 'Years Experience' },
  { number: '25,000+', label: 'Successful Treatments' },
  { number: '100%', label: 'Patient Satisfaction' },
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

function ImageCard({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-[#F8FBFF] to-[#FCE8F2] ${className}`}>
        <div className="px-4 text-center">
          <Sparkles className="mx-auto mb-2 h-8 w-8 text-[#D4146A]/60" />
          <p className="text-xs font-bold text-[#0A3F86]">{alt}</p>
        </div>
      </div>
    )
  }

  return (
    <img src={src} alt={alt} className={className} onError={() => setFailed(true)} draggable={false} />
  )
}

export default function AboutPage() {
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

      {/* About Hero */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-20">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#FFF5F8] opacity-60" />
        <div className="absolute -bottom-60 -left-60 h-[600px] w-[600px] rounded-full bg-[#F0F7FF] opacity-40" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="flex flex-col justify-center">
              <p className="text-sm font-medium uppercase tracking-wider text-[#D4146A]">
                About the Doctor
              </p>

              <h1 className="mt-3 text-4xl font-bold leading-[1.1] text-[#1A1A2E] md:text-5xl lg:text-6xl">
                Meet <span className="text-[#D4146A]">Dr. Varun Jain</span>
              </h1>

              <div className="mt-4 h-1 w-16 rounded-full bg-[#D4146A]" />

              <p className="mt-6 text-base leading-relaxed text-[#5A5A72] md:text-lg">
                Dr. Varun Jain is a dedicated Dermatologist and Hair Transplant Surgeon with 10+ years of experience in providing expert care in skin, hair and laser treatments.
              </p>

              <p className="mt-4 text-base leading-relaxed text-[#5A5A72] md:text-lg">
                His approach combines advanced technology with personalized care to deliver natural, long-lasting results. He is committed to patient education and ethical practice.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/book-appointment"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4146A] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#B70F58]"
                  >
                    <CalendarDays className="h-4.5 w-4.5" />
                    Book Appointment
                  </Link>
                </motion.div>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-xl font-bold text-[#D4146A] md:text-2xl">
                      {stat.number}
                    </div>
                    <div className="text-xs font-medium text-[#5A5A72]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div
                className="relative overflow-hidden rounded-2xl bg-[#F7F9FC] shadow-lg ring-1 ring-[#F0F2F5]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                whileHover={{ y: prefersReducedMotion ? 0 : -8 }}
              >
                <ImageCard
                  src={HERO_DOCTOR_IMAGE}
                  alt="Dr. Varun Jain"
                  className="h-[480px] w-full object-cover object-[center_20%] md:h-[520px]"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A1A2E]/80 via-[#1A1A2E]/20 to-transparent p-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-white/70">
                        Dermatologist
                      </p>
                      <h2 className="text-2xl font-bold text-white">Dr. Varun Jain</h2>
                      <p className="text-sm text-white/80">MBBS, MD Skin & VD, Gold Medalist</p>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#FBBF24] text-[#FBBF24]" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Highlights */}
      <section className="bg-[#FAFBFD] py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <p className="text-sm font-medium uppercase tracking-wider text-[#D4146A]">
                Why Choose Dr. Varun Jain
              </p>
              <h2 className="mt-2 text-3xl font-bold text-[#1A1A2E] md:text-4xl">
                Expertise You Can Trust
              </h2>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {doctorHighlights.map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  whileHover={prefersReducedMotion ? {} : { y: -6 }}
                  className="rounded-xl border border-[#F0F2F5] bg-white p-6 shadow-sm transition hover:shadow-md hover:border-[#D4146A]/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF5F8] text-[#D4146A]">
                      <Icon className="h-5.5 w-5.5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1A1A2E]">{item.title}</h3>
                      <p className="mt-1 text-sm text-[#5A5A72] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-xl bg-[#D4146A] p-8 text-white shadow-md md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">
                Ready to consult Dr. Varun Jain?
              </h2>
              <p className="mt-2 text-white/85 text-sm md:text-base">
                Book your appointment today and get expert care for your skin, hair and laser needs.
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
        <motion.button onClick={callNow} whileTap={{ scale: 0.95 }} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1A1A2E] px-4 py-2.5 text-sm font-medium text-white">
          <Phone className="h-4 w-4" />
          Call
        </motion.button>
        <motion.button onClick={whatsappNow} whileTap={{ scale: 0.95 }} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4146A] px-4 py-2.5 text-sm font-medium text-white">
          <FaWhatsapp className="h-4 w-4" />
          WhatsApp
        </motion.button>
      </motion.div>
    </main>
  )
}
