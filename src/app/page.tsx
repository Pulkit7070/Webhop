import { HeroSection } from '@/components/sections/hero-section'
import { WhySection } from '@/components/sections/why-section'
import { ServicesSection } from '@/components/sections/services-section'
import { ProcessSection } from '@/components/sections/process-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { AboutSection } from '@/components/sections/about-section'
import { CTASection } from '@/components/sections/cta-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <AboutSection />
      <CTASection />
    </>
  )
}
