import { localMetadata } from '@/app/seo'

export const metadata = localMetadata({ path: '/treatments/melasma-treatment/',
  title: 'Melasma Treatment',
  description: 'Dermatologist-led treatment for melasma, dark patches and persistent pigmentation',
  keywords: ['melasma treatment', 'pigmentation treatment', 'skin specialist near me'],
})

export default function Layout({ children }) { return children }
