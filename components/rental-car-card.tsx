import Image from "next/image"
import Link from "next/link"
import { Calendar, Car, DollarSign, Fuel, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { RentalCar } from "@/types/rental-car"

interface RentalCarCardProps {
  car: RentalCar
}

export function RentalCarCard({ car }: RentalCarCardProps) {
  const { id, name, brand, image, dailyRate, weeklyRate, year, fuelType, transmission, features, isAvailable } = car

  return (
    <div className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 transition hover:border-white/20 hover:bg-white/10">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${brand} ${name}`}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        {isAvailable ? (
          <Badge className="absolute left-2 top-2 bg-green-500 font-medium text-white hover:bg-green-600">
            Available Now
          </Badge>
        ) : (
          <Badge className="absolute left-2 top-2 bg-red-500 font-medium text-white hover:bg-red-600">
            Currently Rented
          </Badge>
        )}
      </div>

      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-medium">
            {brand} {name}
          </h3>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
            <span className="text-sm">4.8</span>
          </div>
        </div>

        <div className="mb-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/70">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{year}</span>
          </div>
          <div className="flex items-center gap-1">
            <Fuel className="h-4 w-4" />
            <span>{fuelType}</span>
          </div>
          <div className="flex items-center gap-1">
            <Car className="h-4 w-4" />
            <span>{transmission}</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-1 text-green-500">
            <DollarSign className="h-4 w-4" />
            <span className="text-lg font-bold">{dailyRate}</span>
            <span className="text-sm text-white/70">/day</span>
          </div>
          <p className="text-xs text-white/70">
            ${weeklyRate}/week (save ${dailyRate * 7 - weeklyRate})
          </p>
        </div>

        <div className="flex justify-between">
          <Link
            href={`/car/${id}`}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10"
          >
            View Details
          </Link>
          <Button className="rounded-full bg-green-500 text-black hover:bg-green-400">Book Now</Button>
        </div>
      </div>
    </div>
  )
}
