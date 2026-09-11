import dynamic from "next/dynamic";
import { Suspense } from "react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { LoadingFallback } from "@/components/ui/loading-fallback";

const ExperienceContent = dynamic(
  () =>
    import("@/components/experience-content").then((mod) => ({
      default: mod.ExperienceContent,
    })),
  {
    loading: () => <LoadingFallback />,
  },
);

export default function ExperiencePage() {
  return (
    <DashboardLayout>
      <Suspense fallback={<LoadingFallback />}>
        <ExperienceContent />
      </Suspense>
    </DashboardLayout>
  );
}
