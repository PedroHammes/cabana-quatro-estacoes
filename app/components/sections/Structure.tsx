import { Button } from "@/components/ui/button";
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
  return <section id="structure" className="px-6 py-16 md:px-12">
    <h2>A Cabana - estrutura</h2>
    <Carousel>
        <CarouselContent>
            {
                rooms.map( (room) => {
                        return <CarouselItem key={room.title}
                            className="
                            basis-1/2 lg:basis-1/3
                            "
                            >
                            <div className="
                            relative h-80
                            rounded-2xl overflow-hidden
                            ">
                                {<Image
                                    src={room.image}
                                    fill
                                    alt={room.title}
                                    className="object-cover"
                                />}
                                <div className="absolute inset-0 z-5 bg-linear-to-t from-black/70 to-transparent" /> 
                                <div className="absolute bottom-0 left-0 right-0 z-10 p-4">
                                    <p>{room.title}</p>
                                    <p>{room.description}</p>
                                </div>
                            </div>
                            

                        </CarouselItem>
                })
            }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
    <div className="flex justify-center mt-4">
        <Button>
            Veja todas as fotos
        </Button>
    </div>
  </section>
}