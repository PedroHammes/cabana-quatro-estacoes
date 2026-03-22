import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
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


    <div className="hidden md:flex">
        <a href="#">INICIO</a>
        <a href="#about">SOBRE</a>
        <a href="#partnerships">PARCERIAS</a>
        <a href="#location">LOCALIZAÇÃO</a>
        <a href="#testimonials">DEPOIMENTOS</a>
        <a href="#availability">DISPONIBILIDADE</a>
        <a href="#team">EQUIPE</a>
    </div>
  </nav>
}