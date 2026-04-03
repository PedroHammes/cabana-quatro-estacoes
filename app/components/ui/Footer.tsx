import { Button } from "@/components/ui/button";
import { BadgeDollarSign, HandCoins, HandHeart, Handshake, Star, TicketPercent } from "lucide-react";
import { FaAirbnb, FaFacebook, FaWhatsapp, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer(Props: {setOpen: (value: boolean) => void}) {
    return <footer className="bg-card py-16 px-12 md:py-32 flex flex-col justify-center">
        
        {/* Card Principal */}
        <div className="flex flex-col md:flex-row gap-8 flex-1 h-full">
            {/* Coluna esquerda */}
            <div className="flex flex-col gap-8 w-1/2">
                <div className="flex flex-col gap-4">
                    <h3>Estamos nos principais sites de hospedagem:</h3>
                    <div className="flex items-center gap-4">
                        <a href="https://www.airbnb.com.br/rooms/1400061823556658830?guests=1&adults=1&s=67&unique_share_id=77cdcf28-af7f-4b2a-a09f-d209e4e47331" target="_blank">
                            <FaAirbnb className="text-white text-xl"/>
                        </a>
                        <a href="https://www.booking.com/Share-N86BXf" target="_blank">
                            <span className="font-bold text-white border-2 border-white rounded px-1">B.</span>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h3>Nossas redes sociais:</h3>
                    <div className="flex items-center gap-4">
                        <FaFacebook size={24} />
                        <FaInstagram size={24} />
                        <FaTiktok size={24} />
                        <FaTwitter size={24} />
                        <FaWhatsapp size={24} />
                    </div>
                </div>
                <Button onClick={() => Props.setOpen(true)} className="w-fit">
                    Faça sua reserva
                </Button>
            </div>

            {/* Coluna direita */}
            <div className="flex flex-col gap-8 w-1/2">
                <div className="flex flex-col gap-4">
                    <h3>Vantagens de reservar diretamente conosco</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="flex items-center gap-2"><BadgeDollarSign /><p>MELHORES PREÇOS</p></div>
                        <div className="flex items-center gap-2"><TicketPercent /><p>PROMOÇÕES EXCLUSIVAS</p></div>
                        <div className="flex items-center gap-2"><HandCoins /><p>DESCONTO NO RETORNO</p></div>
                        <div className="flex items-center gap-2"><Handshake /><p>SEGURANÇA NO CONTRATO</p></div>
                        <div className="flex items-center gap-2"><HandHeart /><p>ATENDIMENTO HUMANIZADO</p></div>
                        <div className="flex items-center gap-2"><Star /><p>EXPERIÊNCIA ÚNICA</p></div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <p>(021)90000-000</p>
                    <p>(021)90000-0000</p>
                    <p>cabanaquatroestacoes@gmail.com</p>
                </div>
                <p className="text-sm">© 2026 - Cabana Quatro Estações — CNPJ: 00.000.000/0000-00. Todos os direitos reservados.</p>
            </div>
        </div>

    </footer>
}