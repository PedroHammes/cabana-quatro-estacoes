import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

export default function Team() {
    const team = [
        {
            id: 1,
            name: "Misael",
            title: "Proprietário",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda ratione mollitia commodi culpa excepturi.",
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/841739583.jpg?k=efa6f340203e87ade5b8f9017097e9d2536ea1f1b49f48d01ccbf0fa8aa36812&o="
        },
        {
            id: 2,
            name: "Juliana Martins",
            title: "Atendente",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda ratione mollitia commodi culpa excepturi.",
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/841739583.jpg?k=efa6f340203e87ade5b8f9017097e9d2536ea1f1b49f48d01ccbf0fa8aa36812&o="
        }
    ]
  return <section id="team" className="px-6 py-16 md:px-12">
    <h2>EQUIPE</h2>
    <div className="
    flex flex-col md:flex-row
    gap-6
    ">
        {
            team.map( (member) => {
                return <div key={member.id}>
                    <div className="relative h-80 w-full rounded-2xl overflow-hidden">
                        {
                            <Image
                                src={member.image}
                                alt="..."
                                className="object-cover"
                                fill
                            />
                        }
                        <div className="absolute inset-0 z-5 bg-linear-to-t from-black/80 to-transparent" />
                    </div>
                    <div>
                        <h3>{member.name}</h3>
                        <p>{member.title}</p>
                        <p>{member.description}</p>
                    </div>
                </div>
            })
        }
    </div>
  </section>
}