import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import Footer from "../ui/Footer"

export default function Team(Props: {setOpen: (value: boolean) => void}) {
    const team = [
        {
            id: 1,
            name: "Juliana Martins",
            title: "ATENDENTE",
            description: "Coanfitriã com foco em proporcionar uma experiência impecável , acolhedora e inesquecível.",
            image: "/ux/08-team/juliana.png"
        }
    ]

  return <section id="team" className="snap-start ">
    <div 
    className="
    mx-0 lg:mx-32 px-4 max-w-full mb-4
    flex flex-col flex-1 items-center justify-center
    ">
        <div className="
            flex flex-col md:flex-row flex-1 h-full w-full md:min-h-80
            rounded-2xl overflow-hidden
            bg-[#a9a685] text-white
        ">
            {team.map((member) => (
                <div key={member.id} className="flex flex-col md:flex-row w-full">
                    {/* Imagem */}
                    <div className="relative flex-1 min-h-[40vh]">
                        <Image
                            src={member.image}
                            alt={member.name}
                            className="object-cover"
                            fill
                        />
                    </div>
                    {/* Texto */}
                    <div className="flex-1 p-4 flex flex-col justify-center gap-4">
                        <h3>{member.name}</h3>
                        <p className="text-sm tracking-widest">{member.title}</p>
                        <p>{member.description}</p>
                        <a 
                            href="https://wa.me/5521999439858" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mt-4 border border-white rounded-full px-6 py-2 w-fit"
                            >
                            Fale com {member.name.split(" ")[0]}
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
    <Footer setOpen={Props.setOpen}/>
  </section>
}