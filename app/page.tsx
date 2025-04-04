import Banner from "@/components/banner"
import CompanyInfo from "@/components/company-info"
import ContactForm from "@/components/contact-form"
import FeaturedProducts from "@/components/featured-products"

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-12">
      <Banner />
      <CompanyInfo />
      <FeaturedProducts />
      <ContactForm />
    </div>
  )
}

