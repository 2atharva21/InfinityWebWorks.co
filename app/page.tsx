import Hero from "@/components/home/hero"
import FeaturedServices from "@/components/home/featured-services"
import FeaturedProjects from "@/components/home/featured-projects"
import AboutPreview from "@/components/home/about-preview"
import ContactCta from "@/components/home/contact-cta"
import PageTransition from "@/components/page-transition"

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <FeaturedServices />
      <FeaturedProjects />
      <AboutPreview />
      <ContactCta />
    </PageTransition>
  )
}

