/*
This client component provides the services section for the landing page.
*/

"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Code,
  Columns,
  Globe,
  Lightbulb,
  Palette,
  ShoppingBag,
  Smartphone,
  Sparkles
} from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: <Palette className="size-12 text-blue-500" />,
    title: "UI/UX Design",
    description:
      "Create intuitive, engaging user experiences with research-backed design practices."
  },
  {
    icon: <Code className="size-12 text-blue-500" />,
    title: "Web Development",
    description:
      "Custom websites built with clean, efficient code and the latest technologies."
  },
  {
    icon: <Smartphone className="size-12 text-blue-500" />,
    title: "Responsive Design",
    description:
      "Websites that look and work beautifully on all devices – desktop, tablet, and mobile."
  },
  {
    icon: <Columns className="size-12 text-blue-500" />,
    title: "CMS Integration",
    description:
      "Easy-to-update websites with content management systems like WordPress or custom solutions."
  },
  {
    icon: <ShoppingBag className="size-12 text-blue-500" />,
    title: "E-Commerce Solutions",
    description:
      "Online stores built to showcase products and optimize the buying experience."
  },
  {
    icon: <Globe className="size-12 text-blue-500" />,
    title: "Multilingual Support",
    description:
      "Websites that connect with your global audience in their preferred language."
  }
]

export const ServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="bg-white py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold">Our Services</h2>
          <div className="mx-auto mb-6 h-1 w-20 bg-blue-500"></div>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            We provide comprehensive web design and development services to help
            your business succeed online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="rounded-lg border border-gray-100 bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
