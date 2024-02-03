"use client"

import React from 'react'
import { SERVICES } from '@/constants';
import Image from 'next/image';
import {motion} from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { fadeIn } from '@/utils/motion';
interface GalleryComponentProps {
  params : {
    eventId: string,
  }
}
const GalleryComponent = ({params}: GalleryComponentProps) => {
  const [ref, inView] = useInView();

  const service = SERVICES.find((service) => service.key === params.eventId )
  return (
    <>
      <motion.div ref={ref} className='padding-container py-5' initial="hidden" animate={inView ? "show" : "hidden"}>
            <div className='flex flex-row flex-wrap gap-5 '>
              {service?.images?.map((image, index) => (
                <motion.div key={index} className='rounded-lg max-container' variants={fadeIn("up", "spring", index*0.4, 0.75)}>
                  <Image width={300}
                    height={300}
                    src={image.src}
                    priority
                    sizes="(min-width: 808px) 50vw, 100vw"
                    alt={image.alt}
                    className='rounded-lg' />
                </motion.div>
              ))}
            </div>
      </motion.div>
    </>
  )
}

export default GalleryComponent;