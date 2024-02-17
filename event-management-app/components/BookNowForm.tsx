"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import * as z from "zod"

import { Input } from "@/components/ui/input"
import { BookNowFormSchema } from "@/lib/validator"
import { BookNowDefaultValues } from "@/constants"
import Dropdown from "./Dropdown"
import { Textarea } from "@/components/ui/textarea"
import DatePicker from "react-datepicker";
import { Button } from "./ui/button"

import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react"
import { Value } from "@radix-ui/react-select"
import axios from "axios"



function BookNowForm() {
    const initialValues = BookNowDefaultValues;

    const form = useForm<z.infer<typeof BookNowFormSchema>>({
        resolver: zodResolver(BookNowFormSchema),
        defaultValues: BookNowDefaultValues
    })

    useEffect(() => {
        form.unregister("startDateTime");
        form.unregister("endDateTime");
    }, [form]);


    // 2. Define a submit handler.
    const onSubmit = async (data: z.infer<typeof BookNowFormSchema>) => {

        try {
            console.log("Form data submitted: ", data);

            data.startDateTime = new Date(data.startDateTime);
            data.endDateTime = new Date(data.endDateTime);

            const response = await axios.post('http://localhost:1337/api/bookNowFormDetails', data);



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
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8">
                    <div className="flex flex-col md:flex-row gap-5">

                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Name" {...field} className="px-3 py-2 border rounded-md border-brown-50 focus:outline-none bg-transparent text-brown-50 placeholder-brown-30" />
                                    </FormControl>
                                    <FormDescription className="">
                                        Enter your Name
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Phone" {...field} className="px-3 py-2 border rounded-md border-brown-50 focus:outline-none bg-transparent text-brown-50 placeholder-brown-30" />
                                    </FormControl>
                                    <FormDescription className="">
                                        Enter your Phone Number
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </div>

                    <div className="flex flex-col gap-5 md:flex-row">
                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Cateogry</FormLabel>
                                    <FormControl className="flex flex-1 w-1/2 ">
                                        <Dropdown onChangeHandler={field.onChange} value={field.value} />
                                    </FormControl>
                                    <FormDescription className="">
                                        Select the category of the Event
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="budget"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Budget</FormLabel>
                                    <FormControl className="flex flex-1">
                                        <Input placeholder="Budget" {...field} className="px-3 py-2 border rounded-md border-brown-50 focus:outline-none bg-transparent text-brown-50 placeholder-brown-30" />
                                    </FormControl>
                                    <FormDescription className="">
                                        Enter your expected Budget.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </div>

                    <div className="">
                        <FormField
                            control={form.control}
                            name="requirements"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Requirements</FormLabel>
                                    <FormControl className="h-72 flex flex-1 ">
                                        <Textarea placeholder="Requirements" {...field} className="rounded-lg" />
                                    </FormControl>
                                    <FormDescription className="text-wrap">
                                        Enter your requirements, It is not mandetory, we can discuss requirements on phone call too.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                            
                        />
                    </div>

                    <div className="flex flex-col md:flex-row gap-5">
                        <FormField
                            control={form.control}
                            name="startDateTime"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Start Date Time</FormLabel>
                                    <FormControl className="flex flex-1 ">
                                        <div className="w-full px-3 py-2 border rounded-md border-brown-50 focus:outline-none bg-transparent text-brown-50 placeholder-brown-30">
                                            <DatePicker selected={field.value} onChange={(date: Date) => field.onChange(date)} className="w-full bg-transparent focus:outline-none" showTimeSelect timeInputLabel="Time: " dateFormat="MM/dd/yyyy h:mm aa" wrapperClassName="datePicker" />
                                        </div>

                                    </FormControl>
                                    <FormDescription className="text-wrap">
                                        Select your expected starting date and time of the event
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="endDateTime"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>End Date Time</FormLabel>
                                    <FormControl className="flex flex-1 ">
                                        <div className="w-full px-3 py-2 border rounded-md border-brown-50 focus:outline-none bg-transparent text-brown-50 placeholder-brown-30">
                                            <DatePicker selected={field.value} onChange={(date: Date) => field.onChange(date)} className="w-full bg-transparent focus:outline-none" showTimeSelect timeInputLabel="Time: " dateFormat="MM/dd/yyyy h:mm aa" wrapperClassName="datePicker" />
                                        </div>

                                    </FormControl>
                                    <FormDescription className="text-wrap">
                                        Select your expected ending date and time of the event
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                    </div>

                    <div className="">
                        <FormField
                            control={form.control}
                            name="guestsNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Number of Guests</FormLabel>
                                    <FormControl className="flex flex-1 ">
                                        <Input placeholder="Number of Guests" {...field} className="px-3 py-2 border rounded-md border-brown-50 focus:outline-none bg-transparent text-brown-50 placeholder-brown-30" />
                                    </FormControl>
                                    <FormDescription className="text-wrap">
                                        Enter your expected number of guests for the event
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                        <Button type="submit" className="flexCenter btn_dark_black w-50 h-10  cursor-pointer" disabled={form.formState.isSubmitting}>{form.formState.isSubmitting ? ('Submitting') : ('Submit')}</Button>
                </form>
            </Form>
        </section>
    )
}

export default BookNowForm