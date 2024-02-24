import React from 'react'

const About = () => {
  return (
    <section name="about" className='w-full h-screen font-medium'>
        <div className='container mx-auto h-full relative'>
        {/* text and image wrap */}

        <div className='flex flex-col lg:flex-row h-full items justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
            {/* image */}
            <div className='flex-1 max-h-96 lg:max-h-max lg:mt-[170px] order-2 lg:order-none overflow-hidden'>
               <img className='lg:h-[300px] lg:ml-[300px] lg:rounded-[100%]' src={require('../images/laiza4.jpg')} alt='Queen of beauty' />
            </div>

            {/* text */}
            <div className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
                <h1 className='text-3xl text-[#9d0208] font-bold'>About Me</h1>
                <p className='text-[#495057]'>
                Meet Laiza, a captivating blend of grace, kindness, and joy, whose smile lights up the room with warmth and positivity.
                </p>
                <br />
                <p className='text-[#495057]'>
                She brings light to every moment, whether it's through her love for nature, her passion for reading, or
                her simple acts of kindness that touch the hearts of those around her.
                </p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
