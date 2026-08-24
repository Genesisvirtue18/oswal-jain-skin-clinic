import Link from 'next/link'
import { CalendarDays, CheckCircle2, ClipboardCheck, MessageCircleHeart } from 'lucide-react'

export default function TreatmentInformationSection({ treatmentName }) {
  const steps = [
    { icon: ClipboardCheck, title: 'Personal assessment', text: `We first understand your concern, medical history and goals to see whether ${treatmentName} is appropriate for you.` },
    { icon: CheckCircle2, title: 'A clear treatment plan', text: 'Your dermatologist explains the recommended approach, number of sessions, expected results and any recovery time.' },
    { icon: MessageCircleHeart, title: 'Guidance after your visit', text: 'You leave with practical aftercare advice and support from our clinic whenever you need it.' },
  ]

  return (
    <section className="bg-[#FFF9FC] py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-[#D4146A]">What to expect</p>
            <h2 className="mt-2 text-3xl font-bold leading-tight text-[#1A1A2E] md:text-4xl">Thoughtful care, from consultation to aftercare.</h2>
            <p className="mt-3 leading-7 text-[#5A5A72]">Clear advice and a plan tailored to you — never a one-size-fits-all treatment.</p>
          </div>
          <Link href="/book-appointment" className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-[#D4146A] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#B70E59] md:self-auto"><CalendarDays className="h-4 w-4" /> Book a consultation</Link>
        </div>
        <div className="mt-9 grid overflow-hidden rounded-2xl border border-[#F2D9E4] bg-white md:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }, index) => (
            <div key={title} className="p-6 md:p-7 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-[#F0E6EA] md:[&:not(:last-child)]:border-b-0 md:[&:not(:last-child)]:border-r">
              <span className="text-xs font-bold tracking-wider text-[#D4146A]">0{index + 1}</span>
              <Icon className="mt-4 h-6 w-6 text-[#D4146A]" strokeWidth={1.8} />
              <h3 className="mt-4 text-lg font-bold text-[#1A1A2E]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#5A5A72]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
