import React, { useEffect, useState } from 'react'
import image1 from '../assest/banner/1.jpg'
import image2 from '../assest/banner/2.png'
import image3 from '../assest/banner/3.jpg'
import image4 from '../assest/banner/4.jpg'
import image5 from '../assest/banner/5.jpg'


import image1Mobile from '../assest/banner/6.jpg'
import image2Mobile from '../assest/banner/7.jpeg'
import image3Mobile from '../assest/banner/8jpg.jpg'
import image4Mobile from '../assest/banner/9.jpg'
import image5Mobile from '../assest/banner/10.jpg'

import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";


const BannerProduct = () => {
    const [currentImage,setCurrentImage] = useState(0)

    const desktopImages = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image1Mobile,
        image2Mobile,
        image3Mobile,
        image4Mobile,
        image5Mobile
    ]

    const mobileImages = [
        image1Mobile,
        image2Mobile,
        image3Mobile,
        image4Mobile,
        image5Mobile
    ]

    const nextImage = () =>{
        if(desktopImages.length - 1 > currentImage){
            setCurrentImage(preve => preve + 1)
        }
    }

    const preveImage = () =>{
        if(currentImage != 0){
            setCurrentImage(preve => preve - 1)
        }
    }


    useEffect(()=>{
        const interval = setInterval(()=>{
            if(desktopImages.length - 1 > currentImage){
                nextImage()
            }else{
                setCurrentImage(0)
            }
        },2000)

        return ()=> clearInterval(interval)
    },[currentImage])

  return (
    <div className='container  px-4 rounded pl-10 pr-10 '>
        <div className='h-56 md:h-80 w-full bg-slate-300 relative pl-10 pr-8'>

                <div className='absolute z-10 h-full w-full md:flex items-center hidden  pr-10'>
                    <div className=' flex justify-between w-full text-xl pr-8'>
                        <button onClick={preveImage} className='bg-white shadow-md rounded-full p-5 customShadow'><FaAngleLeft/></button>
                        <button onClick={nextImage} className='bg-white shadow-md rounded-full p-5 customShadow'><FaAngleRight/></button> 
                    </div>
                </div>

                {/**desktop and tablet version */}
              <div className='hidden md:flex h-80 w-full overflow-hidden customShadow'>
                {
                        desktopImages.map((imageURl,index)=>{
                            return(
                            <div className='w-full h-full min-w-full min-h-full transition-all border-double border-4 border-indigo-100 ... ' key={imageURl} style={{transform : `translateX(-${currentImage * 100}%)`}}>
                                <img src={imageURl} className='w-full h-full '/>
                            </div>
                            )
                        })
                }
              </div>


                {/**mobile version */}
                <div className='flex h-full w-full overflow-hidden md:hidden'>
                {
                        mobileImages.map((imageURl,index)=>{
                            return(
                            <div className='w-full h-full min-w-full min-h-full transition-all' key={imageURl} style={{transform : `translateX(-${currentImage * 100}%)`}}>
                                <img src={imageURl} className='w-full h-full object-cover'/>
                            </div>
                            )
                        })
                }
              </div>


        </div>
    </div>
  )
}

export default BannerProduct