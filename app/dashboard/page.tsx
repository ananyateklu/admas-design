"use server"

import { auth, currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import DashboardContent from "./_components/dashboard-content"
import AccessDenied from "./_components/access-denied"

export default async function DashboardPage() {
  const { userId } = await auth()

  // If not authenticated, redirect to login
  if (!userId) {
    redirect("/login")
  }

  // Get the current user details
  const user = await currentUser()

  // Get the admin email from environment variable
  const adminEmail = process.env.ADMIN_EMAIL

  // Check if user has admin access (matching email)
  const hasAccess = user?.emailAddresses.some(
    email => email.emailAddress === adminEmail
  )

  // If not admin, show access denied message
  if (!hasAccess) {
    return <AccessDenied />
  }

  // User is admin, show dashboard content
  return <DashboardContent />
}
