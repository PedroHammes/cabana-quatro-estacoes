import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Availability(Props: {setOpen: (value: boolean) => void}) {
  
return <section id="availability"
    className="
    mx-0 lg:mx-32 px-4 max-w-full
    flex flex-col flex-1 items-center justify-center
    ">

    <div className="
        flex flex-col md:flex-row w-full md:min-h-80 lg:h-160 gap-2
        rounded-2xl
    ">
        {/* Card esquerdo - Calendário */}
        <div className="
            w-full md:w-6/12 lg:flex-1
            flex flex-col
            lg:p-8 lg:pl-32
            gap-4
        ">
          <h2>Disponibilidade</h2>
          <p>Veja a melhor data, entre em contato e faça sua reserva</p>
            <iframe
                src="https://calendar.google.com/calendar/embed?src=cabana.quatroestacoes%40gmail.com&ctz=America%2FSao_Paulo"
                className="w-full border-0 rounded-2xl h-64 lg:flex-1"
            />
            <Button
                onClick={() => Props.setOpen(true)}
                className="
                rounded-full 
                bg-[#4e6646]
                text-lg
                cursor-pointer
                w-1/2
                lg:self-end"
            >
                Faça sua reserva
            </Button>
        </div>

        {/* Card direito - Imagem */}
        <div className="relative rounded-2xl w-full md:w-4/10 h-64 md:h-auto overflow-hidden">
            <Image
                src="/ux/07-availability/fotos/area-externa.png"
                alt="Reserva"
                fill
                className="object-cover"
            />
        </div>
    </div>
</section>
}