import React from 'react'
import { useState } from 'react';
import { FaHeartbeat } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaTimes } from "react-icons/fa";
import { FaInstagram, FaFacebook} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState (false)
    const handleClick = () => setNav(!nav)

  return (
        <nav className='fixed navbar w-full h-[80px] bg-pink-800 flex justify-between items-center px-2 font-medium text-gray-100'>
            <div className='w-full flex justify-between items-center h-4'>
                <h1 className='text-2xl sm:text-4xl font-extrabold px-4 flex justify-between items-center md:w-[180px]'>
                    Laiza 
                     <span>
                        <FaHeartbeat className='' />
                    </span> 
                </h1>
            </div>

            {/* For menu */}
            <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Picture
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Special
          </Link>
        </li>
      </ul>
            {/* Menu icons */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ?  <TfiMenuAlt className='size-[30px]'/> : <FaTimes  className='size-[30px]' />}
            </div>
            
            {/* For mobile responsive */}
            <ul className={!nav ? 'hidden' : 'absolute bg-black w-full h-screen left-0 top-0 flex flex-col justify-center items-center font-bold text-xl'}>
                <li className='py-4'><a href="/">Home</a></li>
                <li className='py-4'><a href="/">About</a></li>
                <li className='py-4'><a href="/">Images</a></li>
                <li className='py-4'><a href="/">Social</a></li>
            </ul>

            {/* Social icons */}
            <div className='hidden fixed lg:flex flex-col left-0 top-[35%]'>

                {/* facebook */}
                <ul>
                    <li className=' w-[140px] h-[60px] flex justify-between items-center bg-[#03045e] font-bold ml-[-78px] hover:ml-[0px] duration-300'>
                        <a href="https://www.facebook.com/laiza.tecson.37?mibextid=ZbWKwL" className='w-full flex justify-between items-center'>
                        Fb <FaFacebook size={30} />
                        </a>
                    </li>
                </ul>

                {/* Instagram */}
                <ul>
                    <li className=' w-[140px] h-[60px] flex justify-between items-center bg-[#212529] font-bold ml-[-78px] hover:ml-[0px] duration-300'>
                        <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fluvley_006%3Figsh%3DMXZsYW16OGx3aHo2ZQ%253D%253D%26fbclid%3DIwAR2qEk40V4HUPXc6b27-l6VC4qa9hcekzzn_LxKm6Sd_pKdcCOw4ntmX3cc&h=AT3Xa0sdL0cTueCzVK5V6tP07y5l5RSr5_opc0Y4PgoVgTvP_QX_5JLZSk616GfWCNCTDo92TWNTDJ26YFXCAmbOHQGdeWVLx-QFgjl4kiuZpIub_sKk-LgcYSIOd0TKAaQi6g" className='w-full flex justify-between items-center'>
                        Insta <FaInstagram  size={30} />
                        </a>
                    </li>
                </ul>

                {/* Email */}
                <ul>
                    <li className=' w-[140px] h-[60px] flex justify-between items-center bg-[#415d43] font-bold ml-[-78px] hover:ml-[0px] duration-300'>
                        <a href="/" className='w-full flex justify-between items-center'>
                        Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                </ul>

                {/* Profile */}
                <ul>
                    <li className=' w-[140px] h-[60px] flex justify-between items-center bg-[#774936] font-bold ml-[-78px] hover:ml-[0px] duration-300'>
                        <a href="/" className='w-full flex justify-between items-center'>
                        Profile <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
                </div>

                {/* Image */}
        </nav>
  )
}

export default Navbar
