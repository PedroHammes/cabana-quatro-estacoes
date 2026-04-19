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

  return <section id="team" className="snap-start">
    <div 
    className="
    mx-0 lg:mx-64 px-4 max-w-full mb-4
    flex flex-col flex-1 items-center justify-center
    ">
        <div className="
        flex flex-col md:flex-row flex-1 h-full w-full md:min-h-80 lg:min-h-144
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
                    <div className="flex-1 p-4 lg:p-12 flex flex-col justify-center gap-4 lg:gap-8">
                        <h3>
                            {member.name}
                            <br />
                            <span className="text-sm lg:text-xl font-thin tracking-widest">
                                {member.title}
                            </span>
                        </h3>
                        <p className="text-sm lg:text-xl">{member.description}</p>
                        <a 
                            href="https://wa.me/5521999439858" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mt-4 lg:mt-32 border rounded-full px-6 py-2 w-fit bg-olive-500 text-white"
                            >
                            Fale com {member.name.split(" ")[0]}
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  </section>
}