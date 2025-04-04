import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[rgb(46,49,145)] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">TIMOX</h3>
            <p className="mb-4">
              Comercializamos una amplia variedad de herramientas con enfoque en discos para cortes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/#empresa" className="hover:underline">
                  Empresa
                </Link>
              </li>
              <li>
                <Link href="/productos" className="hover:underline">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="hover:underline">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <address className="not-italic">
              <p className="mb-2">Email: info@timox.com</p>
              <p className="mb-2">Teléfono: +54 11 1234-5678</p>
              <p>Dirección: Av. Ejemplo 1234, Buenos Aires, Argentina</p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Timox. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

