import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function Navbar() {
  return (
    <nav className='flexBetween padding-container relative z-30 py-5' style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
        <Link href="/">
            Logo
        </Link>

        <ul className="hidden h-full gap-12 md:flex">
            {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className='regular-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold text-brown-50' >
                    {link.label}
                </Link>

            ))}

        </ul>
        
        <div className='hidden h-full flex-col md:flex text-brown-50'>
            <p className='regular-16'>+91 7077404655</p>
            <p className='regular-16'>pandaamitav01@gmail.com</p>
        </div>
        
        <Image 
        src="menu.svg"
        alt='menu'
        width={22}
        height={22}
        className='inline-block cursor-pointer md:hidden'/>
    </nav>
  )
}

export default Navbar;