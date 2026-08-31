import Image from "next/image"
import { WHATSAPP_NUMBER } from "@/lib/constants"

export default function Team() {

  return <section id="team" className="snap-start">
    <div
    className="
    mx-auto px-4 max-w-full lg:max-w-4xl mb-4
    flex flex-col flex-1 items-center justify-center
    ">
      <div className="
      flex flex-col md:flex-row w-full
      md:min-h-[35vh]
      rounded-2xl overflow-hidden
      bg-[#a9a685] text-white
      ">
        {/* Imagem */}
        <div className="relative w-full md:w-1/2 min-h-[40vh] md:min-h-0">
          <Image
            src="/ux/08-team/team.png"
            alt="Atendente pronta para ajudar com sua reserva"
            className="object-cover"
            fill
          />
        </div>

        {/* Texto */}
        <div className="
        w-full md:w-1/2 p-6 lg:p-12
        flex flex-col justify-center gap-4
        ">
          <h3 className="text-4xl lg:text-6xl font-bold leading-tight">
            Entre em contato!
          </h3>
          <p className="text-base lg:text-2xl">
            Faça sua reserva pelo WhatsApp.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            data-umami-event="click-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 border rounded-full px-6 py-2 w-fit bg-accent text-white"
          >
            Fale com uma atendente
          </a>
        </div>
      </div>
    </div>
  </section>
}