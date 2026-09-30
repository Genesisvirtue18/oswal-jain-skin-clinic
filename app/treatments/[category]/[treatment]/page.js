import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Playfair_Display } from 'next/font/google'
import { ArrowLeft, CalendarDays, CheckCircle2, ChevronDown, ClipboardCheck, HeartHandshake, Phone, Search, ShieldCheck, Sparkles, Stethoscope } from 'lucide-react'
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
      'laser-hair-removal': ['Diode Laser Hair Removal', 'High-speed targeted light disables hair follicles for smoother, stubble-free skin without the repeated pain of waxing or ingrown hairs.', '/images/treatments/laser-treatments/Laser-Hair-Removal.jpg'],
      'laser-resurfacing': ['Laser Resurfacing', 'A resurfacing consultation helps decide whether CO2, Fractional Laser, MNRF or Dermapen is better for scars, wrinkles and uneven texture.', '/images/treatments/laser-treatments/LaserResurfacing.jpg'],
      'q-switch-laser': ['Q-Switch Laser', 'Ultra-short pulses of high-intensity light shatter pigment particles to fade freckles, sunspots, deep hyperpigmentation and selected tattoos.', '/images/treatments/laser-treatments/q-switch-laser-generated.png'],
      mnrf: ['MNRF', 'Medical needles deliver radiofrequency heat into the dermis to smooth pitted scars, refine pores and tighten early sagging from within.', '/images/treatments/laser-treatments/mnrf-generated.png'],
      'co2-laser': ['CO2 Laser', 'An ablative laser removes damaged outer skin layers for deeper wrinkles, severe scars and selected skin growths after suitability assessment.', '/images/treatments/laser-treatments/co2-laser-generated.png'],
      'fractional-laser': ['Fractional Laser', 'Pixelated laser light treats microscopic zones while surrounding tissue stays intact, supporting smoother texture and faster healing.', '/images/treatments/laser-treatments/fractional-laser-generated.png'],
      dermapen: ['Dermapen', 'Automated micro-needles create controlled micro-injuries without heat to refresh superficial scars, fine lines and tired-looking skin.', '/images/treatments/laser-treatments/dermapen-generated.png'],
      hifu: ['HIFU', 'Focused ultrasound bypasses the skin surface to heat deeper support tissue for non-surgical lifting, jawline definition and double-chin concerns.', '/images/treatments/laser-treatments/hifu-generated.png'],
      'carbon-laser-peel': ['Carbon Laser Peel', 'A thin carbon layer is applied and gently lasered away to reduce oiliness, minimise pores and create an instant event-ready glow.', '/images/treatments/laser-treatments/carbon-laser-peel-generated.png'],
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
  'laser-treatments/laser-hair-removal': ['Diode Laser uses high-speed, targeted light energy to disable active hair follicles. It is best for permanent hair reduction on the face and body, especially where coarse hair causes shaving, waxing or ingrown-hair frustration. It is highly effective across most skin tones when settings are selected for your hair and skin.', ['Permanent hair reduction on face and body', 'Silky, stubble-free skin goals', 'Waxing pain, shaving irritation or ingrown hairs', 'Coarse hair on suitable treatment areas'], ['Skin tone and hair assessment', 'Laser compatibility and session planning', 'Pre-care, aftercare and follow-up guidance']],
  'laser-treatments/laser-resurfacing': ['Laser resurfacing is a concern-led consultation for scars, wrinkles and uneven texture. Depending on your concern and skin profile, your dermatologist may guide you toward CO2 Laser, Fractional Laser, MNRF or Dermapen rather than choosing a device by name alone.', ['Wrinkles and fine lines', 'Acne scars and uneven texture', 'Stretch marks or rough skin', 'Need to choose the right resurfacing method'], ['Detailed scar and skin assessment', 'Technology selection based on your concern', 'Preparation, skin protection and review plan']],
  'laser-treatments/q-switch-laser': ['Q-Switch Laser uses ultra-short pulses of high-intensity light to shatter pigment particles. It is best for tattoo removal planning, freckles, sunspots and deep hyperpigmentation, helping fade stubborn dark spots for a clearer-looking complexion. It is safe for many tones, with precise settings needed on darker skin.', ['Tattoo removal planning', 'Freckles and sunspots', 'Deep or stubborn hyperpigmentation', 'Uneven complexion linked to pigment'], ['Pigment pattern and skin-tone assessment', 'Session plan with precise laser settings', 'Sun protection and pigment-care guidance']],
  'laser-treatments/mnrf': ['MNRF, or Microneedling Radiofrequency, uses medical needles to deliver thermal radiofrequency energy deep into the dermis. It is best for deep acne scars, large pores and early skin sagging, helping smooth pitted scars and tighten skin from the inside out. It is an excellent option for all skin types, including darker skin, because the energy is delivered below the surface.', ['Deep acne scars', 'Large or visible pores', 'Early skin sagging', 'Pitted or uneven scar texture'], ['Scar-depth mapping and suitability check', 'Needle-depth and energy planning', 'Skin barrier support and review visits']],
  'laser-treatments/co2-laser': ['CO2 Laser is an ablative resurfacing laser that removes damaged outer skin layers. It is best for severe wrinkles, deep structural scars and selected skin growths, offering a more dramatic skin-renewal option for suitable patients. It is usually best selected carefully for lighter or lower-risk skin profiles.', ['Severe wrinkles', 'Deep structural scars', 'Selected skin growths', 'Advanced texture irregularity'], ['Medical suitability and skin-risk assessment', 'Resurfacing plan matched to the concern', 'Detailed pre-care and recovery guidance']],
  'laser-treatments/fractional-laser': ['Fractional Laser uses pixels of laser light to treat microscopic zones while leaving surrounding tissue intact. It is best for fine lines, mild acne scarring, stretch marks and uneven texture, supporting smoother skin with faster healing than traditional full-field CO2 resurfacing. It is more versatile across diverse skin tones than traditional CO2.', ['Fine lines', 'Mild acne scars', 'Stretch marks', 'Uneven or rough texture'], ['Skin texture and tone evaluation', 'Fractional resurfacing plan', 'Aftercare, sunscreen and maintenance guidance']],
  'laser-treatments/dermapen': ['Dermapen is automated microneedling: rapidly vibrating micro-needles create controlled micro-injuries without heat. It is best for superficial acne scars, fine lines and boosting product absorption, helping skin look plumper, glowing and revitalised. It is widely suitable for all skin tones and types after assessment.', ['Superficial acne scars', 'Fine lines', 'Dull or tired-looking skin', 'Skin revitalisation and product-absorption support'], ['Skin sensitivity and scar assessment', 'Microneedling depth and session plan', 'Hydration, barrier care and follow-up guidance']],
  'laser-treatments/hifu': ['HIFU uses high-intensity focused ultrasound energy that bypasses the surface and heats deeper structural tissue. It is best for non-surgical face lifting, jawline definition and double-chin concerns, helping lift sagging skin and sharpen facial contours. It is safe for all skin tones because it works beneath the skin surface.', ['Non-surgical face lifting', 'Jawline definition', 'Double-chin concerns', 'Sagging skin and contour softening'], ['Face and jawline assessment', 'Ultrasound depth and area mapping', 'Maintenance and review planning']],
  'laser-treatments/carbon-laser-peel': ['Carbon Laser Peel applies a thin carbon layer to the skin, then gently lasers it away. It is best for instant brightness, reducing oiliness and minimising pores, making it a popular event-ready glow treatment. It is highly safe and popular across skin tones when performed conservatively.', ['Instant brightness', 'Oiliness and congestion', 'Visible pores', 'Pre-event glow goals'], ['Skin oiliness and sensitivity check', 'Carbon peel and laser-toning plan', 'Glow maintenance and sun-care advice']],
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

