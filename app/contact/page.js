'use client'

import Link from 'next/link'
import { Playfair_Display } from 'next/font/google'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  CalendarDays,
  ArrowRight,
  Phone,
  MapPinned,
  MailCheck,
  Clock4,
  Sparkles,
  Send,
  CheckCircle2,
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
const PHONE_2 = '+91 94785 08950'
const WHATSAPP = '919417237526'
const EMAIL = 'oswaljainskinclinic@gmail.com'
const ADDRESS = '1st Floor, 227/D-15, above Khowal Jewellers / Hum Sabki Rasoi, Ayodhya Chowk, Sector 3D, Rohini, Delhi - 110085'
const MAP_DIRECTIONS_URL = 'https://www.google.com/maps/dir/?api=1&destination=28.7065813%2C77.1097731'
const MAP_EMBED_URL = 'https://www.google.com/maps?q=OSWAL+JAIN+SKIN+%26+HAIR+CLINIC+-+Dr+Varun+Jain%2C+28.7065813%2C77.1097731&z=16&output=embed'
const WORKING_HOURS = '12:00 PM To 8:00 PM'

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const callNow = () => {
    window.location.href = `tel:${PHONE_1.replaceAll(' ', '')}`
  }

  const whatsappNow = () => {
    window.open(`https://wa.me/${WHATSAPP}`, '_blank')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
      })
      
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: [PHONE_1, PHONE_2],
      action: callNow,
      actionLabel: 'Call Now',
    },
    {
      icon: MailCheck,
      title: 'Email Us',
      details: [EMAIL],
      action: () => window.location.href = `mailto:${EMAIL}`,
      actionLabel: 'Send Email',
    },
    {
      icon: MapPinned,
      title: 'Visit Us',
      details: [ADDRESS],
      action: () => window.open(MAP_DIRECTIONS_URL, '_blank'),
      actionLabel: 'Get Directions',
    },
    {
      icon: Clock4,
      title: 'Working Hours',
      details: ['Monday - Saturday: ' + WORKING_HOURS, 'Sunday: By Appointment'],
    },
  ]

  return (
    <main className={`${playfair.className} min-h-screen bg-white text-[#1A1A2E]`}>
      <Header />

      {/* Contact Hero */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-20">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#FFF5F8] opacity-60" />
        <div className="absolute -bottom-60 -left-60 h-[600px] w-[600px] rounded-full bg-[#F0F7FF] opacity-40" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold leading-[1.1] text-[#1A1A2E] md:text-5xl lg:text-6xl">
              Contact <span className="text-[#D4146A]">Us</span>
            </h1>
            <div className="mt-4 h-1 w-16 rounded-full bg-[#D4146A] mx-auto" />
            <p className="mt-6 text-base leading-relaxed text-[#5A5A72] md:text-lg max-w-2xl mx-auto">
              Have questions or need help booking an appointment? We are here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-[#FAFBFD] py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-9 text-center [&>p]:mx-auto">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#D4146A]">Reach us directly</p>
              <h2 className="mt-2 text-2xl font-bold text-[#1A1A2E] md:text-3xl">Choose the easiest way to connect</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#5A5A72]">Call, email, visit, or send a message—we will guide you to the right next step.</p>
          </div>
          <motion.div
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {contactInfo.map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="flex min-h-60 flex-col rounded-2xl border border-[#F0F2F5] bg-white p-6 shadow-sm transition hover:border-[#D4146A]/20 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF5F8] text-[#D4146A]">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[#1A1A2E]">{item.title}</h3>
                  <div className="mt-2 space-y-1.5">{item.details.map((detail, i) => <p key={i} className={`text-sm leading-relaxed text-[#5A5A72] ${item.title === 'Call Us' ? 'font-sans tabular-nums whitespace-nowrap' : ''}`}>{detail}</p>)}</div>
                  {item.action && (
                    <motion.button
                      onClick={item.action}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#D4146A] transition hover:text-[#B70F58]"
                    >
                      {item.actionLabel}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </motion.button>
                  )}
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            {/* Contact Form */}
            <ScrollReveal>
              <div className="rounded-2xl border border-[#F0F2F5] bg-[#FAFBFD] p-6 shadow-sm md:p-8">
                <p className="text-sm font-medium uppercase tracking-wider text-[#D4146A]">
                  Send a Message
                </p>
                <h2 className="mt-2 text-3xl font-bold text-[#1A1A2E] md:text-4xl">
                  Book Your <span className="text-[#D4146A]">Appointment</span>
                </h2>
                <p className="mt-3 text-[#5A5A72]">
                  Fill out the form below and we'll get back to you shortly.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-6 rounded-xl bg-green-50 p-6 border border-green-200"
                  >
                    <CheckCircle2 className="h-8 w-8 text-green-500 mx-auto" />
                    <h3 className="mt-2 text-center text-lg font-bold text-green-700">Thank You!</h3>
                    <p className="text-center text-green-600">
                      Your message has been sent. We'll contact you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#1A1A2E]">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-lg border border-[#F0F2F5] px-4 py-3 text-sm focus:border-[#D4146A] focus:outline-none focus:ring-1 focus:ring-[#D4146A]"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#1A1A2E]">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-lg border border-[#F0F2F5] px-4 py-3 text-sm focus:border-[#D4146A] focus:outline-none focus:ring-1 focus:ring-[#D4146A]"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#1A1A2E]">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-lg border border-[#F0F2F5] px-4 py-3 text-sm focus:border-[#D4146A] focus:outline-none focus:ring-1 focus:ring-[#D4146A]"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#1A1A2E]">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-lg border border-[#F0F2F5] px-4 py-3 text-sm focus:border-[#D4146A] focus:outline-none focus:ring-1 focus:ring-[#D4146A]"
                        placeholder="Tell us about your concern..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#D4146A] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#B70F58] disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Map */}
            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl border border-[#F0F2F5] bg-white p-6 shadow-sm md:p-8">
                <h2 className="mt-2 text-3xl font-bold text-[#1A1A2E] md:text-4xl">
                  Our <span className="text-[#D4146A]">Location</span>
                </h2>
                <p className="mt-3 text-[#5A5A72]">
                  Visit our clinic in Rohini, Delhi for expert dermatology care.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl border border-[#F0F2F5] shadow-sm">
                  <iframe
                    src={MAP_EMBED_URL}
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Oswal Jain Skin & Hair Clinic Location"
                    className="rounded-xl"
                  />
                </div>

                <div className="mt-4 flex items-start gap-3 rounded-xl bg-[#FFF5F8] p-4">
                  <MapPinned className="h-5 w-5 shrink-0 text-[#D4146A] mt-0.5" />
                  <div>
                    <p className="font-medium text-[#1A1A2E]">Address</p>
                    <p className="text-sm text-[#5A5A72]">{ADDRESS}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-xl bg-[#D4146A] p-8 text-white shadow-md md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">
                Ready to transform your skin & hair?
              </h2>
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
