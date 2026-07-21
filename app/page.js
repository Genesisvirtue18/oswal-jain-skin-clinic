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
  Zap,
  UserRound,
  HeartHandshake,
  CheckCircle2,
  Award,
  GraduationCap,
  Star,
  UsersRound,
  Microscope,
  Shield,
  HeartPulse,
  Quote,
  ChevronRight,
  Building2,
  Stethoscope,
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

const CLINIC_IMAGE =
  '/images/clinic.jpg'

const treatmentCategories = [
  {
    title: 'Face Treatments',
    desc: 'Acne, pigmentation, scars, dullness and skin rejuvenation care.',
    href: '/treatments/face-treatments',
    image: '/images/treatments/face-treatments.jpg',
  },
  {
    title: 'Hair Treatments',
    desc: 'Hair fall, dandruff, PRP, scalp and hair growth-focused care.',
    href: '/treatments/hair-treatments',
    image: '/images/treatments/hair-treatments.jpg',
  },
  {
    title: 'Skin Conditions',
    desc: 'Diagnosis-led care for eczema, allergies, infections and more.',
    href: '/treatments/skin-conditions',
    image: '/images/treatments/skin-conditions.jpg',
  },
  {
    title: 'Laser Treatments',
    desc: 'Laser hair reduction, Q-switch, resurfacing and scar procedures.',
    href: '/treatments/laser-treatments',
    image: '/images/treatments/laser-treatments.jpg',
  },
  {
    title: 'Treatments for Men',
    desc: 'Skin, hair, beard, grooming and anti-ageing care for men.',
    icon: UserRound,
    href: '/treatments/men',
    image: '/images/treatments/treatments-men.jpg',
  },
  {
    title: 'Sexual Wellness',
    desc: 'Confidential consultation for intimate and wellness concerns.',
    href: '/treatments/sexual-wellness',
    image: '/images/treatments/sexual-wellness.jpg',
  },
]

const popularTreatments = [
  { title: 'Acne & Scar Treatment', href: '/treatments/acne-and-scars' },
  { title: 'Pigmentation Treatment', href: '/treatments/skin-lightening-and-pigmentation' },
  { title: 'Laser Hair Removal', href: '/treatments/laser-hair-removal' },
  { title: 'Chemical Peels', href: '/treatments/chemical-peels' },
  { title: 'Anti-ageing Treatment', href: '/treatments/anti-ageing' },
  { title: 'Hair Loss Treatment', href: '/treatments/hair-loss' },
  { title: 'Growth Factor Therapy', href: '/treatments/growth-factor-therapy-for-hair' },
  { title: 'Dandruff Treatment', href: '/treatments/dandruff' },
]

const stats = [
  { number: '10,000+', label: 'Happy Patients', icon: UsersRound },
  { number: '10+', label: 'Years Experience', icon: Award },
  { number: '25,000+', label: 'Successful Treatments', icon: CheckCircle2 },
  { number: '100%', label: 'Patient Satisfaction', icon: Star },
]

const doctorHighlights = [
  { title: 'MD - Skin & VD', desc: 'Specialized training in dermatology and venereology.', icon: GraduationCap },
  { title: '10+ Years Experience', desc: 'Experienced in dermatology, cosmetology and skin procedures.', icon: Award },
  { title: 'Gold Medalist', desc: 'Recognized for academic excellence in dermatology.', icon: Shield },
  { title: 'Ex-PGIMS-1', desc: 'Formerly associated with PGIMS, Rohtak.', icon: Building2 },
]

const clinicImages = [
  { title: 'Reception Area', image: CLINIC_IMAGE },
  { title: 'Waiting Area', image: CLINIC_IMAGE },
  { title: 'Procedure Room', image: CLINIC_IMAGE },
  { title: 'Consultation Room', image: CLINIC_IMAGE },
]

const testimonials = [
  { name: 'Jagrit Dayal Mathur', text: 'I had a wonderful experience at Oswal Jain Skin & Hair Clinic. The doctor provided excellent treatment for my acne, and I saw visible improvement much faster than expected. excellent.' },
  { name: 'Khushi Sethi', text: 'Amazing results I was having dark pigmentation and tried many things than I come to know about Dr varun I consulted her and within 1 month I can see the difference.' },
  { name: 'nupur sehra', text: 'Best experience here.. my mother is suffering fron severe allergy.. but all because of dr varun jain,she is much better from earlier.' },
]

// Animation variants
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

