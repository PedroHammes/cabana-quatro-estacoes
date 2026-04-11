import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

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

    return <section id="partnerships"
    className="
    snap-start h-screen
    py-16 md:py-32 px-4 lg:px-0 lg:mx-32 max-w-full
    flex flex-col flex-1 items-center justify-center
    ">
        {/* Card Principal */}
        <div className="
        flex flex-col flex-1 h-full md:flex-row md:min-h-80 w-full
        rounded-2xl overflow-hidden
      bg-olive-500
        ">
            <Carousel className="w-full h-full flex-1 min-h-0 [&>div]:h-full">
                <CarouselContent className="-ml-4 h-full">
                {
                    partnerships.map((partner) => {
                        return <CarouselItem key={partner.id}
                        className="
                        basis-full h-full transition-all duration-500
                        ">
                            <div className="
                            relative h-full rounded-2xl overflow-hidden
                            flex flex-col
                            ">
                                < Image
                                src={partner.image}
                                alt={partner.title}
                                fill
                                className="object-cover"
                                />
                                <div className="absolute inset-0 z-5 bg-linear-to-t from-black/70 to-transparent"></div> 
                                <div className="relative mt-auto p-4 z-10">
                                    <h3>{partner.title}</h3>
                                    <p>{partner.description}</p>
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