/*
This server component provides the footer for the app.
*/

import { Github, Twitter } from "lucide-react"
import Link from "next/link"

export async function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-blue-50">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800">Company</h3>
            <div className="flex flex-col gap-2">
              <Link
                href="/about"
                className="text-gray-700 transition hover:text-gray-900"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 transition hover:text-gray-900"
              >
                Blog
              </Link>
              <Link
                href="/careers"
                className="text-gray-700 transition hover:text-gray-900"
              >
                Careers
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800">Product</h3>
            <div className="flex flex-col gap-2">
              <Link
                href="/features"
                className="text-gray-700 transition hover:text-gray-900"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-gray-700 transition hover:text-gray-900"
              >
                Pricing
              </Link>
              <Link
                href="/docs"
                className="text-gray-700 transition hover:text-gray-900"
              >
                Documentation
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800">Resources</h3>
            <div className="flex flex-col gap-2">
              <Link
                href="/support"
                className="text-gray-700 transition hover:text-gray-900"
              >
                Support
              </Link>
              <Link
                href="/terms"
                className="text-gray-700 transition hover:text-gray-900"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-gray-700 transition hover:text-gray-900"
              >
                Privacy
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800">Social</h3>
            <div className="flex gap-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="size-6 text-gray-700 transition hover:text-gray-900" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="size-6 text-gray-700 transition hover:text-gray-900" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-blue-100 pt-8 text-center text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Admas Design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
