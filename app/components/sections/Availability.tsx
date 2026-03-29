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

export default function Availability(Props: {open: boolean, setOpen: (value: boolean) => void}) {

  const [name, setName] = useState("")
  const [date, setDate] = useState<DateRange | undefined>()

  const handleSubmit = () => {
    if (name === "" || date === undefined) {
      alert("Para prosseguir é necessário informar NOME e DATA")
      return
    }
    const message = `Nome: ${name}%0ADatas: ${format(date!.from!, "dd/MM/yyyy")} a ${format(date!.to!, "dd/MM/yyyy")}`
    window.open(`https://wa.me/5521984540717?text=${message}`, "_blank")
  }
  
  return <section id="availability" className="px-6 py-16 md:px-12">
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
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="range"
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