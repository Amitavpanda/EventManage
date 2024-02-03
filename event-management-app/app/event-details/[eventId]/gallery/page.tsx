import React from 'react'
import GalleryComponent from '@/components/GalleryComponent';

interface GalleryProps {
    params: {
        eventId: string;
    };
}
function Gallery({params} : GalleryProps) {
  return (
    <>
        <div className='padding-container max-container flex flex-col flexCenter mt-20'>
            <h3 className='text-center bold-32 text-black-100 py-5 '>Gallery</h3>
            <GalleryComponent params={params}/>
        </div>
    </>
  )
}

export default Gallery;