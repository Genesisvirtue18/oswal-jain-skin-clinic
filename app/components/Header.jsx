'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, CalendarDays, ChevronDown } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Doctor', href: '/about' },
  {
    label: 'Treatments',
    href: '/treatments',
    children: [
      { label: 'All Treatments', href: '/treatments' },
      { label: 'Face Treatments', href: '/treatments/face-treatments' },
      { label: 'Hair Treatments', href: '/treatments/hair-treatments' },
      { label: 'Skin Conditions', href: '/treatments/skin-conditions' },
      { label: 'Laser Treatments', href: '/treatments/laser-treatments' },
      { label: 'Treatments for Men', href: '/treatments/treatments-men' },
      { label: 'Sexual Wellness', href: '/treatments/sexual-wellness' },
      { label: 'Sugarcane Hydrafacial', href: '/treatments/sugarcane-hydrafacial' },
      { label: 'Melasma Treatment', href: '/treatments/melasma-treatment' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact', href: '/contact' },
]

const LOGO_IMAGE = '/images/logo_oswal_jain.jpeg'
const LOGO_FALLBACK = 'https://www.oswaljainskinclinic.com/image/image/logoff.jpeg'

function Logo() {
  return (
    <Link href="/" className="flex items-center shrink-0">
      <img
        src={LOGO_IMAGE}
        alt="Oswal Jain Skin & Hair Clinic"
        className="h-12 w-auto object-contain md:h-14"
        onError={(e) => {
          e.currentTarget.src = LOGO_FALLBACK
        }}
      />
    </Link>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname() // 🔥 Current page path

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 35)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Check if link is active
  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white border-b border-[#F0F2F5]'
        }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex h-18 items-center justify-between gap-5 md:h-20">
          <Logo />

          <nav className="hidden items-center gap-7 text-sm font-medium text-[#1A1A2E] lg:flex">
            {navItems.map((item) => {
              const active = isActive(item.href)

              if (item.children) {
  return (
    <div key={item.label} className="group relative">
      <Link
        href={item.href}
        className={`flex items-center gap-1 transition hover:text-[#D4146A] ${
          active ? 'text-[#D4146A]' : ''
        }`}
      >
        {item.label}
        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
      </Link>

      {active && (
        <motion.span
          className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-[#D4146A]"
          layoutId="activeNav"
        />
      )}

      <div
        className="
          invisible absolute left-0 top-full z-50 pt-2 w-72
          rounded-xl border border-[#F0F2F5]
          bg-white py-2 shadow-xl
          opacity-0 transition-all duration-200
          group-hover:visible group-hover:opacity-100
        "
      >
        {item.children.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            className={`block px-5 py-3 text-sm transition
              hover:bg-[#FFF5F8] hover:text-[#D4146A]
              ${
                pathname === child.href
                  ? 'bg-[#FFF5F8] text-[#D4146A]'
                  : 'text-[#1A1A2E]'
              }`}
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative transition hover:text-[#D4146A] ${active ? 'text-[#D4146A]' : ''
                    }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-[#D4146A]"
                      layoutId="activeNav"
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 rounded-lg bg-[#D4146A] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#B70F58]"
              >
                <CalendarDays className="h-4 w-4" />
                Book Appointment
              </Link>
            </motion.div>
          </div>

          <motion.button
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.92 }}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#F0F2F5] text-[#1A1A2E] lg:hidden"
            aria-label="Open menu"
          >
            {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </motion.button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-[#F0F2F5] pb-4 pt-3 lg:hidden overflow-hidden"
            >
              <div className="space-y-0.5">
                {navItems.map((item) => {
                  const active = isActive(item.href)
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-lg px-4 py-2.5 text-sm font-medium ${active ? 'bg-[#FFF5F8] text-[#D4146A]' : 'text-[#1A1A2E] hover:bg-[#FFF5F8]'
                        }`}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </div>

              <Link
                href="/book-appointment"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#D4146A] px-5 py-2.5 text-sm font-medium text-white"
              >
                <CalendarDays className="h-4 w-4" />
                Book Appointment
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
