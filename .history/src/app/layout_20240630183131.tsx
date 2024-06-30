import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import Script from 'next/script' // Import Script component
import './globals.css'

const font = Lato({ weight: ['400', '700', '900'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kristian Gerardsson',
  description: 'About me and my projects',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Script
        src="https://static.codepen.io/assets/embed/ei.js"
        strategy="afterInteractive"
      />
      <html lang="en">
        <body className={font.className}>{children}</body>
      </html>
    </>
  )
}
