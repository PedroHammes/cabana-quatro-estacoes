import Image from "next/image";

export default function Hero() {
  return <section id="hero"
  className="
  h-screen relative
  flex items-center justify-center
  bg-neutral-800
  min-h-screen
  ">
    <video
    autoPlay muted loop playsInline
    className="absolute inset-0 w-full h-full object-cover hidden lg:block">
      <source src="/ux/02-hero/hero.mp4" type="video/mp4" />
    </video>
    <video
    autoPlay muted loop playsInline
    className="absolute inset-0 w-full h-full object-cover block lg:hidden">
      <source src="/ux/02-hero/hero-mobile.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 z-5 bg-linear-to-t from-black/70 to-transparent pointer-events-none"></div> 
    
    <div className="
    relative z-10
    flex flex-col items-center
    w-full
    px-12 md:px-24 gap-4
    ">
      <Image
      src={"/ux/Assets/logos/c4e_desk.png"}
      alt="Logo c4e"
      width={400}
      height={200}
      className="hidden lg:block"
      />
      <h1 
      style={{color: "#ffffff"}}
      className="text-lg lg:text-5xl lg:font-thin text-center"
      >
        SOFISTICAÇÃO E CONFORTO EM MEIO A NATUREZA
      </h1>
    </div>

  </section>
}