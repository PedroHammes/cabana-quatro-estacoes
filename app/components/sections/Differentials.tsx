import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image";

export default function Differentials() {
    
    const details = [
        {title: "Claraboia", description: "   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit deleniti vero natus voluptates beatae alias maxime impedit officiis dolores.", image: "/images/20260316_105845.jpg"},
        {title: "Pitfire", description: "   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit deleniti vero natus voluptates beatae alias maxime impedit officiis dolores.", image: "/images/20260316_105845.jpg"},
        {title: "Ofurô", description: "   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit deleniti vero natus voluptates beatae alias maxime impedit officiis dolores.", image: "/images/20260316_105845.jpg"},
        {title: "Rede Suspensa", description: "   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit deleniti vero natus voluptates beatae alias maxime impedit officiis dolores.", image: "/images/20260316_105845.jpg"}
    ]
  return <section id="differentials" className="px-6 py-16 md:px-12 snap-start min-h-screen flex flex-col justify-center">
    <h2>A Cabana - diferenciais</h2>
    <Carousel className="w-full">
        <CarouselContent>
            {
                details.map( (detail) => {
                        return <CarouselItem key={detail.title}
                            className="
                            basis-1/2 lg:basis-1/3
                            "
                            >
                                <div className="
                                relative h-80
                                rounded-2xl overflow-hidden
                                ">
                                    {<Image
                                        src={detail.image}
                                        fill
                                        alt={detail.title}
                                        className="object-cover"
                                    />}
                                    <div className="absolute inset-0 z-5 bg-linear-to-t from-black/70 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 z-10 p-4">
                                        <p>{detail.title}</p>
                                        <p>{detail.description}</p>
                                    </div>
                                </div>
                            

                        </CarouselItem>
                })
            }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
  </section>
}