import dynamic from "next/dynamic";
import { Suspense } from "react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { LoadingFallback } from "@/components/ui/loading-fallback";

const SummaryContent = dynamic(
  () =>
    import("@/components/summary-content").then((mod) => ({
      default: mod.SummaryContent,
    })),
  {
    loading: () => <LoadingFallback />,
  },
);

export default function SummaryPage() {
  return (
    <DashboardLayout>
      <Suspense fallback={<LoadingFallback />}>
        <SummaryContent />
      </Suspense>
    </DashboardLayout>
  );
}
