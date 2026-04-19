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
        <form>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Agendamento</DialogTitle>
            <DialogDescription>
              Informe seu nome e data que deseja se hospedar.
            </DialogDescription>
          </DialogHeader>
          <div>
            <div>
              <Label htmlFor="name">Nome:</Label>
              <Input id="name" name="name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="date">Data:</Label>
              <div className="mx-auto w-60">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                    variant="outline"
                    id="date-picker-range"
                    className="justify-start px-2.5 font-normal"
                    >
                      <Calendar1Icon/>
                      {date?.from ? (
                        date.to ? (
                          <>
                            {format(date.from, "LLL dd, y")} -{""}
                            {format(date.to, "LLL dd, y")}
                          </>
                        ) : (
                          format(date.from, "LLL dd, y")
                        )
                      ) : (
                        <span>Selecione uma data</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                    mode="range"
                    captionLayout="dropdown"
                    startMonth={new Date()}
                    endMonth={new Date(new Date().getFullYear() + 1, 11)}
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={2}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
          <Button onClick={handleSubmit}>Agendar</Button>
        </DialogContent>
      </form>
    </Dialog>
</section>
}