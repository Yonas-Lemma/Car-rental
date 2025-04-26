"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { taxiCarsData } from "@/data/taxi-cars"

export default function AddDriverPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      // Redirect would happen here in a real app
      alert("Driver added successfully!")
    }, 1500)
  }

  return (
    <div className="container mx-auto p-4 py-8">
      <div className="mb-8">
        <Link href="/admin" className="mb-4 flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Dashboard</span>
        </Link>
        <h1 className="text-3xl font-bold">Add New Driver</h1>
        <p className="text-muted-foreground">Register a new driver for your vehicles</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Driver Information</CardTitle>
            <CardDescription>Enter the details of the driver you want to register</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="e.g. Jan" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="e.g. Kowalski" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="e.g. jan.kowalski@example.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="e.g. +48 123 456 789" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="licenseNumber">Driver's License Number</Label>
                <Input id="licenseNumber" placeholder="e.g. ABC123456" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="licenseExpiry">License Expiry Date</Label>
                <Input id="licenseExpiry" type="date" required />
              </div>

              <div className="space-y-2">
                <Label>Rideshare Platforms</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="uber" />
                    <label
                      htmlFor="uber"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Uber
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="bolt" />
                    <label
                      htmlFor="bolt"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Bolt
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="freenow" />
                    <label
                      htmlFor="freenow"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      FreeNow
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="other" />
                    <label
                      htmlFor="other"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Other
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="assignedCar">Assign Car</Label>
                <Select>
                  <SelectTrigger id="assignedCar">
                    <SelectValue placeholder="Select a car to assign" />
                  </SelectTrigger>
                  <SelectContent>
                    {taxiCarsData.map((car) => (
                      <SelectItem key={car.id} value={car.id}>
                        {car.name} - {car.specs?.model}
                      </SelectItem>
                    ))}
                    <SelectItem value="none">No car assigned yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="startDate">Rental Start Date</Label>
                <Input id="startDate" type="date" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="weeklyRate">Weekly Rate (PLN)</Label>
                <Input id="weeklyRate" type="number" min="100" placeholder="600" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="deposit">Security Deposit (PLN)</Label>
                <Input id="deposit" type="number" min="0" placeholder="500" />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Button type="button" variant="outline" asChild>
                  <Link href="/admin">Cancel</Link>
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Adding..." : "Add Driver"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Required Documents</CardTitle>
              <CardDescription>Documents needed from the driver</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Valid driver's license (minimum 1 year)</li>
                <li>• Proof of address (utility bill, bank statement)</li>
                <li>• Rideshare platform account confirmation</li>
                <li>• Clean driving record</li>
                <li>• Security deposit receipt</li>
                <li>• Signed rental agreement</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Driver Verification</CardTitle>
              <CardDescription>Steps to verify a new driver</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">1. Document Check</h3>
                  <p className="text-sm text-muted-foreground">
                    Verify all documents are valid and up-to-date. Check expiration dates on licenses.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">2. Platform Verification</h3>
                  <p className="text-sm text-muted-foreground">
                    Confirm the driver is approved on their rideshare platforms. Ask to see their driver app.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">3. Deposit Collection</h3>
                  <p className="text-sm text-muted-foreground">
                    Collect and document the security deposit before handing over the vehicle.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">4. Vehicle Inspection</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete a vehicle inspection form with the driver, noting any existing damage.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">5. Agreement Signing</h3>
                  <p className="text-sm text-muted-foreground">
                    Review all terms of the rental agreement with the driver before signing.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
