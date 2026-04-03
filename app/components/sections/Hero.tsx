import Image from "next/image";

export default function Hero() {
  return <section id="hero"
  className="
  h-screen relative
  flex items-center justify-center
  bg-neutral-800
  snap-start min-h-screen
  ">
    <Image
        src="https://placehold.co/800x600"
        fill={true}
        alt="Luxo na natureza"

        className="object-cover"
    />
    <div className="absolute inset-0 z-5 bg-linear-to-t from-black/70 to-transparent"></div> 
    <div className="
    relative z-10
    flex flex-col md:flex-row md:justify-between items-center gap-4 w-full px-12
    ">
      <div>
        LOGO
      </div>
      <h1>LUXO NA NATUREZA</h1>
    </div>

  </section>
}