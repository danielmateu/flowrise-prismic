import type { Metadata, ResolvingMetadata } from 'next'
import { Inter, Nunito, Nunito_Sans } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import { createClient } from '@/prismicio'


// const inter = Inter({ subsets: ['latin'] })
const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})
const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {

  const client = createClient();

  const settings = await client.getSingle('settings')

  return {
    title: settings.data.site_title || "Flowrise fallback",
    description: settings.data.meta_description || "Flowrise is the best",
    openGraph: {
      images: [settings.data.og_image.url || ''],
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(nunito.variable, nunitoSans.variable)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
