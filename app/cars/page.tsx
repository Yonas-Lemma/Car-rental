"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ChevronDown, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { TaxiCarCard } from "@/components/taxi-car-card"
import { taxiCarsData } from "@/data/taxi-cars"

export default function CarsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortOption, setSortOption] = useState("featured")
  const [filterCategory, setFilterCategory] = useState("all")

  // Filter and sort cars based on current selections
  const filteredCars = taxiCarsData
    .filter((car) => {
      const matchesSearch =
        car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.category.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = filterCategory === "all" || car.category === filterCategory

      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sortOption === "price-asc") return a.baseRate - b.baseRate
      if (sortOption === "price-desc") return b.baseRate - a.baseRate
      if (sortOption === "capacity") return b.capacity - a.capacity
      // Default: featured
      return 0
    })

  // Get unique categories for filter
  const categories = Array.from(new Set(taxiCarsData.map((car) => car.category)))

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-10 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <Link href="/home" className="flex items-center gap-2 text-white/70 hover:text-white">
              <ArrowLeft className="h-5 w-5" />
              <span className="hidden sm:inline">Back</span>
            </Link>
            <h1 className="text-xl font-bold">Our Fleet</h1>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
              <Input
                type="text"
                placeholder="Search vehicles..."
                className="w-64 rounded-full border-white/10 bg-white/5 pl-10 text-sm text-white placeholder:text-white/50 focus-visible:ring-white/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-4">
        {/* Mobile search */}
        <div className="relative mb-6 md:hidden">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
          <Input
            type="text"
            placeholder="Search vehicles..."
            className="w-full rounded-full border-white/10 bg-white/5 pl-10 text-sm text-white placeholder:text-white/50 focus-visible:ring-white/20"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm">
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-full border-white/10 bg-white/5 text-sm hover:bg-white/10">
                  Category: {filterCategory === "all" ? "All" : filterCategory}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-zinc-900 text-white">
                <DropdownMenuItem onClick={() => setFilterCategory("all")}>All Categories</DropdownMenuItem>
                {categories.map((category) => (
                  <DropdownMenuItem key={category} onClick={() => setFilterCategory(category)}>
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="rounded-full border-white/10 bg-white/5 text-sm hover:bg-white/10">
                Sort:{" "}
                {sortOption === "featured"
                  ? "Featured"
                  : sortOption === "price-asc"
                    ? "Price: Low to High"
                    : sortOption === "price-desc"
                      ? "Price: High to Low"
                      : "Capacity"}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-zinc-900 text-white">
              <DropdownMenuItem onClick={() => setSortOption("featured")}>Featured</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption("price-asc")}>Price: Low to High</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption("price-desc")}>Price: High to Low</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption("capacity")}>Passenger Capacity</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Results count */}
        <p className="mb-6 text-sm text-white/70">
          Showing {filteredCars.length} {filteredCars.length === 1 ? "vehicle" : "vehicles"}
        </p>

        {/* Car grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredCars.map((car) => (
              <TaxiCarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="flex h-60 flex-col items-center justify-center rounded-lg border border-white/10 bg-white/5">
            <p className="text-lg font-medium">No vehicles found</p>
            <p className="text-sm text-white/70">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  )
}
