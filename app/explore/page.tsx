"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ChevronDown, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CarCard } from "@/components/car-card"
import { carsData } from "@/data/cars"

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortOption, setSortOption] = useState("featured")
  const [filterBrand, setFilterBrand] = useState("all")

  // Filter and sort cars based on current selections
  const filteredCars = carsData
    .filter((car) => {
      const matchesSearch =
        car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.brand.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesBrand = filterBrand === "all" || car.brand === filterBrand

      return matchesSearch && matchesBrand
    })
    .sort((a, b) => {
      if (sortOption === "price-asc") return a.price - b.price
      if (sortOption === "price-desc") return b.price - a.price
      if (sortOption === "newest") return new Date(b.year).getTime() - new Date(a.year).getTime()
      // Default: featured
      return 0
    })

  // Get unique brands for filter
  const brands = Array.from(new Set(carsData.map((car) => car.brand)))

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-10 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <Link href="/home" className="flex items-center gap-2 text-white/70 hover:text-white">
              <ArrowLeft className="h-5 w-5" />
              <span className="hidden sm:inline">Back</span>
            </Link>
            <h1 className="text-xl font-bold">Explore Cars</h1>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
              <Input
                type="text"
                placeholder="Search cars..."
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
            placeholder="Search cars..."
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
                  Brand: {filterBrand === "all" ? "All" : filterBrand}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-zinc-900 text-white">
                <DropdownMenuItem onClick={() => setFilterBrand("all")}>All Brands</DropdownMenuItem>
                {brands.map((brand) => (
                  <DropdownMenuItem key={brand} onClick={() => setFilterBrand(brand)}>
                    {brand}
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
                      : "Newest"}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-zinc-900 text-white">
              <DropdownMenuItem onClick={() => setSortOption("featured")}>Featured</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption("price-asc")}>Price: Low to High</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption("price-desc")}>Price: High to Low</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption("newest")}>Newest</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Results count */}
        <p className="mb-6 text-sm text-white/70">
          Showing {filteredCars.length} {filteredCars.length === 1 ? "car" : "cars"}
        </p>

        {/* Car grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="flex h-60 flex-col items-center justify-center rounded-lg border border-white/10 bg-white/5">
            <p className="text-lg font-medium">No cars found</p>
            <p className="text-sm text-white/70">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  )
}
