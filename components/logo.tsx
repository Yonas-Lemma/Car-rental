import Link from "next/link"
import { Car } from "lucide-react"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  iconClassName?: string
  textClassName?: string
  showIcon?: boolean
  size?: "sm" | "md" | "lg"
}

export function Logo({ className, iconClassName, textClassName, showIcon = true, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }

  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  }

  return (
    <Link href="/home" className={cn("flex items-center gap-1.5 font-bold", sizeClasses[size], className)}>
      {showIcon && <Car className={cn("text-brand", iconSizes[size], iconClassName)} />}
      <span className={cn("flex items-center", textClassName)}>
        Euro<span className="text-brand">Taxi</span>
      </span>
    </Link>
  )
}
