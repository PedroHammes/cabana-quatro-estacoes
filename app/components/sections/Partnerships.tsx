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

    return <section id="partnerships"
    className="
    snap-start h-screen
    py-16 md:py-32 px-8 md:px-0 md:mx-60 max-w-full
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