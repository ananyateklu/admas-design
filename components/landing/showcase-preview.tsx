"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Square } from "lucide-react"
import { cn } from "@/lib/utils"

// Featured projects to showcase (showing just 4 on homepage)
const featuredProjects = [
  {
    id: 1,
    title: "Brand Identity Design",
    category: "Branding",
    image: "/showcase/project1/main.jpg"
  },
  {
    id: 2,
    title: "E-commerce Website",
    category: "Web Design",
    image: "/showcase/project2/main.jpg"
  },
  {
    id: 4,
    title: "Corporate Identity Package",
    category: "Branding",
    image: "/showcase/project4/main.jpg"
  },
  {
    id: 7,
    title: "Interior Design Concept",
    category: "Interior",
    image: "/showcase/project7/main.jpg"
  }
]

export function ShowcasePreviewSection() {
  // Refs for interactive elements
  const containerRef = useRef<HTMLDivElement>(null)

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const scrollPosition = window.scrollY
      const elements = containerRef.current.querySelectorAll(".parallax-item")

      elements.forEach((el, index) => {
        const speed = 0.05 + index * 0.01
        const yPos = scrollPosition * speed
        ;(el as HTMLElement).style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background with diagonal pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #f0f4ff 25%, transparent 25%, transparent 50%, #f0f4ff 50%, #f0f4ff 75%, transparent 75%, transparent)",
            backgroundSize: "64px 64px",
            opacity: 0.3
          }}
        />
      </div>

      {/* Blue accent lines */}
      <div className="absolute left-0 top-40 h-px w-full bg-blue-200" />
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-blue-100" />

      {/* Content */}
      <div
        className="container relative z-10 mx-auto max-w-7xl px-4"
        ref={containerRef}
      >
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-3 inline-flex items-center rounded-full bg-blue-50 px-3 py-1">
            <Square className="mr-2 size-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Our Work</span>
          </div>

          <h2 className="mb-6 max-w-2xl text-4xl font-bold md:text-5xl">
            Crafting <span className="text-blue-600">exceptional</span> design
            experiences
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Explore our portfolio of innovative design work across multiple
            industries and platforms.
          </p>
        </div>

        {/* Projects grid with unique layout */}
        <div className="relative flex flex-col space-y-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12">
            {featuredProjects.map((project, index) => {
              // Create different column spans for visual interest
              const colSpan =
                index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-5"
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={project.id}
                  className={cn(
                    "parallax-item group relative overflow-hidden rounded-2xl transition-all duration-500",
                    colSpan,
                    isEven ? "lg:translate-y-8" : ""
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  {/* Card with border and glass effect */}
                  <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/70 shadow-xl backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
                    {/* Project image with improved overlay */}
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <div className="relative size-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="z-10 object-cover object-center mix-blend-overlay transition-all duration-700 group-hover:scale-105"
                          priority={true}
                        />

                        {/* Blue accent line */}
                        <div className="absolute bottom-0 left-0 z-30 h-1 w-0 bg-blue-500 transition-all duration-700 ease-out group-hover:w-full" />
                      </div>
                    </div>

                    {/* Project info with improved layout */}
                    <div className="absolute inset-x-0 bottom-0 z-30 p-6 text-white">
                      <div className="transition-all duration-500 group-hover:translate-y-0">
                        {/* Category tag with updated design */}
                        <span className="relative mb-3 inline-flex items-center rounded-full bg-blue-600/90 px-3 py-1 text-xs font-medium backdrop-blur-sm transition-all duration-300 group-hover:bg-blue-500">
                          {project.category}
                        </span>

                        {/* Title with improved typography */}
                        <h3 className="relative mb-4 text-2xl font-bold tracking-tight text-white drop-shadow-lg transition-all duration-300 group-hover:text-blue-100">
                          {project.title}
                        </h3>

                        {/* View project link with improved animation */}
                        <div className="relative opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                          <Link
                            href={`/showcase#project-${project.id}`}
                            className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-600/50"
                          >
                            View Project{" "}
                            <ArrowUpRight className="ml-2 size-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* View all projects button - completely separated from parallax content */}
        <div className="relative z-50 mt-40 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <Link
              href="/showcase"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow-sm transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md"
            >
              View All Projects
              <ArrowUpRight className="size-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
