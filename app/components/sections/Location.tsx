import Image from "next/image";

export default function Location() {
  return <section id="location">
    <h1>LOCALIZAÇÃO</h1>
    <div className="
    flex flex-col md:flex-row
    ">
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471395.6141939803!2d-43.75603247557016!3d-22.62475499404772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x991b347265164b%3A0x3c26c429e547b567!2sCabana%20Quatro%20Esta%C3%A7%C3%B5es%20-%20Seu%20ref%C3%BAgio%20rom%C3%A2ntico%20na%20Serra%20do%20RJ!5e0!3m2!1spt-BR!2sbr!4v1774124570089!5m2!1spt-BR!2sbr" 
            
            className="
            w-full h-96 border-0 
            "
            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
        <div className="relative h-80">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente earum amet itaque fugit voluptas eligendi odio explicabo ipsam dolore dolorum.</p>

             { < Image
                src="/images/20260315_181255.jpg"
                fill
                alt="Como chegar"
                className="object-cover"
            />}
        </div>
    </div>
  </section>
}