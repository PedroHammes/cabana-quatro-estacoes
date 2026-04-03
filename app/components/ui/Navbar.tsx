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

      <a href="https://www.airbnb.com.br/rooms/1400061823556658830?guests=1&adults=1&s=67&unique_share_id=77cdcf28-af7f-4b2a-a09f-d209e4e47331" target="_blank">
        <FaAirbnb className="text-white text-xl"/>
      </a>
      <a href="https://www.booking.com/Share-N86BXf" target="_blank">
        <span className="font-bold text-white border-2 border-white rounded px-1">B.</span>
      </a>
    </div>
    
  </nav>
}