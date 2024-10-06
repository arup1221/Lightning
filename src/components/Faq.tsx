'use client';
import React from 'react'
import FAQAccordion from './subcomponent/Accordion'
import { motion } from 'framer-motion';
import { ChevronRight } from "lucide-react"
const Faq = () => {
  return (

    <div id='faqs' className='flex justify-center z-50'>
      <div className='bg-gray-100 w-full md:w-3/5 border-[2px] border-gray-200 rounded-xl'>
        <p className='m-4 ml-10 text-md text-blue-500 font-bold'>FAQs</p>
        <h1 className='m-4 ml-10 text-3xl font-bold'>All your Questions, Answered</h1>
        <div className='flex flex-col justify-center items-center'>
          <FAQAccordion />

          <motion.button
            className='w-40 h-10 m-6 bg-white font-bold rounded-3xl text-black border-2 border-blue-500 flex items-center justify-center'
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Read all FAQs
            <ChevronRight className='w-4 h-4 ml-2' />
          </motion.button>

        </div>
      </div>
    </div>

  )
}

export default Faq