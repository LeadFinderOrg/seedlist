import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { EmailTableData } from "./EmailAccountsRoot";

interface TableThreeDotProps {
    rowData: EmailTableData;
    onOptionSelect: (option: string, row: EmailTableData) => void;
  }

  export default function TableThreeDot({ rowData, onOptionSelect }: TableThreeDotProps) {
    return (
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <MoreHorizontal className="h-8 w-8 p-1 text-gray-500 hover:bg-gray-100 rounded-sm" />
          </DropdownMenuTrigger>
  
          <DropdownMenuContent align="end" className="w-48 py-2">
            <DropdownMenuItem
              onClick={() => onOptionSelect("warmup", rowData)}
              className="flex items-start space-x-2 hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer text-slate-600"
            >
              <span>Warmup</span>
            </DropdownMenuItem>
  
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => onOptionSelect("settings", rowData)}
              className="flex items-start space-x-2 hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer text-slate-600"
            >
              <span>Settings</span>
            </DropdownMenuItem>
  
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => onOptionSelect("campaigns", rowData)}
              className="flex items-start space-x-2 hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer text-slate-600"
            >
              <span>Campaigns</span>
            </DropdownMenuItem>
  
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => onOptionSelect("assign", rowData)}
              className="flex items-start space-x-2 hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer text-slate-600"
            >
              <span>Assign to Workspace</span>
            </DropdownMenuItem>
  
            <DropdownMenuSeparator />
  
            <DropdownMenuItem
              onClick={() => onOptionSelect("delete", rowData)}
              className="flex items-start space-x-2 hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer text-red-600"
            >
              <span>Delete Account</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }
