const clinic = 'Oswal Jain Skin & Hair Clinic'
const location = 'Rohini, Delhi'
export const siteUrl = 'https://oswaljainskinclinic.com'
const socialImage = `${siteUrl}/images/logo_oswal_jain.png`

export function localMetadata({ title, description, keywords = [], path = '/', fullTitle }) {
  const url = new URL(path, siteUrl).href
  const pageTitle = fullTitle || `${title} | Oswal Jain Clinic`
  return {
    metadataBase: new URL(siteUrl),
    title: pageTitle,
    description,
    keywords: [...keywords, location, 'dermatologist in Rohini', 'skin clinic in Rohini', 'skin clinic Delhi', 'Dr Varun Jain'],
    alternates: { canonical: url },
    openGraph: { title: pageTitle, description: `${description} ${location}.`, locale: 'en_IN', type: 'website', url, siteName: clinic, images: [{ url: socialImage, width: 1400, height: 800, type: 'image/png', alt: clinic }] },
    twitter: { card: 'summary_large_image', title: pageTitle, description: `${description} ${location}.`, images: [{ url: socialImage, alt: clinic }] },
  }
}

export const routeSeo = {
  home: localMetadata({ path: '/', title: 'Skin Clinic', fullTitle: 'Dermatologist in Rohini | Oswal Jain Skin & Hair Clinic', description: 'Consult Dr. Varun Jain, MD Skin & VD, at Oswal Jain Skin & Hair Clinic, Rohini. Skin, hair, laser & cosmetic care. Book your appointment today.', keywords: ['skin clinic', 'skin clinic near me', 'skin doctor', 'skin specialist near me'] }),
  about: localMetadata({ path: '/about/', title: 'Dermatologist Dr Varun Jain', description: 'Meet Dr Varun Jain for personalised dermatology care', keywords: ['skin doctor', 'skin specialist', 'dermatologist near me'] }),
  contact: localMetadata({ path: '/contact/', title: 'Contact Skin Clinic', description: 'Book a dermatologist consultation for skin and hair concerns', keywords: ['skin clinic near me', 'dermatologist near me', 'skin consultation'] }),
  booking: localMetadata({ path: '/book-appointment/', title: 'Book Dermatologist Appointment', description: 'Book a consultation with Dr. Varun Jain in Rohini for personalised skin, hair, laser and cosmetic dermatology care.', keywords: ['book dermatologist appointment', 'skin specialist near me', 'skin clinic near me'] }),
  treatments: localMetadata({ path: '/treatments/', title: 'Skin, Hair and Laser Treatments', description: 'Explore dermatologist-led skin, hair, laser and aesthetic treatment options', keywords: ['skin treatment near me', 'dermatologist', 'skin clinic'] }),
  face: localMetadata({ path: '/treatments/face-treatments/', title: 'Face Treatments', description: 'Explore personalised facial, cosmetic and anti-ageing treatments', keywords: ['face treatment near me', 'face treatment clinic near me', 'face treatment in delhi'] }),
  hair: localMetadata({ path: '/treatments/hair-treatments/', title: 'Hair Treatment Clinic', description: 'Hair loss, scalp and hair restoration consultations', keywords: ['hair dermatologist near me', 'hair loss treatment', 'hair clinic'] }),
  laser: localMetadata({ path: '/treatments/laser-treatments/', title: 'Laser Treatment Clinic', description: 'Laser skin and hair treatments planned around your skin and concern', keywords: ['skin laser treatment near me', 'laser hair removal', 'laser clinic'] }),
  conditions: localMetadata({ path: '/treatments/skin-conditions/', title: 'Skin Conditions Treatment', description: 'Diagnosis and care for eczema, psoriasis, acne, pigmentation and other skin conditions', keywords: ['eczema skin specialist', 'skin specialist near me', 'skin treatment near me'] }),
  men: localMetadata({ path: '/treatments/treatments-men/', title: "Men's Skin and Hair Treatments", description: 'Dermatology care for menâ€™s skin, beard and hair concerns', keywords: ['men skin treatment', 'hair loss treatment', 'skin clinic'] }),
  wellness: localMetadata({ path: '/treatments/sexual-wellness/', title: 'Sexual Wellness Consultation', description: 'Private, respectful consultation and guidance for sexual wellness concerns', keywords: ['sexual wellness consultation', 'doctor consultation', 'dermatologist'] }),
}

// Shared clinic facts, matching the contact information displayed on the site.
export const clinicSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  '@id': `${siteUrl}/#clinic`,
  name: clinic,
  url: `${siteUrl}/`,
  image: socialImage,
  logo: `${siteUrl}/images/logo_oswal_jain.png`,
  telephone: ['+919417237526', '+919478508950'],
  email: 'oswaljainskinclinic@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1st Floor, 227/D-15, above Khowal Jewellers / Hum Sabki Rasoi, Ayodhya Chowk, Sector 3D, Rohini',
    addressLocality: 'Delhi',
    addressRegion: 'Delhi',
    postalCode: '110085',
    addressCountry: 'IN',
  },
  sameAs: ['https://www.instagram.com/oswaljain_dermaclinic/'],
}
