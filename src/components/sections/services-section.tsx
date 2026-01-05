'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Globe, MessageCircle, Bot, Database, Search, Wrench, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Globe,
    title: 'Website Design & Development',
    description: 'Custom, mobile-first websites built to convert visitors into customers.',
    price: 'From 25,000',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Bot Integration',
    description: 'Automate customer inquiries and capture leads 24/7 with WhatsApp.',
    price: '7,000',
  },
  {
    icon: Bot,
    title: 'Custom AI Bot',
    description: 'Intelligent chatbots tailored to your business needs and workflows.',
    price: 'From 10,000',
  },
  {
    icon: Database,
    title: 'Database & Analytics',
    description: 'Track your traffic, understand your customers, and make data-driven decisions.',
    price: '15,000',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Get found on Google. On-page SEO and technical optimization included.',
    price: '5,000',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    description: 'Keep your website running smoothly with regular updates and support.',
    price: '8,000/3mo',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to establish and grow your online presence. 
            All prices in INR.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card border-border hover:border-primary/50 transition-colors group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <div className="text-sm font-medium text-primary">{service.price}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button size="lg" asChild>
            <Link href="/services">
              View All Services & Pricing
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
