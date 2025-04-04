"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import productosData from "@/data/productos-data"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ProductDetail({ params }: { params: { id: string } }) {
  const router = useRouter()
  const productId = Number.parseInt(params.id)
  const product = productosData.find((p) => p.id === productId)

  if (!product) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
        <Button onClick={() => router.push("/productos")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver a Productos
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <Button variant="outline" onClick={() => router.push("/productos")} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Volver a Productos
      </Button>

      <div className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow">
        <div className="relative aspect-square">
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4 text-[rgb(46,49,145)]">{product.name}</h1>
          <div className="space-y-4">
            <p className="text-lg">{product.descripcion}</p>
            <p>
              <span className="font-semibold">Categoría:</span> {product.category}
            </p>
            <p>
              <span className="font-semibold">Unidades por caja:</span> {product.unidades}
            </p>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-[rgb(46,49,145)]">Información del Producto</h2>
            <p className="text-[rgb(138,137,140)]">
              Nuestros discos de corte están fabricados con los más altos estándares de calidad para garantizar
              precisión y durabilidad en cada proyecto. Ideales para trabajos profesionales y de alta exigencia.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

