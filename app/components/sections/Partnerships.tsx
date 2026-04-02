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
            <h2>PARCERIAS</h2>
        </div>

        <div>
            <Carousel className="w-full">
                <CarouselContent>
                {
                    partnerships.map((partner) => {
                        return <CarouselItem key={partner.id} className="basis-full">
                                <div className="relative h-96 rounded-2xl overflow-hidden">
                                    {
                                        < Image
                                        src={partner.image}
                                        alt={partner.title}
                                        fill
                                        className="object-cover"
                                        />
                                    }
                                    <div className="absolute inset-0 z-5 bg-linear-to-r from-transparent to-black/70"></div>
                                    <div className="absolute right-0 top-0 bottom-0 w-1/2 z-10 p-8 flex flex-col justify-center">
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