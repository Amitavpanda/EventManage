"use client"

import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { animate, motion } from "framer-motion";
import { useCycle } from 'framer-motion';
import { useRef } from 'react';
import { menuItems, navigation, sidebar } from "../utils/motion"
import { FaHamburger } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa";
import Logo from "../public/Logo.png";

function Navbar() {

    const router = useRouter();
    const [open, setOpen] = useState(false);
    const handleNavLinkClick = (href: string) => async (e: React.MouseEvent) => {
        e.preventDefault();

        const result = await router.push(href);

    };
    return (

        <nav className='fixed top-0 mb-20 w-full flexBetween padding-container bg-opacity-70 backdrop-filter backdrop-blur-lg glow-shadow z-30 py-5 h-15'>

            <Link href="/">
                <Image width={50}
                    height={50}
                    src={Logo}
                    priority
                    sizes="(min-width: 808px) 50vw, 100vw"
                    alt="Image of Logo"
                    className='rounded-lg' />
            </Link>


            <ul className="hidden h-full gap-12 md:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={`${link.href}`} key={link.key} className='regular-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold text-brown-50' onClick={handleNavLinkClick(`${link.href}`)}
                    >
                        {link.label}
                    </Link>

                ))}
            </ul>


            <div className='hidden h-full flex-col md:flex text-brown-50'>
                <p className='regular-16'>+91 9438302324</p>
                <p className='regular-16'>pandaprasanta01@gmail.com</p>
            </div>


            <div className='md:hidden cursor-pointer text-brown-50' onClick={() => setOpen(true)}>
                <FaHamburger />
            </div>

            {open && (
                <motion.div variants={sidebar}
                    initial="intial"
                    animate="animate"
                    exit="exit"
                    className='fixed left-0 top-0 w-full origin-top h-screen bg-brown-50 text-black-100 p-10'>
                    <div className='flex flex-col h-full'>

                        <div className='flexBetween'>
                            <div className='text-black-100 regular-32'>Logo</div>
                            <div className='text-black-100 font-bold cursor-pointer' onClick={() => setOpen(false)}><FaDoorOpen className="regular-32" width={500} height={500} /></div>
                        </div>

                        <motion.div className=' flexCenter flex-col h-full gap-y-6' initial="closed" animate="open" exit="close" variants={navigation}>
                            {NAV_LINKS.map((link) => (

                                <>
                                    <motion.div className='overflow-hidden ' variants={menuItems}>
                                        <Link href={`${link.href}`} key={link.key} className='regular-32 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold text-black-100 ' onClick={() => {
                                            setOpen(false);
                                            handleNavLinkClick(`${link.href}`);

                                        }}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                </>

                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </nav>

    )
}

export default Navbar;