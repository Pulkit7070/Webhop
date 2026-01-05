'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const categories = ['All', 'Cafe', 'Restaurant', 'Gym', 'Services']

const projects = [
  {
    id: 1,
    title: 'Ferry Wharf',
    category: 'Restaurant',
    description: 'A modern website for a seafood restaurant in Mumbai, featuring online menu.',
    image: '/projects/ferry_wharf.png',
    results: ['40% increase in new customers', '3x online orders'],
    tags: ['Modern Web Design', 'SEO'],
    url: 'https://ferrywharf.vercel.app/',
  },
  {
    id: 2,
    title: "Sang's Home Bakery",
    category: 'Bakery',
    description: 'A modern website for a home bakery in Mumbai, featuring online menu and whatsapp orderering.',
    image: '/projects/sang_bakery.png',
    results: ['50% increase in online orders', '2x sales'],
    tags: ['Web Design', 'CRM Integration', 'Booking System'],
    url: 'https://sangshomebakery.vercel.app/',
  },
  {
    id: 3,
    title: 'GM Machinery',
    category: 'Manufacturing',
    description: 'Online presence for a machinery company with product showcase and contact form.',
    image: '/projects/gm_machinery.png',
    results: ['2x membership sign-ups', '50% reduction in phone inquiries'],
    tags: ['Web Design', 'CRM Integration', 'Booking System'],
    url: 'https://gm-machinery.vercel.app/',
  },
]

const clientLogos = [
  { name: 'Ferry Wharf', initial: 'FW' },
  { name: 'Sang Home Bakery', initial: 'SHB' },
  { name: 'GM Machinery', initial: 'GM' },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-lg text-muted-foreground">
              Real projects. Real results. See how we have helped local businesses
              establish their online presence and grow their customer base.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      {/* <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground mb-8">Trusted by local businesses</p>
          <div className="flex flex-wrap justify-center gap-8">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center"
              >
                <span className="text-lg font-bold text-muted-foreground">{client.initial}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Filters */}
      {/* <section className="py-12 bg-background sticky top-16 z-40 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section> */}

      {/* Projects Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    className="h-full bg-card border-border overflow-hidden group hover:border-primary/50 transition-colors cursor-pointer"
                    onClick={() => window.open(project.url, '_blank')}
                  >
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button variant="secondary" size="sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary">{project.category}</Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                      <div className="space-y-2 mb-4">
                        {project.results.map((result) => (
                          <div key={result} className="text-sm font-medium text-primary">
                            {result}
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Want Results Like These?</h2>
            <p className="text-lg opacity-90 mb-8">
              Let us build a website that brings real results to your business.
            </p>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-background text-foreground hover:bg-background/90"
            >
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
