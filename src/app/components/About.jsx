'use client'

import React, { useRef } from 'react'
import Squares from '../Others/Squares';
import { LiaSuperpowers } from "react-icons/lia";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa6";
import { LuClock } from "react-icons/lu";
import { LuMessageSquareMore } from "react-icons/lu";
import Image from 'next/image'; 
import {motion, useInView} from 'framer-motion'

const AboutVariants = {
  hidden:{
    x:-250, opacity:0
  },
  visible:(index)=>({
    x:0,opacity:1,
    transition:{
      delay:0.2 + index*0.4,duration:0.4
    }
})}

const About = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, threshold: 0.5 });

   const SectionData = [
    {
      "section": "About Us",
      "desc1": "We are a pioneering AI-driven platform focused on revolutionizing the medical tourism industry by addressing inefficiencies and empowering healthcare facilitators.",
      "desc2":"Our solutions streamline operations and enhance the patient experience.",
      "sub-head1":"Modern Solutions",
      "sub-desc1":"Leveraging AI technology for healthcare",
      "icon1":<LiaSuperpowers/>,
      "sub-head2":"Patient-Centric",
      "sub-desc2":"Personalized healthcare experiences",
      "icon2":<IoPersonOutline/>,
      "image": "/section/doctor.jpg"
    },
    {
      "section": "Our Mission ",
      "desc1": "Our mission is to simplify the medical tourism process using AI tools that optimize healthcare facilitator operations, maximize revenue, and provide stress-free treatment journeys.",
      "desc2":"We strive to become the leading platform for healthcare tourism management and digital transformation.",
      "sub-head1":"AI-Powered Solutions",
      "sub-desc1":"Optimizing operations with advanced technology",
      "icon1":<FaRegCircleCheck/>,
      "sub-head2":"Growth Focus",
      "sub-desc2":"Maximizing revenue and opportunities",
      "icon2":<FaChartLine/>,
      "image": "/section/doctor2.jpg"
    },
    {
      "section": "The Challenges We Solve",
      "desc1": "Medical tourism, especially in India, is plagued by disorganization and inefficiency. Facilitators often rely on outdated methods, leading to delayed bookings, inadequate patient support, and missed growth opportunities.",
      "desc2":"Our platform addresses these pain points by streamlining lead management and improving operational efficiency for facilitators and hospitals alike.",
      "sub-head1":"Efficient Operations",
      "sub-desc1":"Streamlined booking and management",
      "icon1":<LuClock/>,
      "sub-head2":"Enhanced Support",
      "sub-desc2":"Improved patient communication",
      "icon2":<LuMessageSquareMore/>,
      "image": "/section/doctor3.jpg"
    }
  ]
  

  return (
    <div ref={ref} className='w-full min-h-screen relative overflow-hidden py-16 flex flex-col gap-12 items-center'>
         <Squares 
            speed={0.3} 
            squareSize={40}
            direction='diagonal'
            borderColor='	#181818'
            hoverFillColor='#222'
            className="absolute w-full h-full top-0 shadow-[inset_0_0_150px_100px_rgba(0,0,0,1)]" 
            />

            {SectionData.map((item,index)=>(
              <motion.div key={index} variants={AboutVariants} initial='hidden' animate={isInView ? 'visible' : 'hidden'} custom={index} className='w-[83.5%] h-[550px] z-10 flex'>
                {index % 2 === 0 ? (
                  <>
                   <div className='w-[35%] h-full flex flex-col justify-center gap-6 text-white pr-2'>
                   <div className='flex flex-col gap-1'>
                    <p className='text-2xl font-bold'>{item.section}</p>
                    <span className='bg-white w-20 h-1 rounded-full'></span>
                   </div>
                   <div className='flex flex-col gap-4'>
                   <p>{item.desc1}</p>
                   <p>{item.desc2}</p>
                   </div>
                   <div className='w-[500px] h-24 flex text-white'>
                       <div className='w-[50%] h-full flex items-center pr-3 gap-2'>
                            <div className='bg-sky-500 w-10 h-10 rounded-xl flex justify-center items-center'>{item.icon1}</div>
                             <div className='flex flex-col gap-1'>
                                <p className='text-base font-bold'>{item['sub-head1']}</p>
                                <p className='text-xs'>{item['sub-desc1']}</p>
                             </div>
                       </div>
                       <div className='w-[50%] h-full flex items-center px-3 gap-2'>
                            <div className='bg-sky-500 w-10 h-10 rounded-xl flex justify-center items-center'>{item.icon2}</div>
                            <div className='flex flex-col gap-1'>
                                <p className='text-base font-bold'>{item['sub-head2']}</p>
                                <p className='text-xs'>{item['sub-desc2']}</p>
                             </div>
                       </div>
                   </div>
                </div>
                <div className='w-[65%] h-full flex justify-end items-center'>
                    <div className='w-[80%] h-[85%] relative overflow-hidden rounded-xl animated-border'>
                    <Image src={item.image} width={700} height={100} alt='image' className='rounded-xl object-cover'/>
                    </div>
                </div>
                </>
                ):(
                  <>
                  <div className='w-[55%] h-full flex justify-start items-center'>
                  <div className='w-[90%] h-[95%] relative overflow-hidden mt-9 animated-border'>

                    <Image src={item.image} alt='image' width={700} height={100} className='rounded-xl'/>
                 </div>
                </div>
                <div className='w-[45%] h-full flex flex-col justify-center gap-6 text-white pr-6'>
                   <div className='flex flex-col gap-1'>
                    <p className='text-2xl font-bold'>{item.section}</p>
                    <span className='bg-white w-20 h-1 rounded-full'></span>
                   </div>
                   <div className='flex flex-col gap-4'>
                   <p>{item.desc1}</p>
                   <p>{item.desc2}</p>
                   </div>
                   <div className='w-[500px] h-24 flex'>
                       <div className='w-[50%] h-full flex items-center pr-3 gap-2'>
                            <div className='bg-sky-500 w-10 h-10 rounded-xl flex justify-center items-center'>{item.icon1}</div>
                            <div className='flex flex-col gap-1'>
                                <p className='text-base font-bold'>{item['sub-head1']}</p>
                                <p className='text-xs'>{item['sub-desc1']}</p>
                             </div>
                       </div>
                       <div className='w-[50%] h-full flex items-center px-3 gap-2'>
                            <div className='bg-sky-500 w-10 h-10 rounded-xl flex justify-center items-center'>{item.icon2}</div>
                            <div className='flex flex-col gap-1'>
                                <p className='text-base font-bold'>{item['sub-head2']}</p>
                                <p className='text-xs'>{item['sub-desc2']}</p>
                             </div>
                       </div>
                   </div>
                </div>
                </>
                )}
                </motion.div>
              ))}
        </div>
  )
}

export default About