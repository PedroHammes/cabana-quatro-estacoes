import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

export default function Team() {
    const team = [
        {
            id: 1,
            name: "Misael",
            title: "PROPIETÁRIO",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda ratione mollitia commodi culpa excepturi.",
            image: ""
        },
        {
            id: 2,
            name: "Juliana Martins",
            title: "ATENDENTE",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda ratione mollitia commodi culpa excepturi.",
            image: ""
        }
    ]
  return <section id="team" 
  className="
  snap-start h-screen
  py-16 md:py-32 mx-60
  flex flex-col flex-1 items-center justify-center
  ">
    {/* Card principal */}
    <div className="
    flex flex-col flex-1 h-full w-full md:flex-row md:min-h-80 gap-4
    rounded-2xl overflow-visible
    bg-olive-500
    ">
        {
            team.map( (member) => {
                return <div key={member.id}
                className="
                flex-1 flex flex-col
                ">
                    <div className="
                    relative h-full w-full flex-1
                    rounded-2xl overflow-hidden
                    ">
                        <Image
                            src={member.image}
                            alt="..."
                            className="object-cover"
                            fill
                        />
                        <div className="absolute inset-0 z-5 bg-linear-to-t from-black/80 to-transparent"></div> 
                        <div className="
                        absolute bottom-0 left-0 right-0 z-10 p-4
                        ">
                            <h3>{member.name}</h3>
                            <p>{member.title}</p>
                            <p>{member.description}</p>
                        </div>
                    </div>
                </div>
            })
        }
    </div>
  </section>
}