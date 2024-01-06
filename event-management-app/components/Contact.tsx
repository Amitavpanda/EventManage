
"use client"



import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import {z} from "zod";
import { resolve } from 'path';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from './Button';
import axios from 'axios';

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


const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digit numbers"),
  message: z.string(),

});

function ContactDetails({ title, info }: ContactDetailsInfo) {
  return (
    <div className='border-brown-50 p-6 border flex flex-col flexCenter rounded-lg'>
      <p className='font-alex-brush regular-18 md:regular-20 lg:regular-24'>{title}</p>
      <p className='regular-18 md:regular-20 lg:regular-24'>{info}</p>
    </div>
  );
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: FieldValues) => {

    try{
      console.log("Form data submitted: ", data);

      const response = await axios.post('http://localhost:1337/api/contactFormDetails', data);

      if (response.status === 200) {
        console.log('Form data successfully stored in the backend.');
  
        await new Promise(resolve => setTimeout(resolve, 1000));
        reset();
      } 
      else{
        console.error("Form data not successfully stored");
      }

    }
    catch(error){
        console.error("Error submitting form: ",error);
    }


  }

  return (
    <section className='flex flex-col max-container'>
      {/* ... (previous code) */}

      {/* last section */}
      <div className='flex flex-row gap-10 w-1/2 my-8'>
        {/* ... (previous code) */}

        {/* last subsection */}
        <div className='flex flex-col gap-5 w-1/2'>
          <h2 className='regular-20'>CONTACT</h2>
          
          <form className='max-w-md my-3' onSubmit={handleSubmit(onSubmit)}>
            {/* first row */}
            <div className='mb-4 flex'>
              <div className='mr-2 flex-1'>
                <input
                  {...register('name')}
                  className='w-full px-3 py-2 border rounded-md border-brown-50 focus:outline-none bg-transparent text-brown-50 placeholder-brown-30'
                  placeholder='Name'
                />

                {errors.name && (
                  <p className='text-red-500'>{`${errors.name.message}`}</p>
                )}
              </div>

              <div className='ml-2 flex-1'>
                <input
                  {...register('phoneNumber')}

                  className='w-full px-3 py-2 border rounded-md border-brown-50 focus:outline-none bg-transparent text-brown-50 placeholder-brown-30'
                  placeholder='Phone'
                />

                {errors.phone && (
                  <p className='text-red-500'>{`${errors.phone.message}`}</p>
                )}
              </div>
            </div>

            {/* second row */}
            <div className='mb-4'>
              <input
                {...register('email')}
                className='w-full px-3 py-2 border rounded-md border-brown-50 focus:outline-none bg-transparent text-brown-50 placeholder-brown-30'
                placeholder='Email'
              />
              {errors.email && (
                <p className='text-red-500'>{`${errors.email.message}`}</p>
              )}
            </div>

            {/* text box */}
            <div className='mb-4'>
              <textarea
                {...register('message')}
                className='w-full px-3 py-2 border rounded-md border-brown-50 focus:outline-none bg-transparent text-brown-50 placeholder-brown-30'
                placeholder='Message'
              />

              {errors.message && (
                <p className='text-red-500'>{`${errors.message.message}`}</p>
              )}
            </div>

            <Button type='submit' title='Send' variant='btn_dark_black' hoverBgVariant='btn_white_text' />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
