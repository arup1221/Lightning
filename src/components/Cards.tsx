'use client';
import React from 'react'
import SmallCard from './subcomponent/SmallCard'
import { cardData } from '../../data/data'
import { motion } from "framer-motion";

const Cards = () => {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 20, 
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8, delay: 0.2 }} // Faster and earlier than the previous one
      viewport={{ once: true }}

      className='flex justify-center mt-20 px-4'>
      <div className='flex flex-col justify-center items-center max-w-full'>
        <div className='flex justify-center items-center text-sm font-bold text-blue-500'>
          <p>ABOUT US</p>
        </div>
        <div className='flex justify-center items-center text-xl md:text-3xl font-bold text-center'>
          <h1>Why do businesses choose us for their operations?</h1>
        </div>
        <div className='flex justify-center items-center w-full md:w-[34rem] text-sm md:text-lg text-center text-gray-500 px-4'>
          <p>We offer a reliable & complex proxy infrastructure at everyone&apos;s disposal, ready to deliver outstanding performance</p>
        </div>
        <div className='justify-center items-center mt-8 gap-x-10 grid grid-cols-1 md:grid-cols-3 gap-y-6'>
          {cardData.map((card) => (
            <SmallCard key={card.id} image={card.image} alt={card.alt} heading={card.heading} description={card.description} />
          ))}
        </div>
      </div>
    </motion.div>

  )
}

export default Cards