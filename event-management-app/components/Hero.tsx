import React from 'react'
import Button from './Button'
import Image from 'next/image'
import HeroPic1 from '../public/HeroLogo1.png'
import HeroPic2 from '../public/HeroLogo2.png'

function Hero() {
  return (
    <section className='max-container  padding-container flex flex-col  gap-20 py-10 pb-32 md:gap-28 lg:py-20 lg:flex-row lg:flexStart'>

      {/* LEFT */}

      <div className='relative z-20 flex flex-1 flex-col lg:w-1/2'>

        <div className='flex flex-col'>
          <span className='uppercase text-black-100 regular-24 flexCenter lg:regular-32 lg:flexStart'>PROFESSIONAL</span>
          <span className='uppercase text-brown-50 bold-32 flexCenter lg:regular-40 lg:flexStart lg:bold-40'>EVENT ORGANISER</span>
        </div>

        <div className='flex flex-col mt-10 '>
          <h2 className='bold-24 flexCenter lg:flexStart lg:bold-32'>Our Services</h2>
          <ul className='list-disc'>
            <li className='bold-16 lg:bold-20 flexCenter lg:flexStart'>Wedding</li>
            <li className='bold-16 lg:bold-20 flexCenter lg:flexStart'>Birthday Party</li>
            <li className='bold-16 lg:bold-20 flexCenter lg:flexStart'>Events</li>
          </ul>
        </div>

        <div className='flexCenter lg:flexStart'>
          <Button
            type='button'
            title='Book Now'
            variant='btn_dark_black'
            hoverBgVariant='btn_white_text' />
        </div>

      </div>


      {/* Right */}

      <div className='flex flex-col flexCenter lg:flexStart gap-3'>
        <Image
          className='rounded-lg mx-auto'
          src={HeroPic1}
          alt='Image of dining of a event'
          width={550}
          height={400}
          sizes="(min-width: 640px) 550px, calc(94.06vw - 33px)"
          priority
        />

        <Image
          className='rounded-lg mx-auto'
          src={HeroPic2}
          alt='Image of a couple in wedding atire'
          width={550}
          height={400}
          sizes="(min-width: 640px) 550px, calc(94.06vw - 33px)"
          priority
        />

      </div>
    </section>
  )
}

export default Hero