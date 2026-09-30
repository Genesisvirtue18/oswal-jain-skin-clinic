'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPinned, Phone, MailCheck, Clock4 } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const PHONE_1 = '+91 94172 37526'
const PHONE_2 = '+91 94785 08950'
const WHATSAPP = '919417237526'
const EMAIL = 'oswaljainskinclinic@gmail.com'
const ADDRESS = '1st Floor, 227/D-15, above Khowal Jewellers / Hum Sabki Rasoi, Ayodhya Chowk, Sector 3D, Rohini, Delhi - 110085'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Doctor', href: '/about' },
  { label: 'Treatments', href: '/treatments' },
  { label: 'Blogs', href: '/blogs/' },
  { label: 'Contact', href: '/contact' },
]

const treatmentCategories = [
  { title: 'Face Treatments', href: '/treatments/face-treatments' },
  { title: 'Hair Treatments', href: '/treatments/hair-treatments' },
  { title: 'Skin Conditions', href: '/treatments/skin-conditions' },
  { title: 'Laser Treatments', href: '/treatments/laser-treatments' },
  { title: 'Treatments for Men', href: '/treatments/treatments-men' },
  { title: 'Sexual Wellness', href: '/treatments/sexual-wellness' },
]

const LOGO_IMAGE = '/images/logo_oswal_jain-header.webp'

function Logo() {
  return (
    <Link href="/" className="flex items-center shrink-0">
      <img
        src={LOGO_IMAGE}
        alt="Oswal Jain Skin & Hair Clinic"
        width={400}
        height={229}
        className="h-14 w-auto object-contain md:h-16"
      />
    </Link>
  )
}

export default function Footer() {
  const whatsappNow = () => {
    window.open(`https://wa.me/${WHATSAPP}`, '_blank')
  }

  return (
    <footer className="bg-[#1A1A2E] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="inline-block rounded-lg bg-white p-2">
              <Logo />
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/70 leading-relaxed">
              Oswal Jain Skin & Hair Clinic offers comprehensive solutions for
              skin, hair, nails, laser and cosmetic concerns in Rohini, Delhi.
            </p>
            <div className="mt-5 flex gap-2.5">
              <motion.a href="https://www.facebook.com/profile.php?id=100087962853803" target="_blank" rel="noreferrer" aria-label="Visit us on Facebook" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition hover:bg-white hover:text-[#1A1A2E]">
                <FaFacebookF className="h-3.5 w-3.5" />
              </motion.a>
              <motion.a href="https://www.instagram.com/oswaljain_dermaclinic?igsi=MXAwNnNrZHc4cGJvcQ==" target="_blank" rel="noreferrer" aria-label="Visit us on Instagram" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition hover:bg-white hover:text-[#D4146A]">
                <FaInstagram className="h-3.5 w-3.5" />
              </motion.a>
              <motion.button onClick={whatsappNow} aria-label="Chat with us on WhatsApp" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition hover:bg-white hover:text-green-600">
                <FaWhatsapp className="h-3.5 w-3.5" />
              </motion.button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="mb-4 font-bold text-sm">Quick Links</h2>
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href} className="block text-sm text-white/70 transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Our Services - All 6 Categories */}
          <div>
            <h2 className="mb-4 font-bold text-sm">Our Services</h2>
            <div className="space-y-2">
              {treatmentCategories.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block text-sm text-white/70 transition hover:text-white"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="mb-4 font-bold text-sm">Contact Info</h2>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex gap-3">
                <MapPinned className="h-4 w-4 shrink-0 text-[#FF5AA1] mt-0.5" />
                <span>{ADDRESS}</span>
              </div>
              <div className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#FF5AA1] mt-0.5" />
                <span>
                  <a href="tel:+919417237526" className="transition hover:text-white">{PHONE_1}</a>
                  {', '}
                  <a href="tel:+919478508950" className="transition hover:text-white">{PHONE_2}</a>
                </span>
              </div>
              <div className="flex gap-3">
                <MailCheck className="h-4 w-4 shrink-0 text-[#FF5AA1] mt-0.5" />
                <a href={`mailto:${EMAIL}`} className="transition hover:text-white">{EMAIL}</a>
              </div>
              <div className="flex gap-3">
                <Clock4 className="h-4 w-4 shrink-0 text-[#FF5AA1] mt-0.5" />
                <span>12:00 PM To 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-4 text-center text-sm text-white/60">
        © 2025 Oswal Jain Skin & Hair Clinic. All Rights Reserved.
      </div>
    </footer>
  )
}
