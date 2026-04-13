"use client"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Menu, MenuIcon } from "lucide-react"

export default function Navbar(Props: {setOpen: (value: boolean) => void}) {
  const [isHero, setIsHero] = useState(true)
  
  useEffect(() => {
    const hero = document.getElementById("hero")
    if (!hero) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsHero(entry.isIntersecting),
      { threshold: 0.5 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])


  return <nav className={`
    px-8 md:px-24 py-3
    flex items-center justify-between
    fixed top-0 left-0 right-0 z-50
    transition-opacity duration-300
    ${isHero ? "bg-transparent" : "bg-olive-500"}
    `}>
    <Image
      src="/ux/01-navbar/logos/B.png"
      alt="Cabana Quatro Estações"
      width={120}
      height={40}
      className="object-contain"
    />
    <div className="md:hidden">
        <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent
            showCloseButton={false}
            side="left"
            >
                <a href="#">INÍCIO</a>
                <a href="#about">SOBRE</a>
                <a href="#partnerships">PARCERIAS</a>
                <a href="#location">LOCALIZAÇÃO</a>
                <a href="#testimonials">DEPOIMENTOS</a>
                <a href="#availability">DISPONIBILIDADE</a>
                <a href="#team">ATENDIMENTO</a>
            </SheetContent>
        </Sheet>
    </div>


    <div className="hidden md:flex justify-around gap-6">
        <a href="#hero">INÍCIO</a>
        <a href="#about">SOBRE</a>
        <a href="#partnerships">PARCERIAS</a>
        <a href="#location">LOCALIZAÇÃO</a>
        <a href="#testimonials">DEPOIMENTOS</a>
        <a href="#availability">DISPONIBILIDADE</a>
        <a href="#team">ATENDIMENTO</a>
    </div>

    <div className="flex items-center gap-2">
      <Button
      onClick={() => Props.setOpen(true)}
      className="rounded-full  hover:bg-[#4a5c44] hover:color-[#FFFFFF]  cursor-pointer"
      style={{ color: '#ffffff', fontWeight: 'bold' }}
      >
        FAÇA SUA RESERVA
      </Button>

      <a href="https://www.airbnb.com.br/rooms/1400061823556658830?guests=1&adults=1&s=67&unique_share_id=77cdcf28-af7f-4b2a-a09f-d209e4e47331" target="_blank" className="hidden md:block">
        <Image
          src="/ux/01-navbar/logos/airbnbB.png"
          alt="Airbnb"
          width={24}
          height={24}
        /> 
      </a>
      <a href="https://www.booking.com/Share-N86BXf" target="_blank" className="hidden md:block">
        <Image
          src="/ux/01-navbar/logos/bookingB.png"
          alt="Booking"
          width={24}
          height={24}
        />
      </a>
    </div>
    
  </nav>
}