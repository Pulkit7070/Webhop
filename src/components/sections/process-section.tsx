'use client'

import { motion } from 'framer-motion'
import { MessageSquare, PenTool, Code, Rocket } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Discovery Call',
    description: 'We learn about your business, goals, and target customers. This helps us understand exactly what you need.',
  },
  {
    icon: PenTool,
    step: '02',
    title: 'Design & Planning',
    description: 'We create wireframes and designs for your approval. You will see exactly how your site will look before we build it.',
  },
  {
    icon: Code,
    step: '03',
    title: 'Development',
    description: 'Our team builds your website with clean code, fast loading times, and mobile-first responsiveness.',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Launch & Support',
    description: 'We launch your site and provide ongoing support. You are never left alone after the website goes live.',
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Our Process</h2>
          <p className="mt-4 text-muted-foreground">
            A simple, transparent process designed to deliver your website 
            on time and exactly as you envision it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-6xl font-bold text-primary/10 absolute -top-4 -left-2">
                {step.step}
              </div>
              <div className="relative pt-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
