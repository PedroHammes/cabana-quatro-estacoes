"use client"
import { useState } from "react"
import { DateRange } from "react-day-picker"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar1Icon } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { WHATSAPP_NUMBER } from "@/lib/constants"
import Image from "next/image"

export default function Availability(Props: {open: boolean, setOpen: (value: boolean) => void}) {

  const [name, setName] = useState("")
  const [date, setDate] = useState<DateRange | undefined>()

  const handleSubmit = () => {
    if (name === "" || date === undefined) {
      alert("Para prosseguir é necessário informar NOME e DATA")
      return
    }
    const message = `Nome: ${name}%0ADatas: ${format(date!.from!, "dd/MM/yyyy")} a ${format(date!.to!, "dd/MM/yyyy")}`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank")
  }
  
return <section id="availability"
    className="
    mx-0 lg:mx-32 px-4 max-w-full
    flex flex-col flex-1 items-center justify-center
    ">

    <div className="
        flex flex-col md:flex-row w-full md:min-h-80 lg:h-160 gap-2
        rounded-2xl
    ">
        {/* Card esquerdo - Calendário */}
        <div className="
            w-full md:w-6/12 lg:flex-1
            flex flex-col
            lg:p-8 lg:pl-32
            gap-4
        ">
          <h2>Disponibilidade</h2>
          <p>Veja a melhor data, entre em contato e faça sua reserva</p>
            <iframe
                src="https://calendar.google.com/calendar/embed?src=SEU_EMAIL_AQUI"
                className="w-full border-0 rounded-2xl h-64 lg:flex-1"
            />
            <Button
                onClick={() => Props.setOpen(true)}
                className="
                rounded-full 
                bg-[#4e6646]
                text-lg
                cursor-pointer
                w-1/2
                lg:self-end"
            >
                Faça sua reserva
            </Button>
        </div>

        {/* Card direito - Imagem */}
        <div className="relative rounded-2xl w-full md:w-4/10 h-64 md:h-auto overflow-hidden">
            <Image
                src="/ux/07-availability/fotos/area-externa.png"
                alt="Reserva"
                fill
                className="object-cover"
            />
        </div>
    </div>

    {/* Dialog mantém igual */}
    <Dialog open={Props.open} onOpenChange={Props.setOpen}>
        {/* ... todo o conteúdo do Dialog permanece idêntico ... */}
    </Dialog>
</section>
}