const laserProfiles = {
  'laser-hair-removal': {
    what: 'High-speed, targeted light energy disables active hair follicles.',
    best: 'Permanent hair reduction on the face and body.',
    benefit: 'Silky, stubble-free skin with less waxing pain, shaving irritation and ingrown hairs.',
    skin: 'Highly effective across most skin tones, especially for coarse dark hair.',
  },
  'laser-resurfacing': {
    what: 'A resurfacing consultation that helps choose the right device for your scar, wrinkle or texture concern.',
    best: 'Patients comparing CO2, Fractional Laser, MNRF or Dermapen for smoother skin.',
    benefit: 'A clearer treatment direction instead of guessing by machine name.',
    skin: 'Suitability depends on scar depth, skin tone, sensitivity and treatment goals.',
  },
  'q-switch-laser': {
    what: 'Ultra-short pulses of high-intensity light shatter pigment particles.',
    best: 'Tattoo fading, freckles, sunspots and deep hyperpigmentation.',
    benefit: 'Fades stubborn dark spots to reveal a clearer, more even-looking complexion.',
    skin: 'Safe for many skin tones, with precise settings required on darker skin.',
  },
  mnrf: {
    what: 'Medical needles deliver thermal radiofrequency energy deep into the dermis.',
    best: 'Deep acne scars, large pores and early skin sagging.',
    benefit: 'Smooths pitted scars and tightens skin from the inside out.',
    skin: 'Excellent for all skin types, including darker skin, with lower surface-pigment risk.',
  },
  'co2-laser': {
    what: 'An ablative laser removes damaged outer layers of skin.',
    best: 'Severe wrinkles, deep structural scars and selected skin growths.',
    benefit: 'A more dramatic skin-renewal option for suitable patients.',
    skin: 'Best selected carefully, usually for lighter or lower-risk skin profiles.',
  },
  'fractional-laser': {
    what: 'Pixels of laser light treat microscopic zones while surrounding tissue stays intact.',
    best: 'Fine lines, mild acne scarring, stretch marks and uneven texture.',
    benefit: 'Smoother texture with faster healing than full-field ablative resurfacing.',
    skin: 'More versatile across diverse skin tones than traditional CO2 resurfacing.',
  },
  dermapen: {
    what: 'Rapidly vibrating micro-needles create controlled micro-injuries without heat.',
    best: 'Superficial acne scars, fine lines and product-absorption support.',
    benefit: 'Plumper, glowing, revitalised-looking skin.',
    skin: 'Widely suitable for all skin tones and types after assessment.',
  },
  hifu: {
    what: 'High-intensity focused ultrasound bypasses the surface to heat deeper support tissue.',
    best: 'Non-surgical face lifting, jawline definition and double-chin concerns.',
    benefit: 'Lifts sagging skin and sharpens facial contours without surgery.',
    skin: 'Safe for all skin tones because it works beneath the skin surface.',
  },
  'carbon-laser-peel': {
    what: 'A thin carbon layer is applied to the skin, then gently lasered away.',
    best: 'Instant brightness, oiliness reduction and visible pore refinement.',
    benefit: 'An event-ready glow with a clean, refreshed complexion.',
    skin: 'Popular across skin tones when performed conservatively.',
  },
}

