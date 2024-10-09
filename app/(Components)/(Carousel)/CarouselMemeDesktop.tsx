import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { LinkCategories } from "@/utils/renderCategories"
import { renderCategories } from "@/utils/renderCategories"
import { renderMemePics } from '@/utils/renderMemePics'
import Link from 'next/link'
import Image from "next/legacy/image"
const CarouselMemeDesktop = () => {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="max-w-xl"
        >
            <CarouselContent>
                {Array.from({ length: 10 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-4/5">
                        <div className="p-1">
                            <Card>
                                <CardContent className="relative flex flex-col items-center justify-center p-0 aspect-square h-[300px] w-full overflow-hidden">
                                    <Image
                                        src={renderMemePics(index + 1) || ""}
                                        alt="Meme"
                                        layout="fill" // Use 'fill' to cover the entire area
                                        className='object-cover' // Ensure the image covers the entire space
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}

export default CarouselMemeDesktop
