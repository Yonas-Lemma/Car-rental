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
import { Textarea } from "@/components/ui/textarea"

export default function AddCarPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      // Redirect would happen here in a real app
      alert("Car added successfully!")
    }, 1500)
  }

  return (
    <div className="container mx-auto p-4 py-8">
      <div className="mb-8">
        <Link href="/admin" className="mb-4 flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Dashboard</span>
        </Link>
        <h1 className="text-3xl font-bold">Add New Car</h1>
        <p className="text-muted-foreground">Register a new vehicle in your fleet</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Vehicle Information</CardTitle>
            <CardDescription>Enter the details of the vehicle you want to add</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Vehicle Name</Label>
                <Input id="name" placeholder="e.g. Economy Sedan" required />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select required>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="economy">Economy</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="family">Family</SelectItem>
                      <SelectItem value="premium">Premium</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="capacity">Passenger Capacity</Label>
                  <Input id="capacity" type="number" min="1" max="9" placeholder="4" required />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="model">Model</Label>
                  <Input id="model" placeholder="e.g. Toyota Corolla" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="year">Year</Label>
                  <Input id="year" type="number" min="2000" max="2030" placeholder="2023" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="weeklyRate">Weekly Rate (PLN)</Label>
                <Input id="weeklyRate" type="number" min="100" placeholder="600" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="features">Features (comma separated)</Label>
                <Input id="features" placeholder="e.g. Air Conditioning, Bluetooth, USB Charging" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe the vehicle and its benefits for rideshare drivers" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Image URL</Label>
                <Input id="image" type="url" placeholder="https://example.com/car-image.jpg" />
                <p className="text-xs text-muted-foreground">Enter a URL for the vehicle image or upload below</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image-upload">Upload Image</Label>
                <Input id="image-upload" type="file" accept="image/*" />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Button type="button" variant="outline" asChild>
                  <Link href="/admin">Cancel</Link>
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Adding..." : "Add Car"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Vehicle Requirements</CardTitle>
              <CardDescription>Requirements for rideshare platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Uber</h3>
                  <ul className="ml-6 list-disc text-sm text-muted-foreground">
                    <li>4-door vehicle with 5 seatbelts</li>
                    <li>Year 2008 or newer (varies by city)</li>
                    <li>Good condition with no cosmetic damage</li>
                    <li>No commercial branding</li>
                    <li>Valid registration and insurance</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium">Bolt</h3>
                  <ul className="ml-6 list-disc text-sm text-muted-foreground">
                    <li>4-door vehicle with 5 seatbelts</li>
                    <li>Year 2010 or newer (varies by city)</li>
                    <li>Good condition with no visible damage</li>
                    <li>Working air conditioning</li>
                    <li>Valid registration and insurance</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium">FreeNow</h3>
                  <ul className="ml-6 list-disc text-sm text-muted-foreground">
                    <li>4-door vehicle with 5 seatbelts</li>
                    <li>Year 2009 or newer (varies by city)</li>
                    <li>Good condition with no visible damage</li>
                    <li>Working air conditioning</li>
                    <li>Valid registration and insurance</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tips for Success</CardTitle>
              <CardDescription>Maximize your rental income</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Fuel-efficient vehicles typically attract more drivers</li>
                <li>• Vehicles that qualify for premium services earn more</li>
                <li>• Regular maintenance keeps your vehicle on the road longer</li>
                <li>• Clear, high-quality photos attract more interest</li>
                <li>• Detailed descriptions help drivers make decisions</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
