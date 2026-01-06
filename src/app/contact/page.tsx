'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, CheckCircle, Send, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@webhop.in',
    description: 'We reply within 24 hours',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 98765 43210',
    description: 'Mon-Sat, 10am-7pm IST',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Mumbai, India',
    description: 'Serving clients across India',
  },
]

const whatHappensNext = [
  {
    step: 1,
    title: 'We Review Your Inquiry',
    description: 'Our team reviews your project details within 24 hours.',
  },
  {
    step: 2,
    title: 'Discovery Call',
    description: 'We schedule a call to understand your business and goals.',
  },
  {
    step: 3,
    title: 'Custom Proposal',
    description: 'You receive a detailed proposal with timeline and pricing.',
  },
  {
    step: 4,
    title: 'Project Kickoff',
    description: 'Once approved, we start building your website.',
  },
]

const faqs = [
  {
    question: 'How quickly can I expect a response?',
    answer: 'We typically respond to all inquiries within 24 hours during business days. For urgent matters, you can call us directly.',
  },
  {
    question: 'Is the consultation really free?',
    answer: 'Yes, the initial consultation is completely free with no obligations. We discuss your needs and provide a rough estimate.',
  },
  {
    question: 'What information should I prepare?',
    answer: 'It helps to have an idea of your budget, timeline, and any websites you like. But do not worry if you are unsure, we will guide you.',
  },
]

const trustIndicators = [
  '50+ Projects Delivered',
  '98% Client Satisfaction',
  'No Hidden Fees',
  'Money-Back Guarantee',
]

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: '',
    budget: '',
    contactMethod: 'email', // New field for contact preference
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')
    
    // Check if user wants WhatsApp contact
    if (formData.contactMethod === 'whatsapp') {
      handleWhatsAppSubmit()
      return
    }

    // Simulate form submission for email
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setFormStatus('success')
    // In production, you would send this to your backend/email service
    console.log('Form submitted:', formData)
  }

  const handleWhatsAppSubmit = () => {
    // Create WhatsApp message from form data
    const message = `Hi, my name is ${formData.name}.${formData.email ? `\nEmail: ${formData.email}` : ''}${formData.phone ? `\nPhone: ${formData.phone}` : ''}${formData.business ? `\nBusiness: ${formData.business}` : ''}${formData.budget ? `\nBudget: ${formData.budget}` : ''}\n\nProject Details:\n${formData.message || 'I\'m looking for web services. Please contact me.'}`
    
    const cleanNumber = '+918882655977'.replace(/\D/g, '')
    const encodedMessage = encodeURIComponent(message)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    
    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${cleanNumber}&text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${cleanNumber}&text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
    setFormStatus('success')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

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
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to grow your business online? Fill out the form below and we will 
              get back to you within 24 hours with a free consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-background border-border">
                <CardContent className="p-8">
                  {formStatus === 'success' ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Message Sent</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. We will get back to you within 24 hours.
                      </p>
                      <Button onClick={() => setFormStatus('idle')}>
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="business">Business Name</Label>
                          <Input
                            id="business"
                            name="business"
                            value={formData.business}
                            onChange={handleChange}
                            placeholder="Your business name"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="budget">Estimated Budget</Label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Select your budget range</option>
                          <option value="under-25k">Under 25,000 INR</option>
                          <option value="25k-50k">25,000 - 50,000 INR</option>
                          <option value="50k-75k">50,000 - 75,000 INR</option>
                          <option value="75k-100k">75,000 - 1,00,000 INR</option>
                          <option value="above-100k">Above 1,00,000 INR</option>
                          <option value="not-sure">Not sure yet</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Project Details *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project, goals, and any specific requirements..."
                          rows={5}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Preferred Contact Method</Label>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="contactMethod"
                              value="email"
                              checked={formData.contactMethod === 'email'}
                              onChange={handleChange}
                              className="w-4 h-4 text-primary"
                            />
                            <span className="text-sm">Email</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="contactMethod"
                              value="whatsapp"
                              checked={formData.contactMethod === 'whatsapp'}
                              onChange={handleChange}
                              className="w-4 h-4 text-primary"
                            />
                            <span className="flex items-center gap-1 text-sm">
                              <MessageCircle className="w-4 h-4 text-[#25D366]" />
                              WhatsApp
                            </span>
                          </label>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={formStatus === 'submitting'}
                      >
                        {formStatus === 'submitting' ? (
                          <>
                            <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                            {formData.contactMethod === 'whatsapp' ? 'Opening WhatsApp...' : 'Sending...'}
                          </>
                        ) : (
                          <>
                            {formData.contactMethod === 'whatsapp' ? (
                              <>
                                <MessageCircle className="w-4 h-4 mr-2" />
                                Contact via WhatsApp
                              </>
                            ) : (
                              <>
                                <Send className="w-4 h-4 mr-2" />
                                Send Message
                              </>
                            )}
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="grid gap-4">
                {contactInfo.map((info) => (
                  <Card key={info.title} className="bg-background border-border">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <p className="text-foreground">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Trust Indicators */}
              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {trustIndicators.map((indicator) => (
                      <div key={indicator} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">{indicator}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">What Happens Next</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here is what to expect after you submit your inquiry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {whatHappensNext.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                {index < whatHappensNext.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-px bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
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
    </>
  )
}
