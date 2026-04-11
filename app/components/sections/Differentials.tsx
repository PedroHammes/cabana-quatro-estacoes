"use client"
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Image from "next/image";
import { type CarouselApi } from "@/components/ui/carousel"
import React from "react";

export default function Differentials() {
    const details = [
        {index: 1, title: "Claraboia", image: "/ux/04-structure/diferenciais/photos/01claraboia.jpg"},
        {index: 2, title: "Pitfire", image: "/ux/04-structure/diferenciais/photos/02pitfire.png"},
        {index: 3, title: "Ofurô", image: "/ux/04-structure/diferenciais/photos/03ofuro.jpg"},
        {index: 4, title: "Rede Suspensa", image: "/ux/04-structure/diferenciais/photos/04redesuspensa.jpg"},
        {index: 5, title: "Balanço", image: "/ux/04-structure/diferenciais/photos/05balanco.jpg"},
        {index: 6, title: "Modelo", image: "/ux/04-structure/diferenciais/photos/06modelo.jpg"},
        {index: 7, title: "Pergolato", image: "/ux/04-structure/diferenciais/photos/07pergolato.jpg"},
        {index: 8, title: "Vista", image: "/ux/04-structure/diferenciais/photos/08vista.jpg"},
        {index: 9, title: "Vitrola Retrô", image: "/ux/04-structure/diferenciais/photos/09vitrolaretro.jpg"}
    ]

    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)

    React.useEffect(() => {
        if (!api) return
    api.on("select", () => {
        setCurrent(api.selectedScrollSnap())
    })
    }, [api])

  return <section id="differentials"
  className="
  snap-start h-screen
  py-16 md:py-32 mx-0 px-4 lg:mx-32
  flex flex-col flex-1 items-center justify-center
  ">

    {/*Card principal*/}
    <div className="
    flex flex-col flex-1 h-full md:flex-row md:min-h-80
    rounded-2xl overflow-visible
    bg-[#698061] text-white
    ">
        <Carousel setApi={setApi} opts={{ align: "center", containScroll: false }} 
        className="w-full h-full flex-1 min-h-0 [&>div]:h-full">
            <CarouselContent className="-ml-4 h-full">
                {
                    details.map( (detail, index) => {
                        const isActive = index == current
                        return <CarouselItem key={detail.title}
                        className={isActive 
                            ? "basis-[60%] md:basis-[60%] h-full transition-all duration-500"
                            : "basis-[40%] md:basis-[40%] h-full transition-all duration-500"}
                        >
                            <div className="
                            relative h-full rounded-2xl overflow-hidden
                            flex flex-col
                            ">
                                <Image
                                    src={detail.image}
                                    fill
                                    alt={detail.title}
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 z-5 bg-linear-to-t from-black/70 to-transparent"></div> 
                                <div className="
                                relative mt-auto p-4 z-10
                                ">
                                    <h3>{detail.title}</h3>
                                    {isActive}
                                </div>
                            </div>
                        </CarouselItem>
                    })
                }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>


  </section>
}