/*
This client component provides the header for the app.
*/

"use client"

import { Button } from "@/components/ui/button"
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton
} from "@clerk/nextjs"
import { motion } from "framer-motion"
import { Layout, Menu, Square, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/showcase", label: "Showcase" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" }
]

const signedInLinks = [{ href: "/dashboard", label: "Dashboard" }]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Define text color based on scroll position
  const textColor = isScrolled ? "text-gray-900" : "text-gray-800"
  const textMutedColor = isScrolled ? "text-muted-foreground" : "text-gray-700"

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 shadow-sm backdrop-blur-sm" : "bg-blue-50"
      }`}
    >
      <div className="container mx-auto flex max-w-7xl items-center justify-between p-4 pt-6">
        <motion.div
          className="flex items-center space-x-2 hover:cursor-pointer hover:opacity-80"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Square className="size-6 text-blue-600" />
          <Link href="/" className={`text-xl font-bold ${textColor}`}>
            Admas Design
          </Link>
        </motion.div>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 space-x-8 md:flex">
          {navLinks.map(link => (
            <motion.div
              key={link.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={link.href}
                className={`${textMutedColor} font-medium transition hover:text-gray-900`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}

          <SignedIn>
            {signedInLinks.map(link => (
              <motion.div
                key={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href}
                  className={`${textMutedColor} font-medium transition hover:text-gray-900`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </SignedIn>
        </nav>

        <div className="flex items-center space-x-4">
          <SignedOut>
            <SignInButton>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="rounded-md border-gray-300 bg-white/80 px-4"
                >
                  Sign In
                </Button>
              </motion.div>
            </SignInButton>

            <SignUpButton>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="rounded-md bg-gray-900 px-4 hover:bg-gray-800">
                  Request Quote
                </Button>
              </motion.div>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>

          <motion.div
            className="md:hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className={!isScrolled ? "text-gray-800" : ""}
            >
              {isMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </Button>
          </motion.div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`p-4 md:hidden ${isScrolled ? "bg-white/90 shadow-md backdrop-blur-sm" : "bg-white/80 shadow-md backdrop-blur-sm"}`}
        >
          <ul className="space-y-2">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block font-medium hover:text-gray-900 ${textColor}`}
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <SignedIn>
              {signedInLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block font-medium hover:text-gray-900 ${textColor}`}
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </SignedIn>
          </ul>
        </motion.nav>
      )}
    </motion.header>
  )
}
