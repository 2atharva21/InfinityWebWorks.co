import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense, lazy } from "react"

// Lazy load the AmbientBackground and LoadingAnimation components
const AmbientBackground = lazy(() => import('@/components/ambient-background'))
const LoadingAnimation = lazy(() => import('@/components/loading-animation'))

const inter = Inter({ subsets: ["latin"], display: "swap" }) // Added font-display: swap for better performance

export const metadata: Metadata = {
  title: "InfinityWebWorks.co | Building the Future of Web",
  description:
    "Modern web development agency specializing in AI-powered websites, web development, UI/UX design, and more.",
  generator: "v0.dev",
  openGraph: {
    title: "InfinityWebWorks.co | Building the Future of Web",
    description:
      "Modern web development agency specializing in AI-powered websites, web development, UI/UX design, and more.",
    url: "https://www.infinitywebworks.co",
    images: ["/static/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "InfinityWebWorks.co | Building the Future of Web",
    description:
      "Modern web development agency specializing in AI-powered websites, web development, UI/UX design, and more.",
    images: ["/static/logo.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="InfinityWebWorks.co | Building the Future of Web" />
        <meta
          property="og:description"
          content="Modern web development agency specializing in AI-powered websites, web development, UI/UX design, and more."
        />
        <meta property="og:url" content="https://www.infinitywebworks.co" />
        <meta property="og:image" content="https://www.infinitywebworks.co/static/logo.png" /> {/* Absolute path for image */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.infinitywebworks.co/static/logo.png" /> {/* Absolute path for image */}
        
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "InfinityWebWorks.co",
              url: "https://www.infinitywebworks.co",
              logo: "/static/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+918459297080",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: "English",
              },
            }),
          }}
        ></script>
      </head>
      <body
        className={`${inter.className} min-h-screen bg-gradient-to-br from-background to-background/90 text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Suspense fallback={<LoadingAnimation />}>
            <LoadingAnimation />
            <AmbientBackground />
          </Suspense>
          <div className="flex flex-col min-h-screen relative z-10">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
