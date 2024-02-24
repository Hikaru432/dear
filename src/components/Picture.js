import React from 'react'

const Picture = () => {
  return (
   <section name="picture" className='w-full h-screen font-medium'>
    <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
            {/* Text */}
            <div className='md:max-w-[500px] lg:mx-auto lg:mb-[160px] px-4'>
            <h1 className='text-3xl text-[#9d0208] font-bold'>my Picture</h1>
                <p className='text-[#495057] text-justify pt-4'>
                With a heart as vast as the universe, my love 'Laiza' embraces life with a spirit of adventure, 
                spreading love and compassion wherever she goes. Her presence is a gift, making the world a brighter and more
                beautiful place for all who have the privilege to know her.
                </p>
            </div>

            {/* Image grid */}
            <div className='lg:py-4 grid grid-cols-2 lg:gap-2'>
                {/* image */}
                <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                    <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                        src={require('../images/picture4.jpg')} alt="laiza" />
                </div>
                <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                    <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                        src={require('../images/picture1.jpg')} alt="laiza" />
                </div>
                <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                    <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                        src={require('../images/picture3.jpg')} alt="laiza" />
                </div>
                <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                    <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                        src={require('../images/picture4.jpg')} alt="laiza" />
                </div>
            </div>
        </div>
    </div>

   </section>
  )
}

export default Picture
