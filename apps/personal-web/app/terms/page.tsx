import type { Metadata } from "next";
import { DashboardLayout } from "@/components/dashboard-layout";
import { LegalContent } from "@/components/legal-content";

export const metadata: Metadata = {
  title: "Terms of Use 使用條款 | JakeKuo 郭來鴻",
};

export default function TermsPage() {
  return (
    <DashboardLayout>
      <LegalContent document="terms" />
    </DashboardLayout>
  );
}
