import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'

const font = Lato({ weight: ['400', '700'] })

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
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
