"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const banners = [
  {
    id: 1,
    image: "/placeholder.svg?height=600&width=1200",
    title: "Descubrí Todos Nuestros Productos",
    description: "Calidad, variedad y precios competitivos",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=600&width=1200",
    title: "¿Querés Comprar o Vender?",
    description: "Te acompañamos en cada paso del proceso",
    dualButtons: true,
  },
  {
    id: 3,
    image: "/placeholder.svg?height=600&width=1200",
    title: "Productos Timox",
    description: "La mejor relación calidad-precio del mercado",
    button: {
      text: "Ver Productos",
      href: "/productos",
    },
  },
]

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <Image
              src={banner.image || "/placeholder.svg"}
              alt={banner.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white p-4 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">{banner.title}</h2>
              <p className="text-lg md:text-xl max-w-2xl">{banner.description}</p>

              {/* Botón único */}
              {banner.button && (
                <Link href={banner.button.href}>
                  <button className="mt-4 bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
                    {banner.button.text}
                  </button>
                </Link>
              )}

              {/* Botones dobles */}
              {banner.dualButtons && (
                <div className="flex space-x-4 mt-4">
                  <a href="#forms">
                    <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
                      Quiero Comprar
                    </button>
                  </a>
                  <a href="#forms">
                    <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
                      Quiero Vender
                    </button>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Anterior"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Siguiente"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}