/*
This server page displays information about the company, mission, and team.
*/

"use server"

import { Card, CardContent } from "@/components/ui/card"
import { Square, Users, Award, Heart, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function AboutPage() {
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
            <span className="text-sm text-gray-600">About Admas Design</span>
          </div>

          <h1 className="mt-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            We design <span className="text-blue-600">experiences</span>, not
            just websites
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Founded with a passion for innovative design, Admas Design combines
            creativity with technical expertise to deliver exceptional web
            solutions for businesses of all sizes.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-4 pb-20">
        {/* Our Story Section */}
        <div className="mb-20 grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
            <p className="mb-4 text-gray-600">
              Admas Design was established in 2020 with a simple mission: to
              make the web more beautiful and functional. What started as a
              small team of passionate designers has grown into a full-service
              digital agency.
            </p>
            <p className="mb-6 text-gray-600">
              We've partnered with businesses across industries to create
              websites that not only look stunning but also drive results. Our
              approach combines data-driven insights with creative excellence to
              deliver websites that truly work for our clients.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Check className="mr-2 text-blue-600" size={18} />
                <span className="text-gray-700">
                  Over 100+ successful projects delivered
                </span>
              </div>
              <div className="flex items-center">
                <Check className="mr-2 text-blue-600" size={18} />
                <span className="text-gray-700">90% client retention rate</span>
              </div>
              <div className="flex items-center">
                <Check className="mr-2 text-blue-600" size={18} />
                <span className="text-gray-700">Award-winning design team</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-blue-100/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Square className="text-blue-500/20" size={240} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-lg bg-white p-4 shadow-lg">
                  <Square className="mx-auto text-blue-600" size={48} />
                  <p className="mt-2 text-center text-sm font-medium">
                    Admas Design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Core Values</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              These principles guide everything we do and shape how we work with
              our clients.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="overflow-hidden border-none shadow-md">
              <div className="bg-blue-50 p-4">
                <Award className="text-blue-600" size={32} />
              </div>
              <CardContent className="pt-6">
                <h3 className="mb-3 text-xl font-semibold">Excellence</h3>
                <p className="text-gray-600">
                  We hold ourselves to the highest standards in every aspect of
                  our work, from design to development to client communication.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-md">
              <div className="bg-blue-50 p-4">
                <Heart className="text-blue-600" size={32} />
              </div>
              <CardContent className="pt-6">
                <h3 className="mb-3 text-xl font-semibold">Passion</h3>
                <p className="text-gray-600">
                  We genuinely love what we do, and that enthusiasm shines
                  through in the quality of our work and our dedication to
                  client success.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-md">
              <div className="bg-blue-50 p-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <CardContent className="pt-6">
                <h3 className="mb-3 text-xl font-semibold">Collaboration</h3>
                <p className="text-gray-600">
                  We believe the best results come from working closely with our
                  clients, treating every project as a true partnership.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="rounded-lg bg-blue-50 p-8 text-center md:p-12">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            Ready to work with us?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600">
            Let's discuss how we can help bring your vision to life. Our team is
            ready to create a website that perfectly represents your brand.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-blue-600 px-8 text-lg hover:bg-blue-700"
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
