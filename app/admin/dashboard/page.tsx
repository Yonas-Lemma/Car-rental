"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CarIcon } from "@/components/icons"

export default function AdminDashboard() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Mock data
  const [cars, setCars] = useState([
    { id: 1, name: "Toyota Corolla", category: "economy", status: "available" },
    { id: 2, name: "Honda Civic", category: "economy", status: "rented" },
    { id: 3, name: "Volkswagen Passat", category: "standard", status: "available" },
    { id: 4, name: "BMW 3 Series", category: "premium", status: "available" },
  ])

  const [users, setUsers] = useState([
    { id: 1, name: "Jan Kowalski", email: "jan@example.com", phone: "+48 123 456 789" },
    { id: 2, name: "Anna Nowak", email: "anna@example.com", phone: "+48 987 654 321" },
  ])

  // Form states
  const [newCar, setNewCar] = useState({ name: "", category: "economy" })
  const [newUser, setNewUser] = useState({ name: "", email: "", phone: "" })

  useEffect(() => {
    // Check if user is authenticated
    const auth = localStorage.getItem("adminAuth")
    if (auth !== "true") {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleAddCar = (e: React.FormEvent) => {
    e.preventDefault()
    setCars([
      ...cars,
      {
        id: cars.length + 1,
        name: newCar.name,
        category: newCar.category,
        status: "available",
      },
    ])
    setNewCar({ name: "", category: "economy" })
  }

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault()
    setUsers([
      ...users,
      {
        id: users.length + 1,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
      },
    ])
    setNewUser({ name: "", email: "", phone: "" })
  }

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    router.push("/admin/login")
  }

  if (!isAuthenticated) {
    return <div className="flex min-h-screen items-center justify-center">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="border-b p-4 flex items-center justify-between">
        <div className="flex items-center">
          <CarIcon className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl font-bold">Euro Taxi Admin</span>
        </div>
        <Button variant="outline" onClick={handleLogout}>
          Logout
        </Button>
      </header>

      <main className="container py-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        <Tabs defaultValue="cars">
          <TabsList className="mb-6">
            <TabsTrigger value="cars">Manage Cars</TabsTrigger>
            <TabsTrigger value="users">Manage Users</TabsTrigger>
          </TabsList>

          <TabsContent value="cars">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Add New Car</CardTitle>
                  <CardDescription>Add a new vehicle to your fleet</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddCar} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="car-name">Car Model</Label>
                      <Input
                        id="car-name"
                        value={newCar.name}
                        onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
                        placeholder="Toyota Corolla"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="car-category">Category</Label>
                      <Select
                        value={newCar.category}
                        onValueChange={(value) => setNewCar({ ...newCar, category: value })}
                      >
                        <SelectTrigger id="car-category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="economy">Economy</SelectItem>
                          <SelectItem value="standard">Standard</SelectItem>
                          <SelectItem value="premium">Premium</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button type="submit" className="w-full">
                      Add Car
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Current Fleet</CardTitle>
                  <CardDescription>Manage your existing vehicles</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {cars.map((car) => (
                      <div key={car.id} className="flex items-center justify-between p-3 border rounded-md">
                        <div>
                          <p className="font-medium">{car.name}</p>
                          <p className="text-sm text-muted-foreground capitalize">{car.category}</p>
                        </div>
                        <div>
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${
                              car.status === "available"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                : "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
                            }`}
                          >
                            {car.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Register New User</CardTitle>
                  <CardDescription>Add a new driver to the system</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddUser} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="user-name">Full Name</Label>
                      <Input
                        id="user-name"
                        value={newUser.name}
                        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                        placeholder="Jan Kowalski"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="user-email">Email</Label>
                      <Input
                        id="user-email"
                        type="email"
                        value={newUser.email}
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                        placeholder="jan@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="user-phone">Phone</Label>
                      <Input
                        id="user-phone"
                        value={newUser.phone}
                        onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
                        placeholder="+48 123 456 789"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Register User
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Registered Users</CardTitle>
                  <CardDescription>Manage your registered drivers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {users.map((user) => (
                      <div key={user.id} className="p-3 border rounded-md">
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                        <p className="text-sm text-muted-foreground">{user.phone}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
