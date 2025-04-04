"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    alert("Mensaje enviado correctamente. Gracias por contactarnos!")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contacto" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-[rgb(46,49,145)]">Contáctenos</h2>
        <div className="h-1 w-20 bg-[rgb(46,49,145)] mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[rgb(46,49,145)]">Información de Contacto</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-[rgb(46,49,145)] mr-4 mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-[rgb(138,137,140)]">info@timox.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-[rgb(46,49,145)] mr-4 mt-1" />
                <div>
                  <h4 className="font-medium">Teléfono</h4>
                  <p className="text-[rgb(138,137,140)]">+54 11 1234-5678</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-[rgb(46,49,145)] mr-4 mt-1" />
                <div>
                  <h4 className="font-medium">Dirección</h4>
                  <p className="text-[rgb(138,137,140)]">Av. Ejemplo 1234, Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Nombre
                </label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">
                  Teléfono
                </label>
                <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full text-white bg-[rgb(46,49,145)] hover:bg-[rgb(36,39,135)]">
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

