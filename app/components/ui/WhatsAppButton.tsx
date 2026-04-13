"use client"
import { Button } from "@/components/ui/button"

export default function WhatsAppButton(Props: {setOpen: (value: boolean) => void}) {
  return <Button id="whatsappbutton" 
  className="
  fixed bottom-4 right-4
  rounded-full  hover:bg-[#4a5c44] hover:color-[#FFFFFF]  cursor-pointer"
  style={{ color: '#ffffff', fontWeight: 'bold' }}
  onClick={ () => Props.setOpen(true) }
  >
    AGENDE SUA HOSPEDAGEM
  </Button>
}