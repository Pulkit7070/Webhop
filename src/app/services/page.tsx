'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, ArrowRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const packages = [
  {
    title: 'Starter Website Package',
    price: '25,000',
    description: 'Perfect for small businesses getting started online',
    popular: false,
    features: [
      '3 custom designed pages',
      'Responsive mobile-first design',
      'Contact form integration',
      'Basic SEO setup',
      'Social media links',
      '1 month free maintenance',
      'Google Analytics setup',
    ],
  },
  {
    title: 'Professional Package',
    price: '45,000',
    description: 'Complete solution for growing businesses',
    popular: true,
    features: [
      '5 custom designed pages',
      'Responsive mobile-first design',
      'Advanced contact forms',
      'WhatsApp integration',
      'On-page SEO optimization',
      'Speed optimization',
      '3 months free maintenance',
      'Google Analytics & Search Console',
      'SSL certificate setup',
    ],
  },
  {
    title: 'Enterprise Package',
    price: '75,000',
    description: 'Full-featured solution for established businesses',
    popular: false,
    features: [
      'Up to 10 custom pages',
      'Custom functionality',
      'CRM integration',
      'AI chatbot integration',
      'Full SEO package',
      'Database integration',
      '6 months maintenance',
      'Priority support',
      'Performance monitoring',
      'Monthly reports',
    ],
  },
]

const addons = [
  {
    title: 'WhatsApp Bot Integration',
    price: '7,000',
    description: 'Automated messaging and lead capture through WhatsApp Business',
  },
  {
    title: 'Custom AI Bot',
    price: 'From 10,000',
    description: 'Intelligent chatbot tailored to your business workflows',
  },
  {
    title: 'Database & Analytics',
    price: '15,000',
    description: 'Traffic tracking, customer insights, and data storage',
  },
  {
    title: 'SEO Optimization',
    price: '5,000',
    description: 'On-page SEO, meta tags, and technical optimization',
  },
  {
    title: '3 Month Maintenance',
    price: '8,000',
    description: 'Technical updates, security patches, and speed optimization',
  },
  {
    title: 'CRM Integration',
    price: '15,000',
    description: 'Customer data management and lead tracking system',
  },
]

const faqs = [
  {
    question: 'How long does it take to build a website?',
    answer: 'Most projects are completed within 2-3 weeks. Complex projects with custom functionality may take 4-6 weeks. We will give you a timeline during our initial consultation.',
  },
  {
    question: 'Do you provide hosting?',
    answer: 'We can set up hosting for you on reliable platforms like Vercel or your preferred provider. Hosting costs are separate and typically range from free to 500/month depending on your needs.',
  },
  {
    question: 'What if I need changes after the website is live?',
    answer: 'Our maintenance packages include regular updates and minor changes. For major redesigns or new features, we will provide a separate quote.',
  },
  {
    question: 'Do I own my website?',
    answer: 'Yes, you own 100% of your website and all its content. We will transfer all files and access credentials to you upon completion.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfers, UPI, and can generate invoices with GST. We typically require 50% upfront and 50% upon completion.',
  },
  {
    question: 'Can I see examples of your work?',
    answer: 'Visit our portfolio page to see examples of websites we have built for cafes, restaurants, gyms, and other local businesses.',
  },
]

export default function ServicesPage() {
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
              Services & Pricing
            </h1>
            <p className="text-lg text-muted-foreground">
              Transparent pricing with no hidden fees. Choose a package that fits your 
              business needs, or build a custom solution with our add-ons.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section id="pricing" className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Website Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete website solutions. All prices in INR (one-time payment).
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`h-full relative ${pkg.popular ? 'border-primary' : 'border-border'}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pt-8">
                    <CardTitle className="text-xl">{pkg.title}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{pkg.price}</span>
                      <span className="text-muted-foreground ml-1">INR</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm">
                          <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={pkg.popular ? 'default' : 'outline'} asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Add-on Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enhance your website with additional features and services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {addons.map((addon, index) => (
              <motion.div
                key={addon.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card className="h-full bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{addon.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{addon.description}</p>
                    <div className="text-lg font-bold text-primary">{addon.price} INR</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Card className="inline-block bg-card border-border">
              <CardContent className="p-8">
                <MessageCircle className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Something Else in Mind?</h3>
                <p className="text-muted-foreground mb-4">
                  Have a unique requirement? Let us discuss your custom project.
                </p>
                <Button asChild>
                  <Link href="/contact">
                    Talk to Us
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Common questions about our services and process.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card className="bg-background border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg opacity-90 mb-8">
              Book a free consultation to discuss your project. No commitment required.
            </p>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-background text-foreground hover:bg-background/90"
            >
              <Link href="/contact">
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
