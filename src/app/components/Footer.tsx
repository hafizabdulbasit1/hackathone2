import React from 'react'


import Image from 'next/image'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div>
    <footer className="text-gray-600 body-font bg-black">
      <div className="container px-5 py-10 mx-auto flex flex-wrap flex-col md:flex-row md:items-start">
        {/* Left Section */}
        <div className="flex-grow flex flex-wrap md:pr-20 md:text-left text-center order-first">
          {/* Column 1 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Find a Store
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-100 hover:text-gray-100">BECOME A MEMBER</a>
              </li>
              <li>
                <a className="text-gray-100 hover:text-gray-100">SIGN UP FOR EMAIL</a>
              </li>
              <li>
                <a className="text-gray-100 hover:text-gray-100">Send Us Feedback</a>
              </li>
              <li>
                <a className="text-gray-100 hover:text-gray-100">STUDENT DISCOUNTS</a>
              </li>
            </nav>
          </div>
          {/* Column 2 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Get A Help
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-500 hover:text-gray-800">Order Status</a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-gray-800">Delivery</a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-gray-800">Returns</a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-gray-800">PasmentOption</a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-gray-800">ContactUsOn Nike.Com</a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-gray-800">ontactUsOn Nike.Com For  All Inquiries</a>
              </li>
            </nav>
          </div>
          {/* Column 3 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Find a Nike
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-500 hover:text-gray-800">News</a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-gray-800">Careers</a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-gray-800">Investor</a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-gray-800">Sustainability</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="bg-black">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2024 Abdul Basit
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @ABDUL BASIT
            </a>
          </p>
          <div className="flex space-x-6 sm:ml-auto mt-4 sm:mt-0 justify-center">
            {/* GitHub Icon */}
            <a
              href="https://github.com/hafizabdulbasit1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6 text-gray-300 hover:text-white transition duration-300" />
            </a>
            {/* WhatsApp Icon */}
            <a href="tel:03097779809" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="w-6 h-6 text-green-400 hover:text-white transition duration-300" />
            </a>
            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="w-6 h-6 text-blue-700 hover:text-white transition duration-300" />
            </a>
            {/* Instagram Icon */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-6 h-6 text-pink-500 hover:text-white transition duration-300" />
            </a>
            {/* YouTube Icon */}
            <a
              href="https://www.youtube.com/@thekingoftheworld"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="w-6 h-6 text-red-600 hover:text-white transition duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
  
  )
}

export default Footer
