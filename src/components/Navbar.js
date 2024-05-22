import React, { useState } from 'react';
import logo from "../Gallery/antalya.jpg";
import { IoMenu } from "react-icons/io5";
import "../index.css";
import { RiEnglishInput } from 'react-icons/ri';
import { TbLetterT } from "react-icons/tb";
import { useLanguage } from '../Context/LanguageContext';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const { language, toggleLanguage } = useLanguage();

    const handleClick = () => {
        setClick(!click);
    };

    return (
        <div className="mt-10 " id='elnavbar'>
            <header id="navbar2" className={`fixed top-4 mt-8 h-24 w-full 
             bg-white flex items-center align-middle justify-between
              py-[28px] px-[12%] lg:py-[14px] lg:px-[2%] transition all 2s ease ${click ? 'open' : ''}`}>
                <a href='/' className='flex items-center'>
                    <img className='min-w-[80px]  h-[95px]' width={100}  src={logo} alt='logo' />
                </a>
                <ul id='navbar' className={`flex space-x-5 sm:absolute top-[100%] ${!click ? "right-[-100%]" : "right-[2%]"} sm:w-[270px] sm:h-[29vh] sm:bg-[#25d366] sm:flex-col sm:justify-start sm:rounded-xl sm:transition-all 0.5s ease sm:gap-7 sm:border-4 mb-16 z-100`}>
                    <li className='mt-16 sm:mt-2'><button className='hover:text-[#25d366] lg:py-1 lg:mx-20[20px] sm:block sm:ml-6 active' 
                    onClick={()=>{
                        const element=document.getElementById("elnavbar")
                        setClick(!click)
                        element.scrollIntoView({
                            behavior:'smooth'
                        })
                    }}>{language === "TURK" ? "Ana Sayfa" : "HomePage"}</button></li>

                    <li className='mt-16 sm:mt-2'><button className='hover:text-[#25d366] lg:py-1 lg:mx-20[20px] sm:block' href='#hakkimizda' onClick={()=>{
                        const element=document.getElementById("hakkimizda")
                        setClick(!click)
                        element.scrollIntoView({
                            behavior:'smooth'
                        })
                    }}    >{language === "TURK" ? "Hakkımızda" : "About Us"}</button></li>


                    <li className='mt-16 sm:mt-2'><button className='hover:text-[#25d366] lg:py-1 lg:mx-20[20px] sm:block' href='#portfolyo' onClick={()=>{
                        const element=document.getElementById("portfolyo")
                        setClick(!click)
                        element.scrollIntoView({
                            behavior:'smooth'
                        })
                    }}
                         >{language === "TURK" ? "Portfolyo" : "Portfolio"}</button></li>
                    <li className='mt-16 sm:mt-2'><button className='hover:text-[#25d366] lg:py-1 lg:mx-20[20px] sm:block' href='#iletisim' onClick={()=>{
                     const element=document.getElementById("iletisim")
                     setClick(!click)
                     element.scrollIntoView({
                         behavior:'smooth'
                     })   
                    }}     >{language === "TURK" ? "İletişim" : "Contact Us"}</button></li>
                </ul>
                <div>
                    <div><IoMenu onClick={handleClick} id='menu-icon' className='size-10 hover:text-[#25d366] hidden mr-10 sm:block' /></div>
                    <div className='cursor-pointer bg-green-400 items-center w-10 h-10 rounded-[100%] content-center'>
                        {language === "TURK" ? <RiEnglishInput onClick={toggleLanguage} className='ml-3' /> : <TbLetterT onClick={toggleLanguage} className='ml-3' />}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
