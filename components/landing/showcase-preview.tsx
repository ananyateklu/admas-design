"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon, ArrowUpRight } from "lucide-react"

// Featured projects to showcase (showing just 4 on homepage)
const featuredProjects = [
  {
    id: 1,
    title: "Brand Identity Design",
    description:
      "Complete brand identity design including logo, color palette, and brand guidelines.",
    category: "Branding",
    image: "/showcase/project1/main.jpg"
  },
  {
    id: 2,
    title: "E-commerce Website",
    description:
      "Modern e-commerce website with product catalog and shopping cart functionality.",
    category: "Web Design",
    image: "/showcase/project2/main.jpg"
  },
  {
    id: 4,
    title: "Corporate Identity Package",
    description:
      "Complete corporate identity including business cards, letterheads, and marketing materials.",
    category: "Branding",
    image: "/showcase/project4/main.jpg"
  },
  {
    id: 7,
    title: "Interior Design Concept",
    description:
      "Modern interior design concept for residential and commercial spaces.",
    category: "Interior",
    image: "/showcase/project7/main.jpg"
  }
]

export function ShowcasePreviewSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  // Set mounted state on client-side only
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  // Animation variants for items
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15
      }
    }
  }

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-24 md:py-40"
    >
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />

      {/* Decorative elements */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="container relative mx-auto max-w-7xl px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-2xl text-center md:mb-24"
        >
          <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
            Our Portfolio
          </span>
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            Our Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-gray-600">
            Explore a selection of our best design work across various
            industries and project types.
          </p>
        </motion.div>

        {/* Simple grid layout with staggered animations */}
        <motion.div
          className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 lg:gap-10 xl:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {featuredProjects.map(project => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
              whileHover={{
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              {/* Project image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority={isMounted}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Category tag */}
                <div className="absolute left-4 top-4 z-10">
                  <span className="inline-block rounded-full bg-blue-600/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project info */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-blue-600 md:text-2xl">
                  {project.title}
                </h3>
                <p className="mb-4 flex-1 text-gray-600">
                  {project.description}
                </p>
                <Link
                  href={`/showcase#project-${project.id}`}
                  className="mt-auto inline-flex items-center font-medium text-blue-600 transition-colors hover:text-blue-700"
                >
                  View Details
                  <ArrowRightIcon className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all projects button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex justify-center"
        >
          <Link
            href="/showcase"
            className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-medium text-white shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200"
          >
            View All Projects
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
