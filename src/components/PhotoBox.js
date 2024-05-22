import React from 'react'
import item1 from "../Gallery/lara.png"
import item2 from "../Gallery/ermenek2.png"
import item3 from "../Gallery/ermenek.png"
import item4 from "../Gallery/lara2.png"
import item5 from "../Gallery/konya.png"
import item6 from "../Gallery/konya2.png"
import "../index.css"

const PhotoBox = () => {
  return (
    <div className='flex flex-row flex-wrap max-w-[850px] justify-center  mx-auto ' >
        <div className='store-item mt-[20px] w-[30%] ml-3 mr-3 '> <img className='max-w-[255px] w-full max-h-[255px] block'  alt='portolio' src={item1}/> </div>
        <div className='store-item mt-[20px] w-[30%]  ml-3 mr-3'> <img className='max-w-[255px] w-full max-h-[255px] block' alt='portolio' src={item2}/> </div>
        <div className='store-item mt-[20px] w-[30%]  ml-3 mr-3'> <img className='max-w-[255px] w-full max-h-[255px] block' alt='portolio' src={item3}/> </div>
        <div className='store-item mt-[20px] w-[30%]  ml-3 mr-3'> <img className='max-w-[255px] w-full max-h-[255px] block' alt='portolio' src={item4}/> </div>
        <div className='store-item mt-[20px] w-[30%]  ml-3 mr-3'> <img className='max-w-[255px] w-full max-h-[255px] block' alt='portolio' src={item5}/> </div>
        <div className='store-item mt-[20px] w-[30%]  ml-3 mr-3'> <img className='max-w-[255px] w-full max-h-[255px] block' alt='portolio' src={item6}/> </div>
    </div>
  )
}

export default PhotoBox
