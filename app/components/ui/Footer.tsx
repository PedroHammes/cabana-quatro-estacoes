import { BadgeDollarSign, HandCoins, HandHeart, Handshake, Star, TicketPercent } from "lucide-react";

export default function Footer() {
    return <footer>
        <div> 
            <h3>Vantagens de reservar diretamente conosco</h3>
            <div className="grid grid-cols-2 md:grid-cols-3">
                <div>
                    <BadgeDollarSign />
                    <p>MELHORES PREÇOS</p>
                </div>
                <div>
                    <TicketPercent />
                    <p>PROMOÇÕES EXCLUSIVAS</p>
                </div>
                <div>
                    <HandCoins />
                     <p>DESCONTO NO RETORNO</p>
                </div>
                <div>
                    <Handshake />
                    <p>SEGURANÇA NO CONTRATO</p>
                </div>
                <div>
                    <HandHeart />
                    <p>ATENDIMENTO HUMANIZADO</p>
                </div>
                <div>
                    <Star />
                    <p>EXPERIÊNCIA ÚNICA</p>
                </div>
            </div>
        </div>
        <div>
            <p>(021)90000-000</p>
            <p>(021)90000-0000</p>
            <p>cabanaquatroestacoes@gmail.com</p>
        </div>
        <div>
            © 2026 - Cabana Quatro Estações
            CNPJ:[00.000.000/0000-00].Todososdireitosreservados
        </div>
    </footer>
}