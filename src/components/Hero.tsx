'use client'
import Image from 'next/image'
import React from 'react'
import { HiLightningBolt } from "react-icons/hi";
import { Button } from './ui/button';
import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from 'next/link';
const Hero = () => {
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
      className='flex flex-col md:flex-row mt-28 md:mt-40 my-10 md:my-14 mx-3 md:mx-20 max-h-full '>
      <div className='w-full md:w-1/2 pr-4 md:pr-16 mt-8 ml-5 md:ml-0'>
        <p className='text-sm text-blue-500 font-bold'>EQUIPPED WITH MILLIONS OF IP RESOURCES</p>
        <div className='text-3xl md:text-5xl flex flex-row mt-2 font-bold'>
          <h1>The Most</h1>
          <HiLightningBolt className='text-blue-500 mx-1 md:mx-2' />
          <span>Complex</span>
        </div>
        <h2 className='text-3xl md:text-5xl font-bold mt-2'>
          Proxy Network
        </h2>
        <p className='mt-4 text-base md:text-lg'>
          Providing Top-Tier Proxies designed to ensure a high success rate on any task, be it easy or difficult.
        </p>

        <div className='mt-6 gap-x-6 flex items-center'>
          <Link href={"/getstarted"}>
            <Button
              type="button"
              className="h-12 md:h-14 w-36 md:w-40 text-white bg-[#3774F6] hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-[0.9rem] md:text-[1rem] px-2 py-2 text-center font-bold"
            >
              Get started <FaArrowRight className='ml-1' />
            </Button>
          </Link>
          <div className='mt-4 md:mt-0 font-bold text-gray-600'>
            View Plans
          </div>
        </div>

        <div className='border-2 border-gray-100 mt-6' />

        <div className='mt-10 border-2 p-1 border-green-400 rounded-xl w-[18.5rem] bg-[#E7F7F2] flex flex-row gap-x-2'>
          <div>
            <Image src="/people.png" height={100} width={100} alt="people" />
          </div>
          <div className='flex flex-col'>
            <div className='text-sm font-bold flex flex-row gap-x-1'>

              <div>Rated 4.9 </div><div><FaStar className='text-green-500' /></div><div> on TrustPilot</div></div>
            <span className='text-[0.8rem] font-bold text-gray-400'>By 1000+ Customers</span>
          </div>
        </div>
      </div>

      <div className='w-[98%] md:w-1/2 flex justify-center items-center mt-8 md:mt-0'>
        <Image src="/hero.png" width={999} height={999} alt='heroimage' className='h-[18rem] md:h-[30rem] w-[98%] object-cover' />
      </div>
    </motion.div>

  )
}

export default Hero