'use client';
import React from 'react'
import FAQAccordion from './subcomponent/Accordion'
import { motion } from 'framer-motion';
import { ChevronRight } from "lucide-react"
import Link from 'next/link';
const Faq = () => {
  return (

    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: -20,
        },

        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
      id='faqs' className='flex justify-center z-50 max-w-screen'>
      <div className='bg-gray-100 w-screen md:w-3/5 border-[2px] border-gray-200 rounded-xl'>
        <p className='m-4 ml-10 text-md text-blue-500 font-bold'>FAQs</p>
        <h1 className='m-4 ml-10 text-3xl font-bold'>All your Questions, Answered</h1>
        <div className='flex flex-col justify-center items-center'>
          <FAQAccordion />
          <Link href={"/faqs"}>
            <motion.button
              className='w-40 h-10 m-6 bg-white  font-bold rounded-3xl text-black border-2 border-blue-500 flex items-center justify-center'
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Read all FAQs
              <ChevronRight className='w-4 h-4 ml-2' />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>

  )
}

export default Faq