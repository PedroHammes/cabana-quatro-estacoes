import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image";

export default function Differentials() {
    
    const details = [
        {title: "Claraboia", description: "   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit deleniti vero natus voluptates beatae alias maxime impedit officiis dolores.", image: "/images/20260316_105845.jpg"},
        {title: "Cozinh", description: "   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit deleniti vero natus voluptates beatae alias maxime impedit officiis dolores.", image: "/images/20260316_105845.jpg"},
        {title: "Quarto", description: "   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit deleniti vero natus voluptates beatae alias maxime impedit officiis dolores.", image: "/images/20260316_105845.jpg"}
    ]
  return <section id="differentials" className="px-6 py-16 md:px-12">
    <Carousel>
        <CarouselContent>
            {
                details.map( (detail) => {
                        return <CarouselItem key={detail.title}
                            className="
                            basis-1/2 lg:basis-1/3
                            "
                            >
                                <p>{detail.title}</p>
                                <p>{detail.description}</p>
                            <div className="
                            relative h-80
                            ">
                                {<Image
                                    src={detail.image}
                                    fill
                                    alt={detail.title}
                                    className="object-cover"
                                />}
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