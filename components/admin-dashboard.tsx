"use client"

import { Badge } from "@/components/ui/badge"
import Image from "next/image"

import { useState } from "react"
import Link from "next/link"
import { Car, ChevronRight, Plus, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { taxiCarsData } from "@/data/taxi-cars"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data for the dashboard
  const stats = {
    totalCars: taxiCarsData.length,
    activeRentals: 3,
    availableCars: 1,
    totalDrivers: 3,
    pendingPayments: 1,
    totalRevenue: "7,400 PLN",
  }

  return (
    <div className="container mx-auto p-4 py-8">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold">Owner Dashboard</h1>
          <p className="text-muted-foreground">Manage your fleet and drivers</p>
        </div>
        <div className="flex gap-3">
          <Link href="/admin/cars/new">
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Car
            </Button>
          </Link>
          <Link href="/admin/drivers/new">
            <Button variant="outline" className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Driver
            </Button>
          </Link>
        </div>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="cars">Cars</TabsTrigger>
          <TabsTrigger value="drivers">Drivers</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Cars</CardTitle>
                <Car className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalCars}</div>
                <p className="text-xs text-muted-foreground">
                  {stats.activeRentals} rented, {stats.availableCars} available
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Drivers</CardTitle>
                <User className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalDrivers}</div>
                <p className="text-xs text-muted-foreground">3 active drivers</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Weekly Revenue</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalRevenue}</div>
                <p className="text-xs text-muted-foreground">{stats.pendingPayments} pending payment</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Recent car rentals and returns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">Toyota Corolla rented</p>
                    <p className="text-sm text-muted-foreground">Tomasz K. • 3 days ago</p>
                  </div>
                  <Badge variant="outline">Active</Badge>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">Mercedes C-Class rented</p>
                    <p className="text-sm text-muted-foreground">Anna N. • 5 days ago</p>
                  </div>
                  <Badge variant="outline">Active</Badge>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">BMW X5 returned</p>
                    <p className="text-sm text-muted-foreground">Piotr W. • 1 week ago</p>
                  </div>
                  <Badge variant="outline">Completed</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Upcoming Payments</CardTitle>
                <CardDescription>Weekly rental payments due</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">Tomasz K. - Toyota Corolla</p>
                    <p className="text-sm text-muted-foreground">Due in 4 days • 600 PLN</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Remind
                  </Button>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">Anna N. - Mercedes C-Class</p>
                    <p className="text-sm text-muted-foreground">Due in 2 days • 800 PLN</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Remind
                  </Button>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">Piotr W. - BMW X5</p>
                    <p className="text-sm text-muted-foreground">Overdue by 1 day • 1000 PLN</p>
                  </div>
                  <Button size="sm">Collect</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="cars" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Fleet</CardTitle>
              <CardDescription>Manage your vehicles and their status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {taxiCarsData.map((car) => (
                  <div key={car.id} className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-24 overflow-hidden rounded-md">
                        <Image src={car.image || "/placeholder.svg"} alt={car.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h3 className="font-medium">{car.name}</h3>
                        <p className="text-sm text-muted-foreground">{car.specs?.model}</p>
                        <p className="text-sm text-muted-foreground">{car.weeklyRate} PLN/week</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={car.id === "4" ? "outline" : "default"}>
                        {car.id === "4" ? "Available" : "Rented"}
                      </Badge>
                      <Link href={`/admin/cars/${car.id}`}>
                        <Button variant="ghost" size="icon">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-center">
                <Link href="/admin/cars/new">
                  <Button className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Add New Car
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="drivers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Registered Drivers</CardTitle>
              <CardDescription>Manage drivers using your vehicles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="Tomasz K."
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">Tomasz Kowalski</h3>
                      <p className="text-sm text-muted-foreground">Uber, Bolt • Toyota Corolla</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge>Active</Badge>
                    <Link href="/admin/drivers/1">
                      <Button variant="ghost" size="icon">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image src="/placeholder.svg?height=100&width=100" alt="Anna N." fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-medium">Anna Nowak</h3>
                      <p className="text-sm text-muted-foreground">Bolt, FreeNow • Mercedes C-Class</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge>Active</Badge>
                    <Link href="/admin/drivers/2">
                      <Button variant="ghost" size="icon">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image src="/placeholder.svg?height=100&width=100" alt="Piotr W." fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-medium">Piotr Wiśniewski</h3>
                      <p className="text-sm text-muted-foreground">Uber, FreeNow • No active rental</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Inactive</Badge>
                    <Link href="/admin/drivers/3">
                      <Button variant="ghost" size="icon">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <Link href="/admin/drivers/new">
                  <Button className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Add New Driver
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>Track rental payments and revenue</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-medium">Tomasz K. - Toyota Corolla</h3>
                    <p className="text-sm text-muted-foreground">Weekly Rental • 600 PLN</p>
                    <p className="text-xs text-muted-foreground">Paid on May 15, 2023</p>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                  >
                    Paid
                  </Badge>
                </div>

                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-medium">Anna N. - Mercedes C-Class</h3>
                    <p className="text-sm text-muted-foreground">Weekly Rental • 800 PLN</p>
                    <p className="text-xs text-muted-foreground">Paid on May 12, 2023</p>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                  >
                    Paid
                  </Badge>
                </div>

                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-medium">Piotr W. - BMW X5</h3>
                    <p className="text-sm text-muted-foreground">Weekly Rental • 1000 PLN</p>
                    <p className="text-xs text-muted-foreground">Due on May 18, 2023</p>
                  </div>
                  <Badge variant="outline" className="bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400">
                    Overdue
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
