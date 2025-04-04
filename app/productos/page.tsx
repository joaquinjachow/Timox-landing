"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import productosData from "@/data/productos-data"
import { Card, CardContent } from "@/components/ui/card"

export default function ProductosPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Get unique categories
  const categories = Array.from(new Set(productosData.map((product) => product.category)))

  // Filter products by selected category
  const filteredProducts = selectedCategory
    ? productosData.filter((product) => product.category === selectedCategory)
    : productosData

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-[rgb(46,49,145)]">Nuestros Productos</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters sidebar */}
        <div className="w-full md:w-64 mb-6 md:mb-0">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-[rgb(46,49,145)]">Categorías</h2>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`w-full text-left px-3 py-2 rounded ${
                  selectedCategory === null ? "bg-[rgb(46,49,145)] text-white" : "hover:bg-gray-100"
                }`}
              >
                Todos
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-3 py-2 rounded ${
                    selectedCategory === category ? "bg-[rgb(46,49,145)] text-white" : "hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link href={`/productos/${product.id}`} key={product.id}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="aspect-square relative mb-3">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-bold text-lg text-[rgb(46,49,145)]">{product.name}</h3>
                    <p className="text-[rgb(138,137,140)]">{product.descripcion}</p>
                    <p className="text-sm mt-2">Categoría: {product.category}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

