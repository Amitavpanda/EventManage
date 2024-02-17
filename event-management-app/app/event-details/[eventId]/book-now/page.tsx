import { SERVICES } from "@/constants";
import React from "react";
import BookNowForm from "@/components/BookNowForm";

interface EventDetailProps {
    params: {
        eventId: string;
    };
}


const BookNow = ({params} : EventDetailProps) => {
    const service = SERVICES.find(service => service.key === params.eventId);
    
    if (!service) {
        // Handle the case when the service is not found for the given eventId
        return (
            <section className="bg-brown-30 bg-dotted-pattern bg-cover bg-center py-5 md:py:10">
                <h3 className="wrapper bold-32 text-center sm:text-left">Event Not Found</h3>
            </section>
        );
    }

    return (
        <>
        
        <section className="padding-container py-5 md:py-10">
            <h3 className="wrapper bold-32 text-center sm:text-left">Book Your {service.title} Event</h3>
        </section>

        <div className="wrapper my-8">
            <BookNowForm />
        </div>
        
        </>

    );
    }
export default BookNow;