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

export default function Structure() {
    const rooms = [
        { title: "Sala", description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatem ullam voluptas esse natus quam fugit aliquam neque, explicabo distinctio?", image: ""
        },
        { title: "Cozinha", description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatem ullam voluptas esse natus quam fugit aliquam neque, explicabo distinctio?", image: ""
        },
        { title: "Quarto", description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatem ullam voluptas esse natus quam fugit aliquam neque, explicabo distinctio?", image: ""
        },
        { title: "Quarto", description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatem ullam voluptas esse natus quam fugit aliquam neque, explicabo distinctio?", image: ""
        }
    ]

    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)

    React.useEffect(() => {
        if (!api) return
    api.on("select", () => {
        setCurrent(api.selectedScrollSnap())
    })
    }, [api])

    
  return <section id="structure"
  className="
  snap-start h-screen
  py-16 md:py-32 mx-60
  flex flex-col flex-1 items-center justify-center
  ">

    {/*Card principal*/}
    <div className="
    flex flex-col flex-1 h-full md:flex-row md:min-h-80
    rounded-2xl overflow-visible
    bg-olive-500
    ">
        <Carousel setApi={setApi} className="w-full h-full flex-1 min-h-0 [&>div]:h-full">
            <CarouselContent className="-ml-4 h-full">
                {
                    rooms.map( (room, index) => {
                        const isActive = index == current
                            return (
                            <CarouselItem key={room.title}
                            className={isActive 
                                    ? "basis-[70%] h-full transition-all duration-500"
                                    : "basis-[30%] h-full transition-all duration-500"}
                                >
                                <div className="
                                relative h-full rounded-2xl overflow-hidden
                                flex flex-col
                                ">
                                    <Image
                                        src={room.image}
                                        fill
                                        alt={room.title}
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 z-5 bg-linear-to-t from-black/70 to-transparent"></div> 
                                    <div className="
                                    relative mt-auto p-4 z-10
                                    ">
                                        <h3>{room.title}</h3>
                                        {isActive && <p>{room.description}</p>}
                                    </div>
                                </div>
                            </CarouselItem>
                            )
                    })
                }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>


    {/* <div className="flex justify-center mt-4">
        <Button>
            Veja todas as fotos
        </Button>
    </div> */}
  </section>
}