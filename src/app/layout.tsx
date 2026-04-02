import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Compound — The Ultimate AI Creative Director',
  description:
    'World-class creative direction, downloaded in seconds. Replace Canva and Figma with a $995 AUD skill that builds like a $50K agency.',
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },  openGraph: {
    title: 'Compound — The Ultimate AI Creative Director',
    description:
      'World-class creative direction, downloaded in seconds. $995 AUD. Works with Claude Code & OpenClaw.',
    type: 'website',
    siteName: 'Compound',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compound — The Ultimate AI Creative Director',
    description:
      'World-class creative direction, downloaded in seconds. $995 AUD.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
