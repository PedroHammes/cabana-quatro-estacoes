import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import React from "react";

export default function Partnerships() {
    const partnerships = [
        {
            id: 1,
            title: "Passeios de Bugre: Alferes Extremo",
            description: "Passeios na região: Para os que gostam de explorar, temos indicações de passeios pela região, proporcionando contato com a natureza e experiências únicas.",
            image_desktop: "/ux/05-partnerships/fotos/alferesextremo.png",
            image_mobile: "/ux/05-partnerships/fotos_mobile/alferesextremo.png"
        },
        {
            id: 2,
            title: "Ninha Estética Massoterapeuta",
            description: "Bem-estar: Também indicamos serviços de massoterapia, ideais para quem deseja relaxar e aproveitar momentos de descanso na cabana.",
            image_desktop: "/ux/05-partnerships/fotos/ninhaestetica.png",
            image_mobile: "/ux/05-partnerships/fotos_mobile/ninhaestetica.png"
        },
        {
            id: 3,
            title: "Padaria Ágape",
            description: "Café da manhã: Disponibilizamos o fornecimento de deliciosas cestas de café da manhã preparadas pela Padaria Ágape, perfeitas para começar o dia com muito sabor e conforto.",
            image_desktop: "/ux/05-partnerships/fotos/padariaagape.png",
            image_mobile: "/ux/05-partnerships/fotos_mobile/padariaagape.png"
        }
    ]
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    
    return <section id="partnerships"
    className="
    mx-4 lg:mx-32
    flex flex-col items-center justify-center
    ">
        <h2>Parceiros</h2>
        {/* Card Principal */}
        <div className="
        w-full h-8/12 lg:h-8/12 rounded-2xl text-white
        ">
            <Carousel
            setApi={setApi}
            opts={{ align: "center", loop: true }}
            className="w-full h-full [&>div]:h-full">
                <CarouselContent className="h-full -ml-1">
                {
                    partnerships.map((partner) => {
                        return (
                            <CarouselItem key={partner.id}
                                className="
                                basis-5/5 h-112
                                transition-opacity duration-500 
                                rounded-2xl overflow-hidden
                                p-2
                                flex flex-col
                                ">
                                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                                    <Image
                                        src={partner.image_mobile}
                                        alt={partner.title}
                                        fill
                                        className="object-cover block lg:hidden"
                                    />
                                    <Image
                                        src={partner.image_desktop}
                                        alt={partner.title}
                                        fill
                                        className="object-cover hidden lg:block"
                                    />
                                    <div className="absolute inset-0 z-5 bg-linear-to-l from-black/90 to-transparent"></div>
                                    <div className="
                                    relative z-10 h-full
                                    flex flex-col justify-end lg:justify-center lg:max-w-[50%]
                                    p-4 lg:p-8 lg:ml-auto
                                    text-left
                                    text-base lg:text-lg
                                    ">
                                        <h3>{partner.title}</h3>
                                        <p>{partner.description}</p>
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
  </section>
}