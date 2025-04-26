import Image from "next/image"
import Link from "next/link"
import { Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Car } from "@/types/car"

interface CarCardProps {
  car: Car
}

export function CarCard({ car }: CarCardProps) {
  const { id, name, brand, image, price, year, mileage, rating, location, isNew } = car

  // Format price with commas
  const formattedPrice = new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
    maximumFractionDigits: 0,
  }).format(price)

  // Format mileage with commas and k for thousands
  const formattedMileage = mileage < 1000 ? mileage : `${(mileage / 1000).toFixed(1)}k`

  return (
    <div className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 transition hover:border-white/20 hover:bg-white/10">
      <Link href={`/car/${id}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={`${brand} ${name}`}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
          />
          <Button
            size="icon"
            variant="ghost"
            className="absolute right-2 top-2 h-8 w-8 rounded-full bg-black/50 text-white hover:bg-black/70"
          >
            <Heart className="h-4 w-4" />
            <span className="sr-only">Add to favorites</span>
          </Button>
          {isNew && (
            <Badge className="absolute left-2 top-2 bg-white font-medium text-black hover:bg-white/90">NEW</Badge>
          )}
        </div>

        <div className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="font-medium">
              {brand} {name}
            </h3>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              <span className="text-sm">{rating}</span>
            </div>
          </div>

          <div className="mb-4 flex flex-wrap gap-2 text-sm text-white/70">
            <span>{year}</span>
            <span>•</span>
            <span>{formattedMileage} mi</span>
            <span>•</span>
            <span>{location}</span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-bold">{formattedPrice}</p>
              <p className="text-xs text-white/70">Est. {Math.round(price / 60)} PLN/mo</p>
            </div>
            <Button className="rounded-full bg-white text-black hover:bg-white/90">View</Button>
          </div>
        </div>
      </Link>
    </div>
  )
}
