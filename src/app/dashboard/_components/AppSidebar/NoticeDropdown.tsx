import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Megaphone } from "lucide-react";

const NoticeDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Megaphone className="w-6 h-6 text-blue-500 cursor-pointer" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-64 py-2">
        <div className="px-4 py-2 font-semibold text-gray-800">
          New in SeedList
        </div>
        <DropdownMenuSeparator />

        <DropdownMenuItem className="flex items-start space-x-2 hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer">
          <span>News related to Seedlist here</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="flex items-start space-x-2 hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer">
          <span>News related to Seedlist here</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NoticeDropdown;
