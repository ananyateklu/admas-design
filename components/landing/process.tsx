/*
This client component provides the process section for the landing page.
*/

"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  MessageSquare,
  Lightbulb,
  Paintbrush,
  Code,
  Package,
  Zap
} from "lucide-react"

const processes = [
  {
    icon: <MessageSquare className="size-10 text-white" />,
    title: "1. Consultation",
    description:
      "We begin with a thorough discussion about your business, goals, and vision for your website."
  },
  {
    icon: <Lightbulb className="size-10 text-white" />,
    title: "2. Strategy",
    description:
      "We develop a comprehensive plan that aligns with your business objectives and target audience."
  },
  {
    icon: <Paintbrush className="size-10 text-white" />,
    title: "3. Design",
    description:
      "Our designers create stunning visual concepts that capture your brand identity."
  },
  {
    icon: <Code className="size-10 text-white" />,
    title: "4. Development",
    description:
      "We build your website using clean, efficient code and modern development practices."
  },
  {
    icon: <Package className="size-10 text-white" />,
    title: "5. Review & Launch",
    description:
      "After thorough testing and your approval, we launch your new website to the world."
  },
  {
    icon: <Zap className="size-10 text-white" />,
    title: "6. Support & Growth",
    description:
      "We provide ongoing support and optimization to ensure your website continues to perform."
  }
]

export const ProcessSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="bg-gray-50 py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold">Our Process</h2>
          <div className="mx-auto mb-6 h-1 w-20 bg-blue-500"></div>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            We follow a proven step-by-step process to ensure your website
            exceeds expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="relative"
            >
              <div className="absolute left-0 top-0 flex size-16 items-center justify-center rounded-full bg-blue-500">
                {process.icon}
              </div>
              <div className="h-full rounded-lg border border-gray-100 bg-white p-8 pl-20 shadow-lg">
                <h3 className="mb-3 text-xl font-bold">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
