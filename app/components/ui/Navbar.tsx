"use client"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Menu } from "lucide-react"
import { AIRBNB_URL, BOOKING_URL } from "@/lib/constants"

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
    px-4 md:px-32 py-3
    flex items-center justify-between
    fixed top-0 left-0 right-0 z-50
    transition-opacity duration-300
    bg-olive-500
    `}>
    <Image
      src="/ux/Assets/logos/c4e_mob.png"
      alt="Cabana Quatro Estações"
      width={120}
      height={40}
      className="object-contain"
    />

    <div className="flex items-center gap-4 ">
      <div className="md:hidden">
          <Sheet >
              <SheetTrigger>
                <Menu className="w-6 h-6" />
              </SheetTrigger>
              <SheetContent
              showCloseButton={false}
              side="left"
              className="p-8
              bg-olive-500"
              >
                <Image
                  src="/ux/Assets/logos/c4e_mob.png"
                  alt="Cabana Quatro Estações"
                  width={80}
                  height={40}
                  className="object-contain"
                />
                
                <a href="#">INÍCIO</a>
                <a href="#about">SOBRE</a>
                <a href="#location">LOCALIZAÇÃO</a>
                <a href="#testimonials">DEPOIMENTOS</a>
                <a href="#availability">DISPONIBILIDADE</a>
                <a href="#team">ATENDIMENTO</a>

                <Button
                onClick={() => Props.setOpen(true)}
                className="
                rounded-full 
                bg-[#4e6646]
                text-xs
                cursor-pointer"
                >
                FAÇA SUA RESERVA
                </Button>

                <p>Estamos nos sites de hospedagens</p>
                <div className="flex flex-row gap-4">
                  <div className="flex flex-row border-r-2 px-2">
                    <a href={AIRBNB_URL} data-umami-event="click-airbnb"
                    onClick={() => window.fbq?.('track', 'ViewContent', { content_name: 'Airbnb' })}
                    >
                      <Image
                        src="/ux/Assets/logos/airbnbB.png"
                        alt="Airbnb"
                        width={24}
                        height={24}
                      />
                    </a>
                    <p>airbnb</p>
                  </div>
                  <div className="flex flex-row p2-4">
                    <a href={BOOKING_URL} data-umami-event="click-booking"
                      onClick={() => window.fbq?.('track', 'ViewContent', { content_name: 'Booking' })}
                    >
                    </a>
                    <p>Booking.com</p>
                  </div>
                </div>

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
        className="rounded-full  bg-[#b8b596] color-[#FFFFFF]  cursor-pointer"
        style={{ color: '#ffffff', fontWeight: 'bold' }}
        >
          FAÇA SUA RESERVA
        </Button>

        <a href={AIRBNB_URL} target="_blank" className="hidden md:block"
        data-umami-event="click-airbnb"
        onClick={() => window.fbq?.('track', 'ViewContent', { content_name: 'Airbnb' })}
        >
          <Image
            src="/ux/Assets/logos/airbnbB.png"
            alt="Airbnb"
            width={24}
            height={24}
          /> 
        </a>
        <a href={BOOKING_URL} target="_blank" 
        onClick={() => window.fbq?.('track', 'ViewContent', { content_name: 'Booking' })}
        data-umami-event="click-booking"
        className="hidden md:block">
          <Image
            src="/ux/Assets/logos/bookingB.png"
            alt="Booking"
            width={24}
            height={24}
          />
        </a>
      </div>
    </div>
    
  </nav>
}