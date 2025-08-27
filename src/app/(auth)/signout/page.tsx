"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function RefreshRedirectPage() {
  const router = useRouter()

  useEffect(() => {
    const doSignOut = async () => {
      try {
        const res = await fetch("/api/signout", { method: "POST" })
        if (res.ok) {
          router.replace("/signin")
        } else {
          router.replace("/signin")
        }
      } catch {
        router.replace("/dashboard")
      }
    }

    doSignOut()
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen bg-brand">
      <div className="animate-pulse text-center w-full max-w-xl p-8 text-gray-200">
        Signing out...
      </div>
    </div>
  )
}
