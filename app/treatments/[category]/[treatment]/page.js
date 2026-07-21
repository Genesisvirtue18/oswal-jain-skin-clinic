import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Playfair_Display } from 'next/font/google'
import { ArrowLeft, CalendarDays, CheckCircle2, ClipboardCheck, HeartHandshake, Phone, Search, ShieldCheck, Sparkles, Stethoscope } from 'lucide-react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

const treatments = {
  'face-treatments': {
    label: 'Face Treatments',
    items: {
      acne: ['Acne & Scar Treatment', 'Clear active breakouts and improve the marks they leave behind with a plan tailored to your skin.', '/images/treatments/face/acne&scar.jpg'],
      'skin-lightening-and-pigmentation': ['Skin Lightening & Pigmentation', 'Target dark spots, melasma and uneven tone after identifying the triggers behind them.', '/images/treatments/face/skinlightening.jpg'],
      'anti-ageing': ['Anti-Ageing Treatment', 'Soften fine lines and restore facial balance with a conservative, personalised approach.', '/images/treatments/face/anti-ageing.jpg'],
      'clinical-facials': ['Clinical Facials', 'Medical-grade facial care chosen for your specific skin concern and skin type.', '/images/treatments/face/clinical.jpg'],
      'chemical-peels': ['Chemical Peels', 'Refresh dull skin and refine texture with a peel selected for your skin’s tolerance.', '/images/treatments/face/chemical-peel.jpg'],
      'lips-and-eyes': ['Lips & Eyes', 'Gentle, targeted care for fine lines, dryness and tired-looking lips and eyes.', '/images/treatments/face/lips-and-eyes.jpg'],
    },
  },
  'skin-conditions': {
    label: 'Skin Conditions',
    items: {
      Eczema: ['Eczema Care', 'Manage dry, itchy and inflamed skin with a diagnosis-led treatment plan.', '/images/treatments/skin-conditions/Eczema.jpg'],
      Psoriasis: ['Psoriasis Care', 'Personalised care for scaling, redness and recurring flare-ups.', '/images/treatments/skin-conditions/Psoriasis.jpg'],
      Vitiligo: ['Vitiligo Care', 'A thoughtful treatment plan for patches of pigment loss.', '/images/treatments/skin-conditions/Vitiligo.jpg'],
      'Fungal-Infections': ['Fungal Infections', 'Targeted care for common fungal infections, rashes and itching.', '/images/treatments/skin-conditions/Fungal-Infections.jpg'],
      'Wart&MoleCare': ['Wart & Mole Care', 'Safe clinical evaluation and removal options under medical supervision.', '/images/treatments/skin-conditions/Wart&MoleCare.jpg'],
      'Allergy-Management': ['Allergy Management', 'Diagnosis-led support for hives, irritation and skin allergies.', '/images/treatments/skin-conditions/Allergy-Management.jpg'],
    },
  },
  'laser-treatments': {
    label: 'Laser Treatments',
    items: {
      'laser-hair-removal': ['Laser Hair Removal', 'Reduce unwanted hair with a laser plan selected for your skin and hair type.', '/images/treatments/laser-treatments/Laser-Hair-Removal.jpg'],
      'laser-resurfacing': ['Laser Resurfacing', 'Improve wrinkles, scars and texture while supporting smoother-looking skin.', '/images/treatments/laser-treatments/LaserResurfacing.jpg'],
    },
  },
  'hair-treatments': {
    label: 'Hair Treatments',
    items: {
      hairloss: ['Hair Loss Treatment', 'Diagnosis-led care for thinning, shedding and pattern-related hair loss.', '/images/treatments/hair-treatments/hairloss.jpg'],
      hairtransplant: ['Hair Transplant', 'A personalised restoration option for suitable candidates seeking natural-looking coverage.', '/images/treatments/hair-treatments/hairtransplant.jpg'],
      Growththerapy: ['Growth Factor Therapy for Hair', 'Regenerative treatment designed to support improved density and healthier hair growth.', '/images/treatments/hair-treatments/Growththerapy.jpg'],
      Dandruff: ['Dandruff Treatment', 'Medical scalp care for flakes, itching and irritation that can affect hair health.', '/images/treatments/hair-treatments/Dandruff.jpg'],
      'Laser-Hair-Reduction': ['Laser Hair Reduction', 'A dermatologist-supervised option for reducing unwanted body hair.', '/images/treatments/hair-treatments/Laser-Hair-Reduction.jpg'],
      'Scalp-Microneeding': ['Scalp Microneedling', 'A targeted scalp treatment that supports follicle health and natural hair growth.', '/images/treatments/hair-treatments/Scalp-Microneedling.jpg'],
    },
  },
  men: {
    label: 'Treatments for Men',
    items: {
      'beard-grooming': ['Beard Grooming & Growth', 'Care for patchy growth, ingrown hairs and beard-line irritation.', '/images/treatments/men/beardgrowth.jpg'],
      'hair-loss': ['Hair Loss & PRP for Men', 'Address pattern hair loss and thinning with early, personalised care.', '/images/treatments/men/hairlossandprp.jpg'],
      'dark-lips': ['Dark Lips Treatment', 'Treat lip pigmentation with a plan based on its underlying cause.', '/images/treatments/men/darkliptreatment.jpg'],
      'anti-ageing': ['Anti-Ageing for Men', 'Soften lines and sagging while preserving a natural, rested appearance.', '/images/treatments/men/anti-ageing-men.jpg'],
      'skin-brightening': ['Skin Brightening & Tan Removal', 'Improve sun-darkened and uneven skin tone with dermatologist-led care.', '/images/treatments/men/skin-bright-tan-men.jpg'],
      acne: ['Acne & Skin Clarity', 'Treat breakouts and razor bumps with a routine that fits your lifestyle.', '/images/treatments/men/acne&skinclarity.jpg'],
    },
  },
}

