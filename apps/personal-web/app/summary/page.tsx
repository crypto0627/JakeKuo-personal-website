import dynamic from "next/dynamic"
import { Suspense } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"

const SummaryContent = dynamic(
  () => import("@/components/summary-content").then((mod) => ({ default: mod.SummaryContent })),
  {
    loading: () => <div className="animate-pulse p-8 rounded-3xl bg-muted/20">Loading...</div>,
  },
)

export default function SummaryPage() {
  return (
    <DashboardLayout>
      <Suspense fallback={<div className="animate-pulse p-8 rounded-3xl bg-muted/20">Loading...</div>}>
        <SummaryContent />
      </Suspense>
    </DashboardLayout>
  )
}
