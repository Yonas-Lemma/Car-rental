import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Calendar,
  Car,
  Check,
  ChevronRight,
  Clock,
  DollarSign,
  Shield,
  Star,
  Users,
  Phone,
  Mail,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { TaxiCarCard } from "@/components/taxi-car-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { taxiCarsData } from "@/data/taxi-cars"
import { Logo } from "@/components/logo"

export default function HomePage() {
  // Get all 4 taxi car types
  const taxiCars = taxiCarsData

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent dark:from-black/70 dark:via-black/50 dark:to-black"></div>
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Rideshare driver with car"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-brand text-brand-foreground hover:bg-brand/90">Uber • Bolt • FreeNow</Badge>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Your Partner for <span className="text-brand">Rideshare</span> Success
            </h1>
            <p className="mb-8 text-lg text-white/80 md:text-xl">
              Rent high-quality vehicles for Uber, Bolt, and FreeNow. Start earning without the commitment of car
              ownership. Affordable weekly rates from 600-1000 PLN.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/cars"
                className="flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-2.5 font-medium text-brand-foreground transition hover:bg-brand/90"
              >
                View Available Cars
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-2.5 font-medium text-white transition hover:bg-white/20"
              >
                Contact Us
                <Car className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-brand" />
                <span>Rideshare Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-brand" />
                <span>Weekly Rental Plans</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-brand" />
                <span>Insurance Included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-background">
        {/* How It Works Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold">How It Works</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our platform makes it easy to rent a car for rideshare driving with Uber, Bolt, and FreeNow
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/20 text-brand">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-medium">Choose a Car</h3>
              <p className="text-muted-foreground">
                Browse our fleet of vehicles that meet rideshare requirements and select one that fits your needs and
                budget.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/20 text-brand">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-medium">Sign Agreement</h3>
              <p className="text-muted-foreground">
                Complete a simple rental agreement, provide required documents, and pay the weekly rental fee to get
                started.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/20 text-brand">
                <Car className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-medium">Start Earning</h3>
              <p className="text-muted-foreground">
                Get on the road and start earning with Uber, Bolt, or FreeNow. Enjoy reliable transportation and
                maximize your income.
              </p>
            </div>
          </div>
        </section>

        {/* Our Fleet Section */}
        <section className="bg-muted py-16 dark:bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <h2 className="mb-2 text-3xl font-bold">Our Fleet</h2>
                <p className="text-muted-foreground">Quality vehicles available for rideshare driving</p>
              </div>
              <Link
                href="/cars"
                className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/90"
              >
                View All
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {taxiCars.map((car) => (
                <TaxiCarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold">Affordable Weekly Rates</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our competitive pricing helps maximize your earnings as a rideshare driver
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-medium">Standard Package</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">600-800 PLN</span>
                  <span className="text-muted-foreground"> / week</span>
                </div>
                <p className="mb-6 text-muted-foreground">
                  Perfect for new drivers or those looking for an economical option
                </p>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Economy or Compact vehicles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Insurance included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Maintenance included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>24/7 support</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-2.5 font-medium text-primary-foreground transition hover:bg-primary/90"
                >
                  Contact Us
                </Link>
              </div>

              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-medium">Premium Package</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">800-1000 PLN</span>
                  <span className="text-muted-foreground"> / week</span>
                </div>
                <p className="mb-6 text-muted-foreground">
                  Ideal for experienced drivers looking to maximize earnings with higher-rated vehicles
                </p>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Business or Premium vehicles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Insurance included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Maintenance included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-full bg-brand px-6 py-2.5 font-medium text-brand-foreground transition hover:bg-brand/90"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-muted py-16 dark:bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <h2 className="mb-2 text-3xl font-bold">Why Choose Us</h2>
              <p className="text-muted-foreground">We make rideshare car rentals simple, flexible, and profitable</p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <DollarSign className="mb-4 h-10 w-10 text-brand" />
                <h3 className="mb-2 text-xl font-medium">Competitive Pricing</h3>
                <p className="text-muted-foreground">
                  Our rental rates are optimized for rideshare profitability, ensuring you keep more of your earnings.
                </p>
              </div>

              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <Calendar className="mb-4 h-10 w-10 text-brand" />
                <h3 className="mb-2 text-xl font-medium">Weekly Rental Plans</h3>
                <p className="text-muted-foreground">
                  Simple weekly payments with no long-term commitment, giving you flexibility as your needs change.
                </p>
              </div>

              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <Shield className="mb-4 h-10 w-10 text-brand" />
                <h3 className="mb-2 text-xl font-medium">Insurance Included</h3>
                <p className="text-muted-foreground">
                  All rentals include comprehensive insurance coverage specifically designed for rideshare activities.
                </p>
              </div>

              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <Clock className="mb-4 h-10 w-10 text-brand" />
                <h3 className="mb-2 text-xl font-medium">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Our dedicated support team is available around the clock to assist with any issues or questions.
                </p>
              </div>

              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <Star className="mb-4 h-10 w-10 text-brand" />
                <h3 className="mb-2 text-xl font-medium">Quality Vehicles</h3>
                <p className="text-muted-foreground">
                  All cars in our fleet meet or exceed the requirements for Uber, Bolt, and FreeNow services.
                </p>
              </div>

              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <Users className="mb-4 h-10 w-10 text-brand" />
                <h3 className="mb-2 text-xl font-medium">Easy Onboarding</h3>
                <p className="text-muted-foreground">
                  We help with the paperwork and requirements to get you approved and on the road quickly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold">What Our Drivers Say</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Hear from drivers who have found success with our rental program
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <TestimonialCard
              name="Tomasz Kowalski"
              role="Uber Driver"
              quote="Renting from Euro Taxi has been a game-changer. The weekly rates are affordable, and the car is always well-maintained. I've been able to maximize my earnings on Uber."
              rating={5}
              image="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              name="Anna Nowak"
              role="Bolt Driver"
              quote="I've been renting for 3 months now. The process was simple, and whenever I've had an issue, their support team has been quick to respond. Highly recommended!"
              rating={5}
              image="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              name="Piotr Wiśniewski"
              role="FreeNow Driver"
              quote="The quality of the cars is excellent. I'm driving a comfortable vehicle that my passengers love, and the weekly rate is very reasonable compared to other options."
              rating={4}
              image="/placeholder.svg?height=100&width=100"
            />
          </div>
        </section>

        {/* Requirements Section */}
        <section className="bg-muted py-16 dark:bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <h2 className="mb-2 text-3xl font-bold">Driver Requirements</h2>
              <p className="text-muted-foreground">What you need to start driving with our vehicles</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-medium">Documentation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Valid driver's license (minimum 1 year)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Proof of address</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Active Uber, Bolt, or FreeNow driver account</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Clean driving record</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Security deposit (refundable)</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-medium">Rental Terms</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Weekly rental payments (600-1000 PLN)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Minimum rental period: 1 week</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Vehicle must be used primarily for rideshare</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Driver is responsible for fuel costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Regular vehicle check-ups required</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden py-16">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent dark:from-background dark:via-background/90"></div>
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Rideshare driver with passenger"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-2xl">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Start Your Rideshare Journey?</h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Contact us today to learn more about our available vehicles and start earning with Uber, Bolt, or
                FreeNow.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/cars"
                  className="rounded-full bg-brand px-6 py-3 font-medium text-brand-foreground transition hover:bg-brand/90"
                >
                  View Cars
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border bg-background/80 px-6 py-3 font-medium transition hover:bg-background"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-muted py-16 dark:bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="mb-2 text-3xl font-bold">Contact Us</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Have questions or ready to get started? Reach out to us today.
              </p>
            </div>

            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-medium">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <DollarSign className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">Lindleya 16, 02-013 Warsaw, m 301</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+48 666 644 883</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">Kilanibmci@gmail.com</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-medium">Business Hours</h3>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 - 16:00</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <p className="text-muted-foreground">
                    For urgent matters outside business hours, please call our support line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t bg-background py-12 dark:border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <Logo size="lg" className="mb-4" />
              <p className="mb-6 text-muted-foreground">
                Your partner for rideshare success. Quality vehicles for Uber, Bolt, and FreeNow drivers at competitive
                weekly rates.
              </p>
              <div className="flex gap-4">
                <a href="#" className="rounded-full bg-muted p-2 hover:bg-muted/80">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="rounded-full bg-muted p-2 hover:bg-muted/80">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="rounded-full bg-muted p-2 hover:bg-muted/80">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Uber Rentals
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Bolt Rentals
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    FreeNow Rentals
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Long-term Rentals
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Information</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Our Fleet
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Rental Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="tel:+48666644883" className="text-muted-foreground hover:text-foreground">
                    +48 666 644 883
                  </a>
                </li>
                <li>
                  <a href="mailto:Kilanibmci@gmail.com" className="text-muted-foreground hover:text-foreground">
                    Kilanibmci@gmail.com
                  </a>
                </li>
                <li>
                  <span className="text-muted-foreground">Lindleya 16, 02-013 Warsaw, m 301</span>
                </li>
                <li>
                  <a href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact Form
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground dark:border-white/10">
            <p>&copy; {new Date().getFullYear()} Euro Taxi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
