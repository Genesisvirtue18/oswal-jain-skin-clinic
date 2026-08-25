import { Geist_Mono, Playfair_Display } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import { routeSeo } from '@/app/seo'

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const neoSans = localFont({
  src: [
    { path: '../public/fonts/neo-sans-std/Neo Sans Std Regular.otf', weight: '400', style: 'normal' },
    { path: '../public/fonts/neo-sans-std/Neo Sans Std Medium.otf', weight: '500', style: 'normal' },
    { path: '../public/fonts/neo-sans-std/Neo Sans Std Bold.otf', weight: '700', style: 'normal' },
    { path: '../public/fonts/neo-sans-std/Neo Sans Std Black.otf', weight: '900', style: 'normal' },
  ],
  variable: '--font-neo-sans',
  display: 'swap',
})
export const metadata = routeSeo.home

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${neoSans.variable} ${playfairDisplay.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
