"use client"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { CheckCircle2 } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // In a real app, you would handle the form submission here
    // For example, sending the data to your API route
    console.log(values)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <div className="mb-4 rounded-full bg-green-100 p-3">
          <CheckCircle2 className="size-10 text-green-600" />
        </div>
        <h3 className="mb-2 text-xl font-bold">Message Sent!</h3>
        <p className="mb-6 text-gray-600">
          Thank you for contacting us. We'll get back to you as soon as
          possible.
        </p>
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            setIsSubmitted(false)
            form.reset()
          }}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Smith"
                    className="border-gray-200 bg-gray-50/50 focus:border-gray-500 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Email Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="you@example.com"
                    type="email"
                    className="border-gray-200 bg-gray-50/50 focus:border-gray-500 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">
                  Phone (Optional)
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="(123) 456-7890"
                    type="tel"
                    className="border-gray-200 bg-gray-50/50 focus:border-gray-500 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Subject</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Website Design Request"
                    className="border-gray-200 bg-gray-50/50 focus:border-gray-500 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your project, goals, and timeline..."
                  className="min-h-[150px] border-gray-200 bg-gray-50/50 focus:border-gray-500 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-gray-900 px-6 py-3 text-base font-medium hover:bg-gray-800"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending Message..." : "Send Message"}
        </Button>
      </form>
    </Form>
  )
}
