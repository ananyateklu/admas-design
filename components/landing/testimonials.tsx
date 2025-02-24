/*
This client component provides the testimonials section for the landing page.
*/

"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, FreshStart Retail",
    content:
      "Admas Design transformed our online presence with a stunning website that perfectly captures our brand. Their attention to detail and focus on user experience has significantly increased our online engagement and conversions.",
    stars: 5
  },
  {
    name: "Michael Takele",
    position: "Founder, EthioTech Solutions",
    content:
      "Working with Admas Design was a game-changer for our business. They delivered a beautiful bilingual website that has helped us expand our reach both locally and internationally. Professional, responsive, and highly skilled team!",
    stars: 5
  },
  {
    name: "Rebecca Wong",
    position: "Marketing Director, GlobalView Media",
    content:
      "The team at Admas Design are true professionals. They took the time to understand our needs and created a website that exceeds all our expectations. The site is not only visually impressive but also performs exceptionally well.",
    stars: 5
  }
]

export const TestimonialsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="bg-white py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold">What Our Clients Say</h2>
          <div className="mx-auto mb-6 h-1 w-20 bg-blue-500"></div>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            We take pride in delivering exceptional results that make our
            clients happy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="relative rounded-lg border border-gray-100 bg-gray-50 p-8 shadow-md"
            >
              {/* Quote mark decoration */}
              <div className="absolute right-6 top-6 font-serif text-6xl leading-none text-blue-200">
                "
              </div>

              <p className="relative z-10 mb-6 text-gray-600">
                {testimonial.content}
              </p>

              <div className="flex items-center">
                <div className="mr-4 flex size-12 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-500">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.position}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
