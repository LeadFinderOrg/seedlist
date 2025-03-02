import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaBook, FaMap, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";

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
        <DropdownMenuItem>testemail@email.com</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-gray-800 flex items-center space-x-2 hover:bg-gray-100 px-3 py-2 rounded-md">
          <FaMap className="text-blue-500" />
          <span>Roadmap</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-gray-800 flex items-center space-x-2 hover:bg-gray-100 px-3 py-2 rounded-md">
          <FaQuestionCircle className="text-blue-500" />
          <span>Help Center</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-gray-800 flex items-center space-x-2 hover:bg-gray-100 px-3 py-2 rounded-md">
          <FaBook className="text-blue-500" />
          <span>Guides</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-gray-800 flex items-center space-x-2 hover:bg-gray-100 px-3 py-2 rounded-md">
          <FaSignOutAlt className="text-blue-500" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarDropdown;
