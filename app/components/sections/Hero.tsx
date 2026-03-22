import Image from "next/image";

export default function Hero() {
  return <section id="hero"
  className="
  h-screen relative
  flex items-center justify-center
  bg-neutral-800
  ">
    <Image
        src="https://lh3.googleusercontent.com/p/AF1QipOhFQzN1yRQDzsT8eKTmjBxpf4x-67rVle2YQQK=w154-h193-n-k-no-nu"
        fill={true}
        alt="Luxo na natureza"

        className="object-cover"
    />

    <div className="
    relative z-10
    flex flex-col items-center
    ">
        <h1>LUXO NA NATUREZA</h1>
    </div>

  </section>
}