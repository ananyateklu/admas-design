"use client"

import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AccessDenied() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center space-y-6 text-center">
      <div className="bg-destructive/10 rounded-full p-4">
        <AlertCircle className="text-destructive size-12" />
      </div>
      <h1 className="text-3xl font-bold tracking-tight">Access Denied</h1>
      <p className="text-muted-foreground max-w-md">
        You do not have permission to view this dashboard. This area is
        restricted to authorized users only.
      </p>
      <Button asChild className="mt-4">
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  )
}
