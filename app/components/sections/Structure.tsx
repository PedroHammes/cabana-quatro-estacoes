import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Image from "next/image";

export default function Structure() {
    const rooms = [
        { title: "Sala", description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatem ullam voluptas esse natus quam fugit aliquam neque, explicabo distinctio?", image: "https://lh3.googleusercontent.com/p/AF1QipOz_viBkuTvckSN1QPQKhVpizjj7EIWr6n2ToQA=w154-h155-n-k-no-nu"
        },
        { title: "Cozinha", description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatem ullam voluptas esse natus quam fugit aliquam neque, explicabo distinctio?", image: "https://lh3.googleusercontent.com/p/AF1QipOz_viBkuTvckSN1QPQKhVpizjj7EIWr6n2ToQA=w154-h155-n-k-no-nu"
        },
        { title: "Quarto", description: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatem ullam voluptas esse natus quam fugit aliquam neque, explicabo distinctio?", image: "https://lh3.googleusercontent.com/p/AF1QipO8kfGvD5_52vBDjP31lEpaFGxjxO_jyOB-JIix=w154-h258-n-k-no-nu"
        }
    ]
  return <section id="structure">
    <Carousel>
        <CarouselContent>
            {
                rooms.map( (room) => {
                        return <CarouselItem key={room.title}
                            className="
                            basis-1/2 lg:basis-1/3
                            "
                            >
                                <p>{room.title}</p>
                                <p>{room.description}</p>
                            <div className="
                            relative h-80
                            ">
                                {<Image
                                    src={room.image}
                                    fill
                                    alt={room.title}
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