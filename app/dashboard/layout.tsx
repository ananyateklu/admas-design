"use server"

import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  const { userId } = await auth()

  // If not authenticated, redirect to login
  if (!userId) {
    redirect("/login")
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto py-10">{children}</div>
    </div>
  )
}
