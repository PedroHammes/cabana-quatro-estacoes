import Image from "next/image";

export default function About() {
  return <section id="about">
    <div>
        <h1>SOBRE</h1>
    </div>
    <div className="
    flex flex-col md:flex-row
    ">
        <div className="
        flex-1
        ">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa expedita quaerat eaque? Eligendi nihil, fugit earum dolore at quae! Ducimus maiores consectetur reprehenderit delectus! Ipsa dolorem totam sunt numquam molestias dolorum iure sint quo tempora eligendi! Impedit sapiente vero ratione, sint voluptatibus qui doloribus, laboriosam ipsum eius facilis recusandae! Exercitationem recusandae ipsum molestias quia eos corporis dignissimos odio voluptas consectetur.</p>
        </div>
        <div className="
        relative
        h-100 md:w-1/2
        ">
            <Image
                src="https://lh3.googleusercontent.com/p/AF1QipNZOSWKN8035xhS9ZVZpc2PuWOjgO3egsiHm6YO=w154-h258-n-k-no-nu"
                fill={true}
                alt="Luxo na natureza"

                className="
                object-cover
                "
            />
        </div>
    </div>
  </section>
}