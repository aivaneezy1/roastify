import * as React from "react"

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
import Link from "next/link"
import Image from "next/image"
export function CarouselDesktop() {

    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="max-w-xl "
        >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-3/4  ">

                        <div className="p-1">
                            <Card>
                                <Link href={LinkCategories(index + 1) || ""}>
                                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6 cursor-pointer">

                                        <span className="text-3xl font-semibold text-center">

                                            {renderCategories(index + 1)}
                                        </span>
                                    </CardContent>
                                </Link>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
