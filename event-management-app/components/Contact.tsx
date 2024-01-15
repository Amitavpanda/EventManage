
"use client"



import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from "zod";
import { resolve } from 'path';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './ui/button';
import axios from 'axios';
import { contactFormSchema } from '@/lib/validator';
type ContactDetailsInfo = {
  title: string;
  info: string;
};

interface ContactFormInputs {
  name: string;
  email: string;
  phoneNumber: string,
  message: string;
}




function ContactDetails({ title, info }: ContactDetailsInfo) {
  return (
    <div className='border-brown-50 p-6 border flex flex-col flexCenter rounded-lg'>
      <p className='font-alex-brush regular-18 md:regular-20 lg:regular-24'>{title}</p>
      <p className='regular-18 md:regular-20 lg:regular-24'>{info}</p>
    </div>
  );
}

function GoogleMap() {
  return (
    <div className='rounded-lg  overflow-hidden shadow-lg transition-transform transform hover:scale-105'>
      <iframe
        width="100%"
        height="416"
        src="https://maps.google.com/maps?width=100%&amp;height=416&amp;hl=en&amp;q=Hill%20Patna%20,%20Brahmapur,%20Odisha,%20760001+(Yes%202%20Bazar)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        title="Google Map"
      >
        <a href="https://www.maps.ie/population/">Find Population on Map</a>
      </iframe>
    </div>
  )
}

const Contact = () => {



    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
    })

  const onSubmit = async (data: FieldValues) => {

    try {
      console.log("Form data submitted: ", data);

      const response = await axios.post('http://localhost:1337/api/contactFormDetails', data);

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


  }

  return (
    <section className='flex flex-col max-container'>

      {/* first section */}
      <div className='flex flex-col flexCenter'>
        <h3 className='text-brown-50 font-alex-brush bold-24'>Location</h3>
        <h2 className='regular-32 uppercase'>CONTACT</h2>
      </div>


      {/* second section */}
      <div className='flex flex-row flex-wrap gap-5 flexCenter'>
        <ContactDetails title='Address' info='Hill Patna, Berhmapur , Ganjam , Odisha' />
        <ContactDetails title='Call Us' info='Call Us: 7077404655' />
        <ContactDetails title='Mail Us' info='pandaamitav01@gmail.com' />
      </div>

      {/* last section */}
      <div className='flex flex-col gap-10  my-8 lg:flex-row flexCenter'>
        {/* last subsection */}
        <div className='w-1/2'>
          <GoogleMap />
        </div>

        {/* last subsection */}
        <div className='flex flex-col gap-5 w-1/2'>
          <h2 className='regular-20'>CONTACT</h2>

          <form className='max-w-md my-3' onSubmit={form.handleSubmit(onSubmit)}>
            {/* first row */}
            <div className='mb-4 flex'>
              <div className='mr-2 flex-1'>
                <input
                  {...form.register('name')}
                  className='w-full px-3 py-2 border rounded-md border-brown-50 focus:outline-none bg-transparent text-brown-50 placeholder-brown-30'
                  placeholder='Name'
                />
              </div>

              <div className='ml-2 flex-1'>
                <input
                  {...form.register('phoneNumber')}

                  className='w-full px-3 py-2 border rounded-md border-brown-50 focus:outline-none bg-transparent text-brown-50 placeholder-brown-30'
                  placeholder='Phone'
                />


              </div>
            </div>

            {/* second row */}
            <div className='mb-4'>
              <input
                {...form.register('email')}
                className='w-full px-3 py-2 border rounded-md border-brown-50 focus:outline-none bg-transparent text-brown-50 placeholder-brown-30'
                placeholder='Email'
              />
 
            </div>

            {/* text box */}
            <div className='mb-4'>
              <textarea
                {...form.register('message')}
                className='w-full px-3 py-2 border rounded-md border-brown-50 focus:outline-none bg-transparent text-brown-50 placeholder-brown-30'
                placeholder='Message'
              />


            </div>

            <Button type="submit" className="flexCenter gap-3 border btn_dark_black w-50 h-10 btn_white_text cursor-pointer" >Submit</Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
