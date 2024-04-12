
"use client"



import React from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { z } from "zod";
import { resolve } from 'path';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { contactFormSchema } from '@/lib/validator';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { fadeIn, heroMotion, textVariant, zoomIn } from '@/utils/motion';
import Input from './ui/Input';
import Button from './Button';

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

interface ContactProps {
  id: string,
}


function ContactDetails({ title, info }: ContactDetailsInfo) {

  return (
    <div className='border-brown-50 p-6 border flex flex-col flexCenter rounded-lg' >
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

const Contact = ({ id }: ContactProps) => {
  const [ref, inView] = useInView();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: FieldValues) => {
    console.log("inside on submit contact");
    try {
      console.log("Form data submitted: ", data);

      const response = await axios.post('http://localhost:1338/api/contactFormDetails', data);

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
    <motion.section id={id} className='flex-grow flex flex-col max-container' ref={ref} initial="hidden" animate={inView ? "show" : "hidden"} >

      {/* first section */}
      <motion.div className='flex flex-col flexCenter' variants={textVariant(0.2)}>
        <h3 className='text-brown-50 font-alex-brush bold-24'>Location</h3>
        <h2 className='regular-32 uppercase'>CONTACT</h2>
      </motion.div>


      {/* second section */}
      <motion.div className='flex flex-row flex-wrap gap-5 flexCenter mt-6' variants={fadeIn("up", "spring", "0.2", "0.8")}>
        <ContactDetails title='Address' info='Hill Patna, Berhmapur , Ganjam , Odisha' />
        <ContactDetails title='Call Us' info='Call Us: 9438302324' />
        <ContactDetails title='Mail Us' info='pandaprasanta01@gmail.com' />
      </motion.div>

      {/* last section */}
      <div className='flex flex-col gap-10  my-8 lg:flex-row flexCenter'>
        {/* last subsection */}
        <motion.div className='w-1/2' variants={fadeIn("left", "spring", "0.3", "1")}>
          <GoogleMap />
        </motion.div>

        {/* last subsection */}
        <motion.div className='flex flex-col gap-5 w-1/2' variants={fadeIn("right", "spring", "0.4", "1")}>

          <h2 className='regular-20'>CONTACT</h2>

          <FormProvider {...form}>
            <form className='max-w-md' onSubmit={form.handleSubmit(onSubmit)}>
              {/* first row */}
              <div className='flex flex-col flexCenter gap-2 md:flex-row'>
                <Input label="Name" name="name" placeholder="Name" description="Enter your name" help="Inside contact"/>
                <Input label="Phone" name="phoneNumber" placeholder="Phone" description="Enter your Phone"/>
              </div>

              <Input label="Email" name="email" placeholder="Email" description="Enter your Email"/>

              <textarea
                {...form.register('message')}
                className='w-full px-3 py-2 mt-4 border rounded-md border-brown-50 focus:outline-none bg-transparent text-brown-50 placeholder-brown-30'
                placeholder='Message'
              />
              <div className='flexCenter'>
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

        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;
