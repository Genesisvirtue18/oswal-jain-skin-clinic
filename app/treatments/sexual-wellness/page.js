import Link from 'next/link'
import { Playfair_Display } from 'next/font/google'
import { ArrowLeft, CalendarDays, CheckCircle2, Phone } from 'lucide-react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

const wellbeingGuidance = [
  'Open, respectful communication with your partner about desires and boundaries.',
  'Safe sexual practices and regular health check-ups as part of overall wellness.',
  'Healthy routines such as exercise, balanced nutrition and stress management.',
  'Professional guidance when a sexual-health concern is affecting your well-being.',
]

export default function SexualWellnessPage() {
  return (
    <main className={`${playfairDisplay.className} min-h-screen bg-white text-[#1A1A2E]`}>
      <Header />
      <section className="bg-gradient-to-br from-[#FFF5F8] via-white to-[#F0F7FF] py-12 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Link href="/treatments" className="inline-flex items-center gap-2 text-sm font-bold text-[#D4146A] hover:underline"><ArrowLeft className="h-4 w-4" /> Back to Treatments</Link>
          <div className="mt-9 grid gap-10 lg:grid-cols-[1fr_.95fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#D4146A]">Confidential & Respectful Care</p>
              <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">Sexual <span className="text-[#D4146A]">Wellness</span></h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#5A5A72]">Sexual wellness is an important part of overall health and well-being. We provide a private, respectful space for your questions and concerns.</p>
              <div className="mt-8 flex flex-wrap gap-3"><Link href="/book-appointment" className="inline-flex items-center gap-2 rounded-xl bg-[#D4146A] px-6 py-3.5 text-sm font-bold text-white"><CalendarDays className="h-4 w-4" />Book a Private Consultation</Link><a href="tel:+919417237526" className="inline-flex items-center gap-2 rounded-xl border border-[#1A1A2E]/15 bg-white px-6 py-3.5 text-sm font-bold"><Phone className="h-4 w-4" />Call Now</a></div>
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-[#F7F9FC] shadow-xl"><img src="/images/treatments/sexual-wellness.jpg" alt="Sexual wellness consultation" className="h-80 w-full object-cover md:h-[440px]" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1A1A2E]/75 to-transparent p-7"><p className="text-lg font-bold text-white">Your privacy and comfort come first.</p></div></div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20"><div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1.05fr_.95fr] lg:px-8"><div><p className="text-sm font-bold uppercase tracking-widest text-[#D4146A]">What is sexual wellness?</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">A part of your overall well-being.</h2><p className="mt-6 leading-8 text-[#5A5A72]">Sexual wellness includes the physical, emotional and psychological aspects of sexuality. It can support intimacy, personal confidence and a positive relationship with your body and desires. It is a personal journey, and every concern deserves to be discussed without judgement.</p></div><div className="rounded-2xl bg-[#FAFBFD] p-7 ring-1 ring-[#EEF0F4]"><h2 className="text-xl font-bold">Our consultation is designed to be</h2><div className="mt-6 grid gap-3 sm:grid-cols-2"><span className="rounded-xl bg-white px-4 py-3 text-sm font-semibold">Private & confidential</span><span className="rounded-xl bg-white px-4 py-3 text-sm font-semibold">Respectful & non-judgemental</span><span className="rounded-xl bg-white px-4 py-3 text-sm font-semibold">Personalised to you</span><span className="rounded-xl bg-white px-4 py-3 text-sm font-semibold">Focused on clear guidance</span></div></div></div></section>
      <section className="bg-[#FAFBFD] py-16 lg:py-20"><div className="mx-auto max-w-6xl px-5 lg:px-8"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-widest text-[#D4146A]">Improving sexual wellness</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">Small, informed steps can support well-being.</h2><p className="mt-4 leading-7 text-[#5A5A72]">A healthcare consultation can help you understand the right next step when you have a concern.</p></div><div className="mt-9 grid gap-4 md:grid-cols-2">{wellbeingGuidance.map((item, index) => <div key={item} className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#EEF0F4]"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFF0F6] text-xs font-bold text-[#D4146A]">0{index + 1}</span><p className="text-sm leading-6 text-[#5A5A72]">{item}</p></div>)}</div></div></section>
      <section className="bg-white px-5 py-16 lg:px-8"><div className="mx-auto grid max-w-6xl gap-6 rounded-3xl bg-[#D4146A] p-8 text-white md:grid-cols-[1fr_auto] md:items-center md:p-10"><div><p className="text-sm font-bold uppercase tracking-widest text-white/70">Take the next step</p><h2 className="mt-3 text-3xl font-bold">Speak with confidence and privacy.</h2><p className="mt-3 max-w-xl leading-relaxed text-white/85">Book a private consultation with Dr. Varun Jain for respectful, professional guidance.</p></div><Link href="/book-appointment" className="inline-flex w-fit items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#D4146A]"><CalendarDays className="h-4 w-4" />Book Appointment</Link></div></section>
      <Footer />
    </main>
  )
}
