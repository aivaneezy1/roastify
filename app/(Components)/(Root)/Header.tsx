import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'
import { CarouselDesktop } from '../(Carousel)/CarouselDesktop'
import { CarouselMobile } from '../(Carousel)/CarouselMobile'
import HeroComponent from './Hero'
const HeaderComponent = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-[100px] gap-5 text-center'>
            <h3 className='text-6xl font-bold'>Ready to take the quiz?</h3>
            <h3 className='text-2xl text-gray-500'>Answer wisely, or get prepared to get roasted</h3>
            <h3 className='text-3xl  font-semibold '> <span className='font-bold text-blue-500'>different categories</span> of quiz to choose from</h3>
            <Link href="/categories">
                <Button className='py-6 px-10'>Click here to play</Button>
            </Link>



        </div>
    )
}

export default HeaderComponent
