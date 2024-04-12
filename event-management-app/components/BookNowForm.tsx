"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { FieldValues, FormProvider, useForm } from "react-hook-form"

import * as z from "zod"

import { BookNowFormSchema } from "@/lib/validator"
import { BookNowDefaultValues } from "@/constants"



import { useEffect, useState } from "react"
import { Value } from "@radix-ui/react-select"
import axios from "axios"
import Input from "./ui/Input"
import DropDown from "./ui/Dropdown"
import DatePickerComponent from "./ui/DatepickerComponentt"
import Button from "./Button"


function BookNowForm() {
    const initialValues = BookNowDefaultValues;

    const form = useForm<z.infer<typeof BookNowFormSchema>>({
        resolver: zodResolver(BookNowFormSchema),
    })
    // 2. Define a submit handler.
    const onSubmit = async (data: FieldValues) => {
        console.log("inside on submit book now ");

        try {
            console.log("Form data submitted: ", data);
            const response = await axios.post('http://localhost:1338/api/bookNowFormDetails', data);
            console.log("response", response);


            if (response.status === 200) {
                console.log('Form data successfully stored in the backend.');

                await new Promise(resolve => setTimeout(resolve, 1000));
                form.reset();
            }
            else {
                console.error("Form data not successfully stored");
            }

        }
        catch (error) {
            console.error("Error submitting form: ", error);
        }
        console.log(data);
    }

    return (
        <section className="padding-container">
            <FormProvider {...form}>
                <form className="flex flex-col gap-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex md:flex-row flex-col gap-6 w-full">
                        <div className="flex-1">
                            <Input label="Name" name="name" placeholder="Name" description="Enter your name" help="inside booknowform" />
                        </div>
                        <div className="flex-1">
                            <Input label="Phone" name="phoneNumber" placeholder="Phone" description="Enter your Phone" />
                        </div>
                    </div>

                    <div className="md:flex-row flex-col  gap-6">
                        <div className="flex-1 ">
                            <DropDown name="category" description="Select the category of the Event" />
                        </div>
                        <div className="flex-1">
                            <Input label="Budget" name="budget" placeholder="Budget" description="Enter your expected budget" />
                        </div>
                    </div>

                    <textarea {...form.register('requirements')} className="w-full rounded-md border border-brown-50 px-3 py-2 focus:outline-none bg-transparent h-100 min-h-[15rem]" placeholder="Requirements" />

                    <div className="md:flex-row flex-col gap-5 gap-y-5">

                        <div className="flex-1">
                            <DatePickerComponent name="startDateTime" description="Select your expected starting date and time of the event" />
                        </div>
                        <div className="flex-1">
                            <DatePickerComponent name="endDateTime" description="Select your expected ending date and time of the event" />
                        </div>
                    </div>

                    <Input label="Name" name="guestsNumber" placeholder="Number of Guests" description="Enter your expected number of guests for the event" />

                    <div className='flexCenter w-full'>
                        <Button
                            type='submit'
                            title='Submit'
                            variant='btn_dark_black'
                            hoverBgVariant='btn_white_text'
                            height={2}
                            width={14} />
                    </div>
                </form>
            </FormProvider>

        </section>
    )
}

export default BookNowForm