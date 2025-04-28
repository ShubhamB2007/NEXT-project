'use client'

import React, { useRef } from 'react'
import Squares from '../Others/Squares'
import Image from 'next/image'
import { cn } from "../lib/utils";
import Form from './Form';
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {motion, useInView} from 'framer-motion'

const ContactVariants = {
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        delay:0.4,duration:1.5
      }
  }}

const Contact = () => {

    
         const ref = useRef(null);
         const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <div className='w-full h-full pt-10 relative'> 
    <div className='w-full h-full'>
        <div className="relative flex flex-col h-[46rem] w-full items-center bg-white dark:bg-black">
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)] dark:bg-black"></div>
            <span ref={ref} className="w-[450px] h-[2px] absolute top-0 bg-gradient-to-r from-[#0d1013] via-[#4790ba] to-[#0d1013]"></span>
            <motion.div variants={ContactVariants} initial='hidden' animate={isInView ? 'visible' : 'hidden'} className='z-20 border h-96'>
            <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-5xl font-bold text-transparent left-80 ml-2">
             Let's get in touch!
            </p>
            <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-0 text-xl font-bold text-transparent text-center">
              Got questions about GoGetWell.AI? Our team is here to help.<br/> Contact us for quick and friendly support.
            </p>
            <div className='ml-[530px] z-20 mt-16'>
            <Form/>
            </div>
            <div className='flex flex-col gap-8 text-[#F1F1F1] z-20 relative right-28 bottom-96 w-96'>
                <div className='flex gap-4 w-[500px]'>
                    <div className='w-[50%] h-full flex gap-2 py-2 border border-gray-600 items-center pl-4 bg-[#080808] rounded-xl'>
                       <div className='w-12 h-12 rounded-xl flex justify-center items-center text-xl hover:bg-gray-800 hover:duration-500 cursor-pointer'><IoCallOutline /></div>
                       <div className='flex flex-col gap-1'>
                           <p>Phone</p>
                           <p>+91 9811396858</p>
                       </div>
                    </div>
                    <div className='w-[50%] h-full gap-2 border border-gray-600 pl-4 py-2 flex items-center bg-[#080808] rounded-xl'>
                       <div className='w-12 h-12                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                rounded-xl flex justify-center items-center text-xl hover:bg-gray-800 hover:duration-500 cursor-pointer'><MdOutlineEmail /></div>
                       <div className='flex flex-col gap-1'>
                           <p>Email</p>
                           <p>hello@gogetwell.ai</p>
                       </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                         <p className='text-xl font-semibold'>Connect with us</p>
                         <div className='flex gap-6 ml-8'>
                            <div className="w-12 h-12 border rounded-xl bg-[#080808] flex justify-center items-center text-xl border-gray-600 hover:bg-gray-800 hover:duration-500 cursor-pointer"><FaTwitter/></div>
                            <div className="w-12 h-12 border rounded-xl bg-[#080808] flex justify-center items-center text-xl border-gray-600 hover:bg-gray-800 hover:duration-500 cursor-pointer"><FaLinkedin/></div>
                         </div>
                    </div>
                <div className='grid grid-cols-2 gap-2 w-72'>
                     <a className='text-gray-300 hover:underline cursor-pointer'>Privacy Policy</a>
                     <a className='text-gray-300 hover:underline cursor-pointer'>Terms of Service</a>
                     <a className='text-gray-300 hover:underline cursor-pointer'>Pricing Policy</a>
                     <a className='text-gray-300 hover:underline cursor-pointer'>Editor Policy</a>
                </div>
            </div>
        </motion.div>
               <span className='font-bold absolute bottom-0 text-white pb-3 text-xs'>©2025 gogetwell.ai</span>
        </div>
    </div>
</div>
  )
}

export default Contact