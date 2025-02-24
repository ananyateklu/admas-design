/*
This server page displays a contact form for users to get in touch.
*/

"use server"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Square, Mail, MapPin, Phone } from "lucide-react"
import ContactForm from "./_components/contact-form"

export default async function ContactPage() {
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
            <span className="text-sm text-gray-600">Get in Touch</span>
          </div>

          <h1 className="mt-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Let's <span className="text-blue-600">connect</span> and discuss
            your project
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Have questions about our services or ready to start your next
            project? We're here to help turn your vision into reality.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto max-w-7xl px-4 pb-20">
        <div className="mx-auto grid gap-12 md:grid-cols-3">
          {/* Contact Information */}
          <div className="space-y-8 md:col-span-1">
            <div>
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <p className="mt-2 text-gray-600">
                Reach out to us directly or fill out the form.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex size-10 items-center justify-center rounded-full bg-blue-50">
                  <Mail className="size-5 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-600">info@admasdesign.com</p>
                  <a
                    href="mailto:info@admasdesign.com"
                    className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-500"
                  >
                    Send an email →
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex size-10 items-center justify-center rounded-full bg-blue-50">
                  <Phone className="size-5 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-900">Phone</h3>
                  <p className="mt-1 text-gray-600">(123) 456-7890</p>
                  <a
                    href="tel:+11234567890"
                    className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-500"
                  >
                    Call us →
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex size-10 items-center justify-center rounded-full bg-blue-50">
                  <MapPin className="size-5 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-900">Office</h3>
                  <p className="mt-1 text-gray-600">
                    123 Design Street
                    <br />
                    San Francisco, CA 94103
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-500"
                  >
                    Get directions →
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-blue-50 p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Business Hours
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <Card className="overflow-hidden border-none shadow-md">
              <CardHeader className="bg-white pb-6">
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="bg-white">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
