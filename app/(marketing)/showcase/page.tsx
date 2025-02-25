"use server"

import { Square } from "lucide-react"
import Image from "next/image"

// This would normally come from a database or CMS
// Replace with your actual project data
const projects = [
  {
    id: 1,
    title: "Brand Identity Design",
    category: "Branding",
    description:
      "Complete brand identity design including logo, color palette, and brand guidelines.",
    image: "/showcase/project1/main.jpg" // Replace with your actual image path
  },
  {
    id: 2,
    title: "E-commerce Website",
    category: "Web Design",
    description:
      "Modern e-commerce website with product catalog and shopping cart functionality.",
    image: "/showcase/project2/main.jpg" // Replace with your actual image path
  },
  {
    id: 3,
    title: "Mobile App Interface",
    category: "UI/UX",
    description:
      "Intuitive mobile app interface design with focus on user experience.",
    image: "/showcase/project3/main.jpg" // Replace with your actual image path
  },
  {
    id: 4,
    title: "Corporate Identity Package",
    category: "Branding",
    description:
      "Complete corporate identity including business cards, letterheads, and marketing materials.",
    image: "/showcase/project4/main.jpg" // Replace with your actual image path
  },
  {
    id: 5,
    title: "Product Packaging",
    category: "Packaging",
    description: "Creative product packaging design for consumer products.",
    image: "/showcase/project5/main.jpg" // Replace with your actual image path
  },
  {
    id: 6,
    title: "Digital Marketing Campaign",
    category: "Marketing",
    description:
      "Comprehensive digital marketing campaign materials including social media assets.",
    image: "/showcase/project6/main.jpg" // Replace with your actual image path
  },
  {
    id: 7,
    title: "Interior Design Concept",
    category: "Interior",
    description:
      "Modern interior design concept for residential and commercial spaces with emphasis on functionality and aesthetics.",
    image: "/showcase/project7/main.jpg" // Replace with your actual image path
  }
]

export default async function ShowcasePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative py-20 md:py-28">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white">
          <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-5"></div>
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto max-w-5xl px-4 text-center">
          <div className="flex items-center justify-center">
            <Square className="mr-2 text-blue-600" size={20} />
            <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />
            <span className="text-sm text-gray-600">Our Portfolio</span>
          </div>

          <h1 className="mt-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Featured <span className="text-blue-600">Projects</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Explore our diverse portfolio of design work across various
            industries and project types. Each project represents our commitment
            to excellence and client satisfaction.
          </p>
        </div>
      </div>

      {/* Portfolio Content */}
      <div className="container mx-auto max-w-7xl px-4 pb-20">
        {/* Filters - These could be made interactive with client components */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          <button className="rounded-full bg-gray-900 px-6 py-2 text-sm font-medium text-white hover:bg-gray-800">
            All Projects
          </button>
          <button className="rounded-full bg-gray-100 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200">
            Branding
          </button>
          <button className="rounded-full bg-gray-100 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200">
            Web Design
          </button>
          <button className="rounded-full bg-gray-100 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200">
            UI/UX
          </button>
          <button className="rounded-full bg-gray-100 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200">
            Packaging
          </button>
          <button className="rounded-full bg-gray-100 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200">
            Marketing
          </button>
          <button className="rounded-full bg-gray-100 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200">
            Interior
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
            >
              <div className="relative h-64 w-full overflow-hidden">
                {/* Image placeholder - replace with your actual images */}
                <div className="absolute inset-0 bg-gray-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 transition-all group-hover:bg-black/20"></div>
              </div>
              <div className="p-6">
                <span className="mb-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                  {project.category}
                </span>
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <button className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800">
                  View Project
                  <svg
                    className="ml-1 size-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
