'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, TrendingUp, Clock, Users, Headphones } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for speed. Your site loads in under 2 seconds, keeping visitors engaged.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with SSL, regular backups, and 99.9% uptime guarantee.',
  },
  {
    icon: TrendingUp,
    title: 'SEO Optimized',
    description: 'Built with search engines in mind. Get found by customers searching for your services.',
  },
  {
    icon: Clock,
    title: 'Quick Turnaround',
    description: 'Most projects delivered within 2-3 weeks. No endless waiting for your website.',
  },
  {
    icon: Users,
    title: 'Conversion Focused',
    description: 'Every element designed to turn visitors into customers. Real results, not just pretty designs.',
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    description: 'We dont disappear after launch. Get dedicated support and maintenance when you need it.',
  },
]

export function WhySection() {
  return (
    <section id="why" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose WebHop</h2>
          <p className="mt-4 text-muted-foreground">
            We are not just another web design agency. We are your growth partner, 
            focused on delivering websites that actually bring you more customers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
