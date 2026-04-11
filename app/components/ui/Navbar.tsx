"use client"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"

import { FaAirbnb } from "react-icons/fa"
import Image from "next/image"

export default function Navbar(Props: {setOpen: (value: boolean) => void}) {
  return <nav className="
    px-6 py-3
    flex items-center justify-between
    fixed top-0 left-0 right-0 z-50
    bg-background
    ">
    <Image
      src="/SITE - CABANA QUATRO ESTAÇÕES/01 - MENU/LOGO/logo branca.png"
      alt="Cabana Quatro Estações"
      width={120}
      height={40}
      className="object-contain"
    />
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
      <Button
      onClick={() => Props.setOpen(true)}
      className="rounded-full"
      style={{ color: '#ffffff', fontWeight: 'bold' }}
      >
        FAÇA SUA RESERVA
      </Button>

      <a href="https://www.airbnb.com.br/rooms/1400061823556658830?guests=1&adults=1&s=67&unique_share_id=77cdcf28-af7f-4b2a-a09f-d209e4e47331" target="_blank">
        <Image
          src="/SITE - CABANA QUATRO ESTAÇÕES/01 - MENU/LOGO/airbnbB.png"
          alt="Airbnb"
          width={24}
          height={24}
        /> 
      </a>
      <a href="https://www.booking.com/Share-N86BXf" target="_blank">
        <Image
          src="/ux/01-navbar/LOGO/bookingB.png"
          alt="Booking"
          width={24}
          height={24}
        />
      </a>
    </div>
    
  </nav>
}