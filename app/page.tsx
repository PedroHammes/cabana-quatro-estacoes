"use client"
import Navbar from "@/app/components/ui/Navbar"
import Hero from "@/app/components/sections/Hero"
import About from "@/app/components/sections/About"
import Structure from "@/app/components/sections/Structure"
import Differentials from "@/app/components/sections/Differentials"
import Partnerships from "@/app/components/sections/Partnerships"
import Location from "@/app/components/sections/Location"
import Testimonials from "@/app/components/sections/Testimonials"
import Availability from "@/app/components/sections/Availability"
import Team from "@/app/components/sections/Team"
import WhatsAppButton from "@/app/components/ui/WhatsAppButton"
import { useState } from "react"
import Footer from "./components/ui/Footer"

export default function Home() {
  const [open, setOpen] = useState(false)
  return (
    <main className="pt-16 overflow-y-scroll overflow-x-hidden scroll-smooth snap-y snap-mandatory h-screen">
        <Navbar setOpen={setOpen}/>
        <Hero />
        <About />
        <Structure />
        <Differentials />
        <Partnerships />
        <Location setOpen={setOpen}/>
        <Testimonials />
        <Availability open={open} setOpen={setOpen}/>
        <Team setOpen={setOpen}/>
        <WhatsAppButton setOpen={setOpen}/>
    </main>
  )
}