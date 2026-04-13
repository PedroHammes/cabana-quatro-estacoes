import Image from "next/image";

export default function About() {
  return <section id="about" 
  className="
  h-full
  py-16 md:py-32 mx-4 lg:mx-32
  flex flex-col flex-1 items-center justify-center
  bg-amber-500
  ">

    {/*Card principal*/}
    <div className="
    h-full 
    flex flex-col md:flex-row md:min-h-80
    rounded-2xl overflow-hidden 
    bg-[#a9a685]
    ">
        <div className="
        relative h-48 md:h-auto w-full md:w-2/5
        ">
            <Image
                src="/ux/03-about/about.png"
                fill={true}
                alt="Luxo na natureza"

                className="
                object-cover
                "
            />
        </div>
        <div className="
        flex-1
        p-4 lg:p-8
        flex flex-col gap-4 lg:gap-8
        relative overflow-hidden
        text-base lg:text-lg text-olive-900
        ">
            <h2>A Cabana</h2>
            <p>
              Imagine um refúgio onde as paredes de vidro dissolvem a fronteira entre o luxo e a natureza selvagem. A Cabana Quatro Estações não é apenas uma hospedagem; é uma experiência sensorial desenhada para quem busca exclusividade em cada detalhe.
            </p>
            <p>
              Sob o icônico teto A-frame, a modernidade se revela em espaços claros e minimalistas. Aqui, o seu despertar é guiado por uma claraboia panorâmica que transforma o céu no seu teto particular, enquanto o aroma do café se mistura ao frescor da montanha.
            </p>
        </div>

    </div>
  </section>
}