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
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-12">
          {featuredProjects.map((project, index) => {
            // Create different column spans for visual interest
            const colSpan =
              index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-5"
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={project.id}
                className={cn(
                  "parallax-item group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl",
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
                {/* Project image with overlay */}
                <div className="aspect-[4/3] w-full">
                  <div className="relative size-full overflow-hidden bg-black/50">
                    {/* Dark background fallback that only shows during image load */}
                    <div className="absolute inset-0 bg-black/80"></div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="z-10 object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      priority={true}
                    />
                    {/* Enhanced gradient overlay for better text readability */}
                    <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

                    {/* Diagonal accent line */}
                    <div className="absolute inset-0 z-30 overflow-hidden">
                      <div className="absolute -left-1/4 top-1/2 h-px w-[150%] -rotate-12 bg-white/30 transition-all duration-700 group-hover:bg-blue-400/60" />
                    </div>
                  </div>
                </div>

                {/* Project info with improved readability */}
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <span className="mb-2 inline-block rounded-full bg-blue-600/90 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                    {project.category}
                  </span>
                  <h3 className="mb-2 text-2xl font-bold drop-shadow-md group-hover:text-blue-200">
                    {project.title}
                  </h3>

                  <div className="opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Link
                      href={`/showcase#project-${project.id}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-white drop-shadow-md transition hover:text-blue-200"
                    >
                      View Project <ArrowUpRight className="size-4" />
                    </Link>
                  </div>
                </div>

                {/* Blue corner accent */}
                <div className="absolute right-0 top-0 size-16 overflow-hidden">
                  <div className="absolute right-0 top-0 size-8 -translate-y-1/2 translate-x-1/2 rotate-45 bg-blue-600 transition-all duration-300 group-hover:bg-blue-500"></div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* View all projects button */}
        <div className="relative z-40 mt-24 flex justify-center">
          <Link
            href="/showcase"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow-sm transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 hover:shadow"
          >
            View All Projects
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
