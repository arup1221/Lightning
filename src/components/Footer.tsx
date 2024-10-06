import Image from 'next/image'
import React from 'react'
import { FaDiscord } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
const Footer = () => {
  const copyright = String.fromCodePoint(169);

  return (
    <div className='z-10 bg-gray-300 -mt-10 pb-8'>
      <div className='flex justify-between flex-col md:flex-row'>
        <div className='mt-20 m-5 ml-6 md:ml-16 max-w-full md:w-1/4'>
          <div>
            <Image src='/logo.png' height={1000} width={100} alt='logo' className='h-20 w-60 rounded-3xl' />
          </div>
          <div className='mt-6 mb-6 '>
            <p>
              LightningProxies offers a complex proxy infrastructure equipped with many proxy solutions in one place. We have Datacenter, Residential, IPv6 & ISP proxies at a cost-effective price.
            </p>
          </div>
          <div className='flex hover:bg-blue-500 bg-blue-600 p-4 rounded-xl gap-x-4 cursor-pointer'>
            <div className='mt-2'>
              <FaDiscord className='text-4xl text-white' />
            </div>
            <div>
              <p className='font-bold text-white text-md'>Join our Discord channel</p>
              <p className='text-white text-sm'>Click here to join our discord commuinty</p>
            </div>
          </div>
        </div>

        <div className='mt-20 grid grid-cols-2 md:grid-cols-3 gap-x-16 mr-0 md:mr-16 ml-10 md:ml-0'>
          <div>
            <h1 className='text-lg text-blue-500 font-bold mt-2'>ACCOUNT</h1>
            <p className='hover:underline cursor-pointer text-sm mt-3'>Create Account</p>
          </div>
          <div>
            <h1 className='text-lg text-blue-500 font-bold mt-2'>PRODUCTS</h1>
            <p className='hover:underline cursor-pointer text-sm mt-3'>IPv6</p>
            <p className='hover:underline cursor-pointer text-sm mt-3'>Datacenter</p>
            <p className='hover:underline cursor-pointer text-sm mt-3'>Residential</p>
            <p className='hover:underline cursor-pointer text-sm mt-3'>ISP</p>
          </div>
          <div>
            <h1 className='text-lg text-blue-500 font-bold mt-2'>EXPLORE</h1>
            <p className='hover:underline cursor-pointer text-sm mt-3'>FAQs</p>
            <p className='hover:underline cursor-pointer text-sm mt-3'>Terms of Service</p>
            <p className='hover:underline cursor-pointer text-sm mt-3'>Privacy Policy</p>
            <p className='hover:underline cursor-pointer text-sm mt-3'>Cookie Policy</p>
          </div>
        </div>
      </div>
      <div className='border-[1px] min-w-max m-8 border-gray-400'></div>
      <div className='flex flex-col md:flex-row justify-between ml-10 md:ml-16 mr-8 md:mr-16'>
        <div className='text-sm'> Copyright {`${copyright}`} 2025 LightningProxies All rights reserved.</div>
        <div className='flex flex-row gap-x-4 text-xl cursor-pointer justify-center items-center mt-3 md:mt-0'>
          <BiLogoTelegram />
          <RiInstagramFill />
          <FaTwitter />
          <FaFacebookF />
          <FaDiscord />

        </div>
      </div>
    </div>
  )
}

export default Footer