import Image from "next/image";

export default function About() {
  return <section id="about" 
  className="
  snap-start h-screen
  py-16 md:py-32 mx-4 md:mx-60
  flex flex-col flex-1 items-center justify-center
  ">

    {/*Card principal*/}
    <div className="
    flex flex-col flex-1 h-full md:flex-row md:min-h-80
    rounded-2xl overflow-hidden
    bg-olive-500
    ">
        <div className="
        relative h-48 md:h-auto w-full md:w-1/2
        ">
            <Image
                src="https://placehold.co/800x600"
                fill={true}
                alt="Luxo na natureza"

                className="
                object-cover
                "
            />
            <div className="absolute inset-0 z-5 bg-linear-to-t from-black/70 to-transparent"></div> 
        </div>
        <div className="
        flex-1
        p-8
        flex flex-col gap-4
        ">
            <h2>A Cabana</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa expedita quaerat eaque? Eligendi nihil, fugit earum dolore at quae! Ducimus maiores consectetur reprehenderit delectus! </p>

            <p>Ipsa dolorem totam sunt numquam molestias dolorum iure sint quo tempora eligendi! Impedit sapiente vero ratione, sint voluptatibus qui doloribus, laboriosam ipsum eius facilis recusandae! </p>

            <p className="font-bold">Exercitationem recusandae ipsum molestias quia eos corporis dignissimos odio voluptas consectetur.</p>
        </div>

    </div>
  </section>
}