import React from "react";

import { X } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { EmailTableData } from "./EmailAccountsRoot";
import NavigationTabs from "./NavigationTabs";

interface EmailAccountDrawerProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedRow: EmailTableData | null;
}

const EmailAccountDrawer: React.FC<EmailAccountDrawerProps> = ({
  isOpen,
  onOpenChange,
  selectedRow,
}) => {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="md:w-[90%] lg:w-1/2 max-w-none sm:max-w-none border-l overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <SheetHeader className="text-left p-0 m-0">
            <SheetTitle>{selectedRow?.email}</SheetTitle>
            <SheetDescription className="sr-only"></SheetDescription>
          </SheetHeader>
          <SheetClose asChild>
            <X className="h-7 w-7 cursor-pointer p-1 hover:bg-slate-100 rounded-sm" />
          </SheetClose>
        </div>

        <NavigationTabs />
      </SheetContent>
    </Sheet>
  );
};

export default EmailAccountDrawer;
