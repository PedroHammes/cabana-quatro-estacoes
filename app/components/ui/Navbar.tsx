"use client"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar(Props: {setOpen: (value: boolean) => void}) {
  return <nav>
    <img alt="LOGO"></img>
    <div className="md:hidden">
        <Sheet>
            <SheetTrigger>Menu</SheetTrigger>
            <SheetContent
            showCloseButton={false}
            side="left"
            >
                <a href="#">INICIO</a>
                <a href="#about">SOBRE</a>
                <a href="#partnerships">PARCERIAS</a>
                <a href="#location">LOCALIZAÇÃO</a>
                <a href="#testimonials">DEPOIMENTOS</a>
                <a href="#availability">DISPONIBILIDADE</a>
                <a href="#teams">EQUIPE</a>
            </SheetContent>
        </Sheet>
    </div>


    <div className="hidden md:flex justify-around">
        <a href="#">INICIO</a>
        <a href="#about">SOBRE</a>
        <a href="#partnerships">PARCERIAS</a>
        <a href="#location">LOCALIZAÇÃO</a>
        <a href="#testimonials">DEPOIMENTOS</a>
        <a href="#availability">DISPONIBILIDADE</a>
        <a href="#team">EQUIPE</a>
    </div>

    <Button onClick={() => Props.setOpen(true)}>
      Faça sua reserva
    </Button>
  </nav>
}