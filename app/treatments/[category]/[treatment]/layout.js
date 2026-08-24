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
  'Wart&MoleCare': ['wart removal', 'mole removal', 'skin specialist near me'],
}

export async function generateMetadata({ params }) {
  const { treatment } = await params
  const title = decodeURIComponent(treatment).replace(/[-_]/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())
  return localMetadata({ title, description: `Dermatologist consultation and personalised care for ${title.toLowerCase()}`, keywords: keywords[treatment] || [title, 'skin treatment near me', 'dermatologist'] })
}

export default function Layout({ children }) { return children }
