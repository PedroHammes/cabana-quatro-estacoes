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
        { index: 1, title: "Sala", description: "Internet - TV  - Vitrola Retrô - Iluminação aconchegante - Decoração - Sofá - Mini adega de vinhos", image: "/ux/04-structure/photos/sala.jpg"
        },
        { index: 2, title: "Cozinha", description: "Forno elétrico - Air Fryer - Máquina de café - Água Potável - Pipoqueira - Cooktop 4 bocas - Liquidificador - Aparelho de Fondue - Panelas e Taças - Sanduicheira - Abridor de vinho - Ralador - Mesa para café da manhã na cama - Garrafa térmica - Toalha de picnic", image: "/ux/04-structure/photos/cozinha.jpg"
        },
        { index: 3, title: "Banheiro", description: "Choveiro com água aquecida - Toalhas - Papel higiênico", image: "/ux/04-structure/photos/banheiro.jpg"
        },
        { index: 4, title: "Quarto", description: "Cama - Ar condicionado - Travesseiros e lençóis - Persiana elétrica", image: "/ux/04-structure/photos/quarto.jpg"
        },
        { index: 5, title: "Área Externa", description: "Ofurô relaxante aquecido - Fogo de Chão - Pergolado - Balanço - Rendário - Chuveirão no quintal - Mirante com vista - Churrasqueira", image: "/ux/04-structure/photos/area-externa.jpg"
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
  py-16 md:py-32 mx-0 px-4 lg:mx-32
  flex flex-col flex-1 items-center justify-center
  ">

    {/*Card principal*/}
    <div className="
    flex flex-col flex-1 h-full md:flex-row md:min-h-80
    rounded-2xl overflow-visible
    bg-[#698061] text-white
    ">
        <Carousel setApi={setApi} opts={{ align: "center", containScroll: false }} className="w-full h-full flex-1 min-h-0 [&>div]:h-full">
            <CarouselContent className="-ml-4 h-full">
                {
                    rooms.map( (room, index) => {
                        const isActive = index == current
                            return (
                            <CarouselItem key={room.index}
                            className={isActive 
                                    ? "basis-[60%] lg:basis-[60%] h-full transition-all duration-500"
                                    : "basis-[40%] lg:basis-[60%] h-full transition-all duration-500"}
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