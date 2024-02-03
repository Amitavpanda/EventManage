"use client"


import React, { useEffect } from 'react'
import Button from './Button'
import Image from 'next/image'
import HeroPic1 from '../public/HeroLogo1.png'
import HeroPic2 from '../public/HeroLogo2.png'
import { SERVICES } from '@/constants';
import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeIn, heroMotion, textVariant } from '@/utils/motion';
import { useInView } from 'react-intersection-observer';

function Hero() {
  const [ref, inView] = useInView();


  return (
    <motion.section
      className='max-container mt-10 padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 lg:flex-row lg:flexStart'
      ref={ref}
      initial="hidden"
      animate={inView ?  "show" : "hidden"}
      variants={heroMotion} 
    >

      {/* LEFT */}
      <div className='relative z-20 flex flex-1 flex-col lg:w-1/2'>

        <motion.div
          className='relative z-20 flex flex-col'
          variants={textVariant()} // Apply fadeIn animation to the left content
        >
          <span className='uppercase text-black-100 regular-24 flexCenter lg:regular-32 lg:flexStart'>PROFESSIONAL</span>
          <span className='uppercase text-brown-50 bold-32 flexCenter lg:regular-40 lg:flexStart lg:bold-40'>EVENT ORGANISER</span>
        </motion.div>

        <motion.div
          className='flex flex-col mt-10'
          variants={fadeIn("", "", 0.2, 1.25)} // Apply fadeIn animation to the services list
        >
          <h2 className='bold-24 flexCenter lg:flexStart lg:bold-32 uppercase'>Our Services</h2>

          <div className='flexCenter flex-row flex-wrap gap-4 mt-4'>
            {SERVICES.map((service, index) => (

              <>
                <motion.div className="flexCenter flex-row flex-wrap gap-5 " variants={fadeIn("right", "spring", index * 0.5, 0.75)}>

                  <ul className='list-disc mt-1' >
                    <li key={service.key} className='bold-16 lg:bold-20 flexCenter lg:flexStart' >{service.title}</li>

                  </ul>
                </motion.div>
              </>



            ))}

          </div>




        </motion.div>

        <motion.div
          className='flexCenter lg:flexStart mt-5'
          variants={fadeIn("up", "spring", 0.4, 1.25)} // Apply fadeIn animation to the button
        >
          <Link href='#services'>
            <Button
              type='button'
              title='Explore'
              variant='btn_dark_black'
              hoverBgVariant='btn_white_text' />
          </Link>
        </motion.div>

      </div>
      {/* Right */}

      <motion.div
        className='flex flex-col flexCenter lg:flexStart gap-3'
        variants={fadeIn("right", "spring", 0, 1.25)} // Apply fadeIn animation to the images
      >
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
          alt='Image of a couple in wedding attire'
          width={550}
          height={400}
          sizes="(min-width: 640px) 550px, calc(94.06vw - 33px)"
          priority
        />
      </motion.div>
    </motion.section>
  )
}

export default Hero;
