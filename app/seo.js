const clinic = 'Oswal Jain Skin & Hair Clinic'
const location = 'Rohini, Delhi'

export function localMetadata({ title, description, keywords = [] }) {
  return {
    title: `${title} in ${location} | ${clinic}`,
    description: `${description} Visit ${clinic} in ${location} for dermatologist-led care.`,
    keywords: [...keywords, location, 'dermatologist in Rohini', 'skin clinic in Rohini', 'skin clinic Delhi', 'Dr Varun Jain'],
    alternates: { canonical: '/' },
    openGraph: { title: `${title} in ${location} | ${clinic}`, description: `${description} ${location}.`, locale: 'en_IN', type: 'website' },
  }
}

export const routeSeo = {
  home: localMetadata({ title: 'Skin Clinic', description: 'Dermatologist care for skin, hair, laser and aesthetic concerns', keywords: ['skin clinic', 'skin clinic near me', 'skin doctor', 'skin specialist near me'] }),
  about: localMetadata({ title: 'Dermatologist Dr Varun Jain', description: 'Meet Dr Varun Jain for personalised dermatology care', keywords: ['skin doctor', 'skin specialist', 'dermatologist near me'] }),
  contact: localMetadata({ title: 'Contact Skin Clinic', description: 'Book a dermatologist consultation for skin and hair concerns', keywords: ['skin clinic near me', 'dermatologist near me', 'skin consultation'] }),
  booking: localMetadata({ title: 'Book Dermatologist Appointment', description: 'Book a skin, hair or laser consultation', keywords: ['book dermatologist appointment', 'skin specialist near me', 'skin clinic near me'] }),
  treatments: localMetadata({ title: 'Skin, Hair and Laser Treatments', description: 'Explore dermatologist-led skin, hair, laser and aesthetic treatment options', keywords: ['skin treatment near me', 'dermatologist', 'skin clinic'] }),
  face: localMetadata({ title: 'Face Treatments', description: 'Explore personalised facial, cosmetic and anti-ageing treatments', keywords: ['face treatment near me', 'face treatment clinic near me', 'face treatment in delhi'] }),
  hair: localMetadata({ title: 'Hair Treatment Clinic', description: 'Hair loss, scalp and hair restoration consultations', keywords: ['hair dermatologist near me', 'hair loss treatment', 'hair clinic'] }),
  laser: localMetadata({ title: 'Laser Treatment Clinic', description: 'Laser skin and hair treatments planned around your skin and concern', keywords: ['skin laser treatment near me', 'laser hair removal', 'laser clinic'] }),
  conditions: localMetadata({ title: 'Skin Conditions Treatment', description: 'Diagnosis and care for eczema, psoriasis, acne, pigmentation and other skin conditions', keywords: ['eczema skin specialist', 'skin specialist near me', 'skin treatment near me'] }),
  men: localMetadata({ title: "Men's Skin and Hair Treatments", description: 'Dermatology care for men’s skin, beard and hair concerns', keywords: ['men skin treatment', 'hair loss treatment', 'skin clinic'] }),
  wellness: localMetadata({ title: 'Sexual Wellness Consultation', description: 'Private, respectful consultation and guidance for sexual wellness concerns', keywords: ['sexual wellness consultation', 'doctor consultation', 'dermatologist'] }),
}
