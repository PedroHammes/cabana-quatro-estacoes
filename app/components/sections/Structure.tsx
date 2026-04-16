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
    mx-4 lg:mx-32
    flex flex-col items-center justify-center
  ">
    <h2>Estrutura</h2>
    {/* Carousel */}
    <div className="
    w-full h-8/12 lg:h-8/12 rounded-2xl text-white
    ">
        <Carousel
        setApi={setApi}
        opts={{ align: "center", loop: true }}
        className="w-full h-full [&>div]:h-full"
        >
            <CarouselContent className="h-full -ml-1">
                {rooms.map((room, index) => {
                    const isActive = index === current
                    return (
                        <CarouselItem key={room.index}
                            className={`
                                basis-4/5 md:basis-3/5 h-96 lg:h-112
                                transition-opacity duration-500 
                                rounded-2xl overflow-hidden
                                p-2
                                flex flex-col
                                ${isActive ? "opacity-100" : "opacity-40"}`}
                        >
                            <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
                                <Image
                                src={room.image}
                                fill
                                alt={room.title}
                                className="object-cover"
                                />
                            </div>
                            <div className="
                            flex-1 p-4 lg:p-8 flex flex-col gap-2 py-4 lg-py-16 rounded-b-2xl
                            lg:gap-8
                            text-justify text-base lg:text-lg bg-[#a9a685] text-olive-950
                            overflow-hidden
                            ">
                                <h3>{room.title}</h3>
                                {isActive && <p>{room.description}</p>}
                            </div>
                        </CarouselItem>
                    )
                })}
            </CarouselContent>
        </Carousel>
    </div>

    {/* Botões de navegação do carousel */}
    <div className="hidden md:flex items-center gap-4 mt-4">
        <Button variant="outline" onClick={() => api?.scrollPrev()}>
            <Image 
            src="/ux/Assets/arrows/left-green.png"
            width={20}
            height={20}
            alt="Previous" />
        </Button>
        <span>
            <Button
            className="border-2 border-[#ffffff] bg-transparent rounded-full"
            >
                Veja todas as fotos
            </Button>
        </span>
        <Button variant="outline" onClick={() => api?.scrollNext()}>
            <Image 
            src="/ux/Assets/arrows/right-green.png"
            width={20}
            height={20}
            alt="Next" />
        </Button>
    </div>
</section>
}