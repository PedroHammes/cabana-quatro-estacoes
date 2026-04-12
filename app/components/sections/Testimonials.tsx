"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star } from "lucide-react"


export default function Testimonials() {
    const testimonials = [
        { id: 1, name: "Jonas", lastname: "", text: "Ao chegar no local a gente já se encanta. Lugar perfeita para passar um tempo na natureza com seu companheiro, excelente vista e incrivelmente limpa e organizada. Cabada equipada com todos os matérias de cozinha necessários para uma incrível hospedagem.Cada momento neste lugar é de impressionar, com uma cama super confortável e uma excelente vista. Uma experiência única e extraordinária.", rating: 5, date: "", image: "" },

        { id: 2, name: "Luiz", lastname: "Henrique", text: "A estadia foi ótima. A cabana é nova, super equipada, moderna, charmosa. A vista é linda e o pôr do sol é deslumbrante, pra curtir tomando um vinho no ofurô. Perfeito lugar para aproveitar em casal, silencioso e privativo. Super recomendo!", rating: 5, date: "", image: "" },

        { id: 3, name: "Jessica", lastname: "", text: "A cabana é perfeita! Um lugar maravilhoso para distrair e descansar, amamos cada detalhe. O que não levamos conseguimos comprar no empório da própria cabana. Sempre solícitos, tiraram todas nossas dúvidas prontamente pelo Whats. Pretendemos retornar.", rating: 5, date: "", image: "" },

        { id: 4, name: "Gabriel", lastname: "", text: "Uma das melhores cabanas que já fiquei. Bem espaçosa e aconchegante, cozinha completa, com diversos utensílios, tv grande, vários jogos pra passar o tempo, além do empório que salva com bastante itens essenciais! Com certeza retornarei!", rating: 5, date: "", image: "" },

        { id: 5, name: "Anderson", lastname: "", text: "A cabana é extremamente nova e aconchegante, a localização é incrível, com uma vista maravilhosa. As fotos são fidedignas com a realidade do local. Eu super recomendo o espaço!", rating: 5, date: "", image: "" },

        { id: 6, name: "Keli", lastname: "Cristina", text: "Ambiente simplesmente espetacular. Tudo organizado, limpo e lindo. Pra quem busca um lugar de paz e viver momentos únicos, a cabana é mais indicado. Voltarei outras vezes.", rating: 5, date: "", image: "" },

        { id: 7, name: "Juliana", lastname: "", text: "Fui com meu noivo somente para passar uma noite e foi a melhor escolha que fizemos. Que local lindo, extremamente aconchegante e agradável. Para quem está buscando tranquilidade, privacidade, paz e natureza é o local ideal. Todos os espaços da cabana oferecem muito conforto e são extremamente úteis. A roupa de cama e os travesseiros são maravilhosos e as toalhas estavam super cheirosas, me senti em casa! O contato com o anfitrião foi excelente. Com certeza voltaremos para ficar mais dias.", rating: 5, date: "", image: "" },
    ]

    const chunks = testimonials.reduce((acc, _, i) =>
        i % 3 === 0 ? [...acc, testimonials.slice(i, i + 3)] : acc, [] as typeof testimonials[]
    )

return <section id="testimonials"
    className="
    snap-start h-screen py-16 md:py-32 mx-4 lg:mx-32 flex flex-col items-center justify-center gap-8
    ">

    {/* Contador */}
    <div className="
    flex flex-col md:flex-row w-full md:w-[70%] mx-auto items-center justify-around
    bg-card rounded-2xl p-4
    gap-8 px-4 md:px-12 py-6
    ">
        <p className="text-lg font-semibold">Estamos no ar desde Abril de 2025</p>
        <p className="text-lg font-semibold">245 hospedagens</p>
        <div className="flex flex-row gap-1">
            <Star className="fill-yellow-400 text-yellow-400"/>
            <Star className="fill-yellow-400 text-yellow-400"/>
            <Star className="fill-yellow-400 text-yellow-400"/>
            <Star className="fill-yellow-400 text-yellow-400"/>
            <Star className="fill-yellow-400 text-yellow-400"/>
        </div>
    </div>

    {/*Card principal*/}
    <div className="
        w-full
        rounded-2xl overflow-hidden bg-[#698061] text-white
    ">
        <Carousel className="w-full h-full [&>div]:h-full overflow-hidden">
            <CarouselContent className="h-full">
                {chunks.map((chunk, i) => (
                    <CarouselItem key={i} className="h-full basis-full">
                        <div className="flex flex-row gap-6 h-full p-6">
                            {chunk.map((feedback) => (
                                <div key={feedback.id} className="bg-card rounded-2xl p-5 flex-1 overflow-hidden min-w-0 flex flex-col gap-2">
                                    <div className="flex flex-row items-center gap-3">
                                        <Avatar className="w-8 h-8">
                                            <AvatarImage src={feedback.image} alt={feedback.name} />
                                            <AvatarFallback className="text-xs">{feedback.name[0]}{feedback.lastname[0]}</AvatarFallback>
                                        </Avatar>
                                        <p className="font-semibold text-sm">{feedback.name}</p>
                                    </div>
                                    <p className="text-sm leading-snug">{feedback.text}</p>
                                    <div className="flex flex-row justify-between items-center mt-auto pt-2">
                                        <p className="text-xs text-muted-foreground">{feedback.date}</p>
                                        <p className="text-sm">{feedback.rating} <Star className="fill-yellow-400 text-yellow-400 inline w-4 h-4" /></p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>

    <div className="flex justify-center">
        <Button asChild>
            <a href="https://www.google.com/travel/search?q=cabana%20quatro%20esta%C3%A7%C3%B5es&g2lb=4965990%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C72958624%2C73059275%2C73064764%2C121529349&hl=pt-BR&gl=br&cs=1&ssta=1&ts=CAEaRQonEiUyIzB4OTkxYjM0NzI2NTE2NGI6MHgzYzI2YzQyOWU1NDdiNTY3EhoSFAoHCOoPEAQYBRIHCOoPEAQYBhgBMgIQAA&qs=CAEyE0Nnb0k1LXFlcXA2RnNaTThFQUU4AkIJCWe1R-UpxCY8QgkJZ7VH5SnEJjw&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwiYuNiN5c-TAxUAAAAAHQAAAAAQBA" target="_blank">
                Deixe seu depoimento
            </a>
        </Button>
    </div>
</section>
}