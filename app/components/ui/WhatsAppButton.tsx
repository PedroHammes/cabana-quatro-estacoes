"use client"
import { Button } from "@/components/ui/button"

export default function WhatsAppButton(Props: {setOpen: (value: boolean) => void}) {
  return <Button id="whatsappbutton" 
  className="
  fixed bottom-4 left-1/2 -translate-x-1/2 z-10
  rounded-full  hover:bg-[#4a5c44] hover:color-[#FFFFFF]  cursor-pointer"
  style={{ color: '#ffffff', fontWeight: 'bold' }}
  onClick={ () => Props.setOpen(true) }
  >
    AGENDE SUA HOSPEDAGEM
  </Button>
}