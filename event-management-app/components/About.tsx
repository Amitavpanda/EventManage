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
      <p className='regular24  max-container text-center'>Lorem ipsum dolor sit amet consectetur
      , adipisicing elit. Corporis maxime delectus deserunt consequatur consectetur harum omnis od
      io. Eos dolores expedita, magnam repudiandae architecto pariatur explicabo temporibus animi
       recusandae incidunt quis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ea 
       iusto sint veritatis consequuntur excepturi aperiam eum tenetur ducimus, neque quasi culpa 
       perferendis voluptas incidunt mollitia inventore, delectus eligendi. At. Lorem ipsum dolor 
       sit amet consectetur adipisicing elit. Harum ullam vitae, beatae adipisci quidem non ipsa quos 
       recusandae cupiditate magnam porro! Veritatis sit fugit pariatur doloribus soluta cupiditate 
       explicabo quam.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur v
       oluptates odio velit assumenda nostrum impedit doloremque maiores eligendi adipisci iusto, at 
       atque libero. Eos adipisci voluptatem ab temporibus distinctio!</p>

    </motion.section>
  )
}

export default About