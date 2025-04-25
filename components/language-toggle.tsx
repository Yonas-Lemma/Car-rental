"use client"

import { Button } from "@/components/ui/button"

interface LanguageToggleProps {
  language: "en" | "pl"
  setLanguage: (language: "en" | "pl") => void
}

export default function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
  return (
    <div className="flex items-center space-x-2 border rounded-md p-1">
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="text-xs px-2 py-1 h-auto"
      >
        EN
      </Button>
      <Button
        variant={language === "pl" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("pl")}
        className="text-xs px-2 py-1 h-auto"
      >
        PL
      </Button>
    </div>
  )
}
