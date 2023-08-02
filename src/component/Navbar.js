import React, { useState } from 'react';
import logo from '../assests/logo1.png';
import {FaBars, FaTimes,FaLinkedin,FaGithub} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';


export default function Navbar() {
    const [nav,setNav] = useState(false);

    const handleNav = () =>{
        setNav(!nav)
    }
  return (
    <>
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a129f] text-gray-300'>
        <div className=''>
        <img src={logo} alt='' style={{width:'50px'}} />
        </div>
            <ul className='hidden md:flex'>
               <li> <Link to='home' smooth={true} duration={500}>Home</Link></li>
                <li>

                <Link to='about' smooth={true} duration={500}>About</Link>
                </li>
                <li>
                    
                <Link to='skills' smooth={true} duration={500}>Skills</Link>
                </li>
                <li>
                    
                <Link to='work' smooth={true} duration={500}>Works</Link>
                </li>
                <li>

                <Link to='contact' smooth={true} duration={500}>Contact</Link>
                </li>
                {/* <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li> */}
            </ul>
        {/* humberger */}
        <div onClick={handleNav} className='md:hidden z-10'>
           {!nav ?  <FaBars className='' size={30}/>: <FaTimes size={30}/>}
        </div>

        {/* mobile menu */}
        <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#0a129f]'}>
        <li className='py-6 text-4xl'>
          <Link onClick={handleNav} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleNav} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleNav} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleNav} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleNav} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
            </ul>
            {/* social menu */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
        </div>
    </>
  )
}
