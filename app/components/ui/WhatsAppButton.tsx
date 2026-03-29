import { Button } from "@/components/ui/button"
import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton(Props: {setOpen: (value: boolean) => void}) {
  return <Button id="whatsappbutton" 
  className="
  fixed bottom-4 right-4
  "
  onClick={ () => Props.setOpen(true) }
  >
    Agende sua hospedagem!
  </Button>
}