const heroTextStagger = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
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

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!isInView) return

    const targetNum = parseInt(target.replace(/[^0-9]/g, ''))
    const steps = 60
    const increment = targetNum / steps
    const stepDuration = duration / steps
    let current = 0
    let timer

    const updateCounter = () => {
      current += increment
      if (current >= targetNum) {
        setCount(targetNum)
        clearInterval(timer)
        return
      }
      setCount(Math.floor(current))
    }

    timer = setInterval(updateCounter, stepDuration)

    return () => clearInterval(timer)
  }, [isInView, target, duration])

  return (
    <span ref={ref}>
      {isInView ? count.toLocaleString() + suffix : '0' + suffix}
    </span>
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

export default function HomePage() {
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

      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#FFF5F8] opacity-60" />
        <div className="absolute -bottom-60 -left-60 h-[600px] w-[600px] rounded-full bg-[#F0F7FF] opacity-40" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="flex flex-col justify-center">
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={heroTextStagger}
                className="inline-flex items-center gap-2 rounded-full bg-[#FFF5F8] px-4 py-1.5 text-xs font-medium text-[#D4146A]"
              >
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-[#D4146A]"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Expert Dermatology Care
              </motion.div>

              <motion.h1
                className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-[#1A1A2E] md:text-5xl lg:text-6xl"
                initial="hidden"
                animate="visible"
              >
                <motion.span custom={1} variants={heroTextStagger} className="inline-block">
                  Advanced Skin,
                </motion.span>
                <br />
                <motion.span custom={2} variants={heroTextStagger} className="inline-block">
                  Hair &amp; <span className="text-[#D4146A]">Laser Care</span>
                </motion.span>
                <br />
                <motion.span custom={3} variants={heroTextStagger} className="inline-block">
                  in Rohini
                </motion.span>
              </motion.h1>

              <motion.p
                custom={5}
                initial="hidden"
                animate="visible"
                variants={heroTextStagger}
                className="mt-5 max-w-lg text-base leading-relaxed text-[#5A5A72] md:text-lg"
              >
                Expert dermatology care by Dr. Varun Jain for skin, hair, nail,
                laser and cosmetic concerns with personalized treatment planning.
              </motion.p>

              <motion.div
                custom={6}
                initial="hidden"
                animate="visible"
                variants={heroTextStagger}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/book-appointment"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4146A] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#B70F58]"
                  >
                    <CalendarDays className="h-4.5 w-4.5" />
                    Book Appointment
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/treatments"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#E0E0E8] bg-white px-6 py-3 text-sm font-medium text-[#1A1A2E] transition hover:border-[#D4146A] hover:text-[#D4146A]"
                  >
                    Explore Treatments
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                custom={7}
                initial="hidden"
                animate="visible"
                variants={heroTextStagger}
                className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
              >
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-xl font-bold text-[#D4146A] md:text-2xl">
                      <AnimatedCounter target={stat.number} />
                    </div>
                    <div className="text-xs font-medium text-[#5A5A72]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="relative">
              <motion.div
                className="relative overflow-hidden rounded-2xl bg-[#F7F9FC] shadow-lg ring-1 ring-[#F0F2F5]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                whileHover={{ y: prefersReducedMotion ? 0 : -8 }}
              >
                <motion.div
                  animate={prefersReducedMotion ? {} : { y: [0, -8, 0] }}
                  transition={prefersReducedMotion ? {} : { duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ImageCard
                    src={HERO_DOCTOR_IMAGE}
                    alt="Dr. Varun Jain"
                    className="h-[480px] w-full object-cover object-[center_20%] md:h-[520px]"
                  />
                </motion.div>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A1A2E]/80 via-[#1A1A2E]/20 to-transparent p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
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
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Categories */}
      <section className="scroll-mt-24 bg-[#FAFBFD] pb-16 pt-24 lg:pb-20 lg:pt-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <p className="text-sm font-medium uppercase tracking-wider text-[#D4146A]">Our Services</p>
              <h2 className="mt-2 text-3xl font-bold text-[#1A1A2E] md:text-4xl">Treatment Categories</h2>
              <p className="mt-3 max-w-2xl mx-auto text-[#5A5A72]">
                Comprehensive care for all your skin, hair and cosmetic concerns.
              </p>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {treatmentCategories.map((item) => {
              return (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  whileHover={prefersReducedMotion ? {} : { y: -8 }}
                >
                  <Link
                    href={item.href}
                    className="group block overflow-hidden rounded-xl border border-[#F0F2F5] bg-white shadow-sm transition hover:shadow-lg hover:border-[#D4146A]/20"
                  >
                    <div className="overflow-hidden rounded-t-xl bg-[#F7F9FC]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="block h-auto w-full transition duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="p-6">
                        <h3 className="text-base font-bold text-[#1A1A2E]">{item.title}</h3>
                        <p className="mt-1 text-sm text-[#5A5A72] leading-relaxed">{item.desc}</p>
                        <div className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#D4146A]">
                          Know More
                          <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                        </div>
                      </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* About Doctor */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <ScrollReveal>
              <div className="overflow-hidden rounded-xl bg-[#F7F9FC] ring-1 ring-[#F0F2F5]">
                <ImageCard
                  src={HERO_DOCTOR_IMAGE}
                  alt="Dr. Varun Jain"
                  className="h-[440px] w-full object-cover object-[center_18%]"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-[#D4146A]">About the Doctor</p>
                <h2 className="mt-2 text-3xl font-bold text-[#1A1A2E] md:text-4xl">Meet Dr. Varun Jain</h2>
                <div className="mt-4 h-1 w-12 rounded-full bg-[#D4146A]" />
                <p className="mt-4 text-[#5A5A72] leading-relaxed">
                  Dr. Varun Jain is a dedicated Dermatologist and Hair Transplant Surgeon with 10+ years of experience in providing expert care in skin, hair and laser treatments.
                </p>
                <p className="mt-3 text-[#5A5A72] leading-relaxed">
                  His approach combines advanced technology with personalized care to deliver natural, long-lasting results.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {doctorHighlights.map((item) => {
                    return (
                      <div key={item.title} className="border-l-2 border-[#F2B6D1] pl-3 transition hover:border-[#D4146A]">
                        <div>
                          <h3 className="font-bold text-[#1A1A2E] text-sm">{item.title}</h3>
                          <p className="text-xs text-[#5A5A72] leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-6 inline-block">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 rounded-lg border border-[#D4146A] px-5 py-2.5 text-sm font-medium text-[#D4146A] transition hover:bg-[#D4146A] hover:text-white"
                  >
                    Know More About Dr. Varun Jain
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Popular Treatments */}
      <section className="bg-[#FAFBFD] py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <p className="text-sm font-medium uppercase tracking-wider text-[#D4146A]">Popular Treatments</p>
              <h2 className="mt-2 text-3xl font-bold text-[#1A1A2E] md:text-4xl">
                Most Demanded Dermatological Procedures
              </h2>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {popularTreatments.map((item, index) => {
              return (
                <motion.div key={item.title} variants={staggerItem} whileHover={prefersReducedMotion ? {} : { y: -4 }}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-3 rounded-lg border border-[#F0F2F5] bg-white p-4 transition hover:border-[#D4146A]/30 hover:shadow-sm"
                  >
                    <span className="text-xs font-bold text-[#D4146A]">{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-sm font-medium text-[#1A1A2E]">{item.title}</span>
                    <ChevronRight className="ml-auto h-4 w-4 text-[#D4146A] opacity-0 transition group-hover:opacity-100" />
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Clinic Preview */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <p className="text-sm font-medium uppercase tracking-wider text-[#D4146A]">Clinic Preview</p>
              <h2 className="mt-2 text-3xl font-bold text-[#1A1A2E] md:text-4xl">Modern Clinic. Comfortable Care.</h2>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {clinicImages.map((item) => (
              <motion.div key={item.title} variants={staggerItem} whileHover={prefersReducedMotion ? {} : { y: -4 }}>
                <Link href="/gallery" className="group block overflow-hidden rounded-xl border border-[#F0F2F5] bg-white transition hover:shadow-md">
                  <div className="h-52 overflow-hidden bg-[#F7F9FC]">
                    <motion.div whileHover={prefersReducedMotion ? {} : { scale: 1.08 }} transition={{ duration: 0.4 }} className="h-full w-full">
                      <ImageCard src={item.image} alt={item.title} className="h-full w-full object-cover object-center" />
                    </motion.div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-[#1A1A2E] text-sm">{item.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#FAFBFD] py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#5A5A72]"><img src="https://www.google.com/images/branding/searchlogo/ico/favicon.ico" alt="Google" className="h-4 w-4" />Google Reviews</div>
              <h2 className="mt-3 text-3xl font-bold text-[#1A1A2E] md:text-4xl">What Our Patients Say</h2>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid gap-5 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {testimonials.map((item, index) => (
              <motion.div
                key={`${item.name}-${index}`}
                variants={staggerItem}
                whileHover={prefersReducedMotion ? {} : { y: -4 }}
                className="flex min-h-64 flex-col rounded-2xl border border-[#F0F2F5] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between"><div className="flex gap-0.5 text-[#FBBF24]">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div><span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5A5A72]"><img src="https://www.google.com/images/branding/searchlogo/ico/favicon.ico" alt="Google" className="h-3.5 w-3.5" />Google</span></div>
                <p className="mt-6 text-[15px] leading-7 text-[#4C4C61]">{item.text}</p>
                <div className="mt-auto flex items-center justify-between border-t border-[#F0F2F5] pt-5">
                  <span className="font-bold text-[#1A1A2E] text-sm">— {item.name}</span>
                  <div className="hidden gap-0.5 text-[#FBBF24]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-xl bg-[#D4146A] p-8 text-white shadow-md md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Ready to transform your skin & hair?</h2>
              <p className="mt-2 text-white/85 text-sm md:text-base">
                Book your consultation today and take the first step towards healthy, confident you.
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
