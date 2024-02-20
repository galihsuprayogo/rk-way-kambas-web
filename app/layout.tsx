import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-opensans',
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: {
    template: 'Rawa Kadut Way Kambas | %s',
    default: 'Rawa Kadut Way Kambas',
  },
  description: 'Raway Kadut Way Kambas - Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={openSans.className}>{children}</body>
    </html>
  )
}
