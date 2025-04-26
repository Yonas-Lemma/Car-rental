"use client"

import dynamic from "next/dynamic"

// Import the admin dashboard component with no SSR
const AdminDashboard = dynamic(() => import("@/components/admin-dashboard"), {
  ssr: false,
  loading: () => (
    <div className="container mx-auto p-4 py-8">
      <div className="flex h-60 flex-col items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary/10 border-t-primary"></div>
        <p className="mt-4 text-muted-foreground">Loading dashboard...</p>
      </div>
    </div>
  ),
})

export default function AdminClient() {
  return <AdminDashboard />
}
