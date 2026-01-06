'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Globe, MessageCircle, Bot, Database, Search, Wrench, ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react'
import { GlassCard, GlassCardContent } from '@/components/ui/glass-card'
import { Button } from '@/components/ui/button'
import DisplayCards from '@/components/ui/display-cards'

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

const showcaseCards = [
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "Premium Design",
    description: "Beautiful, modern websites",
    date: "50+ Projects",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Zap className="size-4 text-amber-300" />,
    title: "Lightning Fast",
    description: "Optimized for speed & SEO",
    date: "98% Score",
    iconClassName: "text-amber-500",
    titleClassName: "text-amber-500",
    className:
      "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <TrendingUp className="size-4 text-green-300" />,
    title: "Results Driven",
    description: "Increase your conversions",
    date: "2x Growth",
    iconClassName: "text-green-500",
    titleClassName: "text-green-500",
    className:
      "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
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
          <p className="mt-4 text-muted-foreground text-lg">
            Everything you need to establish and grow your online presence. 
            All prices in INR.
          </p>
        </motion.div>

        {/* Showcase Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-20"
        >
          <DisplayCards cards={showcaseCards} />
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
              <GlassCard intensity="medium" className="h-full group">
                <GlassCardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-linear-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <div className="text-base font-semibold text-primary">{service.price}</div>
                </GlassCardContent>
              </GlassCard>
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
