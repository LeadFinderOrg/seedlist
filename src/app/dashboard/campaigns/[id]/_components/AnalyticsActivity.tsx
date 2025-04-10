import React, { useState } from "react";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FILTER_OPTIONS } from "@/utils/constants/analytics-activityData";

import AnalyticsActivityTable from "./AnalyticsActivityTable";
import { FilterItem } from "./FilterItem";

const AnalyticsActivity: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterData, setFilterData] = useState<string>("no-filter");

  return (
    <div className="mt-6 w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6">
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

        <div className="hidden md:block md:col-span-6"></div>

        <div className="col-span-1 md:col-span-3 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3">
          {/* All statuses select */}
          <Select value={filterData} onValueChange={setFilterData}>
            <SelectTrigger className="w-full md:flex-grow">
              <SelectValue placeholder="All Statuses">
                {FILTER_OPTIONS?.find(
                  (option) => option.value === filterData
                ) && (
                  <FilterItem
                    label={
                      FILTER_OPTIONS.find(
                        (option) => option.value === filterData
                      )!.label
                    }
                    icon={
                      FILTER_OPTIONS.find(
                        (option) => option.value === filterData
                      )!.icon
                    }
                    color={
                      FILTER_OPTIONS.find(
                        (option) => option.value === filterData
                      )!.color
                    }
                    fill={
                      FILTER_OPTIONS.find(
                        (option) => option.value === filterData
                      )!.fill
                    }
                  />
                )}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {FILTER_OPTIONS?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  <FilterItem
                    label={option.label}
                    icon={option.icon}
                    color={option.color}
                    fill={option.fill}
                  />
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <AnalyticsActivityTable />
    </div>
  );
};

export default AnalyticsActivity;
