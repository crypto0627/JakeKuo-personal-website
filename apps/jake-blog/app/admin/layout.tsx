import { MainLayout } from "@/layouts/dashboard-layout";

export default function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
    <MainLayout>
        {children}
    </MainLayout>
  );
}
