import dynamic from "next/dynamic"
import { Suspense } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"

// Dynamic import with loading fallback
const HomeContent = dynamic(() => import("@/components/home-content").then((mod) => ({ default: mod.HomeContent })), {
  loading: () => <div className="animate-pulse p-8 rounded-3xl bg-muted/20">Loading...</div>,
})

export default function Home() {
  return (
    <DashboardLayout>
      <Suspense fallback={<div className="animate-pulse p-8 rounded-3xl bg-muted/20">Loading...</div>}>
        <HomeContent />
      </Suspense>
    </DashboardLayout>
  )
}
