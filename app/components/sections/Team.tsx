import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import Footer from "../ui/Footer"

export default function Team(Props: {setOpen: (value: boolean) => void}) {
    const team = [
        {
            id: 1,
            name: "Misael",
            title: "PROPIETÁRIO",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda ratione mollitia commodi culpa excepturi.",
            image: "https://placehold.co/800x600"
        },
        {
            id: 2,
            name: "Juliana Martins",
            title: "ATENDENTE",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda ratione mollitia commodi culpa excepturi.",
            image: "https://placehold.co/800x600"
        }
    ]

  return <section id="team" className="snap-start ">
    <div 
    className="
    h-screen
    py-16 md:py-32 mx-0 lg:mx-32 px-4 max-w-full
    flex flex-col flex-1 items-center justify-center
    ">
        {/* Card principal */}
        <div className="
        flex flex-col md:flex-row flex-1 h-full w-full md:min-h-80 gap-4 min-w-0
        rounded-2xl overflow-hidden
        bg-olive-500
        ">
            {
                team.map( (member) => {
                    return <div key={member.id}
                    className="
                    flex-1 flex flex-col min-h-[40vh]
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
    </div>
    <Footer setOpen={Props.setOpen}/>
  </section>
}