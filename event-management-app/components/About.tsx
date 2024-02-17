"use client"

import React from 'react'
import {motion} from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { heroMotion, textVariant, zoomIn } from '@/utils/motion';

interface AboutProps {
  id : string,
}

function About({id}: AboutProps) {
  const [ref, inView] = useInView();

  return (
    <motion.section id={id} className='  flexCenter flex-col gap-5 py-20' ref={ref} initial="hidden" animate={inView ? "show" : "hidden"} variants={zoomIn(0.2,0.8)} >
    
      <h1 className='regular-32 flexCenter uppercase'>About</h1>
      <p className='regular24  max-container text-center'>At ShubMangal, we understand the importance of creating memorable moments for your special occasions. Whether it is celebrating love at a wedding, marking another year at a birthday party, or enjoying the traditions of a haldi ceremony, we are here to ensure every detail is taken care of.
      What makes us unique is our wide network of connections in the industry. Through our partnerships, we can offer you exclusive discounts on everything you need for your events, including shopping, photography, catering services and many more things.
      Our aim is to make your event planning experience easy and stress-free, so you can focus on making memories with your loved ones.</p>

    </motion.section>
  )
}

export default About