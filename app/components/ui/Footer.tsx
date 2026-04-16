import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer(Props: {setOpen: (value: boolean) => void}) {

    const advantages = [
        { icon: "/ux/Assets/vantagens/melhor_preco.png", label: "MELHORES PREÇOS" },
        { icon: "/ux/Assets/vantagens/promo_exclusiva.png", label: "PROMOÇÕES EXCLUSIVAS" },
        { icon: "/ux/Assets/vantagens/desconto_retorno.png", label: "DESCONTO NO RETORNO" },
        { icon: "/ux/Assets/vantagens/seguranca_contrato.png", label: "SEGURANÇA NO CONTRATO" },
        { icon: "/ux/Assets/vantagens/atendimento_humanizado.png", label: "ATENDIMENTO HUMANIZADO" },
        { icon: "/ux/Assets/vantagens/experiencia_unica.png", label: "EXPERIÊNCIA ÚNICA" },
    ]

    return <footer className="
    bg-olive-500 py-8 px-4 md:px-12 flex flex-col items-center gap-8 text-white
    ">
        <h3>Vantagens de reservar diretamente conosco</h3>

        <div className="grid grid-cols-3 gap-4">
            {advantages.map((item) => (
                <img key={item.label} src={item.icon} alt={item.label} width={80} height={80} />
            ))}
        </div>

        <div className="flex flex-row items-center gap-4">
            <a href="https://www.airbnb.com.br/rooms/1400061823556658830?source_impression_id=p3_1772281259_P34iLZv0dPF_d_p7" target="_blank" rel="noopener noreferrer">
                <img src="/ux/Assets/logos/airbnbB.png" alt="Airbnb" width={32} height={32} />
            </a>
            <a href="https://www.booking.com/hotel/br/cabana-quatro-estacoes.pt-br.html" target="_blank" rel="noopener noreferrer">
                <img src="/ux/Assets/logos/bookingB.png" alt="Booking" width={32} height={32} />
            </a>
            <a href="https://www.facebook.com/cabanaquatroestacoesrj/" target="_blank" rel="noopener noreferrer">
                <img src="/ux/Assets/logos/facebookB.png" alt="Facebook" width={32} height={32} />
            </a>
            <a href="https://www.instagram.com/cabana.quatroestacoes/" target="_blank" rel="noopener noreferrer">
                <img src="/ux/Assets/logos/instagramB.png" alt="Instagram" width={32} height={32} />
            </a>
            <a href="https://www.tiktok.com/@cabana.quatroestacoes" target="_blank" rel="noopener noreferrer">
                <img src="/ux/Assets/logos/tiktokB.png" alt="TikTok" width={32} height={32} />
            </a>
        </div>

        <Button 
            onClick={() => Props.setOpen(true)}
            className="rounded-full  hover:bg-[#4a5c44] hover:color-[#FFFFFF]  cursor-pointer"
            style={{ color: '#ffffff', fontWeight: 'bold' }}
        >
            ENTRE EM CONTATO E FAÇA SUA RESERVA
        </Button>

        <div className="flex items-center gap-2">
            <FaWhatsapp size={24}/> <p>(021) 9 9943-9858</p>
        </div>
        <div className="flex items-center gap-2">
            <Mail size={24}/> <p>cabana.quatroestacoes@gmail.com</p>
        </div>

        <p className="text-sm">© 2026 - Cabana Quatro Estações — CNPJ: 00.000.000/0000-00. Todos os direitos reservados.</p>
    </footer>
}