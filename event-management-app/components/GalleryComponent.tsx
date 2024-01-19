import React from 'react'
import { SERVICES } from '@/constants';
import Image from 'next/image';

interface GalleryComponentProps {
  params : {
    eventId: string,
  }
}
const GalleryComponent = ({params}: GalleryComponentProps) => {

  const service = SERVICES.find((service) => service.key === params.eventId )
  return (
    <>
      <div className='padding-container py-5'>
            <div className='flex flex-row flex-wrap gap-5 '>
              {service?.images?.map((image, index) => (
                <div key={index} className='rounded-lg max-container'>
                  <Image width={300}
                    height={300}
                    src={image.src}
                    priority
                    sizes="(min-width: 808px) 50vw, 100vw"
                    alt={image.alt}
                    className='rounded-lg' />
                </div>
              ))}
            </div>
      </div>
    </>
  )
}

export default GalleryComponent;