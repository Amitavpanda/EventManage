"use client"

import React from 'react';
// import Video from 'next-video';
import { SERVICES } from '@/constants';
import Image from 'next/image';
import Button from './Button';

function Services() {
  return (
    <section className='padding-container gap-20 py-20 pb-32 md:gap-28 lg:py-30'>
      {/* Heading */}
      <h1 className='regular-32 flexCenter uppercase'>Our Services</h1>
      {SERVICES.map((service) => (
        <div key={service.key}>
          <h2 className='flexStart text-brown-50 regular-24 uppercase my-10'>{service.title}</h2>
          <div className='flex flex-col gap-20 sm:flex-row sm:flex-wrap sm:gap-4'>
            {service.images.map((image, index) => (
              <div key={index} className='rounded-lg max-container'>
                <Image
                  className='rounded-lg'
                  width={300}
                  height={300}
                  src={image.src}
                  priority
                  sizes="(min-width: 808px) 50vw, 100vw"
                  alt={image.alt}
                />
              </div>
            ))}
            {/* {service.videos.map((video, index) => (
              <div key={index} className='rounded-lg max-container'>
                <Video src={video.src} width={300} height={300} className='rounded-lg' />
              </div>
            ))} */}
          </div>

          <div className='flexCenter'>
            <Button
              type='button'
              title='Details'
              variant='btn_dark_black'
              hoverBgVariant='btn_white_text' 
              height={2}
              width={14}
              href={`/event-details/${service.key}`}
              />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Services;
