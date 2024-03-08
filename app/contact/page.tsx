import ContactForm from "@/components/contactform"

export const metadata = {
  title: 'Contact - YAKINA',
  description: 'contact page',
}

export default function Contact() {
  return (
    <section className="relative">
      <ContactForm/>
    </section>
  )
}
