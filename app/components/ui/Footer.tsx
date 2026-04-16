import { Button } from "@/components/ui/button";
import { BadgeDollarSign, HandCoins, HandHeart, Handshake, Mail, Phone, Star, TicketPercent } from "lucide-react";
import { FaAirbnb, FaFacebook, FaWhatsapp, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import Image from "next/image";

export default function Footer(Props: {setOpen: (value: boolean) => void}) {
    return <footer className="bg-olive-500 py-16 px-4 md:px-12 md:py-32 flex flex-col justify-center text-white">
        
        {/* Card Principal */}
        <div className="flex flex-col md:flex-row gap-8 flex-1 h-full">
            {/* Coluna esquerda */}
            <div className="flex flex-col gap-6 md:gap-8 w-full md:w-1/2">
                <div className="flex flex-col gap-4">
                    <h3>Estamos nos principais sites de hospedagem:</h3>
                    <div className="flex items-center gap-4">
                        <a href="https://www.airbnb.com.br/rooms/1400061823556658830?source_impression_id=p3_1772281259_P34iLZv0dPF_d_p7" target="_blank">
                            <Image
                                src="/ux/01-navbar/logos/airbnbB.png"
                                alt="Airbnb"
                                width={40}
                                height={40}
                            />
                        </a>
                        <a href="https://www.booking.com/hotel/br/cabana-quatro-estacoes.pt-br.html?label=gen173bo-10CAsoIEIWY2FiYW5hLXF1YXRyby1lc3RhY29lc0gzWANoIIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCBqgCAbgC-pWmzQbAAgHSAiRiN2ZkNDMyNS1iNThkLTQ5YzUtOWFlMi02NGFjODU4NGFhMzLYAgHgAgE&sid=2e3d372595898ebf39f4570c99632b57&dist=0&group_adults=2&sb_price_type=total&type=total&" target="_blank">
                            <Image
                                src="/ux/01-navbar/logos/bookingB.png"
                                alt="Booking"
                                width={40}
                                height={40}
                            />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h3>Nossas redes sociais:</h3>
                    <div className="flex items-center gap-4">
                        <a href="https://www.facebook.com/cabanaquatroestacoesrj/?ref=NONE_xav_ig_profile_page_web#" target="_blank">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://www.instagram.com/cabana.quatroestacoes/" target="_blank">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://www.tiktok.com/@cabana.quatroestacoes" target="_blank">
                            <FaTiktok size={24} />
                        </a>
                    </div>
                </div>
                <Button onClick={() => Props.setOpen(true)} 
                className="w-fit rounded-full hover:bg-[#4a5c44] hover:color-[#FFFFFF]  cursor-pointer"
                style={{ color: '#ffffff', fontWeight: 'bold' }}
                >
                    FAÇA SUA RESERVA
                </Button>
            </div>

            {/* Coluna direita */}
            <div className="flex flex-col gap-6 md:gap-8 w-full md:w-1/2">
                <div className="flex flex-col gap-4">
                    <h3>Vantagens de reservar diretamente conosco</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="flex flex-col items-center justify-center text-center rounded-lg bg-[#4a5c44]  h-40 w-40 p-2">
                            <BadgeDollarSign />
                            <p>MELHORES PREÇOS</p>
                        </div>
                        <div className="flex flex-col items-center justify-around text-center rounded-lg bg-[#4a5c44] gap-x-2 gap-y-2 h-40 w-40 p-2">
                            <TicketPercent />
                            <p>PROMOÇÕES EXCLUSIVAS</p>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center rounded-lg bg-[#4a5c44]  h-40 w-40 p-2">
                            <HandCoins />
                            <p>DESCONTO NO RETORNO</p>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center rounded-lg bg-[#4a5c44]  h-40 w-40 p-2">
                            <Handshake />
                            <p>SEGURANÇA NO CONTRATO</p>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center rounded-lg bg-[#4a5c44]  h-40 w-40 p-2">
                            <HandHeart />
                            <p>ATENDIMENTO HUMANIZADO</p>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center rounded-lg bg-[#4a5c44]  h-40 w-40 p-2">
                            <Star />
                            <p>EXPERIÊNCIA ÚNICA</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-2">
                        <FaWhatsapp size={24}/> <p>(021) 9 8391-7758</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <Phone size={24}/> <p>(021) 9 8391-7758</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <Mail size={24} /> <p>cabana.quatroestacoes@gmail.com </p>
                    </div>
                </div>
                <p className="text-sm">© 2026 - Cabana Quatro Estações — CNPJ: 00.000.000/0000-00. Todos os direitos reservados.</p>
            </div>
        </div>

    </footer>
}