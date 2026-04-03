import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Location(Props: {setOpen: (value: boolean) => void}) {
  return <section id="location"
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
        <div className="relative rounded-2xl overflow-hidden w-7/10 h-full">
          <Image
          src="/images/20260315_181255.jpg"
          fill
          alt="Como chegar"
          className="object-cover"
          />
          <div
          className="
          absolute inset-0 z-5 bg-linear-to-r from-transparent to-black/70
          "></div>
          <div
          className="
          absolute bottom-0 left-0 right-0 p-8
          ">
            <h3>Como chegar</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam sequi dolorem eligendi a repellat voluptatibus corrupti asperiores laboriosam facere quidem, sit nam inventore, quod exercitationem!</p>
            <Button onClick={() => Props.setOpen(true)}>
              Entre em contato
            </Button>
          </div>
        </div>
        <div className="w-3/10 h-full">
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471395.6141939803!2d-43.75603247557016!3d-22.62475499404772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x991b347265164b%3A0x3c26c429e547b567!2sCabana%20Quatro%20Esta%C3%A7%C3%B5es%20-%20Seu%20ref%C3%BAgio%20rom%C3%A2ntico%20na%20Serra%20do%20RJ!5e0!3m2!1spt-BR!2sbr!4v1774124570089!5m2!1spt-BR!2sbr" 
          
          className="
          w-full h-full border-0 rounded-2xl
          "
          allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

    </div>
  </section>
}