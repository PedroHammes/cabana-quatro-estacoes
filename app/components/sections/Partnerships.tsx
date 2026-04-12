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
            image: "/ux/05-partnerships/photos/alferesextremo.png"
        },
        {
            id: 2,
            title: "Ninha Estética Massoterapeuta",
            description: "Bem-estar: Também indicamos serviços de massoterapia, ideais para quem deseja relaxar e aproveitar momentos de descanso na cabana.",
            image: "/ux/05-partnerships/photos/ninhaestetica.png"
        },
        {
            id: 3,
            title: "Padaria Ágape",
            description: "Café da manhã: Disponibilizamos o fornecimento de deliciosas cestas de café da manhã preparadas pela Padaria Ágape, perfeitas para começar o dia com muito sabor e conforto.",
            image: "/ux/05-partnerships/photos/padariaagape.png"
        }
    ]
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    
    return <section id="partnerships"
    className="
    snap-start h-screen
    py-16 md:py-32 mx-4 lg:mx-32
    flex flex-col items-center justify-center
    ">
        {/* Card Principal */}
        <div className="
        w-full h-[70vh]
        rounded-2xl overflow-hidden
        bg-[#698061] text-white
        ">
            <Carousel
            setApi={setApi}
            opts={{ align: "center", loop: true }}
            className="w-full h-full [&>div]:h-full">
                <CarouselContent className="h-full">
                {
                    partnerships.map((partner) => {
                        return (
                            <CarouselItem key={partner.id}
                                className="basis-5/5 h-full transition-opacity duration-500">
                                <div className="relative h-full overflow-hidden flex flex-col">
                                    <Image
                                        src={partner.image}
                                        alt={partner.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 z-5 bg-linear-to-t from-black/70 to-transparent"></div>
                                    <div className="
                                        relative z-10 h-full
                                        flex flex-col justify-center items-end
                                        p-8 md:p-16 text-right max-w-[50%] ml-auto
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