const treatmentInfo = {
  'face-treatments/acne': ['Acne can be driven by oil production, clogged pores, inflammation or hormones. The plan first controls active acne, then addresses scars only when the skin is ready.', ['Active pimples, blackheads or whiteheads', 'Acne marks and uneven texture', 'Rolling, boxcar or ice-pick scars'], ['Medical acne care', 'Chemical peels or microneedling', 'Scar-focused procedures when appropriate']],
  'face-treatments/skin-lightening-and-pigmentation': ['Pigmentation needs a cause-led approach. Sun exposure, hormones, inflammation and past acne can all leave different patterns of darkening.', ['Melasma and dark patches', 'Sun spots and tanning', 'Post-acne pigmentation'], ['Skin assessment and sun-protection advice', 'Targeted topical care', 'Peels or laser support when suitable']],
  'face-treatments/anti-ageing': ['Ageing appears differently on every face. Treatment is planned around skin quality, volume changes and lines, with the aim of keeping results natural.', ['Fine lines and wrinkles', 'Loss of facial volume', 'Early sagging or tired appearance'], ['Skin rejuvenation plan', 'Wrinkle and volume assessment', 'Non-surgical options where suitable']],
  'face-treatments/clinical-facials': ['A clinical facial is selected after assessing your skin rather than following a standard salon routine. It is designed to support a specific skin concern.', ['Dull or congested skin', 'Uneven texture', 'Occasional breakouts or dryness'], ['Skin analysis', 'Medical-grade cleansing and exfoliation', 'Post-treatment skin-care guidance']],
  'face-treatments/chemical-peels': ['Chemical peels use carefully selected exfoliating agents to improve surface texture and brightness. Peel type and strength depend on your skin and concern.', ['Dullness and rough texture', 'Mild acne and acne marks', 'Uneven tone'], ['Pre-peel assessment', 'Appropriately selected peel', 'Aftercare and sun-protection guidance']],
  'face-treatments/lips-and-eyes': ['The skin around the lips and eyes is delicate and needs a gentle approach. Care is planned around pigmentation, dryness, fine lines or puffiness.', ['Dark or dry lips', 'Fine lines around the eyes', 'Tired-looking eye area'], ['Gentle clinical assessment', 'Targeted skin-care recommendations', 'Suitable in-clinic options if needed']],
  'skin-conditions/Eczema': ['Eczema often cycles through dry, itchy and inflamed flare-ups. Identifying triggers and strengthening the skin barrier helps make care more manageable.', ['Persistent itching', 'Dry, cracked or inflamed skin', 'Recurring rash flare-ups'], ['Clinical skin assessment', 'Trigger and routine review', 'Personalised treatment and skin-barrier care']],
  'skin-conditions/Psoriasis': ['Psoriasis is a chronic inflammatory condition that can flare and settle over time. Treatment aims to reduce scaling, redness and discomfort while supporting long-term control.', ['Scaly patches', 'Itching or soreness', 'Recurring plaques on the skin or scalp'], ['Diagnosis and severity review', 'Targeted medical management', 'Follow-up for response and flare control']],
  'skin-conditions/Vitiligo': ['Vitiligo causes areas of pigment loss and benefits from an early, carefully monitored dermatology plan. Options are selected based on the pattern and activity of patches.', ['New or spreading white patches', 'Stable pigment-loss patches', 'Concerns about uneven skin colour'], ['Detailed assessment', 'Personalised treatment discussion', 'Progress monitoring and sun-care advice']],
  'skin-conditions/Fungal-Infections': ['Fungal infections can mimic other rashes, so confirming the cause matters. Treatment focuses on clearing the infection and reducing recurrence.', ['Itchy, ring-shaped or scaly rash', 'Recurring fungal infection', 'Rash in warm or skin-fold areas'], ['Clinical assessment', 'Targeted antifungal treatment', 'Hygiene and recurrence-prevention guidance']],
  'skin-conditions/Wart&MoleCare': ['Warts and moles should be assessed before removal. Your dermatologist will determine whether observation, treatment or removal is most appropriate.', ['New or changing mole', 'Persistent wart', 'Cosmetic concern about a lesion'], ['Lesion examination', 'Discussion of suitable removal options', 'Aftercare and review guidance']],
  'skin-conditions/Allergy-Management': ['Skin allergies and hives can have many triggers. A detailed history helps distinguish allergic reactions from other causes of itching and rash.', ['Hives or sudden rash', 'Repeated irritation after products or exposures', 'Itching with no clear cause'], ['History and trigger review', 'Treatment for active symptoms', 'Practical avoidance and skin-care guidance']],
  'laser-treatments/laser-hair-removal': ['Laser hair removal works by targeting pigment in hair follicles. A safe plan considers your hair colour, skin type, treatment area and growth cycle.', ['Unwanted facial or body hair', 'Frequent shaving or waxing', 'Ingrown-hair concerns'], ['Skin and hair assessment', 'Patch test where indicated', 'A series of planned treatment sessions']],
  'laser-treatments/laser-resurfacing': ['Laser resurfacing targets damaged skin layers to improve texture, fine lines and scars. The right setting and aftercare are essential for safe results.', ['Acne scars and uneven texture', 'Fine lines', 'Sun-damaged or dull-looking skin'], ['Detailed skin assessment', 'Suitability and downtime discussion', 'Post-procedure recovery plan']],
  'hair-treatments/hairloss': ['Hair loss can be caused by genetics, stress, nutritional factors, hormonal changes or scalp conditions. A diagnosis helps identify the most suitable treatment path.', ['Excessive shedding', 'Thinning hair or a widening part', 'Early pattern hair loss'], ['Scalp and hair assessment', 'Discussion of appropriate medical care', 'Progress review and supportive aftercare']],
  'hair-treatments/hairtransplant': ['A hair transplant redistributes healthy hair follicles to areas of thinning. Suitability depends on your pattern of hair loss, donor area and long-term hair-restoration goals.', ['Receding hairline', 'Thinning crown or hairline', 'Stable hair loss with adequate donor hair'], ['Hair and donor-area assessment', 'Personalised restoration plan', 'Post-procedure care and growth monitoring']],
  'hair-treatments/Growththerapy': ['Growth-factor therapy is a regenerative option used to support scalp and follicle health. Your dermatologist will assess whether it suits your type and stage of hair loss.', ['Early thinning', 'Hair that feels weaker or less dense', 'Support alongside a medical hair-care plan'], ['Scalp assessment', 'Treatment suitability discussion', 'Planned sessions and progress review']],
  'hair-treatments/Dandruff': ['Dandruff can be linked to scalp oil, irritation, yeast overgrowth or an underlying skin condition. The aim is to reduce flakes and improve scalp comfort.', ['Visible flakes', 'Itchy or irritated scalp', 'Recurring scalp scaling'], ['Scalp examination', 'Targeted medicated care', 'Home-care routine to reduce recurrence']],
  'hair-treatments/Laser-Hair-Reduction': ['Laser hair reduction targets pigment in hair follicles to reduce unwanted hair growth over a course of sessions. Settings are selected for your skin and hair type.', ['Unwanted facial or body hair', 'Frequent shaving or waxing', 'Ingrown-hair concerns'], ['Skin and hair assessment', 'Patch test where indicated', 'A planned series of treatment sessions']],
  'hair-treatments/Scalp-Microneeding': ['Scalp microneedling creates controlled micro-channels that can support a hair-restoration plan. It is considered after assessing scalp health and the cause of hair loss.', ['Early thinning', 'Reduced hair density', 'Support for an existing hair-care plan'], ['Scalp assessment', 'Suitability and session planning', 'Aftercare and progress monitoring']],
  'men/beard-grooming': ['Beard concerns often involve both hair growth and the skin beneath it. Care can address patchiness, ingrown hairs and beard-line breakouts together.', ['Patchy beard growth', 'Ingrown hairs', 'Irritation or acne in the beard area'], ['Skin and growth-pattern assessment', 'Personalised grooming and skin routine', 'Suitable medical options where indicated']],
  'men/hair-loss': ['Male pattern hair loss is best addressed early. Treatment focuses on preserving existing follicles and selecting appropriate supportive options.', ['Receding hairline', 'Thinning at the crown', 'Increased shedding'], ['Scalp and hair-loss assessment', 'Medical treatment discussion', 'PRP or other supportive options when suitable']],
  'men/dark-lips': ['Lip darkening can be linked to sun exposure, smoking, irritation or natural pigmentation. A plan starts with identifying the most likely contributor.', ['Uneven or dark lip tone', 'Smoking-related pigmentation', 'Dry, irritated lips'], ['Cause and skin review', 'Lip-care and protection routine', 'Targeted treatment options when suitable']],
  'men/anti-ageing': ['Men benefit from an approach that respects their natural facial structure. The focus is on looking less tired and maintaining a natural appearance.', ['Fine lines and wrinkles', 'Sagging or volume changes', 'Tired-looking skin'], ['Facial assessment', 'Personalised non-surgical options', 'Skin-quality and maintenance guidance']],
  'men/skin-brightening': ['Tan, dullness and uneven tone are commonly linked to regular sun exposure. Treatment is paired with practical daily protection to help results last.', ['Sun tan and dark patches', 'Uneven skin tone', 'Dull or rough skin'], ['Skin assessment', 'Brightening and resurfacing options', 'Sunscreen and home-care advice']],
  'men/acne': ['Acne in men can be aggravated by shaving, sweat and heavy grooming products. Care is built around the routine you can realistically maintain.', ['Breakouts and oily skin', 'Razor bumps', 'Post-acne marks'], ['Acne assessment', 'Routine and shaving review', 'Personalised treatment and follow-up']],
}

