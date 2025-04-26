import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-4 py-8">
        <div className="mb-8">
          <Link href="/home" className="mb-4 flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-3xl font-bold">Pricing</h1>
          <p className="text-muted-foreground">Affordable weekly rates for rideshare drivers</p>
        </div>

        <div className="mb-12 text-center">
          <h2 className="mb-2 text-2xl font-bold">Choose the Right Plan for Your Needs</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Our competitive pricing helps maximize your earnings as a rideshare driver. All plans include insurance and
            maintenance.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Economy</CardTitle>
              <CardDescription>Perfect for new drivers</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold">600 PLN</span>
                <span className="text-muted-foreground"> / week</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Economy sedan (Toyota Corolla or similar)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Insurance included</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Basic maintenance included</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>24/7 support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Eligible for Uber, Bolt, FreeNow</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/contact" className="w-full">
                <Button className="w-full">Contact Us</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Standard</CardTitle>
              <CardDescription>Our most popular option</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold">700 PLN</span>
                <span className="text-muted-foreground"> / week</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Mid-size sedan (Honda Accord or similar)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Insurance included</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Full maintenance included</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>24/7 priority support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Eligible for Uber, Bolt, FreeNow</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/contact" className="w-full">
                <Button className="w-full">Contact Us</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="flex flex-col border-brand">
            <CardHeader>
              <div className="mb-2 rounded-full bg-brand px-3 py-1 text-xs font-medium text-brand-foreground w-fit">
                Most Popular
              </div>
              <CardTitle>Premium</CardTitle>
              <CardDescription>For experienced drivers</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold">800 PLN</span>
                <span className="text-muted-foreground"> / week</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>Premium sedan (Mercedes C-Class or similar)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>Comprehensive insurance included</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>Full maintenance included</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>24/7 VIP support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>Eligible for premium rideshare services</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/contact" className="w-full">
                <Button className="w-full bg-brand text-brand-foreground hover:bg-brand/90">Contact Us</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>XL</CardTitle>
              <CardDescription>For group transportation</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold">900-1000 PLN</span>
                <span className="text-muted-foreground"> / week</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>SUV or Minivan (6-7 passengers)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Comprehensive insurance included</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Full maintenance included</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>24/7 priority support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Eligible for XL rideshare services</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/contact" className="w-full">
                <Button className="w-full">Contact Us</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-16 rounded-xl border bg-card p-8">
          <h2 className="mb-4 text-2xl font-bold">Additional Information</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-2 text-lg font-medium">What's Included</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Insurance coverage for rideshare activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Regular maintenance and servicing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Roadside assistance</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>Replacement vehicle in case of breakdown (subject to availability)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-medium">Additional Costs</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 h-5 w-5 shrink-0 text-center">•</span>
                  <span>Fuel costs are the responsibility of the driver</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 h-5 w-5 shrink-0 text-center">•</span>
                  <span>Security deposit: 500-1000 PLN (refundable)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 h-5 w-5 shrink-0 text-center">•</span>
                  <span>Excess mileage fee may apply for excessive use</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 h-5 w-5 shrink-0 text-center">•</span>
                  <span>Cleaning fee for excessive dirt or stains</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-xl bg-muted p-8 text-center dark:bg-muted/50">
          <h2 className="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
            Contact us today to learn more about our rental options and start earning with Uber, Bolt, or FreeNow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-brand text-brand-foreground hover:bg-brand/90">
                Contact Us
              </Button>
            </Link>
            <Link href="/cars">
              <Button size="lg" variant="outline">
                View Our Fleet
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
