/*
This client component provides the hero section for the landing page.
*/

"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import {
  ChevronDown,
  ChevronRight,
  Code,
  Globe,
  Layout,
  Palette
} from "lucide-react"
import Link from "next/link"
import AnimatedGradientText from "../magicui/animated-gradient-text"

export const HeroSection = () => {
  const scrollToContent = () => {
    // Scroll to the services section
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative -mt-[64px] flex min-h-[100vh] flex-col">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-5"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-8 pb-20 pt-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          <AnimatedGradientText>
            <Layout className="mr-2 inline" size={20} />
            <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />
            <span
              className={cn(
                `animate-gradient inline bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              Premium Website Design Services
            </span>
            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-8 flex max-w-3xl flex-col items-center justify-center gap-6"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-balance text-6xl font-bold md:text-7xl"
          >
            <span className="text-blue-600">Modern</span> Web Design for{" "}
            <span className="text-blue-600">Growing</span> Businesses
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="max-w-xl text-balance text-xl text-gray-600"
          >
            We craft beautiful, responsive websites that engage your audience,
            showcase your brand, and drive business growth.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="mt-4 flex flex-col gap-4 sm:flex-row"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-blue-600 px-8 text-lg hover:bg-blue-700"
              >
                <Layout className="mr-2 size-5" />
                Get a Quote
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="px-8 text-lg">
                View Our Work
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="mx-auto mt-16 grid w-full max-w-screen-lg grid-cols-1 gap-6 md:grid-cols-3"
        >
          <div className="flex flex-col items-center rounded-lg border bg-white/80 p-6 shadow-md backdrop-blur-sm">
            <Palette className="mb-4 size-12 text-blue-500" />
            <h3 className="mb-2 text-xl font-bold">Beautiful Design</h3>
            <p className="text-center text-gray-600">
              Eye-catching websites that reflect your brand identity
            </p>
          </div>

          <div className="flex flex-col items-center rounded-lg border bg-white/80 p-6 shadow-md backdrop-blur-sm">
            <Code className="mb-4 size-12 text-blue-500" />
            <h3 className="mb-2 text-xl font-bold">Clean Code</h3>
            <p className="text-center text-gray-600">
              Fast, efficient, and easy to maintain websites
            </p>
          </div>

          <div className="flex flex-col items-center rounded-lg border bg-white/80 p-6 shadow-md backdrop-blur-sm">
            <Globe className="mb-4 size-12 text-blue-500" />
            <h3 className="mb-2 text-xl font-bold">Global Reach</h3>
            <p className="text-center text-gray-600">
              Multilingual websites that connect with customers worldwide
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={scrollToContent}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="size-10 text-blue-500" />
        </motion.div>
      </motion.div>
    </div>
  )
}
