import Link from "next/link"
import { ArrowLeft, Check, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function RequirementsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-4 py-8">
        <div className="mb-8">
          <Link href="/home" className="mb-4 flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-3xl font-bold">Driver Requirements</h1>
          <p className="text-muted-foreground">What you need to start driving with our vehicles</p>
        </div>

        <Alert className="mb-8 border-brand bg-brand/10">
          <Info className="h-4 w-4 text-brand" />
          <AlertTitle>Important Information</AlertTitle>
          <AlertDescription>
            Requirements may vary slightly depending on the rideshare platform you plan to use. We can help you navigate
            the specific requirements for Uber, Bolt, and FreeNow.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="general" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 md:w-auto">
            <TabsTrigger value="general">General Requirements</TabsTrigger>
            <TabsTrigger value="documents">Required Documents</TabsTrigger>
            <TabsTrigger value="rental">Rental Terms</TabsTrigger>
          </TabsList>
          <TabsContent value="general" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>General Driver Requirements</CardTitle>
                <CardDescription>Basic eligibility criteria for renting our vehicles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="mb-3 text-lg font-medium">Age and Experience</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Minimum age: 21 years old</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Valid driver's license for at least 1 year</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Clean driving record (no major violations in the past 3 years)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-medium">Rideshare Platform Requirements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Active account on Uber, Bolt, or FreeNow (or in the process of applying)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Smartphone with data plan for using rideshare apps</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Completion of any platform-specific training or orientation</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-medium">Personal Requirements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Professional appearance and demeanor</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Good communication skills</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Knowledge of local area and routes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Commitment to safe driving practices</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Required Documents</CardTitle>
                <CardDescription>Documentation needed to rent a vehicle</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="mb-3 text-lg font-medium">Personal Identification</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Valid driver's license</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>National ID card or passport</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Proof of address (utility bill, bank statement from the last 3 months)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-medium">Rideshare Platform Documents</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Proof of active rideshare driver account (or application in process)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Rideshare driver profile showing rating (for existing drivers)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-medium">Financial Documents</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Bank account details for weekly payment processing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Security deposit payment method</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Proof of income (for first-time renters)</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rental" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Rental Terms</CardTitle>
                <CardDescription>Key terms and conditions for vehicle rental</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="mb-3 text-lg font-medium">Rental Period</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Minimum rental period: 1 week</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Weekly payments due in advance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Flexible rental duration with 1-week notice for return</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-medium">Financial Terms</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Weekly rental rates: 600-1000 PLN depending on vehicle</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Security deposit: 500-1000 PLN (refundable)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Driver is responsible for fuel costs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Insurance excess in case of accident: varies by vehicle</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-medium">Vehicle Usage</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Vehicle must be used primarily for rideshare purposes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Regular vehicle check-ups required</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Driver responsible for keeping vehicle clean</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>No smoking policy in all vehicles</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Platform-Specific Requirements</CardTitle>
              <CardDescription>Additional requirements for specific rideshare platforms</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-3 text-lg font-medium">Uber</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Minimum driver age: 21 years</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Minimum driving experience: 1 year (3 years if under 25)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Background check required</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-medium">Bolt</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Minimum driver age: 20 years</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Minimum driving experience: 1 year</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Background check required</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-medium">FreeNow</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Minimum driver age: 21 years</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Minimum driving experience: 1 year</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Background check required</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Application Process</CardTitle>
              <CardDescription>Steps to start driving with our vehicles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-3 text-lg font-medium">Step 1: Initial Contact</h3>
                <p className="text-muted-foreground">
                  Contact us through our website, phone, or visit our office to discuss your needs and check vehicle
                  availability.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-medium">Step 2: Document Submission</h3>
                <p className="text-muted-foreground">
                  Submit all required documents for verification. We'll help you understand which documents are needed.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-medium">Step 3: Vehicle Selection</h3>
                <p className="text-muted-foreground">
                  Choose a vehicle from our available fleet that meets your needs and budget.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-medium">Step 4: Agreement & Payment</h3>
                <p className="text-muted-foreground">
                  Sign the rental agreement, pay the security deposit and first week's rental fee.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-medium">Step 5: Vehicle Handover</h3>
                <p className="text-muted-foreground">
                  Receive your vehicle, complete the inspection form, and get all necessary instructions.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-medium">Step 6: Start Driving</h3>
                <p className="text-muted-foreground">
                  Begin your rideshare driving journey with Uber, Bolt, or FreeNow and start earning!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 rounded-xl bg-muted p-8 text-center dark:bg-muted/50">
          <h2 className="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
            Contact us today to learn more about our rental options and start your journey as a rideshare driver.
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
