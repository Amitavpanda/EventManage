import React from 'react'
import { SERVICES } from '@/constants';
import Image from 'next/image';
import Button from '@/components/Button';
interface EventDetailProps {
    params: {
        eventId: string;
    };
}

function EventDetail({ params }: EventDetailProps) {

    console.log("params is ", params.eventId);
    

    const eventDetails = SERVICES.find(service => service.key === params.eventId);

    if (!eventDetails) {
        return <div>Event not found</div>;
    }

    return (
        <section className='max-container p-6 flex-col'>
            {/* Image */}
            <div className="overflow-hidden  flexCenter">
                <Image
                    className="rounded-lg shadow-lg"
                    width={500}
                    height={400}
                    src={eventDetails?.details?.image?.src} // Assuming the first image in the array
                    alt={eventDetails?.details?.image?.src}
                   
              
                />
            </div>

            {/* Description */}
            <div className=' py-6 flexCenter'>
                <p className='regular-24 text-center'>{eventDetails?.details?.description}</p>
            </div>

            <div className='flexCenter py-5'>
                <h2 className='bold-64 text-brown-50 font-condiment'>Services we provide:</h2>
            </div>
            {/* bullet points */}
            <div className='py-6'>
                <ul className='list-disc list-inside'>
                    {eventDetails?.details?.bulletPoints.map((point, index) => (
                        <li key={index} className='flex flex-row p-4 '>
                            <p><span className='bold-24 text-brown-50'>{point.title} : </span> <span className='regular-24'>{point.message}</span></p>
                        </li>
                    ))}
                </ul>
            </div>

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

        </section>
    )
}

export default EventDetail