function getTreatmentFaqs({ category, title, concerns, approach }) {
  if (category === 'skin-conditions') {
    return [
      { question: `How is ${title.toLowerCase()} diagnosed?`, answer: `The dermatologist examines your skin, reviews your symptoms and medical history, and considers other conditions that can look similar. Tests may be advised only when they are clinically useful.` },
      { question: 'What can trigger or worsen this condition?', answer: `Triggers vary from person to person. Irritation, weather, infections, products, stress or other health factors may contribute, depending on the condition. Your consultation includes a review of likely triggers.` },
      { question: 'How long will treatment take?', answer: `Treatment duration depends on the diagnosis, severity and response to care. Some concerns settle with short-term treatment, while recurring conditions need maintenance and follow-up.` },
      { question: 'What should I do at home?', answer: `Follow the prescribed treatment and skin-care routine, avoid known triggers, and do not use steroid or combination creams without medical advice. ${approach[2]} will be explained during your visit.` },
      { question: 'When should I return for a review?', answer: `Your dermatologist will recommend a review based on the severity of your symptoms and the treatment prescribed. Seek earlier advice if the condition spreads, becomes painful or changes unexpectedly.` },
    ]
  }

  if (category === 'hair-treatments') {
    return [
      { question: `Is ${title.toLowerCase()} suitable for me?`, answer: `Suitability depends on the cause and stage of your concern, scalp health and medical history. A scalp and hair assessment is required before a treatment plan is recommended.` },
      { question: 'When can I expect to notice improvement?', answer: `Hair growth and scalp improvement are gradual. The timeline varies with the diagnosis, treatment selected and consistency of care, so progress is assessed over planned review visits.` },
      { question: 'Will I need more than one session?', answer: `Some treatments require a planned series, while medical scalp conditions may need ongoing home care and reviews. Your dermatologist will explain the expected schedule after assessment.` },
      { question: 'Can I continue my normal hair-care routine?', answer: `Usually, but certain oils, colours, styling products or active scalp treatments may need to be paused. You will receive instructions suited to your scalp and procedure.` },
      { question: 'How will my progress be monitored?', answer: `${approach[2]} may include clinical review, comparison photographs or changes to your care plan based on shedding, density and scalp health.` },
    ]
  }

  if (category === 'laser-treatments') {
    return [
      { question: `Is ${title} suitable for my concern and skin tone?`, answer: `Suitability depends on your concern, skin tone, recent tanning, sensitivity and treatment history. The dermatologist selects the technology and settings after examining your skin, and may advise a patch test.` },
      { question: 'How many sessions will I need?', answer: `The number and spacing of sessions depend on the treatment area, severity and your response. Most laser and energy-based treatments work gradually, so your expected plan is discussed after assessment.` },
      { question: 'What will the treatment feel like?', answer: `Sensation varies by device and treatment depth. You may feel warmth, tingling or brief snapping sensations. Cooling or numbing cream may be used when appropriate.` },
      { question: 'What precautions should I take before treatment?', answer: `Avoid tanning, excessive sun exposure and irritating skin products as advised. Tell your dermatologist about medicines, active infections and recent procedures before treatment.` },
      { question: 'What should I expect after treatment?', answer: `Temporary redness, warmth or sensitivity may occur. Recovery varies by procedure, and you will receive specific guidance for cleansing, moisturising, sun protection and restarting active skincare.` },
    ]
  }

  return [
    { question: `Is ${title.toLowerCase()} suitable for my concern?`, answer: `Suitability depends on your skin, the cause and severity of ${concerns[0].toLowerCase()}, your medical history and treatment goals. The dermatologist will assess these before recommending care.` },
    { question: 'How many sessions or visits will I need?', answer: `The number of visits varies with the treatment selected and how your skin responds. Your expected plan and review schedule will be explained after consultation.` },
    { question: 'Will I need to change my skincare routine?', answer: `Possibly. Some active ingredients or irritating products may need to be paused before or after treatment. Your dermatologist will tell you what to continue and when to restart products.` },
    { question: 'Is there any recovery time?', answer: `Recovery depends on the procedure. Some options cause little interruption to your routine, while others may cause temporary redness, peeling or sensitivity. This is discussed before treatment.` },
    { question: 'How can I maintain my results?', answer: `${approach[2]}, consistent home care and daily sun protection where relevant can help support and maintain your results.` },
  ]
}

