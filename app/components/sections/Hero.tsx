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
    className="absolute inset-0 w-full h-full object-cover">
      <source src="/ux/02-hero/hero.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 z-5 bg-linear-to-t from-black/70 to-transparent"></div> 
    <div className="
    relative z-10
    flex flex-col items-start gap-4 w-full px-12 md:px-24
    ">
      <Image
      src={"/ux/01-navbar/logos/B.png"}
      alt="Luxo na natureza"
      width={400}
      height={200}
      />
      <h1 style={{color: "#ffffff"}}>LUXO NA NATUREZA</h1>
    </div>

  </section>
}