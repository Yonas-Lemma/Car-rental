import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Car } from "@/types/car"

interface FeaturedCarCardProps {
  car: Car
}

export function FeaturedCarCard({ car }: FeaturedCarCardProps) {
  const { id, name, brand, image, price, year, rating, isNew } = car

  // Format price with commas
  const formattedPrice = new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
    maximumFractionDigits: 0,
  }).format(price)

  return (
    <Link
      href={`/car/${id}`}
      className="group block overflow-hidden rounded-xl border border-white/10 bg-white/5 transition hover:border-white/20 hover:bg-white/10"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${brand} ${name}`}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        {isNew && (
          <Badge className="absolute left-2 top-2 bg-white font-medium text-black hover:bg-white/90">NEW</Badge>
        )}
      </div>

      <div className="p-4">
        <div className="mb-1 flex items-center justify-between">
          <h3 className="font-medium">
            {brand} {name}
          </h3>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
            <span className="text-sm">{rating}</span>
          </div>
        </div>

        <div className="mb-2 text-sm text-white/70">
          <span>{year}</span>
        </div>

        <p className="font-bold">{formattedPrice}</p>
      </div>
    </Link>
  )
}
