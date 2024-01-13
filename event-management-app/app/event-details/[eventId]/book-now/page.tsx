import React from "react";
interface EventDetailProps {
    params: {
        eventId: string;
    };
}


const BookNow = ({params} : EventDetailProps) => {
    return (
        <div className="">
                Book now for {params.eventId}
                
        </div>
    )
}

export default BookNow;