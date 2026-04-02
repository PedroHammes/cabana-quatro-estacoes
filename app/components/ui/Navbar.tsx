"use client"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import { FaAirbnb } from "react-icons/fa"

export default function Navbar(Props: {setOpen: (value: boolean) => void}) {
  return <nav className="
    px-6 py-3
    flex items-center justify-between
    fixed top-0 left-0 right-0 z-50
    bg-background
    ">
    <img alt="LOGO-cabanaquatroestacoes"></img>
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


    <div className="hidden md:flex justify-around gap-6">
        <a href="#">INICIO</a>
        <a href="#about">SOBRE</a>
        <a href="#partnerships">PARCERIAS</a>
        <a href="#location">LOCALIZAÇÃO</a>
        <a href="#testimonials">DEPOIMENTOS</a>
        <a href="#availability">DISPONIBILIDADE</a>
        <a href="#team">EQUIPE</a>
    </div>

    <div className="flex items-center gap-2">
      <Button onClick={() => Props.setOpen(true)}>
        Faça sua reserva
      </Button>

      <FaAirbnb className="text-white text-xl"/>
      <span className="font-bold text-white border-2 border-white rounded px-1">B.</span>
    </div>
    
  </nav>
}