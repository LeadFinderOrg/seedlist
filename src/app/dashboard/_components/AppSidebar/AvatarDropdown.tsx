import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Book, CircleHelp, LogOut, Map } from "lucide-react";

const AvatarDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage
            src="https://randomuser.me/api/portraits/women/2.jpg"
            alt="User"
          />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-48 px-4">
        <DropdownMenuItem className="cursor-pointer">testemail@email.com</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-gray-800 flex items-center space-x-2 hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer">
          <Map className="text-blue-500" />
          <span>Roadmap</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-gray-800 flex items-center space-x-2 hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer">
          <CircleHelp className="text-blue-500" />
          <span>Help Center</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-gray-800 flex items-center space-x-2 hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer">
          <Book className="text-blue-500" />
          <span>Guides</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-gray-800 flex items-center space-x-2 hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer">
          <LogOut className="text-blue-500" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarDropdown;
