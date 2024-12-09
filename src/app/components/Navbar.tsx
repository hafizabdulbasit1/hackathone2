import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
const Navbar = () => {
  return (
<section className="px-6">
  {/* Top Bar */}
  <div className="bg-[#F5F5F5] flex flex-wrap justify-between items-center py-2">
    {/* Logo */}
    <div className="w-9 h-9">
      <img src="logo.png" alt="Logo" className="w-full h-full object-contain" />
    </div>

    {/* Menu Items */}
    <div className="flex flex-wrap pr-4">
      <ul className="flex flex-wrap space-x-4 text-sm md:text-base">
        <li className="hover:underline cursor-pointer">Find a Store</li>
        <li className="hover:underline cursor-pointer">Help</li>
        <li className="hover:underline cursor-pointer">Join Us</li>
        <li className="hover:underline cursor-pointer">Sign In</li>
      </ul>
    </div>
  </div>

  {/* Header Section */}
  <header className="flex flex-wrap justify-between items-center bg-[#FFFFFF] py-4 px-6">
    {/* Left Logo */}
    <div className="w-10 h-10 md:w-13 md:h-13">
      <img src="logo1.png" alt="Logo1" className="w-full h-full object-contain" />
    </div>

    {/* Navigation Links */}
    <nav className="flex flex-wrap md:ml-auto md:mr-auto items-center text-base justify-center">
      <a className="mr-4 md:mr-5 hover:text-gray-900 text-gray-900">New and Featured</a>
      <a className="mr-4 md:mr-5 hover:text-gray-900 text-gray-900">Men</a>
      <a className="mr-4 md:mr-5 hover:text-gray-900 text-gray-900">Women</a>
      <a className="mr-4 md:mr-5 hover:text-gray-900 text-gray-900">Kids</a>
      <a className="mr-4 md:mr-5 hover:text-gray-900 text-gray-900">Sales</a>
      <a className="mr-4 md:mr-5 hover:text-gray-900 text-gray-900">Snaks</a>
    </nav>

    {/* Search and Icons */}
    <div className="flex items-center space-x-4">
      <div className="flex items-center border-b border-gray-300 focus-within:border-black">
        <FaSearch className="w-5 h-5 text-gray-600" />
        <input
          type="text"
          id="search"
          placeholder="What are you looking for?"
          className="ml-2 text-sm md:text-base focus:outline-none placeholder-gray-400"
        />
      </div>
      <IoMdHeartEmpty className="w-7 h-7 text-gray-600 cursor-pointer" />
      <CiLock className="w-7 h-7 text-gray-600 cursor-pointer" />
    </div>
  </header>
</section>

  )
}

export default Navbar
