import { Bell } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NotificationDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative">
          <Bell className="w-6 h-6 text-blue-500 cursor-pointer" />
          <span
            className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center 
            rounded-full bg-red-500 text-xs text-white"
          >
            2
          </span>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-64 py-2">
        <div className="px-4 py-2 font-semibold text-gray-800">
          Notifications
        </div>
        <DropdownMenuSeparator />

        <DropdownMenuItem className="flex items-start space-x-2 hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer">
          <div className="h-2 w-2 rounded-full bg-red-500 mt-2" />
          <span>New notification here</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="flex items-start space-x-2 hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer">
          <div className="h-2 w-2 rounded-full bg-red-500 mt-2" />
          <span>New notification here</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationDropdown;
