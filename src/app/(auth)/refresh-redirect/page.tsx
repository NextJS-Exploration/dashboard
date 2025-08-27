"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function RefreshRedirectPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const next = searchParams.get("next") || "/"

  useEffect(() => {
    const doRefresh = async () => {
      try {
        const res = await fetch("/api/refresh", { method: "POST" })
        if (res.ok) {
          router.replace(next) // go back where user was
        } else {
          router.replace("/signin")
        }
      } catch {
        router.replace("/signin")
      }
    }
    doRefresh()
  }, [next, router])

  return (
    <div className="flex items-center justify-center min-h-screen bg-brand">
      <div className="bg-white animate-pulse dark:bg-gray-800 shadow-xl rounded-2xl w-full max-w-xl p-8 text-gray-800 dark:text-gray-100">
        Refreshing token...
      </div>
    </div>
  )
}
