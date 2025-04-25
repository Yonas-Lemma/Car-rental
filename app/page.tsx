"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react"
import LanguageToggle from "@/components/language-toggle"
import { ThemeToggle } from "@/components/theme-toggle"
import { CarIcon } from "@/components/icons"

export default function Home() {
  const [language, setLanguage] = useState<"en" | "pl">("en")

  const content = {
    en: {
      hero: {
        title: "Premium Car Rental for Ride-Sharing Drivers",
        subtitle: "Reliable vehicles for Bolt, Uber, and Free Now partners",
        cta: "Contact Us",
      },
      howItWorks: {
        title: "How It Works",
        steps: [
          {
            title: "Choose Your Vehicle",
            description:
              "Select from our fleet of well-maintained vehicles specifically approved for ride-sharing services.",
          },
          {
            title: "Complete Simple Documentation",
            description:
              "Provide your ride-sharing driver credentials and complete our straightforward rental agreement.",
          },
          {
            title: "Start Earning",
            description:
              "Get on the road quickly and start earning with Bolt, Uber, or Free Now without the burden of vehicle ownership.",
          },
        ],
      },
      benefits: {
        title: "Why Choose Us",
        items: [
          "Vehicles approved for all platforms",
          "Flexible rental periods",
          "24/7 maintenance support",
          "Insurance included",
          "No long-term commitment",
        ],
      },
      fleet: {
        title: "Our Fleet",
        economy: "Economy",
        standard: "Standard",
        premium: "Premium",
        economyDesc: "Fuel-efficient vehicles perfect for city driving",
        standardDesc: "Comfortable mid-size vehicles with excellent ratings",
        premiumDesc: "Luxury vehicles for premium ride-sharing services",
      },
      contact: {
        title: "Contact Us",
        address: "ul. Marszałkowska 142, 00-061 Warsaw, Poland",
        phone: "+48 22 123 4567",
        email: "info@eurotaxi.pl",
      },
    },
    pl: {
      hero: {
        title: "Wynajem Samochodów dla Kierowców Przewozu Osób",
        subtitle: "Niezawodne pojazdy dla partnerów Bolt, Uber i Free Now",
        cta: "Skontaktuj się",
      },
      howItWorks: {
        title: "Jak to Działa",
        steps: [
          {
            title: "Wybierz Swój Pojazd",
            description:
              "Wybierz z naszej floty dobrze utrzymanych pojazdów zatwierdzonych specjalnie dla usług przewozu osób.",
          },
          {
            title: "Wypełnij Prostą Dokumentację",
            description: "Przedstaw swoje dane kierowcy i wypełnij naszą prostą umowę najmu.",
          },
          {
            title: "Zacznij Zarabiać",
            description:
              "Szybko wyjdź na drogę i zacznij zarabiać z Bolt, Uber lub Free Now bez obciążenia związanego z posiadaniem pojazdu.",
          },
        ],
      },
      benefits: {
        title: "Dlaczego My",
        items: [
          "Pojazdy zatwierdzone dla wszystkich platform",
          "Elastyczne okresy wynajmu",
          "Wsparcie techniczne 24/7",
          "Ubezpieczenie w cenie",
          "Brak długoterminowych zobowiązań",
        ],
      },
      fleet: {
        title: "Nasza Flota",
        economy: "Ekonomiczne",
        standard: "Standardowe",
        premium: "Premium",
        economyDesc: "Oszczędne pojazdy idealne do jazdy po mieście",
        standardDesc: "Wygodne średniej wielkości pojazdy z doskonałymi ocenami",
        premiumDesc: "Luksusowe pojazdy do premium usług przewozu osób",
      },
      contact: {
        title: "Kontakt",
        address: "ul. Marszałkowska 142, 00-061 Warszawa, Polska",
        phone: "+48 22 123 4567",
        email: "info@eurotaxi.pl",
      },
    },
  }

  const t = content[language]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <div className="flex items-center justify-between w-full">
          <Link className="flex items-center justify-center" href="#">
            <CarIcon className="h-6 w-6 text-primary" />
            <span className="ml-2 text-xl font-bold">Euro Taxi</span>
          </Link>
          <div className="flex items-center gap-4">
            <LanguageToggle language={language} setLanguage={setLanguage} />
            <ThemeToggle />
            <Button variant="outline" size="sm">
              {t.hero.cta}
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/admin/login">Admin</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{t.hero.title}</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">{t.hero.subtitle}</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">{t.hero.cta}</Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=550&width=550&text=Euro+Taxi"
                  width={550}
                  height={550}
                  alt="Hero Image"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{t.howItWorks.title}</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {t.howItWorks.steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground text-center">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{t.benefits.title}</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              {t.benefits.items.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-base font-medium">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{t.fleet.title}</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <Tabs defaultValue="economy" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="economy">{t.fleet.economy}</TabsTrigger>
                  <TabsTrigger value="standard">{t.fleet.standard}</TabsTrigger>
                  <TabsTrigger value="premium">{t.fleet.premium}</TabsTrigger>
                </TabsList>
                <TabsContent value="economy">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-4">
                        <Image
                          src="/placeholder.svg?height=300&width=500&text=Economy+Car"
                          width={500}
                          height={300}
                          alt="Economy Car"
                          className="rounded-lg object-cover"
                        />
                        <h3 className="text-xl font-bold">{t.fleet.economy}</h3>
                        <p className="text-muted-foreground">{t.fleet.economyDesc}</p>
                        <Button>{t.hero.cta}</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="standard">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-4">
                        <Image
                          src="/placeholder.svg?height=300&width=500&text=Standard+Car"
                          width={500}
                          height={300}
                          alt="Standard Car"
                          className="rounded-lg object-cover"
                        />
                        <h3 className="text-xl font-bold">{t.fleet.standard}</h3>
                        <p className="text-muted-foreground">{t.fleet.standardDesc}</p>
                        <Button>{t.hero.cta}</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="premium">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-4">
                        <Image
                          src="/placeholder.svg?height=300&width=500&text=Premium+Car"
                          width={500}
                          height={300}
                          alt="Premium Car"
                          className="rounded-lg object-cover"
                        />
                        <h3 className="text-xl font-bold">{t.fleet.premium}</h3>
                        <p className="text-muted-foreground">{t.fleet.premiumDesc}</p>
                        <Button>{t.hero.cta}</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2023 Euro Taxi. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span className="text-xs">{t.contact.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span className="text-xs">{t.contact.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span className="text-xs">{t.contact.email}</span>
          </div>
        </nav>
      </footer>
    </div>
  )
}
