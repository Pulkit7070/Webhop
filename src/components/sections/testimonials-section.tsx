'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    name: 'Rajesh Sharma',
    business: 'Brew & Bites Cafe',
    location: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    quote: 'WebHop transformed our online presence completely. Our website now brings in 40% of our new customers. The team was professional and delivered exactly what we needed.',
    result: '40% increase in new customers',
  },
  {
    name: 'Priya Patel',
    business: 'FitZone Gym',
    location: 'Pune',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    quote: 'The WhatsApp integration was a game changer. We now capture leads even when we are busy training. Our membership sign-ups have doubled since the new website launch.',
    result: '2x membership sign-ups',
  },
  {
    name: 'Amit Kumar',
    business: 'Spice Garden Restaurant',
    location: 'Delhi',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    quote: 'Fast, beautiful, and actually brings us orders. The online reservation system works perfectly and our customers love how easy it is to find us and book a table.',
    result: '60% more online reservations',
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
          <p className="mt-4 text-muted-foreground">
            Real results from real businesses. See how we have helped local businesses 
            grow with effective web solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card border-border">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-muted-foreground text-sm mb-6">
                    {testimonial.quote}
                  </p>

                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.business}, {testimonial.location}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="text-sm font-medium text-primary">
                      {testimonial.result}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
