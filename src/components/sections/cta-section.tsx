'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const benefits = [
  'Free consultation and quote',
  'No hidden fees or surprises',
  'Response within 24 hours',
  '100% satisfaction guarantee',
]

export function CTASection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Get a free consultation and custom quote for your project. 
            Let us show you how a professional website can transform your business.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-background text-foreground hover:bg-background/90"
            >
              <Link href="/contact">
                Get Your Free Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/portfolio">See Our Portfolio</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
