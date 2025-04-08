import React from "react";
import { LucideIcon, Plus, X, Zap } from "lucide-react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LeadTableData } from "./LeadsTab";
import LeadDetailsTab from "./LeadDetailsTab";
import ActivitiesTab from "./ActivitiesTab";
import { StatusItem } from "@/app/dashboard/email-accounts/_components/StatusItem";

interface LeadTableDrawerProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    selectedRow: LeadTableData | null;
    defaultTab?: string;
}

interface StatusOption {
    value: string;
    label: string;
    icon: LucideIcon;
    color?: string;
    fill?: string;
};

const statusOptions: StatusOption[] = [
    {
        value: 'lead',
        label: 'Lead',
        icon: Zap,
        color: '#6b7280',
        fill: 'none'
    },
    {
        value: 'interested',
        label: 'Interested',
        icon: Zap,
        color: '#22C55E',
        fill: '#22C55E'
    },
    {
        value: 'out-of-office',
        label: 'Out of Office',
        icon: Zap,
        color: '#F59E0B',
        fill: '#F59E0B'
    },
    {
        value: 'wrong-person',
        label: 'Wrong Person',
        icon: Zap,
        color: '#F97316',
        fill: '#F97316'
    },
    {
        value: 'not-interested',
        label: 'Not Interested',
        icon: Zap,
        color: '#EF4444',
        fill: '#EF4444'
    },
    {
        value: 'create-new',
        label: 'Create a new label',
        icon: Plus,
        color: '#2184C6',
        fill: '#2184C6'
    }
];

const LeadTableDrawer: React.FC<LeadTableDrawerProps> = ({
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

                <Select
                    value={selectedStatus}
                    onValueChange={setSelectedStatus}
                >
                    <SelectTrigger className="max-w-[232px] md:flex-grow">
                        <SelectValue placeholder="Lead">
                            {statusOptions.find(option => option.value === selectedStatus) && (
                                <StatusItem
                                    label={statusOptions.find(option => option.value === selectedStatus)!.label}
                                    icon={statusOptions.find(option => option.value === selectedStatus)!.icon}
                                    color={statusOptions.find(option => option.value === selectedStatus)!.color}
                                    fill={statusOptions.find(option => option.value === selectedStatus)!.fill}
                                />
                            )}
                        </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        {statusOptions.map((option) => (
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

                <Tabs defaultValue={defaultTab} className="mt-4">
                    <div className="border-b border-gray-500">
                        <TabsList className="w-fit grid grid-cols-2 mb-4">
                            <TabsTrigger value="leadDetails">Warmup</TabsTrigger>
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
