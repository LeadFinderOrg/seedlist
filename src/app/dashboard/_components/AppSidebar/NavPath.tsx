import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, Megaphone } from "lucide-react";
import Image from "next/image";
import AvatarDropdown from "./AvatarDropdown";
import NotificationDropdown from "./NotificationDropdown";
import NoticeDropdown from "./NoticeDropdown";

const line = "/images/Line.png";

export default function NavigationPath() {
  return (
    <nav className="flex items-center justify-between mx-6 py-3 border-b border-gray-300">
      {/* Left Side */}
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <h2 className="md:text-lg text-base font-semibold">Email Accounts</h2>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        <NoticeDropdown />

        <NotificationDropdown />

        <Image src={line} alt="Background" width={2} height={4} />

        {/* User Avatar */}
        <AvatarDropdown />
      </div>
    </nav>
  );
}
