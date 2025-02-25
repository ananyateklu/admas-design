/*
This server page displays the main features and capabilities of the product.
*/

"use server"

import { Card, CardContent } from "@/components/ui/card"
import {
  BarChart,
  Clock,
  Settings,
  Shield,
  Square,
  Users,
  Zap
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface FeatureProps {
  title: string
  description: string
  icon: React.ReactNode
}

function Feature({ title, description, icon }: FeatureProps) {
  return (
    <Card className="overflow-hidden border-none shadow-md">
      <div className="bg-blue-50 p-4">
        <div className="text-blue-600">{icon}</div>
      </div>
      <CardContent className="pt-6">
        <h3 className="mb-3 text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

export default async function FeaturesPage() {
  const features: FeatureProps[] = [
    {
      title: "Modern Design",
      description:
        "Beautiful, contemporary designs that reflect your brand and engage your audience.",
      icon: <Square className="size-6" />
    },
    {
      title: "Responsive Websites",
      description:
        "Perfectly optimized for all devices, from desktop computers to smartphones and tablets.",
      icon: <Zap className="size-6" />
    },
    {
      title: "Secure Development",
      description:
        "Built with security in mind, protecting your business and customer data.",
      icon: <Shield className="size-6" />
    },
    {
      title: "Custom Solutions",
      description:
        "Tailored websites designed to meet your specific business needs and goals.",
      icon: <Settings className="size-6" />
    },
    {
      title: "Client Dashboard",
      description:
        "User-friendly admin interfaces that make content updates simple and intuitive.",
      icon: <Users className="size-6" />
    },
    {
      title: "Performance Optimization",
      description:
        "Fast-loading websites that improve user experience and search engine rankings.",
      icon: <BarChart className="size-6" />
    }
  ]

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
            <span className="text-sm text-gray-600">Our Services</span>
          </div>

          <h1 className="mt-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Powerful <span className="text-blue-600">features</span> for your
            website
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Discover the comprehensive suite of features that make Admas Design
            the perfect partner for your web development needs.
          </p>
        </div>
      </div>

      {/* Features Content */}
      <div className="container mx-auto max-w-7xl px-4 pb-20">
        <div className="mb-16">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">What We Offer</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Our comprehensive web design and development services are tailored
              to help your business thrive online.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Feature key={index} {...feature} />
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Process</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              We follow a proven development process to ensure your project is
              completed on time and exceeds your expectations.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-4">
            <div className="relative">
              <div className="flex size-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <span className="text-xl font-bold">1</span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Discovery</h3>
                <p className="mt-2 text-gray-600">
                  We learn about your business, goals, and target audience to
                  inform our design approach.
                </p>
              </div>
              <div className="absolute right-0 top-8 hidden h-0.5 w-full max-w-[calc(100%-64px)] bg-blue-100 md:block"></div>
            </div>

            <div className="relative">
              <div className="flex size-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <span className="text-xl font-bold">2</span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Design</h3>
                <p className="mt-2 text-gray-600">
                  We create beautiful, functional designs that align with your
                  brand and business objectives.
                </p>
              </div>
              <div className="absolute right-0 top-8 hidden h-0.5 w-full max-w-[calc(100%-64px)] bg-blue-100 md:block"></div>
            </div>

            <div className="relative">
              <div className="flex size-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <span className="text-xl font-bold">3</span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Development</h3>
                <p className="mt-2 text-gray-600">
                  Our developers build your site with clean, efficient code that
                  ensures performance and security.
                </p>
              </div>
              <div className="absolute right-0 top-8 hidden h-0.5 w-full max-w-[calc(100%-64px)] bg-blue-100 md:block"></div>
            </div>

            <div className="relative">
              <div className="flex size-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <span className="text-xl font-bold">4</span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Launch & Support</h3>
                <p className="mt-2 text-gray-600">
                  We deploy your site and provide ongoing maintenance and
                  support to ensure long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="rounded-lg bg-blue-50 p-8 text-center md:p-12">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            Let's build something amazing together
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600">
            Ready to elevate your online presence with a website that delivers
            results? Let's discuss your project and how our features can benefit
            your business.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-blue-600 px-8 text-lg hover:bg-blue-700"
              >
                Request a Quote
              </Button>
            </Link>
            <Link href="/showcase">
              <Button size="lg" variant="outline" className="px-8 text-lg">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
