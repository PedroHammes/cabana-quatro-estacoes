import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Fulano",
            lastname: "DeTal",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia et, expedita sequi voluptas impedit omnis deserunt ipsam nisi praesentium dolore!",
            rating: 5,
            date: "01/01/2026",
            image: ""
        },
        {
            id: 2,
            name: "Fulano",
            lastname: "DeTal",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia et, expedita sequi voluptas impedit omnis deserunt ipsam nisi praesentium dolore!",
            rating: 4,
            date: "01/01/2026",
            image: "/images/20260315_180605.jpg"
        },
        {
            id: 3,
            name: "Fulano",
            lastname: "DeTal",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia et, expedita sequi voluptas impedit omnis deserunt ipsam nisi praesentium dolore!",
            rating: 2,
            date: "01/01/2026",
            image: "/images/20260315_180605.jpg"
        }
    ]
  return <section id="testimonials" className="px-6 py-16 md:px-12">
    <h1>DEPOIMENTOS</h1>
        <Carousel className="flex flex-col md:flex-row">
            <CarouselContent>
            {
                testimonials.map( (feedback) => {
                    return <CarouselItem key={feedback.id} className="
                    basis-1/2
                    ">
                        <div key={feedback.id}>
                            <div>
                                <Avatar>
                                    <AvatarImage
                                    src={feedback.image}
                                    alt={feedback.name}

                                    />
                                    <AvatarFallback>{feedback.name[0]}{feedback.lastname[0]}</AvatarFallback>
                                </Avatar>
                                {feedback.name}
                            </div>
                            <div>
                                {feedback.text}
                            </div>
                            <div className="
                            flex flex-row justify-between
                            ">
                                {feedback.date}
                                {feedback.rating}
                            </div>
                        </div>
                    </CarouselItem>

                })
            }
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>

  </section>
}