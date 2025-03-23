import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="w-full h-screen b-slate-900">
      <AppSidebar />
      <main className="size-full relative">
        <SidebarTrigger className="cursor-pointer absolute top-2 left-2" />
        {children}
      </main>
    </SidebarProvider>
  );
}
