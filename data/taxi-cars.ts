import type { TaxiCar } from "@/types/taxi-car"

export const taxiCarsData: TaxiCar[] = [
  {
    id: "1",
    name: "Standard Sedan",
    image: "/placeholder.svg?height=600&width=800",
    weeklyRate: 600,
    capacity: 4,
    features: ["Fuel Efficient", "Comfortable Seating", "Luggage Space"],
    category: "Taxi",
    description:
      "Our economy sedan is perfect for city driving with Uber, Bolt, or FreeNow. Comfortable, fuel-efficient, and affordable weekly rate.",
    specs: {
      model: "Toyota Corolla or similar",
      year: 2020,
      amenities: ["Air Conditioning", "Bluetooth", "USB Charging"],
    },
  },
  {
    id: "2",
    name: "Premium Sedan",
    image: "/placeholder.svg?height=600&width=800",
    weeklyRate: 800,
    capacity: 4,
    features: ["Premium Interior", "Extra Legroom", "Professional Service"],
    category: "Taxi",
    description:
      "Drive in style with our business class sedan. Perfect for Uber Comfort, Bolt Premium, and FreeNow+. Earn more with premium rides.",
    specs: {
      model: "Mercedes C-Class or similar",
      year: 2022,
      amenities: ["Leather Seats", "Climate Control", "Premium Sound System", "USB Charging"],
    },
  },
  {
    id: "3",
    name: "Minivan",
    image: "/placeholder.svg?height=600&width=800",
    weeklyRate: 900,
    capacity: 7,
    features: ["Spacious Interior", "Multiple Luggage", "Family Friendly"],
    category: "Taxi",
    description:
      "Our minivan is ideal for Uber XL, Bolt XL, and larger groups. Plenty of space for passengers and luggage means more earning potential.",
    specs: {
      model: "Toyota Sienna or similar",
      year: 2021,
      amenities: ["Air Conditioning", "Bluetooth", "USB Charging", "Foldable Seats"],
    },
  },
  {
    id: "4",
    name: "SUV",
    image: "/placeholder.svg?height=600&width=800",
    weeklyRate: 1000,
    capacity: 6,
    features: ["Luxury Interior", "Elevated View", "Extra Comfort"],
    category: "Taxi",
    description:
      "Our premium SUV offers the ultimate in comfort and style. Perfect for Uber Black, Bolt Premium, and executive transportation services.",
    specs: {
      model: "BMW X5 or similar",
      year: 2023,
      amenities: ["Leather Seats", "Climate Control", "Premium Sound System", "USB Charging", "Navigation"],
    },
  },
]
