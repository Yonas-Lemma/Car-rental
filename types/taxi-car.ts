export interface TaxiCar {
  id: string
  name: string
  image: string
  weeklyRate: number
  capacity: number
  features: string[]
  category: string
  description?: string
  specs?: {
    model?: string
    year?: number
    amenities?: string[]
  }
}
