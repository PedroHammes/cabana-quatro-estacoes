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
            title: "Passeios",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur asperiores rem optio neque et vero quae error ab totam facilis.",
            image: "/images/20260315_180506.jpg"
        },
        {
            id: 2,
            title: "Trilhas",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur asperiores rem optio neque et vero quae error ab totam facilis.",
            image: "/images/20260315_180506.jpg"
        },
        {
            id: 3,
            title: "Turismo",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur asperiores rem optio neque et vero quae error ab totam facilis.",
            image: "/images/20260315_180506.jpg"
        }
    ]

    return <section id="partnerships" className="px-6 py-16 md:px-12">
        <div>
            <h1>PARCERIAS</h1>
        </div>

        <div>
            <Carousel className="w-full max-w-48 sm:max-w-xs">
                <CarouselContent>
                {
                    partnerships.map((partner) => {
                        return <CarouselItem key={partner.id}>
                            <div>
                                <div className="relative h-80">
                                    { < Image
                                    src={partner.image}
                                    fill
                                    alt={partner.title}
                                    className="object-cover"
                                    />}
                                </div>
                                <div>
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