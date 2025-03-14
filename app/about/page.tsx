import AboutBanner from "@/components/about/about-banner"
import AboutContent from "@/components/about/about-content"
import TeamSection from "@/components/about/team-section"
import PageTransition from "@/components/page-transition"

export const metadata = {
  title: "About Us | InfinityWebWorks.co",
  description:
    "Learn about InfinityWebWorks.co, our mission, vision, and the team behind our innovative web solutions.",
}

export default function AboutPage() {
  return (
    <PageTransition>
      <AboutBanner />
      <AboutContent />
      <TeamSection />
    </PageTransition>
  )
}

