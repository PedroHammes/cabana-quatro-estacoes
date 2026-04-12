"use client"
import { Button } from "@/components/ui/button"

export default function WhatsAppButton(Props: {setOpen: (value: boolean) => void}) {
  return <Button id="whatsappbutton" 
  className="
  fixed bottom-4 right-4
  rounded-full"
  style={{ color: '#ffffff', fontWeight: 'bold' }}
  onClick={ () => Props.setOpen(true) }
  >
    AGENDE SUA HOSPEDAGEM
  </Button>
}