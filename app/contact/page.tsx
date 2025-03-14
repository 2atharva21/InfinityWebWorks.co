import ContactBanner from "@/components/contact/contact-banner"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import PageTransition from "@/components/page-transition"

export const metadata = {
  title: "Contact Us | InfinityWebWorks.co",
  description:
    "Get in touch with InfinityWebWorks.co for your web development and design needs. We're here to help bring your digital vision to life.",
}

export default function ContactPage() {
  return (
    <PageTransition>
      <ContactBanner />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </PageTransition>
  )
}

