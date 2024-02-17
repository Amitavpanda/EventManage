import React from 'react';
import Button from './Button';

function Footer() {
  return (
    <section className='flex flex-col bg-black-100 py-2'>
      {/* heading */}
      <div className='flexCenter text-white regular-32 tracking-wide uppercase font-condiment'>Logo name</div>

      {/*  */}
      <div className='flex flex-col md:flex-row gap-4 flexBetween p-6'>

        {/* first column */}
        <div className='flex flex-col gap-3 '>
          <h1 className='text-white regular-24'>News Letter</h1>

          <div className='flex flex-row gap-5 items-center justify-center'>
              <input className='w-full px-1 py-1 h-10 border rounded-md border-white focus:outline-none bg-transparent text-white placeholder-white'
                placeholder='Email' />
              <Button  type='submit' title='Subscribe' variant='btn_white' hoverBgVariant='btn_dark_black_hover' width={20} height={1}/>
          </div>
        </div>

        {/* second column */}
        <div className='flex-col gap-2 py-2 text-center'>
              <p className='text-white regular-24 uppercase'>Contact us</p>
              <p className='text-white regular-24'>Hill Patna, Berhmapur , Ganjam , Odisha</p>
              <p className='text-white regular-24'>Call Us: 9438302324</p>
              <p className='text-white regular-24'>Mail Us:pandaprasanta01@gmail.com</p>
        </div>

      </div>
    </section>
  )
}

export default Footer