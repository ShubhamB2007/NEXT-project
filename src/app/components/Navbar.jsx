'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll';

const Navbar = () => {

    const NavLinks = [
        {name:'About',link:'#About'},
        {name:'FAQ',link:'#FAQ'},
        {name:'Contact',link:'#Contact'},
    ]

    const NavVariants = {
       hidden:{y:-50, opacity:0},
       visible:{y:0, opacity:1,
        transition:{delay:0.2, duration:0.3}
       }
    }

  return (
    <motion.div 
    variants={NavVariants} initial='hidden' animate='visible'
    className='w-full h-16 flex items-center justify-center gap-[340px] backdrop-blur-md fixed top-0 z-50'>
        <div className='cursor-pointer'>
        <Image src='/logo.png' alt='logo' width={120} height={120}/>
        </div>
        <div className='flex items-center gap-10 relative left-20'>
            {NavLinks.map((item,index)=>(
               <Link className='cursor-pointer' key={index} to={item.link.substring(1)} smooth={true} duration={500}>
               <span className='link link-underline text-[#bfbfcc] hover:text-white hover:duration-300 font-semibold'>{item.name}</span>
              </Link>
            ))}
        </div>
        <div className='flex gap-5'>
            <button className='button'>
              <span class="button-content">Login </span>
            </button>
            <button className='button'>
              <span class="button-content">Get Started </span>
            </button>
        </div>
    </motion.div>
  )
}

export default Navbar