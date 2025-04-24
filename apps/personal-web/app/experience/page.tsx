import dynamic from "next/dynamic"
import { Suspense } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"

const ExperienceContent = dynamic(
  () => import("@/components/experience-content").then((mod) => ({ default: mod.ExperienceContent })),
  {
    loading: () => <div className="animate-pulse p-8 rounded-3xl bg-muted/20">Loading...</div>,
  },
)

export default function ExperiencePage() {
  return (
    <DashboardLayout>
      <Suspense fallback={<div className="animate-pulse p-8 rounded-3xl bg-muted/20">Loading...</div>}>
        <ExperienceContent />
      </Suspense>
    </DashboardLayout>
  )
}
