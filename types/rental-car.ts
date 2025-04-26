export interface RentalCar {
  id: string
  name: string
  brand: string
  image: string
  dailyRate: number
  weeklyRate: number
  year: number
  fuelType: string
  transmission: string
  features: string[]
  isAvailable: boolean
  description?: string
  requirements?: {
    minAge?: number
    drivingExperience?: number
    deposit?: number
  }
  specs?: {
    engine?: string
    fuelEconomy?: string
    seats?: number
    luggage?: number
  }
}
