import Image from "next/image"
import Link from "next/link"
import { Car, DollarSign, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { TaxiCar } from "@/types/taxi-car"

interface TaxiCarCardProps {
  car: TaxiCar
}

export function TaxiCarCard({ car }: TaxiCarCardProps) {
  const { id, name, image, weeklyRate, capacity, features, category } = car

  return (
    <div className="group overflow-hidden rounded-xl border bg-card transition hover:shadow-md">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        <Badge className="absolute left-2 top-2 bg-brand text-brand-foreground hover:bg-brand/90">{category}</Badge>
      </div>

      <div className="p-4">
        <div className="mb-2">
          <h3 className="font-medium">{name}</h3>
        </div>

        <div className="mb-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>Up to {capacity} passengers</span>
          </div>
          <div className="flex items-center gap-1">
            <Car className="h-4 w-4" />
            <span>{features[0]}</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-1 text-brand">
            <DollarSign className="h-4 w-4" />
            <span className="text-lg font-bold">{weeklyRate} PLN</span>
            <span className="text-sm text-muted-foreground">/ week</span>
          </div>
          <p className="text-xs text-muted-foreground">Perfect for Uber, Bolt & FreeNow</p>
        </div>

        <div className="flex justify-between">
          <Link
            href={`/car/${id}`}
            className="rounded-full border px-4 py-2 text-sm font-medium transition hover:bg-muted"
          >
            View Details
          </Link>
          <Button className="rounded-full bg-brand text-brand-foreground hover:bg-brand/90">Book Now</Button>
        </div>
      </div>
    </div>
  )
}
