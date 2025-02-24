/*
This client component provides the call-to-action section for the landing page.
*/

"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CalendarClock } from "lucide-react"

export const CTASection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="bg-blue-600 py-20 text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-4xl font-bold"
          >
            Ready to Transform Your Online Presence?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 text-xl"
          >
            Let's work together to create a website that showcases your brand,
            engages your audience, and drives results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="h-auto bg-white px-8 py-6 text-lg text-blue-600 hover:bg-gray-100"
              >
                <CalendarClock className="mr-2 size-5" />
                Schedule a Free Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
