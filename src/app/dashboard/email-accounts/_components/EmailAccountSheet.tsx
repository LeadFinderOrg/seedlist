import React from "react";

import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { EmailTableData } from "./EmailAccountsRoot";

interface EmailAccountSheetProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedRow: EmailTableData | null;
}

const EmailAccountSheet: React.FC<EmailAccountSheetProps> = ({
  isOpen,
  onOpenChange,
  selectedRow,
}) => {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="md:w-[90%] lg:w-1/2 max-w-none sm:max-w-none border-l">
        <div className="flex justify-between items-center mb-4">
          <SheetHeader className="text-left p-0 m-0">
            <SheetTitle>{selectedRow?.email}</SheetTitle>
          </SheetHeader>
          <SheetClose asChild>
            <X className="h-7 w-7 cursor-pointer p-1 hover:bg-slate-100 rounded-sm" />
          </SheetClose>
        </div>

        {selectedRow && (
          <div className="mt-6 space-y-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-500">EMAIL</h3>
              <p className="text-lg">{selectedRow.email}</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-500">EMAILS SENT</h3>
              <p className="text-lg">{selectedRow.phone}</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-500">
                WARMUP EMAILS
              </h3>
              <p className="text-lg">{selectedRow.username}</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-500">
                HEALTH SCORE
              </h3>
              <p className="text-lg">{selectedRow.id}</p>
            </div>

            <div className="pt-4 mt-4 border-t border-gray-200">
              <Button className="w-full">Manage Account</Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default EmailAccountSheet;
