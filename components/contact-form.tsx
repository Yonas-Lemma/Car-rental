"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CheckCircle2, Mail, Phone } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ContactFormProps {
  language: "en" | "pl"
}

export function ContactForm({ language }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const content = {
    en: {
      title: "Contact Us",
      description: "Choose how you'd like to get in touch with us.",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      message: "Message",
      submit: "Send Message",
      success: "Thank you for your message!",
      successDesc: "We'll get back to you as soon as possible.",
      button: "Contact Us",
      emailTab: "Email",
      phoneTab: "Phone",
      callUs: "Call Us",
      callUsDesc: "Our team is available Monday to Friday, 8am to 8pm.",
      callButton: "Call Now",
      orVisit: "Or visit us at our office",
    },
    pl: {
      title: "Skontaktuj się",
      description: "Wybierz, w jaki sposób chcesz się z nami skontaktować.",
      name: "Imię i Nazwisko",
      email: "Adres Email",
      phone: "Numer Telefonu",
      message: "Wiadomość",
      submit: "Wyślij Wiadomość",
      success: "Dziękujemy za Twoją wiadomość!",
      successDesc: "Odpowiemy najszybciej jak to możliwe.",
      button: "Skontaktuj się",
      emailTab: "Email",
      phoneTab: "Telefon",
      callUs: "Zadzwoń do nas",
      callUsDesc: "Nasz zespół jest dostępny od poniedziałku do piątku, od 8:00 do 20:00.",
      callButton: "Zadzwoń teraz",
      orVisit: "Lub odwiedź nas w biurze",
    },
  }

  const t = content[language]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  return (
    <Dialog onOpenChange={(open) => !open && handleReset()}>
      <DialogTrigger asChild>
        <Button>{t.button}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle>{t.title}</DialogTitle>
              <DialogDescription>{t.description}</DialogDescription>
            </DialogHeader>
            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="email">
                  <Mail className="mr-2 h-4 w-4" />
                  {t.emailTab}
                </TabsTrigger>
                <TabsTrigger value="phone">
                  <Phone className="mr-2 h-4 w-4" />
                  {t.phoneTab}
                </TabsTrigger>
              </TabsList>
              <TabsContent value="email">
                <form onSubmit={handleSubmit} className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.name}</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.email}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t.phone}</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t.message}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      required
                    />
                  </div>
                  <DialogFooter>
                    <Button type="submit">{t.submit}</Button>
                  </DialogFooter>
                </form>
              </TabsContent>
              <TabsContent value="phone" className="space-y-4 py-4">
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-medium">{t.callUs}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{t.callUsDesc}</p>
                  <div className="mt-4 flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-2" />
                    <span className="font-medium">+48 22 123 4567</span>
                  </div>
                  <Button className="mt-4 w-full" asChild>
                    <a href="tel:+48221234567">{t.callButton}</a>
                  </Button>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-medium">{t.orVisit}</h3>
                  <p className="text-sm text-muted-foreground mt-1">Lindleya 16, 02-013 m 301 Warszawa</p>
                </div>
              </TabsContent>
            </Tabs>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
              <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-300" />
            </div>
            <h2 className="mt-4 text-xl font-semibold">{t.success}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{t.successDesc}</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
