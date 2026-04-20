import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import React from "react";
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
    bg-olive-500 py-8 pb-24 px-4 md:px-32 flex flex-col items-center gap-4 text-white
">
    {/* Layout principal: duas colunas no desktop */}
    <div className="flex flex-col lg:flex-row w-full lg:gap-16">

        {/* Coluna esquerda: foto + ícones + botão */}
        <div className="flex flex-col gap-4 lg:w-1/2 items-center">
            <img src="/ux/09-footer/img-footer.png" alt="Footer" className="rounded-2xl w-full h-48 lg:h-96 object-cover" />
            
            {/* Redes sociais e sites de hospedagem */}
            <div className="flex flex-row py-4 w-full items-center gap-8">
                <div className="flex flex-col gap-2 lg:px-8 lg:border-r-2 lg:border-olive-50">
                    <p className="text-xs">Estamos nos principais sites de hospedagem:</p>
                    <div className="flex items-center gap-3">
                        <a href="https://www.airbnb.com.br/rooms/1400061823556658830?source_impression_id=p3_1772281259_P34iLZv0dPF_d_p7" target="_blank" rel="noopener noreferrer"
                        className="lg:px-4 lg:border-r-2 lg:border-olive-50">
                            <img src="/ux/Assets/logos/airbnb+logo.png" alt="Airbnb" width={100} height={100} />
                        </a>
                        <a href="https://www.booking.com/hotel/br/cabana-quatro-estacoes.pt-br.html" target="_blank" rel="noopener noreferrer"
                        className="lg:px-4">
                            <img src="/ux/Assets/logos/bookingcom.png" alt="Booking" width={140} height={140} />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-2 lg:px-8 lg:border-r-2 lg:border-olive-50">
                    <p className="text-xs">Redes sociais:</p>
                    <div className="flex items-center gap-3">
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
                </div>
            </div>

            <Button 
                onClick={() => Props.setOpen(true)}
                className="rounded-full bg-[#4e6646] cursor-pointer w-full hidden lg:block"
                style={{ color: '#ffffff', fontWeight: 'bold' }}>
                ENTRE EM CONTATO E FAÇA SUA RESERVA
            </Button>
        </div>

        {/* Coluna direita: vantagens + contato */}
        <div className="flex flex-col py-4 gap-4 w-full max-w-xl items-center">
            <h2 className="text-xl lg:text-3xl w-full text-center ">VANTAGENS DE RESERVAR <br />DIRETAMENTE CONOSCO</h2>
            <div className="grid grid-cols-3 gap-4">
                {advantages.map((item) => (
                    <React.Fragment key={item.label}>
                        <img key={item.label} src={item.icon} alt={item.label} width={80} height={80} className="block lg:hidden" />
                        <img key={item.label} src={item.icon} alt={item.label} width={140} height={140}  className="hidden lg:block"/>
                    </React.Fragment>
                ))}
            </div>
            <div className="flex items-center gap-2">
                <FaWhatsapp size={24}/> <p>(021) 9 9943-9858</p>
            </div>
            <div className="flex items-center gap-2">
                <Mail size={24}/> <p>cabana.quatroestacoes@gmail.com</p>
            </div>
            <Button 
                onClick={() => Props.setOpen(true)}
                className="rounded-full bg-[#4e6646] cursor-pointer w-full block lg:hidden"
                style={{ color: '#ffffff', fontWeight: 'bold' }}>
                ENTRE EM CONTATO E FAÇA SUA RESERVA
            </Button>
        </div>
    </div>

    <p className="text-sm">© 2026 - Cabana Quatro Estações — CNPJ: 60.370.375/0001-75. Todos os direitos reservados.</p>
</footer>
}