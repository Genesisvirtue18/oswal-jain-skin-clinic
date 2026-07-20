import { Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: 'Oswal Jain Skin & Hair Clinic | Dermatologist in Rohini',
  description:
    'Oswal Jain Skin & Hair Clinic in Rohini, Delhi offers skin, hair, nail, laser and cosmetic dermatology care by Dr. Varun Jain.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
