import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  ArrowDownWideNarrow,
  Ban,
  CircleAlert,
  Server,
  ListChecks,
  LucideIcon,
  Search,
  Zap
} from "lucide-react";
import React, { useState } from 'react';
import { StatusItem } from "./StatusItem";

interface StatusOption {
  value: string;
  label: string;
  icon: LucideIcon;
  color?: string;
  fill?: string;
};

interface SortOption {
  value: string;
  label: string;
};

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

  const statusOptions: StatusOption[] = [
    {
      value: 'all',
      label: 'All Statuses',
      icon: ListChecks,
      color: '#6b7280',
      fill: 'none'
    },
    {
      value: 'warmup-active',
      label: 'Warmup Active',
      icon: Zap,
      color: '#2184C6',
      fill: '#2184C6'
    },
    {
      value: 'warmup-paused',
      label: 'Warmup Paused',
      icon: Zap,
      color: '#6b7280',
      fill: 'none'
    },
    {
      value: 'no-custom-tracking',
      label: 'No Custom Tracking Domain',
      icon: Ban,
      color: '#e9a616',
      fill: 'none'
    },
    {
      value: 'has-errors',
      label: 'Has Errors',
      icon: CircleAlert,
      color: '#e96016',
      fill: 'none'
    }
  ];

  const sortOptions: SortOption[] = [
    { value: 'no-sorting', label: 'No Sorting' },
    { value: 'sort-by-newest', label: 'Sort by Newest' },
    { value: 'sort-by-oldest', label: 'Sort by Oldest' },
    { value: 'alphabetical', label: 'Alphabetical' },
    { value: 'reverse-alphabetical', label: 'Reverse Alphabetical' },
  ];

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
            <Server size={20} color="#6b7280" className="mr-2" />
            <span>Test Domain Setup</span>
          </Button>

          {/* All statuses select */}
          <Select
            value={selectedStatus}
            onValueChange={setSelectedStatus}
          >
            <SelectTrigger className="w-full md:flex-grow">
              <SelectValue placeholder="All Statuses">
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

          {/* Sort Select */}
          <Select
            value={selectedSort}
            onValueChange={setSelectedSort}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sort by">
                <div className="flex items-center space-x-2">
                  <ArrowDownWideNarrow size={20} color="#6b7280" />
                  <span className="truncate">
                    {sortOptions.find(option => option.value === selectedSort)?.label}
                  </span>
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
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