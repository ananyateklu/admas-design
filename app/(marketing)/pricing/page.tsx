/*
This server page displays pricing options for the product, integrating Stripe payment links.
*/

"use server"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { auth } from "@clerk/nextjs/server"
import { Check, Square, ChevronDown } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default async function PricingPage() {
  const { userId } = await auth()

  // Pricing plan features for different tiers
  const basicFeatures = [
    "Responsive website design",
    "3 pages included",
    "Contact form",
    "Mobile optimization",
    "Basic SEO setup",
    "1 round of revisions"
  ]

  const proFeatures = [
    "Everything in Basic",
    "Up to 7 pages",
    "Blog integration",
    "Social media integration",
    "Enhanced SEO setup",
    "Google Analytics integration",
    "3 rounds of revisions"
  ]

  const businessFeatures = [
    "Everything in Professional",
    "Up to 15 pages",
    "E-commerce functionality",
    "Product/service catalog",
    "Custom contact forms",
    "Advanced SEO strategy",
    "Email marketing integration",
    "5 rounds of revisions"
  ]

  const enterpriseFeatures = [
    "Everything in Business",
    "Unlimited pages",
    "Custom web applications",
    "Advanced e-commerce features",
    "Multiple language support",
    "Custom API integrations",
    "Dedicated support contact",
    "Priority updates & maintenance"
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
            <span className="text-sm text-gray-600">Pricing Plans</span>
          </div>

          <h1 className="mt-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Flexible <span className="text-blue-600">pricing</span> for your
            business
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Choose the perfect plan for your needs. Our transparent pricing
            ensures you get exactly what you need without paying for features
            you don't.
          </p>
        </div>
      </div>

      {/* Pricing Content */}
      <div className="container mx-auto max-w-7xl px-4 pb-20">
        <div className="mb-12">
          <Tabs defaultValue="monthly" className="w-full">
            <div className="mb-8 flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="monthly">One-Time Payment</TabsTrigger>
                <TabsTrigger value="annual">
                  Monthly Billing{" "}
                  <span className="ml-1.5 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                    Save 20%
                  </span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="monthly">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <PricingCard
                  title="Basic"
                  price="$999"
                  period="one-time"
                  description="Perfect for small businesses getting started online"
                  buttonText="Get Started"
                  buttonLink={
                    process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_BASIC || "#"
                  }
                  features={basicFeatures}
                  userId={userId}
                  popular={false}
                />

                <PricingCard
                  title="Professional"
                  price="$1,999"
                  period="one-time"
                  description="Ideal for growing businesses with more content needs"
                  buttonText="Get Started"
                  buttonLink={
                    process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_PRO || "#"
                  }
                  features={proFeatures}
                  userId={userId}
                  popular={true}
                />

                <PricingCard
                  title="Business"
                  price="$3,499"
                  period="one-time"
                  description="For established businesses requiring advanced functionality"
                  buttonText="Get Started"
                  buttonLink={
                    process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_BUSINESS || "#"
                  }
                  features={businessFeatures}
                  userId={userId}
                  popular={false}
                />

                <PricingCard
                  title="Enterprise"
                  price="Contact Us"
                  period="custom"
                  description="Custom solutions for large businesses with specific needs"
                  buttonText="Contact Sales"
                  buttonLink="/contact"
                  features={enterpriseFeatures}
                  userId={userId}
                  popular={false}
                />
              </div>
            </TabsContent>

            <TabsContent value="annual">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <PricingCard
                  title="Basic"
                  price="$99"
                  period="/month"
                  description="Perfect for small businesses getting started online"
                  buttonText="Get Started"
                  buttonLink={
                    process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_BASIC_MONTHLY ||
                    "#"
                  }
                  features={basicFeatures}
                  userId={userId}
                  popular={false}
                />

                <PricingCard
                  title="Professional"
                  price="$199"
                  period="/month"
                  description="Ideal for growing businesses with more content needs"
                  buttonText="Get Started"
                  buttonLink={
                    process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_PRO_MONTHLY ||
                    "#"
                  }
                  features={proFeatures}
                  userId={userId}
                  popular={true}
                />

                <PricingCard
                  title="Business"
                  price="$349"
                  period="/month"
                  description="For established businesses requiring advanced functionality"
                  buttonText="Get Started"
                  buttonLink={
                    process.env
                      .NEXT_PUBLIC_STRIPE_PAYMENT_LINK_BUSINESS_MONTHLY || "#"
                  }
                  features={businessFeatures}
                  userId={userId}
                  popular={false}
                />

                <PricingCard
                  title="Enterprise"
                  price="Contact Us"
                  period="custom"
                  description="Custom solutions for large businesses with specific needs"
                  buttonText="Contact Sales"
                  buttonLink="/contact"
                  features={enterpriseFeatures}
                  userId={userId}
                  popular={false}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Have questions about our pricing or services? Find answers to
              common questions below.
            </p>
          </div>

          <div className="mx-auto max-w-3xl divide-y">
            <FaqItem
              question="What's included in the website design package?"
              answer="Our website design packages include consultation, custom design, responsive development, content integration, testing, and launch support. Each tier offers different levels of features and complexity to suit your business needs."
            />
            <FaqItem
              question="How long does it take to complete a website?"
              answer="Timeframes vary based on project complexity. Basic websites typically take 2-3 weeks, Professional sites 3-5 weeks, and Business/Enterprise solutions 6-12 weeks. We'll provide a detailed timeline during our initial consultation."
            />
            <FaqItem
              question="Do you offer ongoing maintenance?"
              answer="Yes, we offer website maintenance plans for all our clients. These can include regular updates, security patches, content updates, and technical support. Maintenance plans are separate from the initial design packages."
            />
            <FaqItem
              question="Can I update the website myself?"
              answer="Absolutely! All our websites are built on user-friendly content management systems that allow you to make basic content updates yourself. We provide training as part of the handover process."
            />
            <FaqItem
              question="What if I need additional pages or features later?"
              answer="We can always add additional pages or features to your website at any time. We'll provide a quote for the additional work based on your specific requirements."
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 rounded-lg bg-blue-50 p-8 text-center md:p-12">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            Not sure which plan is right for you?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600">
            Our team is ready to help you find the perfect solution for your
            business. Get in touch for a personalized consultation.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 px-8 text-lg hover:bg-blue-700"
            asChild
          >
            <a href="/contact">Schedule a Consultation</a>
          </Button>
        </div>
      </div>
    </div>
  )
}

