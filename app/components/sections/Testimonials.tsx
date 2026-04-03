"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star } from "lucide-react"


export default function Testimonials() {
    const testimonials = [
        { id: 1, name: "Fulano", lastname: "DeTal", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia et, expedita sequi voluptas impedit omnis deserunt ipsam nisi praesentium dolore!", rating: 5, date: "01/01/2026", image: "" },
        { id: 2, name: "Fulano", lastname: "DeTal", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia et, expedita sequi voluptas impedit omnis deserunt ipsam nisi praesentium dolore!", rating: 4, date: "01/01/2026", image: "/images/20260315_180605.jpg" },
        { id: 3, name: "Fulano", lastname: "DeTal", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia et, expedita sequi voluptas impedit omnis deserunt ipsam nisi praesentium dolore!", rating: 2, date: "01/01/2026", image: "/images/20260315_180605.jpg" },
        { id: 4, name: "Ciclano", lastname: "DeTal", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", rating: 5, date: "02/01/2026", image: "" },
        { id: 5, name: "Beltrano", lastname: "DeTal", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", rating: 3, date: "03/01/2026", image: "" },
        { id: 6, name: "Fulana", lastname: "DeTal", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", rating: 5, date: "04/01/2026", image: "" },
        { id: 1, name: "Fulano", lastname: "DeTal", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia et, expedita sequi voluptas impedit omnis deserunt ipsam nisi praesentium dolore!", rating: 5, date: "01/01/2026", image: "" },
        { id: 2, name: "Fulano", lastname: "DeTal", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia et, expedita sequi voluptas impedit omnis deserunt ipsam nisi praesentium dolore!", rating: 4, date: "01/01/2026", image: "/images/20260315_180605.jpg" },
        { id: 3, name: "Fulano", lastname: "DeTal", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia et, expedita sequi voluptas impedit omnis deserunt ipsam nisi praesentium dolore!", rating: 2, date: "01/01/2026", image: "/images/20260315_180605.jpg" },
        { id: 4, name: "Ciclano", lastname: "DeTal", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", rating: 5, date: "02/01/2026", image: "" },
        { id: 5, name: "Beltrano", lastname: "DeTal", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", rating: 3, date: "03/01/2026", image: "" },
        { id: 6, name: "Fulana", lastname: "DeTal", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", rating: 5, date: "04/01/2026", image: "" },
    ]

    const chunks = testimonials.reduce((acc, _, i) =>
        i % 3 === 0 ? [...acc, testimonials.slice(i, i + 3)] : acc, [] as typeof testimonials[]
    )

    return <section id="testimonials"
    className="
    snap-start h-screen
    py-16 md:py-32 mx-60
    flex flex-col flex-1 items-center justify-center
    ">

    <div className="
    flex flex-row w-[70%] mx-auto items-center justify-around
    bg-card rounded-2xl p-4
    gap-8 px-12 py-6
    ">
        <p className="text-lg font-semibold">Estamos no ar desde Abril de 2025</p>
        <p className="text-lg font-semibold">245 hospedagens</p>
        <div className="flex flex-row gap-1">
            <Star className="fill-yellow-400 text-yellow-400"/>
            <Star className="fill-yellow-400 text-yellow-400"/>
            <Star className="fill-yellow-400 text-yellow-400"/>
            <Star className="fill-yellow-400 text-yellow-400"/>
            <Star className="fill-yellow-400 text-yellow-400"/>
        </div>

    </div>

    {/*Card principal*/}
    <div className="
    flex flex-col flex-1 h-full md:flex-row md:min-h-80
    rounded-2xl overflow-visible
    bg-olive-500
    ">
        <Carousel className="w-full h-full flex-1 min-h-0 [&>div]:h-full">
            <CarouselContent className="-ml-4 h-full">
                {chunks.map((chunk, i) => (
                    <CarouselItem key={i} className="h-full basis-full pl-4">
                        <div className="flex flex-col gap-4 h-full">
                            {chunk.map((feedback) => (
                                <div key={feedback.id} className="bg-card rounded-2xl p-4 flex-1">
                                    <div className="flex flex-row items-center gap-2">
                                        <Avatar>
                                            <AvatarImage src={feedback.image} alt={feedback.name} />
                                            <AvatarFallback>{feedback.name[0]}{feedback.lastname[0]}</AvatarFallback>
                                        </Avatar>
                                        <p>{feedback.name}</p>
                                    </div>
                                    <p>{feedback.text}</p>
                                    <div className="flex flex-row justify-between">
                                        <p>{feedback.date}</p>
                                        <p>{feedback.rating} <Star className="fill-yellow-400 text-yellow-400 inline" /></p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>

    <div className="flex justify-center">
        <Button asChild>
            <a href="https://www.google.com/travel/search?q=cabana%20quatro%20esta%C3%A7%C3%B5es&g2lb=4965990%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C72958624%2C73059275%2C73064764%2C121529349&hl=pt-BR&gl=br&cs=1&ssta=1&ts=CAEaRQonEiUyIzB4OTkxYjM0NzI2NTE2NGI6MHgzYzI2YzQyOWU1NDdiNTY3EhoSFAoHCOoPEAQYBRIHCOoPEAQYBhgBMgIQAA&qs=CAEyE0Nnb0k1LXFlcXA2RnNaTThFQUU4AkIJCWe1R-UpxCY8QgkJZ7VH5SnEJjw&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwiYuNiN5c-TAxUAAAAAHQAAAAAQBA" target="_blank">
                Deixe seu depoimento
            </a>
        </Button>
    </div>

    </section>
}