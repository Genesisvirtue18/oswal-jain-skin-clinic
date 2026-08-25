import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'

const faqsByCategory = {
  treatments: [
    ['How do I choose the right treatment?', 'A dermatologist first assesses your concern, skin or scalp type, medical history and goals before recommending a suitable treatment plan.'],
    ['Can I book a consultation before deciding?', 'Yes. A consultation is the right place to discuss options, expected results, sessions, recovery and aftercare before treatment.'],
    ['Are treatment plans personalised?', 'Yes. Care is planned around your diagnosis and response rather than using one fixed treatment for everyone.'],
  ],
  face: [
    ['Which face treatment is right for me?', 'The right option depends on whether your main concern is acne, scars, pigmentation, ageing, pores or dullness. A skin assessment helps select a suitable plan.'],
    ['How soon will I see results?', 'Some treatments give a short-term glow, while scar, pigment and anti-ageing concerns improve gradually over a planned course of care.'],
    ['Is there downtime?', 'Downtime varies by procedure. Your dermatologist will explain possible redness, peeling or sensitivity and the aftercare required before treatment.'],
  ],
  hair: [
    ['What causes hair fall?', 'Hair fall can be related to genetics, stress, nutrition, hormones, medicines or scalp conditions. Identifying the cause is important before choosing treatment.'],
    ['How long does hair treatment take to work?', 'Hair growth changes gradually. Your plan and review schedule depend on the diagnosis, selected treatment and how your scalp responds.'],
    ['Do I need a scalp consultation first?', 'Yes. A consultation helps assess shedding, density, scalp health and medical history so care can be planned safely.'],
  ],
  skin: [
    ['Do I need a diagnosis before treatment?', 'Yes. Many rashes and skin changes look similar, so an examination helps confirm the cause and avoid unsuitable self-treatment.'],
    ['Can skin conditions come back?', 'Some skin conditions can recur or flare. Follow-up, trigger management and the advised home routine can help support long-term control.'],
    ['When should I see a dermatologist?', 'Seek care for persistent, spreading, painful, changing or recurring skin concerns, especially if over-the-counter products have not helped.'],
  ],
  men: [
    ["Are these treatments designed for men's skin and hair?", 'Yes. Plans consider concerns such as beard irritation, male-pattern hair loss, acne, pigmentation and skin texture.'],
    ['Can I combine skin and hair treatments?', 'When suitable, concerns can be assessed together and a practical treatment schedule can be planned around your routine.'],
    ['Will there be downtime?', 'This depends on the procedure. Any expected redness, sensitivity or recovery guidance is explained before you decide.'],
  ],
}

export default function CategoryFaqSection({ category }) {
  const faqs = faqsByCategory[category] || []
  const labels = {
    treatments: ['Treatment FAQs', 'Know what to expect before treatment', 'Clear answers about treatment selection, sessions, recovery and aftercare.', 'Book a consultation'],
    face: ['Face Treatment FAQs', 'Know what to expect for your skin', 'Clear answers about facial treatments, results, recovery and aftercare.', 'Book a face consultation'],
    hair: ['Hair Treatment FAQs', 'Know what to expect for your hair', 'Clear answers about hair loss, scalp care, treatment plans and reviews.', 'Book a hair consultation'],
    skin: ['Skin Condition FAQs', 'Know what to expect for your skin concern', 'Clear answers about diagnosis, treatment planning and long-term skin care.', 'Book a skin consultation'],
    men: ["Men’s Treatment FAQs", 'Know what to expect before treatment', 'Clear answers about men’s skin, beard and hair treatment options.', 'Book a consultation'],
  }
  const [eyebrow, title, description, cta] = labels[category] || labels.treatments
  return <section className="bg-[#FAFBFD] py-14"><div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8"><div className="lg:pt-5"><p className="text-sm font-medium uppercase tracking-wider text-[#D4146A]">{eyebrow}</p><h2 className="mt-3 text-3xl font-bold leading-tight text-[#1A1A2E] md:text-4xl">{title}</h2><p className="mt-4 max-w-md leading-relaxed text-[#5A5A72]">{description}</p><Link href="/book-appointment" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#D4146A] transition hover:gap-3">{cta}<ArrowRight className="h-4 w-4" /></Link></div><div className="space-y-3">{faqs.map(([question, answer], index) => <details key={question} className="group overflow-hidden rounded-xl border border-[#E8EAF0] bg-white shadow-sm open:border-[#D4146A]/25 open:shadow-md"><summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-5 text-left marker:content-none md:px-6"><span className="text-xs font-bold text-[#D4146A]">{String(index + 1).padStart(2, '0')}</span><span className="flex-1 font-bold text-[#1A1A2E]">{question}</span><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFF1F6] text-[#D4146A]"><ChevronRight className="h-4 w-4 transition-transform duration-200 group-open:rotate-90" /></span></summary><p className="border-t border-[#F0F1F4] px-5 py-5 pl-[3.75rem] text-sm leading-7 text-[#5A5A72] md:px-6 md:pl-[4.25rem]">{answer}</p></details>)}</div></div></section>
}
