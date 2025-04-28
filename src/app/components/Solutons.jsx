'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import { AiOutlineRobot } from "react-icons/ai";
import { RiUserStarLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineAnalytics } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";
import { HiOutlineDatabase } from "react-icons/hi";
import { IoLanguageOutline } from "react-icons/io5";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { SiMarketo } from "react-icons/si";
import {motion, useInView} from 'framer-motion'

const SolutionVariants = {
  hidden:{
    y:-50, opacity:0
  },
  visible:(index)=>({
    y:0,opacity:1,
    transition:{
      delay:0.2+index*0.4,duration:0.4
    }
})
}

const Solutons = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

    const solutionData = [
        {
          "title": "Custom AI-Powered Website",
          "description": "Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.",
          "icon": <AiOutlineRobot />,
          "color": "#3b82f6" 
        },
        {
          "title": "Enhanced Patient Conversion",
          "description": "Smart conversion optimization tools to turn visitors into patients with personalized experiences.",
          "icon": <RiUserStarLine />,
          "color": "#a755f7"
        },
        {
          "title": "Real-Time Query Handling",
          "description": "Instant response system for patient inquiries with AI-powered chat support.",
          "icon": <BiMessageDetail />,
          "color": "#23c55e"
        },
        {
          "title": "Medical Report Analysis",
          "description": "Advanced AI analysis of medical reports for quick and accurate patient assessments.",
          "icon": <MdOutlineAnalytics /> ,
          "color": "#f97216"
        },
        {
          "title": "Improved Lead Generation",
          "description": "Data-driven lead generation strategies to attract and engage potential patients.",
          "icon": <FaChartLine/>,
          "color": "#eb4899"
        },
        {
          "title": "Comprehensive Healthcare Database",
          "description": "Extensive medical information database for accurate patient guidance and support.",
          "icon": <HiOutlineDatabase />,
          "color": "#6366f1"
        },
        {
          "title": "Multilingual Support",
          "description": "Breaking language barriers with comprehensive multilingual communication tools.",
          "icon": <IoLanguageOutline/>,
          "color": "#ee4444"
        },
        {
          "title": "Seamless Payment Handling",
          "description": "Secure and efficient payment processing for medical services globally.",
          "icon": <FaMoneyCheckAlt />,
          "color": "#13b8a7"
        },
        {
          "title": "Marketing And SEO Support",
          "description": "Optimized digital presence with advanced SEO and marketing strategies.",
          "icon": <SiMarketo />,
          "color": "#07b6d4"
        }
      ]
      
 
  return ( 
    <div className='w-full h-full bg-[#fafafa] relative'>
         <Image src='/back.jpg' width={1550} height={500} className='h-[850px] -z-50'/>
        <div className='w-full h-full pt-16 absolute flex flex-col items-center z-20 top-0 gap-4'>
            <p className='text-4xl font-bold'>Our Comprehensive Solutions</p>
            <span className='w-24 h-1 bg-[#020530] rounded-full'></span>
            <div ref={ref} className='w-full py-5 px-32 grid grid-cols-3 gap-4 gap-y-8'>
                {solutionData.map((item,index)=>(
                <motion.div
                variants={SolutionVariants} initial='hidden' animate={isInView ? 'visible' : 'hidden'} custom={index}
                key={index} className='bg-white rounded-xl w-96 relative flex flex-col gap-4 px-4 py-6 justify-center shadow-[0_5px_12px_rgba(0,_0,_0,_0.3)] overflow-hidden cursor-pointer'>
                    <div style={{backgroundColor: item.color}} className='rounded-xl w-10 h-10 flex justify-center items-center text-white'>
                        {item.icon}
                    </div>
                    <p className='text-xl font-se'>{item.title}</p>
                    <p className='text-sm'>{item.description}</p>
                    <span style={{backgroundColor: item.color}} className='w-full h-1 absolute bottom-0 left-0'></span>
                </motion.div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Solutons