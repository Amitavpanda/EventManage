"use client"

import React from 'react';
// import Video from 'next-video';
import { SERVICES } from '@/constants';
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';
import {motion} from "framer-motion";
import { heroMotion, zoomIn } from '@/utils/motion';
import { useInView } from 'react-intersection-observer';


interface ServiceProps {
  id : string,
}
function Services({id} : ServiceProps) {
  const [ref, inView] = useInView();
  
  // For controlling animation


  return (
    <motion.section id={id} className='flex-grow padding-container gap-20 py-20 pb-32 md:gap-28 lg:py-30' ref={ref} initial="hidden"
      animate={inView ? "show" : "hidden"} variants={heroMotion} >
      {/* Heading */}
      <h1 className='regular-32 flexCenter uppercase'>Our Services</h1>

      <motion.div className='flex-row flex-wrap flexCenter gap-7 mt-5' variants={zoomIn(0.2, 1)}>
        {SERVICES.map((service) => (
          <>
            <Link href={`/event-details/${service.key}`}><div className='bg-brown-10 p-5 rounded-2xl sm:w-[400px] w-full '>
              <motion.div className='relative w-full h-230px' variants={zoomIn(0.4, 1)}>
                <img src={service?.details?.image?.src} alt={service?.details?.image?.alt} className='rounded-2xl' />
              </motion.div>

              <motion.h3 className='bold-24 text-black-100 p-3 text-center' variants={zoomIn(0.6, 1)}>{service?.title}</motion.h3>

              <motion.div className='flex flex-row flexCenter flex-wrap gap-5' variants={zoomIn(0.8, 1)}>
                <Button type='button'
                  title='Details'
                  variant='btn_dark_black'
                  hoverBgVariant='btn_white_text'
                  height={2}
                  width={14}
                  href={`/event-details/${service.key}`} />

                <Button
                  type='button'
                  title='Gallery'
                  variant='btn_dark_black'
                  hoverBgVariant='btn_white_text'
                  height={2}
                  width={14}
                  href={`/event-details/${service.key}/gallery`} />
              </motion.div>
            </div></Link>

          </>
        ))}
      </motion.div>

    </motion.section>
  );
}

export default Services;
