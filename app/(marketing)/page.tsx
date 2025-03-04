/*
This server page is the marketing homepage.
*/

"use server"

import { HeroSection } from "@/components/landing/hero"
import { ServicesSection } from "@/components/landing/services"
import { ProcessSection } from "@/components/landing/process"
import { TestimonialsSection } from "@/components/landing/testimonials"
import { CTASection } from "@/components/landing/cta"
import { ShowcasePreviewSection } from "@/components/landing/showcase-preview"

export default async function HomePage() {
  return (
    <div>
      <HeroSection />
      <ShowcasePreviewSection />
      <div id="services">
        <ServicesSection />
      </div>
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
