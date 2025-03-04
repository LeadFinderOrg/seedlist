import { AppSidebar } from "@/app/dashboard/_components/AppSidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import NavigationPath from "./_components/AppSidebar/NavPath";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <NavigationPath />
        {children}
      </main>
    </SidebarProvider>
  );
}
