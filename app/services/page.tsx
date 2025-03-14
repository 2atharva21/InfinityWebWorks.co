import ServicesList from "@/components/services/services-list"
import ServicesBanner from "@/components/services/services-banner"
import ServiceProcess from "@/components/services/service-process"
import PageTransition from "@/components/page-transition"

export const metadata = {
  title: "Services | InfinityWebWorks.co",
  description:
    "Explore our comprehensive range of web development and design services including AI-powered websites, UI/UX design, and more.",
}

export default function ServicesPage() {
  return (
    <PageTransition>
      <ServicesBanner />
      <ServicesList />
      <ServiceProcess />
    </PageTransition>
  )
}

