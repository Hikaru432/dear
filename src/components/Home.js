import React from 'react'
import { FaChessQueen } from "react-icons/fa";
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
   <section className='w-full h-screen font-medium text-gray-950'>
            <div className='max-w-[1000px] mx-auto px-4 py-4 h-full flex flex-col justify-center '>
                <p className='text-[#9d0208]'>Her name is,</p>
                <p className='text-5xl sm:text-8xl font-bold py-4 flex items-center'>
                  Laiza 
                     <span className='px-4 text-[#9d0208]'>
                        <FaChessQueen size={30} />
                     </span> 
                </p>
                <p className='text-3xl sm:text-6xl font-bold text-[#495057]'>Queen of my heart </p>
                <p className='max-w-[800px] text-[#495057] py-4'>A modern goddess of beauty. Her charm and kindness enchant everyone 
                around her, bringing to mind ancient tales of divine beings who spread love and light. She blends outer elegance
                with inner radiance, making her not just beautiful, but truly captivating in every way.</p>

             <div>
                <button className='group border-2 py-2 px-2 my-2 flex items-center text-[#6c757d] hover:bg-[#9d0208] hover:border-[#9d0208] hover:text-gray-100 duration-100'> 
                    View work 
                    <span className='group-hover:rotate-90 duration-100'>
                        <HiArrowNarrowRight />
                     </span>
                </button>
             </div>

            </div>
   </section>
  )
}

export default Home
