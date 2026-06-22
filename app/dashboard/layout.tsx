import type { ReactNode } from "react";
import { DashboardGuard } from "../_components/dashboard-guard";
import { SidebarLayout } from "../_components/sidebar-layout";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="h-dvh bg-[#fbfcff]">
      <DashboardGuard>
        <SidebarLayout>{children}</SidebarLayout>
      </DashboardGuard>
    </main>
  );
}
