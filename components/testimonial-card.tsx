import Image from "next/image"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  quote: string
  rating: number
  image: string
}

export function TestimonialCard({ name, role, quote, rating, image }: TestimonialCardProps) {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="mb-4 flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-brand text-brand" : "text-muted-foreground/20"}`} />
        ))}
      </div>

      <blockquote className="mb-6">
        <p className="text-muted-foreground">"{quote}"</p>
      </blockquote>

      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  )
}
