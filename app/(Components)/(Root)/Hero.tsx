import React from 'react'
import { CarouselDesktop } from '../(Carousel)/CarouselDesktop'
import { CarouselMobile } from '../(Carousel)/CarouselMobile'
import CarouselMemeDesktop from '../(Carousel)/CarouselMemeDesktop'
import CarouselMemeMobile from '../(Carousel)/CarouselMemeMobile'
const HeroComponent = () => {
    return (
        <>
            <div className='flex justify-center items-center mt-10'>
                <div className='hidden md:block w-full'>
                    <CarouselDesktop />
                </div>

                <div className="block md:hidden w-full">
                    <CarouselMobile />
                </div>
            </div>

            <h3
                className='text-3xl  font-semibold mt-10'>
                <span className='font-bold text-blue-500'>different memes</span> to roast you</h3>

            {/*Meme Carousel */}
            <div className='flex justify-center items-center mt-10'>
                <div className='hidden md:block w-full'>
                    <CarouselMemeDesktop />
                </div>

                <div className="block md:hidden w-full">
                    <CarouselMemeMobile />
                </div>
            </div>
        </>





    )
}

export default HeroComponent
