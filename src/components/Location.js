import React from 'react'
import bela from "../Gallery/bela.jpg"
import "../index.css"
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { useLanguage } from '../Context/LanguageContext'
import { motion } from 'framer-motion';
const Location = () => {
    const {language}=useLanguage();
  return (
    <section className='agent-section mt-[60px] relative mx-auto '>
      <div className='contain m-w-[1100px] flex flex-row mx-auto justify-center bmd:flex-col '>
      
            <motion.div className='agent-image '
              initial="hidden"
              whileInView="visible"
              viewport={{once:true, amount:0.5}}
              transition={{duration:1}}
              variants={{
                hidden:{opacity:0, x:200},
                visible:{opacity:1 , x:0}
              }}     
            >
                <img className='h-[400px] w-[400px] z-0' src={bela} alt='location'/>
            </motion.div>


            <motion.div className='contact ml-7  '           
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            transition={{duration:1.5}}
            variants={{
              hidden:{opacity:0, x:-200},
              visible:{opacity:1 , x:0}
            }}     >
                <div className='bordered-title '>
                    <h2 ><span id='Kolay' className=" text-[#71b100] text-2xl font-bold ">{language === "TURK" ? "BİZİ BULMASI ÇOK KOLAY" : "IT IS EASY TO FIND US"}</span></h2>
                </div>
                <div className='agent-headers'>
                    <h3 className='mt-[10px] text-[16px] text-[#253d4a] font-bold' id='iletisim'>ANTALYA KONUT EMLAK</h3>
                </div>
                <div className='desc-text'>
                    <div className='info-box'>
                        <ul>
                            <li className='address relative w-full flex flex-row mt-8'>
                                <div className='icon'> <CiLocationOn className='text-[#71b100] text-3xl' /></div>
                                <h4 className='ml-5'>
                                    <span className='text-[14px] font-semibold'>{language === "TURK" ? "ADRES" : "ADRESS"}</span>
                                    <br/>
                                    Güzeloba Mahallesi 2216. Sokak,
                                    <br/>
                                    Lara Caddesi. No:6 Daire:4, Antalya
                                </h4>
                            </li>
                            <li className='contact-info mb-8 mt-8 relative w-full flex flex-row'>
                                <div className='icon'><FaPhoneAlt  className='text-[#71b100] text-3xl'/> </div>
                                <h4 className="ml-5"> <span className='text-[14px] font-semibold'>{language === "TURK" ? "TELEFON" : "PHONE"}</span>
                                <br/>
                                +90505 995 0755
                                </h4>
                            </li>
                        </ul>
                        <a className='py-2 px-5 bg-[#71b100] text-white  '                       
                        target='blank' href="https://www.google.co.uk/maps/dir//G%C3%BCzeloba,+Antalya+Konut+Emlak,+Lara+Caddesi,+Muratpa%C5%9Fa%2FAntalya/@36.8622853,30.7993442,17.04z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14c39b54c4833ad3:0xd5cc726d425a3d02!2m2!1d30.8002052!2d36.8631779?entry=ttu">YOL TARİFİ</a>
                    </div>
                </div>
            </motion.div>
       
      </div>
    </section>
  )
}

export default Location
