'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SplineScene } from '@/components/ui/spline-scene'
import { Spotlight } from '@/components/ui/spotlight'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />
      
      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-border text-sm text-muted-foreground mb-6">
              Trusted by 50+ Local Businesses
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              We Build Websites That Help Local Businesses{' '}
              <span className="text-primary">Grow</span>
            </h1>
            
            <p className="mt-6 text-xl text-muted-foreground max-w-lg leading-relaxed">
              High-converting, mobile-first websites for cafes, gyms, restaurants, 
              and service businesses. Get more customers with a website that works.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="text-4xl font-bold">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-4xl font-bold">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-4xl font-bold">3x</div>
                <div className="text-sm text-muted-foreground">Average Lead Growth</div>
              </div>
            </div>
          </motion.div>

          {/* Right 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-100 lg:h-150 hidden lg:block"
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden bg-card/50">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
