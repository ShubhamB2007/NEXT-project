'use client'

import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import SpotlightCard from '../Others/SpotlightCard'
import SplitText from '../Others/SplitText'
import {motion} from 'framer-motion'

const ContentVariants = {
    hidden:{
      x:-50, opacity:0
    },
    visible:(index)=>({
      x:0,opacity:1,
      transition:{
        delay:0.5+index*0.4,duration:0.3
      }
  })
}

const HeroVariants = {
    hidden:{
      y:50, opacity:0
    },
    visible:{
      y:0,opacity:1,
      transition:{
        delay:0.2,duration:0.4
      }
  }}

const Hero = () => {

    const Content = [ 
        {name:'Qualified Doctors',number:'2100+'},
        {name:'Hospitals',number:'1000+'},
        {name:'Treatment Plans',number:'800+'},
    ]

  return (
    <div className='w-full min-h-screen bg-[#151846] flex flex-col items-center'>
        <div className='w-[88.5%] mt-16 flex justify-between'>
  
            <motion.section 
             variants={HeroVariants} initial='hidden' animate='visible'
            className="bg-transparent text-white max-w-[600px] px-12 py-24 flex flex-col gap-6">
            <h1 className="text-5xl font-bold leading-tight">
                    <span className="text-[#7d69e2] font-semibold">AI Front Office</span> for Healthcare Agents
                </h1>
                <p className="text-lg text-gray-300">
                    Create your <strong className="text-[#7d69e2]">AI Store</strong> in just 2 minutes.
                    Scale faster with <strong className="text-[#7d69e2]">Digital Marketing</strong>.
                </p>
                <button className="text-white start-button cursor-pointer py-4 px-8 rounded-lg text-lg font-semibold transition duration-300 flex justify-center">
                    Get Started
                <div class="arrow-wrapper">
                    <div class="arrow"></div>
                </div>
                </button>
                </motion.section>

                <motion.section
                 variants={HeroVariants} initial='hidden' animate='visible'
                >
                    <Image src='/image2.svg' alt='image' width={100} height={100} className='w-[700px] floating'/>
                </motion.section>
        </div>

        <div className='w-[80%] flex justify-center items-center gap-20 pb-4'>
            {Content.map((item,index)=>(
                <motion.div key={index} variants={ContentVariants} initial='hidden' animate='visible' custom={index}>
                <SpotlightCard className="w-72 h-36 text-white font-bold flex justify-center items-center cursor-pointer" spotlightColor="rgba(100, 91, 255, 0.3)">
                     <div className="flex flex-col items-center gap-2">
                        <p className='text-3xl'>{item.number}</p>
                        <p className='text-xl'>{item.name}</p>
                     </div>
                </SpotlightCard>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Hero