interface PricingCardProps {
  title: string
  price: string
  period: string
  description: string
  buttonText: string
  buttonLink: string
  features: string[]
  userId: string | null
  popular: boolean
}

function PricingCard({
  title,
  price,
  period,
  description,
  buttonText,
  buttonLink,
  features,
  userId,
  popular
}: PricingCardProps) {
  const finalButtonLink =
    userId && buttonLink !== "/contact"
      ? `${buttonLink}?client_reference_id=${userId}`
      : buttonLink

  return (
    <Card
      className={cn(
        "relative flex h-full flex-col border-none shadow-md transition-all hover:shadow-lg",
        popular && "shadow-lg ring-2 ring-blue-500"
      )}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white">
          Most Popular
        </div>
      )}

      <CardHeader className={cn("pb-6", popular && "pt-8")}>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="mt-1 h-12">{description}</CardDescription>
      </CardHeader>

      <CardContent className="grow pb-0">
        <div className="mb-6 flex items-end justify-center">
          <span
            className={cn(
              "text-4xl font-bold",
              period === "custom" && "text-3xl"
            )}
          >
            {price}
          </span>
          {period !== "custom" && (
            <span className="ml-1 text-gray-500">{period}</span>
          )}
        </div>

        <ul className="mb-8 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="mr-2 mt-1 size-4 shrink-0 text-blue-600" />
              <span className="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="mt-auto px-6 pb-8 pt-4">
        <Button
          className={cn(
            "w-full",
            popular
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "border border-blue-200 bg-white text-blue-600 hover:bg-blue-50"
          )}
          asChild
        >
          <a
            href={finalButtonLink}
            className={cn(
              "inline-flex items-center justify-center",
              finalButtonLink === "#" && "pointer-events-none opacity-50"
            )}
          >
            {buttonText}
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

interface FaqItemProps {
  question: string
  answer: string
}

function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <div className="py-5">
      <details className="group">
        <summary className="flex cursor-pointer items-center justify-between font-medium">
          <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
          <ChevronDown className="size-5 text-gray-500 transition-transform group-open:rotate-180" />
        </summary>
        <p className="mt-3 text-gray-600">{answer}</p>
      </details>
    </div>
  )
}
