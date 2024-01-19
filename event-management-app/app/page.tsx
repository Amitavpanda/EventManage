import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <Hero />
        <Services id="services" />
        <About id="about" />
        <Contact id="contact" />
      </div>
    </>
  )
}
