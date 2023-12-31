import './globals.css'

import { dir } from 'i18next'
import type { Metadata } from 'next'

import { languages } from '../i18n/settings'
import Providers from '../providers'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export async function generateStaticParams() {
  return languages.map((lng) => ({
    lng,
  }))
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode
  params: { lng: string }
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
