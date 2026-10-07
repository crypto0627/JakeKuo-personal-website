import type { Metadata } from "next";
import { DashboardLayout } from "@/components/dashboard-layout";
import { LegalContent } from "@/components/legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy 隱私權政策 | JakeKuo 郭來鴻",
};

export default function PrivacyPage() {
  return (
    <DashboardLayout>
      <LegalContent document="privacy" />
    </DashboardLayout>
  );
}
