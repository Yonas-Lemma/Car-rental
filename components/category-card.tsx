import Image from "next/image"
import Link from "next/link"

interface CategoryCardProps {
  title: string
  count: number
  image: string
}

export function CategoryCard({ title, count, image }: CategoryCardProps) {
  return (
    <Link href={`/explore?category=${title.toLowerCase()}`} className="group relative flex overflow-hidden rounded-xl">
      <div className="relative aspect-square w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 transition group-hover:from-black/90"></div>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-sm text-white/70">{count} vehicles</p>
        </div>
      </div>
    </Link>
  )
}
