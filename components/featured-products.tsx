import Image from "next/image"
import Link from "next/link"
import productosDestacadosData from "@/data/productos-destacados-data"
import { Card, CardContent } from "@/components/ui/card"

export default function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-[rgb(46,49,145)]">Productos Destacados</h2>
        <div className="h-1 w-20 bg-[rgb(46,49,145)] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {productosDestacadosData.map((product) => (
            <Link href={`/productos/${product.id}`} key={product.id}>
              <Card className="h-full hover:shadow-lg transition-shadow">
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
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/productos"
            className="inline-block px-6 py-3 bg-[rgb(46,49,145)] text-white rounded-md hover:bg-[rgb(36,39,135)] transition-colors"
          >
            Ver todos los productos
          </Link>
        </div>
      </div>
    </section>
  )
}