export function generateStaticParams() {
  return Object.entries(treatments).flatMap(([category, group]) =>
    Object.keys(group.items).map((treatment) => ({ category, treatment }))
  )
}

export default async function SubTreatmentPage({ params }) {
  const { category, treatment } = await params
  const treatmentKey = decodeURIComponent(treatment)
  const group = treatments[category]
  const item = group?.items[treatmentKey]

  if (!item) notFound()

  const [title, description, image] = item
  const [about, concerns, approach] = treatmentInfo[`${category}/${treatmentKey}`] || [
    description,
    ['A concern affecting your skin, hair or scalp', 'Need for a personalised dermatology assessment', 'Guidance on suitable treatment options'],
    ['Clinical consultation', 'Personalised treatment discussion', 'Aftercare and follow-up guidance'],
  ]
  const laserProfile = category === 'laser-treatments' ? laserProfiles[treatmentKey] : null
  const faqs = getTreatmentFaqs({ category, title, concerns, approach })

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
            <div className="relative"><div className="absolute -inset-3 rounded-[2rem] bg-[#D4146A]/10" /><img src={image} alt={title} className="relative h-80 w-full rounded-[1.5rem] object-cover shadow-2xl md:h-[480px]" /></div>
          </div>
        </div>
      </section>
      <section className="border-y border-[#EEF0F4] bg-white py-5"><div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-[#EEF0F4] px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8">{[[Search, 'Thorough assessment', 'We identify the cause.'], [ClipboardCheck, 'Clear treatment plan', 'Know your next steps.'], [ShieldCheck, 'Clinically guided care', 'Safe, suitable options.']].map(([Icon, heading, copy]) => <div key={heading} className="flex items-center gap-3 py-3 sm:justify-center"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FFF0F6] text-[#D4146A]"><Icon className="h-4.5 w-4.5" /></span><div><p className="text-sm font-bold">{heading}</p><p className="text-xs text-[#5A5A72]">{copy}</p></div></div>)}</div></section>
      {laserProfile && (
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-[#D4146A]">Laser profile</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">Quick guide before you book</h2>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                ['What it is', laserProfile.what],
                ['Best for', laserProfile.best],
                ['Client benefit', laserProfile.benefit],
                ['Skin types', laserProfile.skin],
              ].map(([label, copy]) => (
                <div key={label} className="rounded-2xl border border-[#EEF0F4] bg-[#FAFBFD] p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#D4146A]">{label}</p>
                  <p className="mt-3 text-sm leading-7 text-[#5A5A72]">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="bg-[#FAFBFD] py-16 lg:py-20"><div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-8"><div><p className="text-sm font-bold uppercase tracking-widest text-[#D4146A]">About this treatment</p><h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">Care built around your concern</h2><p className="mt-6 max-w-2xl text-base leading-8 text-[#5A5A72]">{about}</p><Link href="/book-appointment" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#D4146A] hover:underline">Talk to our specialist <ArrowLeft className="h-4 w-4 rotate-180" /></Link></div><div className="rounded-2xl bg-white p-7 shadow-lg shadow-[#1A1A2E]/5 ring-1 ring-[#EEF0F4]"><p className="text-xs font-bold uppercase tracking-widest text-[#D4146A]">Concerns we address</p><h2 className="mt-2 text-2xl font-bold">This may help with</h2><ul className="mt-6 space-y-4">{concerns.map((concern) => <li key={concern} className="flex items-start gap-3 text-sm leading-6 text-[#5A5A72]"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFF0F6]"><CheckCircle2 className="h-3.5 w-3.5 text-[#D4146A]" /></span>{concern}</li>)}</ul></div></div></section>
      <section className="bg-[#FAFBFD] py-16 lg:py-20"><div className="mx-auto max-w-6xl px-5 lg:px-8"><div className="text-center"><p className="text-sm font-bold uppercase tracking-widest text-[#D4146A]">The treatment journey</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">Simple, considered care from start to finish.</h2><p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[#5A5A72]">Every step is explained clearly, so you can make informed decisions about your treatment.</p></div><div className="relative mx-auto mt-12 max-w-5xl"><div className="absolute left-[16%] right-[16%] top-7 hidden border-t-2 border-dashed border-[#F2B6D1] md:block" /><div className="grid gap-6 md:grid-cols-3">{[[Stethoscope, '01', 'Consultation', approach[0]], [ShieldCheck, '02', 'Your treatment plan', approach[1]], [HeartHandshake, '03', 'Aftercare & review', approach[2]]].map(([Icon, number, heading, copy]) => <div key={heading} className="relative text-center"><div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#FAFBFD] bg-[#D4146A] text-sm font-extrabold text-white shadow-lg shadow-[#D4146A]/25">{number}</div><div className="mt-5 rounded-2xl bg-white px-6 py-6 shadow-sm ring-1 ring-[#EEF0F4]"><div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF0F6] text-[#D4146A]"><Icon className="h-5 w-5" /></div><h3 className="mt-4 text-lg font-bold">{heading}</h3><p className="mt-2 text-sm leading-6 text-[#5A5A72]">{copy}</p></div></div>)}</div></div></div></section>
      <section className="bg-white py-16 lg:py-20"><div className="mx-auto max-w-4xl px-5 lg:px-8"><div className="text-center"><p className="text-sm font-bold uppercase tracking-widest text-[#D4146A]">Frequently asked questions</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">Questions about {title.toLowerCase()}</h2><p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[#5A5A72]">Helpful guidance before your consultation and treatment plan.</p></div><div className="mt-10 space-y-3">{faqs.map((faq) => <details key={faq.question} className="group overflow-hidden rounded-2xl border border-[#E8EAF0] bg-[#FAFBFD] open:border-[#D4146A]/25 open:bg-white open:shadow-sm"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 font-bold marker:content-none md:px-6"><span>{faq.question}</span><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFF0F6] text-[#D4146A]"><ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" /></span></summary><p className="border-t border-[#EEF0F4] px-5 py-5 text-sm leading-7 text-[#5A5A72] md:px-6">{faq.answer}</p></details>)}</div></div></section>
      <section className="bg-white px-5 py-14 lg:px-8 lg:py-16"><div className="mx-auto grid max-w-6xl gap-7 rounded-3xl bg-gradient-to-br from-[#D4146A] to-[#A20C50] p-8 text-white shadow-xl shadow-[#D4146A]/15 md:grid-cols-[1fr_auto] md:items-center md:p-12"><div><p className="text-sm font-bold uppercase tracking-widest text-white/70">Ready when you are</p><h2 className="mt-3 text-3xl font-bold">Discuss your {title.toLowerCase()} concerns.</h2><p className="mt-3 max-w-xl leading-relaxed text-white/85">Book a private consultation with our dermatologist to understand the most suitable next step.</p></div><Link href="/book-appointment" className="inline-flex w-fit items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#D4146A] transition hover:bg-[#FFF3F8]"><CalendarDays className="h-4 w-4" /> Book Appointment</Link></div></section>
      <Footer />
    </main>
  )
}
