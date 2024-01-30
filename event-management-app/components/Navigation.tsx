"use client"


import React from 'react'
import { NAV_LINKS } from '@/constants'
import { motion } from 'framer-motion'
import { navigation } from '@/utils/motion'
import Link from 'next/link'
import router from 'next/router'
import { menuItems } from '@/utils/motion'
function Navigation() {

    const handleNavLinkClick = (href: string) => async (e: React.MouseEvent) => {
        e.preventDefault();

        const result = await router.push(href);

    };
    return (
        <>
            <motion.ul variants={navigation} className='p-10 absolute top-24 width-[4rem] '>
                {NAV_LINKS.map((link) => (
                    <>
                        <motion.li
                              variants={menuItems}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className='mb-4 flex items-center cursor-pointer'>
                            <Link href={`#${link.href}`} key={link.key} className='regular-16 flexCenter cursor-pointer pb-1.5 text-black' onClick={handleNavLinkClick(`${link.href}`)}
                            >
                                {link.label}
                            </Link>
                        </motion.li>

                    </>
                ))}
            </motion.ul>
        </>
    )
}

export default Navigation