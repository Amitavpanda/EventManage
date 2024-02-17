import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Event Managment',
  description: 'An Event Management Web App to organise marriages, birthday parties and events',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col min-h-screen'>
        <Navbar />
        <main className='flex-1 mt-20'>
          {children}
        </main>
        <div className='mt-auto '>
          <Footer />
        </div>
      </body>
    </html>
  )
}
