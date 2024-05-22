import React, { useState } from 'react'
import banner1 from "../Gallery/ANTALYAKONUT.jpg"
import banner2 from "../Gallery/banner1.jpg"
import banner3 from "../Gallery/banner2.jpg"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";



const Slider = () => {
  const ImageUrls=[banner1,banner2,banner3]
  const [imageIndex,setImageIndex]=useState(0)

  function showNextImage(){
    setImageIndex(index=>{
      if(index=== ImageUrls.length-1) return 0
      return index+1
    })
  }
  function showPrewImage(){
    setImageIndex(index=>{
      if(index=== 0) return ImageUrls.length-1
      return index-1
    })
  }

  return (
    <div className='realtive w-full aspect-[5/2] mt-[130px] pb-10'>
      <div style={{display:"flex" , overflow:"hidden"}}>
            {ImageUrls.map(url=>(
              <img key={url} src={url} style={{translate: `${-100*imageIndex}%`}}  alt='Homes' className='max-h-[450px] min-h-[250px] w-full image-slider'/>
            ))}
      </div>
      
      <button onClick={showPrewImage} className='img-slider-btn block absolute left-4 top-0 bottom-20 sm:bottom-[300px] md:bottom-[250px] lg:bottom-[200px] pointer z-0  '><FaArrowLeft className='size-[2rem]'></FaArrowLeft></button>
      <button onClick={showNextImage} className='img-slider-btn block absolute top-0 right-4 bottom-20 sm:bottom-[300px] md:bottom-[250px] lg:bottom-[200px] pointer z-0'><FaArrowRight className='size-[2rem]'></FaArrowRight></button>
    </div>
  )
}

export default Slider
