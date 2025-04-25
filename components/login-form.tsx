"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface LoginFormProps {
  language: "en" | "pl"
}

export function LoginForm({ language }: LoginFormProps) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const content = {
    en: {
      title: "Driver Login",
      description: "Log in to manage your rentals and account.",
      username: "Username",
      password: "Password",
      submit: "Log In",
      button: "Login",
      forgotPassword: "Forgot password?",
    },
    pl: {
      title: "Logowanie Kierowcy",
      description: "Zaloguj się, aby zarządzać swoimi wynajmami i kontem.",
      username: "Nazwa użytkownika",
      password: "Hasło",
      submit: "Zaloguj się",
      button: "Logowanie",
      forgotPassword: "Zapomniałeś hasła?",
    },
  }

  const t = content[language]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would authenticate the user
    console.log("Login submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          {t.button}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t.title}</DialogTitle>
          <DialogDescription>{t.description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="username">{t.username}</Label>
            <Input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">{t.password}</Label>
              <Button variant="link" className="h-auto p-0 text-xs">
                {t.forgotPassword}
              </Button>
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <DialogFooter>
            <Button type="submit">{t.submit}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
