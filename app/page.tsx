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
    <main>
        <Navbar setOpen={setOpen}/>
        <Hero />
        <About />
        <Structure />
        <Differentials />
        <Partnerships />
        <Location />
        <Testimonials />
        <Availability open={open} setOpen={setOpen}/>
        <Team />
        <WhatsAppButton setOpen={setOpen}/>
        <Footer />
    </main>
  )
}