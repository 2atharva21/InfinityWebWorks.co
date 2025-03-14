import PortfolioBanner from "@/components/portfolio/portfolio-banner"
import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import PageTransition from "@/components/page-transition"

export const metadata = {
  title: "Portfolio | InfinityWebWorks.co",
  description:
    "Explore our portfolio of web development projects showcasing our expertise in creating modern, innovative digital experiences.",
}

export default function PortfolioPage() {
  return (
    <PageTransition>
      <PortfolioBanner />
      <PortfolioGrid />
    </PageTransition>
  )
}

