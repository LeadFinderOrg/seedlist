import React from "react";
import { LucideIcon, X } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LeadTableDataTypes } from "./LeadsTab";
import LeadDetailsTab from "./LeadDetailsTab";
import ActivitiesTab from "./ActivitiesTab";
import { StatusItem } from "@/app/dashboard/email-accounts/_components/StatusItem";
import { leadDrawerDropdownOptions } from "@/utils/constants/leadsTabData";

interface LeadTableDrawerPropsTypes {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    selectedRow: LeadTableDataTypes | null;
    defaultTab?: string;
}

export interface LeadDrawerOptionTypes {
    value: string;
    label: string;
    icon: LucideIcon;
    color?: string;
    fill?: string;
};

const LeadTableDrawer: React.FC<LeadTableDrawerPropsTypes> = ({
    isOpen,
    onOpenChange,
    selectedRow,
    defaultTab,
}) => {
    const [selectedStatus, setSelectedStatus] = React.useState<string>('lead');
    return (
        <Sheet open={isOpen} onOpenChange={onOpenChange}>
            <SheetContent className="md:w-[90%] lg:max-w-[720px] max-w-none sm:max-w-none border-l overflow-auto">
                <div className="flex justify-between items-center mb-4">
                    <SheetHeader className="text-left p-0 m-0">
                        <SheetTitle>{selectedRow?.email}</SheetTitle>
                        <SheetDescription className="sr-only"></SheetDescription>
                    </SheetHeader>
                    <SheetClose asChild>
                        <X className="h-7 w-7 cursor-pointer p-1 hover:bg-slate-100 rounded-sm" />
                    </SheetClose>
                </div>

                {/* leads filter dropdown  */}
                <Select
                    value={selectedStatus}
                    onValueChange={setSelectedStatus}
                >
                    <SelectTrigger className="max-w-[232px] md:flex-grow">
                        <SelectValue placeholder="Lead">
                            {leadDrawerDropdownOptions.find(option => option.value === selectedStatus) && (
                                <StatusItem
                                    label={leadDrawerDropdownOptions.find(option => option.value === selectedStatus)!.label}
                                    icon={leadDrawerDropdownOptions.find(option => option.value === selectedStatus)!.icon}
                                    color={leadDrawerDropdownOptions.find(option => option.value === selectedStatus)!.color}
                                    fill={leadDrawerDropdownOptions.find(option => option.value === selectedStatus)!.fill}
                                />
                            )}
                        </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        {leadDrawerDropdownOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                <StatusItem
                                    label={option.label}
                                    icon={option.icon}
                                    color={option.color}
                                    fill={option.fill}
                                />
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                {/* lead details and activities tabs */}
                <Tabs defaultValue={defaultTab} className="mt-4">
                    <div className="border-b border-gray-500">
                        <TabsList className="w-fit grid grid-cols-2 mb-4">
                            <TabsTrigger value="leadDetails">Lead Details</TabsTrigger>
                            <TabsTrigger value="activities">Activities</TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="leadDetails" className="w-full">
                        <LeadDetailsTab />
                    </TabsContent>
                    <TabsContent value="activities" className="w-full">
                        <ActivitiesTab />
                    </TabsContent>
                </Tabs>
            </SheetContent>
        </Sheet>
    );
};

export default LeadTableDrawer;
