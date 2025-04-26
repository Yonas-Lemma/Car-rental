export interface Car {
  id: string
  name: string
  brand: string
  image: string
  price: number
  year: number
  mileage: number
  rating: number
  location: string
  isNew: boolean
  description?: string
  features?: string[]
  specs?: {
    engine?: string
    transmission?: string
    drivetrain?: string
    fuelEconomy?: string
    exteriorColor?: string
    interiorColor?: string
  }
}
