import { localMetadata } from '@/app/seo'

const keywords = {
  'laser-hair-removal': ['laser hair removal', 'best dermatologist for laser hair removal', 'laser clinic'],
  'q-switch-laser': ['q switch laser', 'pigmentation treatment', 'skin laser treatment near me'],
  mnrf: ['mnrf treatment', 'acne scar treatment', 'skin treatment near me'],
  dermapen: ['dermapen treatment', 'acne scar treatment', 'skin clinic'],
  hifu: ['hifu treatment', 'face lifting treatment', 'face treatment near me'],
  hairloss: ['hair loss treatment', 'hair dermatologist near me', 'hair clinic'],
  hairtransplant: ['hair transplant', 'hair loss treatment', 'hair clinic'],
  dandruff: ['dandruff treatment', 'hair dermatologist near me', 'skin specialist'],
  Eczema: ['eczma skin specialist', 'eczma treatment', 'skin specialist near me'],
  Psoriasis: ['psoriasis treatment', 'skin specialist near me', 'skin clinic'],
  Vitiligo: ['vitiligo treatment', 'skin specialist near me', 'dermatologist'],
  'wart-mole-care': ['wart removal', 'mole removal', 'skin specialist near me'],
}

const seoTitles = {
  acne: 'Acne Treatment in Rohini',
  'skin-lightening-and-pigmentation': 'Pigmentation Treatment in Rohini',
  Eczema: 'Eczema Treatment in Rohini',
  Vitiligo: 'Vitiligo Treatment in Rohini',
  Psoriasis: 'Psoriasis Treatment in Rohini',
  mnrf: 'MNRF Treatment in Rohini',
  'co2-laser': 'CO2 Laser Treatment in Rohini',
  dermapen: 'Dermapen Treatment in Rohini',
  hifu: 'HIFU Treatment in Rohini',
  hairloss: 'Hair Loss Treatment in Rohini',
  'hair-loss': 'Hair Loss Treatment in Rohini',
  'dark-lips': 'Dark Lips Treatment in Rohini',
  Dandruff: 'Dandruff Treatment in Rohini',
  'wart-mole-care': 'Wart and Mole Care in Rohini',
}

export async function generateMetadata({ params }) {
  const { category, treatment } = await params
  const treatmentKey = decodeURIComponent(treatment)
  const treatmentName = treatmentKey.replace(/[-_]/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())
  const title = seoTitles[treatmentKey] || `${treatmentName} Treatment in Rohini`
  return localMetadata({ path: `/treatments/${encodeURIComponent(category)}/${encodeURIComponent(treatmentKey)}/`, title, description: `Dermatologist consultation and personalised care for ${treatmentName.toLowerCase()}`, keywords: keywords[treatmentKey] || [treatmentName, 'skin treatment near me', 'dermatologist'] })
}

export default function Layout({ children }) { return children }
