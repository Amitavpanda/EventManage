"use client"

import React from 'react';
// import Video from 'next-video';
import { SERVICES } from '@/constants';
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';

interface ServiceProps {
  id : string,
}
function Services({id} : ServiceProps) {
  return (
    <section id={id} className='flex-grow padding-container gap-20 py-20 pb-32 md:gap-28 lg:py-30'>
      {/* Heading */}
      <h1 className='regular-32 flexCenter uppercase'>Our Services</h1>

      <div className='flex-row flex-wrap flexCenter gap-7'>
        {SERVICES.map((service) => (
          <>
            <Link href={`/event-details/${service.key}`}><div className='bg-brown-10 p-5 rounded-2xl sm:w-[400px] w-full '>
              <div className='relative w-full h-230px'>
                <img src={service?.details?.image?.src} alt={service?.details?.image?.alt} className='rounded-2xl' />
              </div>

              <h3 className='bold-24 text-black-100 p-3'>{service?.title}</h3>

              <div className='flex flex-row flexCenter flex-wrap gap-5'>
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
              </div>
            </div></Link>

          </>
        ))}
      </div>

    </section>
  );
}

export default Services;