export function generateStaticParams() {
  return Object.entries(treatments).flatMap(([category, group]) =>
    Object.keys(group.items).map((treatment) => ({ category, treatment }))
  )
}

export default async function SubTreatmentPage({ params }) {
  const { category, treatment } = await params
  const group = treatments[category]
  const item = group?.items[treatment]

  if (!item) notFound()

  const [title, description, image] = item
  const [about, concerns, approach] = treatmentInfo[`${category}/${treatment}`] || [
    description,
    ['A concern affecting your skin, hair or scalp', 'Need for a personalised dermatology assessment', 'Guidance on suitable treatment options'],
    ['Clinical consultation', 'Personalised treatment discussion', 'Aftercare and follow-up guidance'],
  ]

  return (
    <main className={`${playfairDisplay.className} min-h-screen overflow-x-hidden bg-white text-[#1A1A2E]`}>
      <Header />
      <section className="relative isolate overflow-hidden bg-[#FBFCFF] pb-16 pt-10 lg:pb-24 lg:pt-14">
        <div className="absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-[#FCE8F2] blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 -z-10 h-72 w-72 rounded-full bg-[#E7F3FF] blur-3xl" />
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Link href={`/treatments/${category === 'men' ? 'treatments-men' : category}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4146A] transition hover:gap-3"><ArrowLeft className="h-4 w-4" /> Back to {group.label}</Link>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D4146A]/15 bg-[#FFF5F8] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#D4146A]"><Sparkles className="h-3.5 w-3.5" /> Specialist {group.label}</span>
              <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">{title}</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#5A5A72]">{description}</p>
              <div className="mt-8 flex flex-wrap gap-3"><Link href="/book-appointment" className="inline-flex items-center gap-2 rounded-xl bg-[#D4146A] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#D4146A]/20 transition hover:-translate-y-0.5 hover:bg-[#B01058]"><CalendarDays className="h-4 w-4" /> Book Consultation</Link><a href="tel:+919417237526" className="inline-flex items-center gap-2 rounded-xl border border-[#1A1A2E]/15 bg-white px-6 py-3.5 text-sm font-bold transition hover:border-[#D4146A] hover:text-[#D4146A]"><Phone className="h-4 w-4" /> Call Now</a></div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-[#5A5A72]"><span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#D4146A]" /> Doctor-led care</span><span className="inline-flex items-center gap-2"><HeartHandshake className="h-4 w-4 text-[#D4146A]" /> Personalised plan</span></div>
            </div>
            <div className="relative"><div className="absolute -inset-3 rounded-[2rem] bg-[#D4146A]/10" /><img src={image} alt={title} className="relative h-80 w-full rounded-[1.5rem] object-cover shadow-2xl md:h-[480px]" /><div className="absolute -bottom-5 left-5 rounded-xl bg-white px-4 py-3 shadow-lg"><p className="text-xs font-semibold uppercase tracking-wider text-[#D4146A]">Expert consultation</p><p className="mt-1 text-sm font-bold">Care tailored to you</p></div></div>
          </div>
        </div>
      </section>
      <section className="border-y border-[#EEF0F4] bg-white py-5"><div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-[#EEF0F4] px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8">{[[Search, 'Thorough assessment', 'We identify the cause.'], [ClipboardCheck, 'Clear treatment plan', 'Know your next steps.'], [ShieldCheck, 'Clinically guided care', 'Safe, suitable options.']].map(([Icon, heading, copy]) => <div key={heading} className="flex items-center gap-3 py-3 sm:justify-center"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FFF0F6] text-[#D4146A]"><Icon className="h-4.5 w-4.5" /></span><div><p className="text-sm font-bold">{heading}</p><p className="text-xs text-[#5A5A72]">{copy}</p></div></div>)}</div></section>
      <section className="bg-[#FAFBFD] py-16 lg:py-20"><div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-8"><div><p className="text-sm font-bold uppercase tracking-widest text-[#D4146A]">About this treatment</p><h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">Care built around your concern</h2><p className="mt-6 max-w-2xl text-base leading-8 text-[#5A5A72]">{about}</p><Link href="/book-appointment" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#D4146A] hover:underline">Talk to our specialist <ArrowLeft className="h-4 w-4 rotate-180" /></Link></div><div className="rounded-2xl bg-white p-7 shadow-lg shadow-[#1A1A2E]/5 ring-1 ring-[#EEF0F4]"><p className="text-xs font-bold uppercase tracking-widest text-[#D4146A]">Concerns we address</p><h2 className="mt-2 text-2xl font-bold">This may help with</h2><ul className="mt-6 space-y-4">{concerns.map((concern) => <li key={concern} className="flex items-start gap-3 text-sm leading-6 text-[#5A5A72]"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFF0F6]"><CheckCircle2 className="h-3.5 w-3.5 text-[#D4146A]" /></span>{concern}</li>)}</ul></div></div></section>
      <section className="bg-[#FAFBFD] py-16 lg:py-20"><div className="mx-auto max-w-6xl px-5 lg:px-8"><div className="text-center"><p className="text-sm font-bold uppercase tracking-widest text-[#D4146A]">The treatment journey</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">Simple, considered care from start to finish.</h2><p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[#5A5A72]">Every step is explained clearly, so you can make informed decisions about your treatment.</p></div><div className="relative mx-auto mt-12 max-w-5xl"><div className="absolute left-[16%] right-[16%] top-7 hidden border-t-2 border-dashed border-[#F2B6D1] md:block" /><div className="grid gap-6 md:grid-cols-3">{[[Stethoscope, '01', 'Consultation', approach[0]], [ShieldCheck, '02', 'Your treatment plan', approach[1]], [HeartHandshake, '03', 'Aftercare & review', approach[2]]].map(([Icon, number, heading, copy]) => <div key={heading} className="relative text-center"><div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#FAFBFD] bg-[#D4146A] text-sm font-extrabold text-white shadow-lg shadow-[#D4146A]/25">{number}</div><div className="mt-5 rounded-2xl bg-white px-6 py-6 shadow-sm ring-1 ring-[#EEF0F4]"><div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF0F6] text-[#D4146A]"><Icon className="h-5 w-5" /></div><h3 className="mt-4 text-lg font-bold">{heading}</h3><p className="mt-2 text-sm leading-6 text-[#5A5A72]">{copy}</p></div></div>)}</div></div></div></section>
      <section className="bg-white px-5 py-14 lg:px-8 lg:py-16"><div className="mx-auto grid max-w-6xl gap-7 rounded-3xl bg-gradient-to-br from-[#D4146A] to-[#A20C50] p-8 text-white shadow-xl shadow-[#D4146A]/15 md:grid-cols-[1fr_auto] md:items-center md:p-12"><div><p className="text-sm font-bold uppercase tracking-widest text-white/70">Ready when you are</p><h2 className="mt-3 text-3xl font-bold">Discuss your {title.toLowerCase()} concerns.</h2><p className="mt-3 max-w-xl leading-relaxed text-white/85">Book a private consultation with our dermatologist to understand the most suitable next step.</p></div><Link href="/book-appointment" className="inline-flex w-fit items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#D4146A] transition hover:bg-[#FFF3F8]"><CalendarDays className="h-4 w-4" /> Book Appointment</Link></div></section>
      <Footer />
    </main>
  )
}
