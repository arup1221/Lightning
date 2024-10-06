'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';

const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation Variants for Mobile Menu
  const menuVariants = {
    open: { opacity: 1, height: "auto", transition: { duration: 0.5 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <nav className="fixed w-full top-10 bg-white border-gray-200 dark:bg-gray-900 z-50">
        <div className="ml-5 md:ml-10 mr-5 md:mr-10 flex flex-wrap items-center justify-between py-1 px-4 rounded-xl shadow-md border-2 border-gray-100">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src="/logo.png" className="sm:h-[4rem] sm:w-[12rem]" alt="Logo" width={100} height={100} />
          </Link>

          {/* Right-side buttons for desktop */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/* Log In button for desktop view */}
            <Link
              href="/#login"
              className="hidden md:flex justify-end py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Log In
            </Link>

            {/* Get Started Button */}
            <Link href={"/getstarted"}>
              <Button
                type="button"
                className="sm:w-32 w-25 md:h-25 h-[2.3rem] text-white bg-[#3774F6] hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-bold"
              >
                Get started <FaArrowRight className='font-sm ml-1' />
              </Button>
            </Link>
            {/* Hamburger button for mobile */}
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="mt-1 inline-flex items-center p-2 w-[2rem] h-[2rem] justify-center text-sm text-blue-500 rounded-lg md:hidden hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:text-blue-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded={isMenuOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Dropdown Menu for Mobile with Animation */}
          <motion.div
            className={`w-full md:hidden`}
            initial={false}
            animate={isMenuOpen ? "open" : "closed"}
            variants={menuVariants}
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  rounded-lg bg-white rtl:space-x-reverse dark:bg-gray-800 dark:border-gray-700">
              <li>
                <Link href="/#aboutus" onClick={() => setIsMenuOpen(false)} className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#pricing" onClick={() => setIsMenuOpen(false)} className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/#faqs" onClick={() => setIsMenuOpen(false)} className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/#terms" onClick={() => setIsMenuOpen(false)} className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" onClick={() => setIsMenuOpen(false)} className="block sm:hidden py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Log In
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:w-auto md:order-1">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href="/#aboutus" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/#faqs" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/#terms" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default NavBar;
