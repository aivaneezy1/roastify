import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"
import { renderCategories } from "@/utils/renderCategories"
import { LinkCategories } from "@/utils/renderCategories"

export function CarouselMobile() {
    return (
        <Carousel className="w-full max-w-xs">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Link href={LinkCategories(index + 1) || ""}>
                                <CardContent className="flex aspect-square items-center justify-center p-6 cursor-pointer">
                                    <span className="text-4xl font-semibold text-center">
                                        {renderCategories(index + 1)}
                                    </span>

                                </CardContent>
                            </Link>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
