import React from 'react'
import "../index.css"
import { MdOutlineSettingsPhone } from "react-icons/md";
import useDarkMode from '../customHooks/useDarkMode';
import { MdSunny } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Header = () => {
    const [darkMode,toggleDarkMode]=useDarkMode();
  return (
    // MAIN HEADER
    <div className='fixed left-0 top-0 z-10 w-full '>
        { <div onClick={toggleDarkMode} className='mode-change'>
            { darkMode ===  false ?  <MdSunny/> : <BsFillMoonStarsFill />}
        </div> }
       <a href="tel:9005059950755" class="phone-float">
        <FaPhoneAlt ></FaPhoneAlt>
       </a>
       <a href="https://wa.me/9005059950755"  target="blank" class="whatsapp_float"><FaWhatsapp></FaWhatsapp></a> 
        {/* hEADER TOP */}
        <div className='h-[3rem] bg-[#1a1d1f]   relative header' id='Home'>
            {/* CONTAINER */}
            <div className='static py-0 px-[15px] mx-auto'>
                {/* TOP RIGHT */}
                <div className='relative float-right'>
                    <ul>
                        {/* PHONE */}
                        <li className='flex flex-row mt-3 mr-8 px-5'>
                            <span className='mt-1 mr-2 text-[#ebe5e5] font-bold '><MdOutlineSettingsPhone /></span>
                            <span className='font-bold  text-[#ebe5e5]'> +90505 995 0755</span>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
        {/* HEADER LOWER */}
        <div>
            {/* CONTAINER */}
            
        </div>

    </div>
  )
}

export default Header
