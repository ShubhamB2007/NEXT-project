'use client'

import Image from 'next/image'
import React, { useRef, useState } from 'react'
import {motion, useInView} from 'framer-motion'

const FAQVariants = {
  hidden:{
    y:-5, opacity:0
  },
  visible:(index)=>({
    y:0,opacity:1,
    transition:{
      delay:0.2 + index*0.2,duration:0.2
    }
})}

const Questions = () => {

    const QuestionData = [
        {q:"What is gogetwell.ai?",a:"gogetwell.ai is an AI-powered platform that helps healthcare facilitators streamline their operations, from building customized websites to managing patient leads and enhancing communication."},
        {q:"What is the AI Front Office for Healthcare Agents?",a:"The AI Front Office is a powerful platform that helps me manage my healthcare services more efficiently. It handles patient leads, books appointments, and even builds a professional website—all using AI, so I can focus on delivering care."},
        {q:"How does the AI Agent assist me in my healthcare business?",a:"The AI Agent works like a virtual assistant, answering patient questions, scheduling consultations, and managing appointments in real time. It helps me automate everyday tasks, saving me time and boosting my productivity."},
        {q:"Can I customize the website for my healthcare service?",a:"Yes, I can fully customize the website to showcase my services. I get to choose the design, features, and content that best represent my brand, making it easy to attract and engage with patients."},
        {q:"How does this platform support independent healthcare facilitators like me?",a:"The platform is designed specifically for independent facilitators or small teams. It integrates AI to automate my front-office tasks, manage patient leads, and even process payments, making it ideal for gig economy professionals."},
        {q:"How does the platform help me  manage patient leads?",a:"The AI system captures, organizes, and prioritizes patient leads for me. It follows up with patients, schedules consultations, and makes sure I never miss an opportunity to provide care."},
        {q:"Is it easy to integrate the platform with the hospitals I wrk with?",a:"Yes, the platform easily connects with the hospital systems I collaborate with. It helps me manage billing, communication, and partnerships without any hassle."},
        {q:"Is the platform secure and compliant with healthcare regulations?",a:"Absolutely. The platform is designed with top-level security measures and complies with healthcare regulations, so I know that my patients' data is always protected."},
        {q:"How quickly can I get started with the platform",a:"Setting up the platform is fast and easy. I can create my AI-powered front office and website in no time, and the support team guides me through the entire process."},
        {q:"What kinf of customer support is availabe if i need help?",a:"You have access to 24/7 customer support, along with tutorials and live demos, to make sure you get the most out of the platform and can resolve any issues quickly."},
        {q:"How does platform help me attract more patients?",a:"The platform allows me to create a custom, SEO-optimized website, manage patient communication, and build a strong online reputation, all of which help me attract and retain more patients."},
    ]

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

     const ref = useRef(null);
     const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });
    
  return (
    <div className='w-full h-full flex flex-col items-center py-16'>
         <div className='flex flex-col items-center gap-3 w-[83.5%]'>
            <p className="text-3xl font-bold">Frequently Asked Questions</p>
             <span className="bg-black w-24 h-1 rounded-xl"></span>
             <div className='w-full py-5 min-h-96 flex'>
                 <div ref={ref} className='w-[50%] min-h-full flex flex-col gap-2 items-center px-4 py-4'>
                    {QuestionData.map((item,index)=>(
                      <motion.div 
                      variants={FAQVariants} initial='hidden' animate={isInView ? 'visible' : 'hidden'} custom={index}
                      key={index} className='border-b-2 border-b-[#645bff] py-2 flex flex-col gap-2 w-[90%] cursor-pointer hover:bg-[#f5f8ff] hover:duration-500 rounded-lg'>
                        <div onClick={()=>toggle(index)} className='flex justify-between px-2 items-center'>
                          <p className='font-semibold'>{item.q}</p>
                          <span className={`transform ${openIndex === index ? 'rotate-180' : ''}`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5">
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                                />
                            </svg>
                           </span>
                       </div>
                         <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px]': 'max-h-0'}`}>
                         {openIndex === index && (
                            <div className='px-2 py-2 text-sm'>
                            <p>{item.a}</p>
                            </div>
                          )}
                          </div>
                      </motion.div>
                      ))}
                 </div>
                 <div className='w-[50%] h-full flex justify-center items-center relative'>
                      <Image src='/faq.png' alt='image' width={600} height={100} className='floating'/>
                 </div>
             </div>
         </div>
    </div>
  )
}

export default Questions