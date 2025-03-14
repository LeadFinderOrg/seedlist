import { AppSidebar } from "@/app/dashboard/_components/AppSidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import NavigationPath from "./_components/AppSidebar/NavPath";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <AppSidebar />
      <div className="flex-1 md:pl-20 pl-16">
        <SidebarProvider>
          <main className="w-full">
            <NavigationPath />
            {children}
          </main>
        </SidebarProvider>
      </div>
    </div>
  );
}
