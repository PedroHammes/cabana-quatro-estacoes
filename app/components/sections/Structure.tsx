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
        { index: 1, title: "Sala", description: "Smart TV de 65 polegadas, caixa de som portátil, uma vitrola vintage com discos, Wi-Fi de banda larga e cantinhos para leitura com poltronas aconchegantes e iluminação, decoração , sofá, mini adega de vinhos.", fotos_mob: "/ux/04-structure/fotos-mob/sala.jpg", fotos_desk: "/ux/04-structure/fotos-desk/sala.png"
        },
        { index: 2, title: "Cozinha", description: "Forno elétrico, cooktop de 4 bocas, geladeira, air fryer, máquina de café, água potável, pipoqueira, sanduicheira, liquidificador, aparelho de fondue, panelas completas, taças, abridor de vinho, ralador, garrafa térmica, mesa para café da manhã na cama e toalha de piquenique", fotos_mob: "/ux/04-structure/fotos-mob/cozinha.jpg", fotos_desk: "/ux/04-structure/fotos-desk/cozinha.png"
        },
        { index: 3, title: "Banheiro", description: "Banheiro com chuveiro a gás, toalhas de banho e rosto, amenities (shampoo,condicionador e sabonete), roupões, papel higiênico, ducha higiênica,secador de cabelo e aromatização do ambiente", fotos_mob: "/ux/04-structure/fotos-mob/banheiro.jpg", fotos_desk: "/ux/04-structure/fotos-desk/banheiro.png"
        },
        { index: 4, title: "Quarto", description: "Acomodamos confortavelmente até 4 hóspedes. Cama, ar condicionado, lençóis macios e aconchegantes de 400 fios, cobertores, travesseiros extras, abajures, armários de cabeceira e Persiana elétrica.", fotos_mob: "/ux/04-structure/fotos-mob/quarto.jpg", fotos_desk: "/ux/04-structure/fotos-desk/quarto.png"
        },
        { index: 5, title: "Área Externa", description: "A área externa é um show à parte. Ofurô com vista para as montanhas, redário suspenso, mesa bistrô,churrasqueira com utensílios, chuveiro externo, fogo de chão com cadeiras estilo pavão, um lindo balanço, jardim e um deck com pergolado.", fotos_mob: "/ux/04-structure/fotos-mob/area-externa.jpg", fotos_desk: "/ux/04-structure/fotos-desk/area-externa.png"
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
                                basis-4/5 md:basis-3/5 h-96 lg:h-160
                                transition-opacity duration-500 
                                rounded-2xl overflow-hidden
                                p-2
                                flex flex-col
                                ${isActive ? "opacity-100" : "opacity-40"}`}
                        >
                            <div className="relative h-48 lg:h-8/12 w-full overflow-hidden rounded-t-2xl">
                                <Image
                                src={room.fotos_mob}
                                fill
                                alt={room.title}
                                className="object-cover block lg:hidden"
                                />
                                <Image
                                src={room.fotos_desk}
                                fill
                                alt={room.title}
                                className="object-cover hidden lg:block"
                                />
                            </div>
                            <div className="
                            flex-1 px-4 lg:px-12 flex flex-col gap-2 py-4 lg-py-8 rounded-b-2xl
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
        <Button variant="ghost" onClick={() => api?.scrollPrev()}>
            <Image 
            src="/ux/Assets/arrows/left-green.png"
            width={20}
            height={20}
            alt="Previous" />
        </Button>
        <span>
            <Button asChild
            className="border-2 bg-olive-500 rounded-full"
            >
                <a href="https://www.instagram.com/cabana.quatroestacoes/" target="_blank" rel="noopener noreferrer">
                    Veja todas as fotos
                </a>
            </Button>
        </span>
        <Button variant="ghost" onClick={() => api?.scrollNext()}>
            <Image 
            src="/ux/Assets/arrows/right-green.png"
            width={20}
            height={20}
            alt="Next" />
        </Button>
    </div>
</section>
}