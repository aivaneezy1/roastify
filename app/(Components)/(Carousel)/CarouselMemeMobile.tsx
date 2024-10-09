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
const CarouselMemeMobile = () => {
    return (
        <Carousel className="w-full max-w-xs">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <CardContent className="flex aspect-square items-center justify-center p-6 cursor-pointer">
                                <span className="text-4xl font-semibold text-center">
                                    {renderCategories(index + 1)}
                                </span>
                            </CardContent>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default CarouselMemeMobile
