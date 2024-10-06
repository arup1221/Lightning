'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface SmallCardProps {
    image: string;
    alt: string;
    heading: string;
    description: string;
}

const SmallCard = ({ image, alt, heading, description }: SmallCardProps) => {
    return (
        <motion.div
            whileHover={{
                scale: 1.05,
                boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#BFDBFE',
            }}
            transition={{ duration: 0.3 }}
            className='h-[12rem] w-[20rem] bg-[#FCFDFE] p-4 rounded-xl border-blue-500 cursor-pointer z-10'
        >
            <Image src={image} width={100} height={100} className='h-10 w-10' alt={alt} />
            <motion.p
                whileHover={{ color: '#2563EB' }}
                className='mt-1 font-bold'
            >
                {heading}
            </motion.p>
            <p className='text-sm text-gray-500 mt-1'>
                {description}
            </p>
        </motion.div>
    );
}

export default SmallCard;
