'use client';
import Image from "next/image";
import React from "react";
import { IoDiamond } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { Button } from "./ui/button";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
const AboutUs = () => {
  return (
    <motion.div id="aboutus"
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
      className="flex flex-col max-w-full md:flex-row mt-6 md:mt-16 mb-16 mx-6 md:mx-20 max-h-full justify-center items-center">
      <div className="flex flex-col md:flex-row max-w-full">

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image
            src="/service.png"
            height={1000}
            width={1000}
            alt="service"
            className="h-[35rem] md:h-[45rem] w-full md:w-[40rem]"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div className="font-bold text-blue-500 text-sm mb-6">
            LEARN MORE ABOUT US
          </div>
          <div className="text-2xl md:text-5xl font-bold ml-0 md:ml-0">
            <div>What makes our service</div>
            <div className="flex items-center gap-x-1 md:gap-x-2 mt-0 md:mt-2">
              <span>the</span>
              <IoDiamond className="text-blue-700" />
              <span>Best on the internet?</span>
            </div>
          </div>

          {/* Description Text */}
          <p className="mt-5 text-gray-600 text-md md:text-lg">
            In hac habitasse platea dictumst, Sed erat nibh, vulputate ut lorem at, tincidunt varius magna. Aenean enim dui, lachinia id faucibus a, vestibulum eu mi.
          </p>

          {/* Features Section */}
          <div className="mt-6 text-md md:text-lg">
            <p>We got the best level of everything:</p>
            <div className="mt-4 space-y-3 ml-2">
              <div className="flex flex-row gap-x-2">
                <FaCheck className="text-green-500 mt-1" />
                <p>Mauris dignissim sollicitudin erat eu makes suada</p>
              </div>
              <div className="flex flex-row gap-x-2">
                <FaCheck className="text-green-500 mt-1" />
                <p>Mauris dignissim sollicitudin erat suada</p>
              </div>
              <div className="flex flex-row gap-x-2">
                <FaCheck className="text-green-500 mt-1" />
                <p>Mauris dignissim sollicitudin erat eu elfdsf afdsf.</p>
              </div>
              <div className="flex flex-row gap-x-2">
                <FaCheck className="text-green-500 mt-1" />
                <p>Mauris dignissim sollicitudin erat eu makes suada</p>
              </div>
            </div>
          </div>

          {/* Button Section */}
          <div className="mt-10">
            <Link href={"/getstarted"}>
              <Button
                type="button"
                className="h-14 w-40 text-white bg-[#3774F6] hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-[1rem] px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-bold"
              >
                Get started <FaArrowRight className="ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>

  );
};

export default AboutUs;
