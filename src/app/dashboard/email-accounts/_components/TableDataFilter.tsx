import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { SORT_OPTIONS, STATUS_OPTIONS } from "@/utils/constants/email-options";
import {
  ArrowDownWideNarrow,
  LucideIcon,
  Search,
  Server
} from "lucide-react";
import React, { useState } from 'react';
import { StatusItem } from "./StatusItem";


export interface StatusItemProps {
  label: string;
  icon: LucideIcon;
  color?: string;
  fill?: string;
};

const TableDataFilter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedSort, setSelectedSort] = useState<string>('no-sorting');

  return (
    <div className="w-full mt-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-3 w-full">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full"
            />
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={20}
            />
          </div>
        </div>

        <div className="hidden md:block md:col-span-2"></div>

        <div className="col-span-1 md:col-span-7 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3">
          <Button
            variant="outline"
            size="lg"
          >
            <Server size={20} className="mr-2 text-gray-500" />
            <span>Test Domain Setup</span>
          </Button>

          {/* All statuses select */}
          <Select
            value={selectedStatus}
            onValueChange={setSelectedStatus}
          >
            <SelectTrigger className="w-full md:flex-grow">
              <SelectValue placeholder="All Statuses">
                {STATUS_OPTIONS?.find(option => option.value === selectedStatus) && (
                  <StatusItem
                    label={STATUS_OPTIONS.find(option => option.value === selectedStatus)!.label}
                    icon={STATUS_OPTIONS.find(option => option.value === selectedStatus)!.icon}
                    color={STATUS_OPTIONS.find(option => option.value === selectedStatus)!.color}
                    fill={STATUS_OPTIONS.find(option => option.value === selectedStatus)!.fill}
                  />
                )}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {STATUS_OPTIONS?.map((option) => (
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

          {/* Sort Select */}
          <Select
            value={selectedSort}
            onValueChange={setSelectedSort}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sort by">
                <div className="flex items-center space-x-2">
                  <ArrowDownWideNarrow size={20} className="text-gray-500" />
                  <span className="truncate">
                    {SORT_OPTIONS?.find(option => option.value === selectedSort)?.label}
                  </span>
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {SORT_OPTIONS?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  <div className="flex items-center space-x-2">
                    <span>{option.label}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default TableDataFilter;