"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

export default function SplashScreen() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time before redirecting to main page
    const timer = setTimeout(() => {
      setLoading(false)
      // After loading animation completes, redirect to home
      setTimeout(() => {
        router.push("/home")
      }, 500)
    }, 2500)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <div className="mb-2 text-3xl font-bold text-white">
          <span className="text-white">F</span>
        </div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-0.5 bg-white"
        />
        {loading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-8">
            <Loader2 className="h-6 w-6 animate-spin text-white/70" />
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
