import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Team() {
    const team = [
        {
            id: 1,
            name: "Misael",
            title: "Proprietário",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda ratione mollitia commodi culpa excepturi.",
            image: "/images/20260315_181247.jpg"
        },
        {
            id: 2,
            name: "Juliana",
            title: "Atendente",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda ratione mollitia commodi culpa excepturi.",
            image: "/images/20260315_181247.jpg"
        }
    ]
  return <section id="team">
    <h1>EQUIPE</h1>
    <div className="
    flex flex-col md:flex-row">
        {
            team.map( (member) => {
                return <div key={member.id}>
                    <Avatar>
                        <AvatarImage
                        src={member.image}
                        alt={member.name}

                        />
                        <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
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