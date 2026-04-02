import { Button } from "@/components/ui/button";
import { BadgeDollarSign, HandCoins, HandHeart, Handshake, Star, TicketPercent } from "lucide-react";
import Image from "next/image";
import { FaAirbnb } from "react-icons/fa";

export default function Footer(Props: {setOpen: (value: boolean) => void}) {
    return <footer className="bg-card px-6 py-12 snap-start min-h-screen flex flex-col justify-center">
        <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col gap-4 w-1/2">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                    {
                        <Image
                        src={"https://cf.bstatic.com/xdata/images/hotel/max1024x768/841739583.jpg?k=efa6f340203e87ade5b8f9017097e9d2536ea1f1b49f48d01ccbf0fa8aa36812&o="}
                        alt="..."
                        className="object-cover"
                        fill
                        />
                    }
                </div>
                <div className="flex items-center gap-4 mt-4">
                    <FaAirbnb />
                    <span className="font-bold text-white border-2 border-white rounded px-1">B.</span>
                    <Button onClick={() => Props.setOpen(true)}>
                        Faça sua reserva
                    </Button>
                </div>
            </div>

            <div className="flex flex-col gap-6 w-1/2">
                <div> 
                    <h3>Vantagens de reservar diretamente conosco</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3">
                        <div className="flex items-center gap-2">
                            <BadgeDollarSign />
                            <p>MELHORES PREÇOS</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <TicketPercent />
                            <p>PROMOÇÕES EXCLUSIVAS</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <HandCoins />
                            <p>DESCONTO NO RETORNO</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Handshake />
                            <p>SEGURANÇA NO CONTRATO</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <HandHeart />
                            <p>ATENDIMENTO HUMANIZADO</p>
                        </div>
                        <div className="flex items-center gap-2">
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
            </div>
        </div>

    </footer>
}