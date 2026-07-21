'use client'

import Link from 'next/link'
import { Playfair_Display } from 'next/font/google'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CalendarDays,
  ArrowRight,
  Phone,
  Sparkles,
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
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

// Official Images - From Website
const CLINIC_IMAGE =
  '/images/clinic.jpg'

const HERO_DOCTOR_IMAGE =
  '/images/doctor-varun-jain.png'

const galleryImages = [
  {
    id: 1,
    title: 'Clinic Reception',
    image: CLINIC_IMAGE,
  },
  {
    id: 2,
    title: 'Consultation Room',
    image: CLINIC_IMAGE,
  },
  {
    id: 3,
    title: 'Treatment Area',
    image: CLINIC_IMAGE,
  },
  {
    id: 4,
    title: 'Dr. Varun Jain',
    image: HERO_DOCTOR_IMAGE,
  },
  {
    id: 5,
    title: 'Clinic Interior',
    image: CLINIC_IMAGE,
  },
  {
    id: 6,
    title: 'Procedure Room',
    image: CLINIC_IMAGE,
  },
  {
    id: 7,
    title: 'Dr. Varun Jain Consulting',
    image: HERO_DOCTOR_IMAGE,
  },
  {
    id: 8,
    title: 'Reception Area',
    image: CLINIC_IMAGE,
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

function ImageCard({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-[#F8FBFF] to-[#FCE8F2] ${className}`}
      >
        <div className="px-4 text-center">
          <ImageIcon className="mx-auto mb-2 h-8 w-8 text-[#D4146A]/60" />
          <p className="text-xs font-bold text-[#0A3F86]">{alt}</p>
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

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null)
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

  const openLightbox = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  const nextImage = useCallback(() => {
    if (!selectedImage) return
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % galleryImages.length
    setSelectedImage(galleryImages[nextIndex])
  }, [selectedImage])

  const prevImage = useCallback(() => {
    if (!selectedImage) return
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id)
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length
    setSelectedImage(galleryImages[prevIndex])
  }, [selectedImage])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, nextImage, prevImage])

  return (
    <main className={`${playfair.className} min-h-screen bg-white text-[#1A1A2E]`}>
      <Header />

      {/* Gallery Hero */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-20">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#FFF5F8] opacity-60" />
        <div className="absolute -bottom-60 -left-60 h-[600px] w-[600px] rounded-full bg-[#F0F7FF] opacity-40" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold leading-[1.1] text-[#1A1A2E] md:text-5xl lg:text-6xl">
              Our <span className="text-[#D4146A]">Gallery</span>
            </h1>
            <div className="mt-4 h-1 w-16 rounded-full bg-[#D4146A] mx-auto" />
            <p className="mt-6 text-base leading-relaxed text-[#5A5A72] md:text-lg max-w-2xl mx-auto">
              Take a virtual tour of our modern clinic and meet our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-[#FAFBFD] py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {galleryImages.map((item) => (
              <motion.div
                key={item.id}
                variants={staggerItem}
                whileHover={prefersReducedMotion ? {} : { y: -8 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"
                onClick={() => openLightbox(item)}
              >
                <div className="relative h-64 overflow-hidden bg-[#F7F9FC]">
                  <motion.div
                    whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="h-full w-full"
                  >
                    <ImageCard
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </motion.div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/80 via-[#1A1A2E]/20 to-transparent opacity-0 transition group-hover:opacity-100 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition hover:bg-white/30">
                      <ZoomIn className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-[#1A1A2E]">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-xl bg-[#D4146A] p-8 text-white shadow-lg shadow-[#D4146A]/20 md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">
                Ready to visit our clinic?
              </h2>
              <p className="mt-2 text-white/85 text-sm md:text-base">
                Book your consultation today and experience our world-class care in person.
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

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1A2E]/95 p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2.5 text-white transition hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 z-10 text-sm text-white/70">
              {galleryImages.findIndex(img => img.id === selectedImage.id) + 1} / {galleryImages.length}
            </div>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[85vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 rounded-b-xl bg-gradient-to-t from-[#1A1A2E]/90 to-transparent p-6">
                <h3 className="text-xl font-bold text-white">{selectedImage.title}</h3>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            {galleryImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

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
