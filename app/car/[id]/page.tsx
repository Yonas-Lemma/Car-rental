"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Check, DollarSign, Share2, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { taxiCarsData } from "@/data/taxi-cars"
import type { TaxiCar } from "@/types/taxi-car"

export default function CarDetailPage() {
  const router = useRouter()
  const params = useParams()
  const [car, setCar] = useState<TaxiCar | null>(null)

  useEffect(() => {
    const foundCar = taxiCarsData.find((c) => c.id === params.id)
    if (foundCar) {
      setCar(foundCar)
    } else {
      // Redirect to cars page if car not found
      router.push("/cars")
    }
  }, [params.id, router])

  if (!car) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-white/10 border-t-white"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-10 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <Link href="/cars" className="flex items-center gap-2 text-white/70 hover:text-white">
              <ArrowLeft className="h-5 w-5" />
              <span className="hidden sm:inline">Back to fleet</span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" className="rounded-full border-white/10 bg-white/5 hover:bg-white/10">
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Share</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="mb-8 grid gap-6 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image src={car.image || "/placeholder.svg"} alt={car.name} fill className="object-cover" />
            <Badge className="absolute left-4 top-4 bg-yellow-500 font-medium text-black hover:bg-yellow-600">
              {car.category}
            </Badge>
          </div>

          {/* Car details */}
          <div className="flex flex-col">
            <div className="mb-4">
              <h1 className="text-2xl font-bold sm:text-3xl">{car.name}</h1>
              <p className="text-white/70">{car.specs?.model || "Premium Vehicle"}</p>
            </div>

            <div className="mb-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/70">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>Up to {car.capacity} passengers</span>
              </div>
              {car.specs?.year && (
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{car.specs.year}</span>
                </div>
              )}
            </div>

            <p className="mb-6 text-white/80">{car.description}</p>

            {car.features && (
              <div className="mb-6">
                <h3 className="mb-3 text-lg font-medium">Features</h3>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {car.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {car.specs?.amenities && (
              <div className="mb-6">
                <h3 className="mb-3 text-lg font-medium">Amenities</h3>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {car.specs.amenities.map((amenity, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />
                      <span className="text-sm text-white/80">{amenity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-auto">
              <Separator className="mb-6 bg-white/10" />

              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-5 w-5 text-yellow-500" />
                    <p className="text-3xl font-bold">{car.baseRate}</p>
                    <p className="text-lg text-white/70">base fare</p>
                  </div>
                  <p className="text-sm text-white/70">+${car.perKmRate}/km distance rate</p>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" className="rounded-full border-white/10 bg-white/5 hover:bg-white/10">
                    Get Quote
                  </Button>
                  <Button className="rounded-full bg-yellow-500 text-black hover:bg-yellow-400">Book Now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
