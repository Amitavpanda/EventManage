"use client"

import React from 'react'
import { SERVICES } from '@/constants';
import Image from 'next/image';
import Button from '@/components/Button';
import { useInView } from 'react-intersection-observer';
import {motion} from "framer-motion";
import { fadeIn, zoomIn } from '@/utils/motion';

interface EventDetailProps {
    params: {
        eventId: string;
    };
}

function EventDetail({ params }: EventDetailProps) {
    const [ref, inView] = useInView();

    
    console.log("params is ", params.eventId);
    

    const eventDetails = SERVICES.find(service => service.key === params.eventId);

    if (!eventDetails) {
        return <div>Event not found</div>;
    }

    return (
        <motion.section ref={ref} className='max-container p-6 flex-col' initial="hidden" animate={inView ? "show" : "hidden"} variants={fadeIn("up", "spring", "0.2", "1")}>
            {/* Image */}
            <motion.div className="overflow-hidden flexCenter mt-20 md:mt-36" variants={fadeIn("up", "spring", "0.2","1")}>
                <Image
                    className="rounded-lg shadow-lg"
                    width={600}
                    height={600}
                    src={eventDetails?.details?.image?.src} // Assuming the first image in the array
                    alt={eventDetails?.details?.image?.src}
                />
            </motion.div>

            {/* Description */}
            <motion.div className=' py-6 flexCenter' variants={fadeIn("up","spring", "0.4", "1")}>
                <p className='regular-24 text-center'>{eventDetails?.details?.description}</p>
            </motion.div>

            <motion.div className='flexCenter py-5' variants={fadeIn("left", "spring", "0.6", "1")}>
                <h2 className='bold-64 text-center text-brown-50 font-condiment'>Services we provide:</h2>
            </motion.div>
            {/* bullet points */}
            <motion.div className='py-6' variants={zoomIn("1.2", "1")}>
                <ul className='list-disc list-inside'>
                    {eventDetails?.details?.bulletPoints.map((point, index) => (
                        <li key={index} className='flex flex-row p-4 '>
                            <p><span className='bold-24 text-brown-50'>{point.title} : </span> <span className='regular-24'>{point.message}</span></p>
                        </li>
                    ))}
                </ul>
            </motion.div>

            {/* Button */}
            <div className='flexCenter'>
                <Button
                    type='button'
                    title='Book Now'
                    variant='btn_dark_black'
                    hoverBgVariant='btn_white_text'
                    href={`/event-details/${params.eventId}/book-now`}
                />
            </div>

        </motion.section>
    )
}

export default EventDetail