import { Bell, Megaphone } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";

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
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-2 px-4 py-2"
            >
              My Workspace
              <span className="ml-1">▼</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem>Workspace 1</DropdownMenuItem>
            <DropdownMenuItem>Workspace 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
        <Megaphone className="w-6 h-6 text-blue-500 cursor-pointer" />

        <div className="relative">
          <Bell className="w-6 h-6 text-blue-500 cursor-pointer" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            2
          </span>
        </div>

        <Image src={line} alt="Background" width={2} height={4} />

        {/* User Avatar */}
        <Avatar>
          <AvatarImage
            src="https://randomuser.me/api/portraits/women/2.jpg"
            alt="User"
          />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}
