import ContactForm from "@/components/contactform";
import { FormDataProvider } from "@/context/FormDataProvider";

export const metadata = {
  title: "Contact - YAKINA",
  description: "contact page",
};

export default function Contact() {
  return (
    <section className="relative">
      <FormDataProvider>
        <ContactForm />
      </FormDataProvider>
    </section>
  );
}
