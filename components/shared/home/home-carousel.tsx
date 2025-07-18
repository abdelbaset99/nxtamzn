"use client"

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export function HomeCarousel({ items, }: {
    items: {
        image: string;
        url: string;
        title: string;
        buttonCaption: string;
    }[]
}) {
    const autoplay = Autoplay({ delay: 3000, stopOnInteraction: false });

    return (
        <Carousel
            className="w-full mx-auto"
            plugins={[autoplay]}
            dir="ltr"
            onMouseEnter={autoplay.stop}
            onMouseLeave={autoplay.reset}
        >
            <CarouselContent>
                {items.map((item) => (
                    <CarouselItem key={item.title}>
                        <Link href={item.url}>
                            <div className="flex aspect-[16/6] items-center justify-center relative p-6 -m-1">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    layout="fill"
                                    objectFit="cover"
                                    priority
                                />
                                <div className="absolute w-1/3 left-16 md:left-32 top-1/2 transform -translate-y-1/2">
                                    <h2 className="text-xl md:text-6xl font-bold mb-4 text-primary">
                                        {item.title}
                                    </h2>
                                    <Button className="hidden md:block">
                                        {item.buttonCaption}
                                    </Button>
                                </div>
                            </div>
                        </Link>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:left-12" />
            <CarouselNext className="right-0 md:right-12" />
        </Carousel>
    );
}