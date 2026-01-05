'use client'

import { motion } from 'framer-motion'
import { Target, Heart, Lightbulb } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About WebHop</h2>
            <p className="text-muted-foreground mb-6">
              We are a team of designers and developers who believe that every local business 
              deserves a professional online presence. Founded with a simple mission: make 
              high-quality web design accessible and affordable for small businesses.
            </p>
            <p className="text-muted-foreground mb-8">
              Unlike large agencies that charge premium prices and treat small businesses as 
              low-priority clients, we specialize in working with cafes, restaurants, gyms, 
              and local service providers. We understand your challenges and build solutions 
              that actually work for your budget and goals.
            </p>

            <div className="grid gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">
                    Help 1000 local businesses grow online with conversion-focused websites 
                    that deliver real, measurable results.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Our Values</h3>
                  <p className="text-sm text-muted-foreground">
                    Transparency in pricing, honesty in communication, and a genuine 
                    commitment to your success. No hidden fees, no jargon.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Our Approach</h3>
                  <p className="text-sm text-muted-foreground">
                    We listen first, then build. Every project starts with understanding 
                    your business, your customers, and your goals.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop"
                alt="WebHop Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-xl border border-border shadow-lg">
              <div className="text-3xl font-bold text-primary">3+ Years</div>
              <div className="text-sm text-muted-foreground">of helping local businesses grow</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
