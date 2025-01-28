import { AppSidebar } from "@/app/dashboard/_components/AppSidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import NavigationPath from "./_components/AppSidebar/NavPath";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <header className="w-full flex items-center justify-between p-4">
          <SidebarTrigger />
          <NavigationPath />
        </header>
        {children}
      </main>
    </SidebarProvider>
  );
}
