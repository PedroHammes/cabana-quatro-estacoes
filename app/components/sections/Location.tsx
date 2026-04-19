import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Location(Props: {setOpen: (value: boolean) => void}) {
  return <section id="location"
  className="
  mx-4 lg:mx-32
  flex flex-col items-center justify-center
  ">
    <h2>Localização</h2>
    {/* Card principal */}
    <div className="
    flex flex-col md:flex-row-reverse flex-1 w-full md:min-h-80 lg:h-160 gap-2
    rounded-2xl
    bg-[#a9a685]
    ">
      {/* Card de cima */}
      <div className="
      relative rounded-2xl w-full md:w-6/10 h-full text-white bg-[#8a8768]
      flex flex-col
      p-4 lg:p-12
      gap-4
      text-base lg:text-lg
      ">
        <div>
          <h4>Como chegar</h4>
          <p>
              Localizada no Vale do Café no Estado do Rio de Janeiro, a 112 km do Rio de Janeiro, e a 4 km do Vale das Videiras, em Araras, Petrópolis.
          </p>
        </div>
        <img src="/ux/06-location/location.png" alt="Como chegar" className="rounded-2xl lg:h-64 lg:object-cover"/>
        <div className="flex flex-col gap-4">
          <h4>Atenção:</h4>
          <p className="border-2 rounded-lg border-olive-50 p-2">
            Para quem vem pelo Vale das Videiras, Araras ou Petrópolis:
            Siga sempre pela RJ-117 até o Posto de Saúde de Maravilha / Paty do Alferes.
          </p>
          <p className="border-2 rounded-lg border-olive-50 p-2">
            Insira o endereço no GPS antes de entrar na estrada de terra, pois o sinal pode oscilar na região rural.
            Link do Google Maps: <a href="https://maps.app.goo.gl/6bszPtjdBuShpk4o8" target="_blank" rel="noopener noreferrer" className="text-blue-700">Cabana Quatro Estações - Seu regúgio romântico na Serra do RJ</a>
          </p>
        </div>
        <Button
          onClick={() => Props.setOpen(true)}
          className="
          rounded-full 
          bg-[#4e6646]
          text-lg
          cursor-pointer
          lg:w-1/2
          self-center
          "
          >
          Entre em contato e tire suas dúvidas
        </Button>
      </div>

      {/* Card de baixo */}
      <div className="
      w-full md:w-4/10 lg:flex-1
      flex flex-col
      p-4 lg:p-8
      gap-4 lg:gap-8
      text-base lg:text-lg
      ">
      <p className="p-2">
        Endereço: Condomínio Fazenda Boa Vista – Estrada Sítio Barreiros, nº 1.801, Casa 3 – Fazenda Boa Vista, Bairro Maravilha – Paty do Alferes – CEP 26.950-000.

      </p>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471395.6141939803!2d-43.75603247557016!3d-22.62475499404772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x991b347265164b%3A0x3c26c429e547b567!2sCabana%20Quatro%20Esta%C3%A7%C3%B5es%20-%20Seu%20ref%C3%BAgio%20rom%C3%A2ntico%20na%20Serra%20do%20RJ!5e0!3m2!1spt-BR!2sbr!4v1774124570089!5m2!1spt-BR!2sbr" 
        
        className="
        w-full border-0 rounded-2xl h-100 lg:flex-1
        "
        allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>



    </div>

  </section>
}