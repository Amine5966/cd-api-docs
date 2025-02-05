"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ApiEndpoints() {
  const router = useRouter()

  useEffect(() => {
    router.push("/api-endpoints/create-pickup")
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <p className="text-gray-500">Redirecting to Create Pickup...</p>
    </div>
  )
}

