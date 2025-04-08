import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from "next/navigation";
import { Button } from '@/components/ui/button';
import { CirclePlus, LucideIcon, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { LeadStatusItem } from './LeadStatusItem';
import LeadTable from './LeadTable';
import { statsBarData, statusDropdownOptions } from '@/utils/constants/leadsTabData';
import StatsBar from '@/components/ui/StatsBar';

export interface StatusOptionTypes {
  value: string;
  label: string;
  icon: LucideIcon | null;
  color?: string;
  fill?: string;
};

export interface LeadTableDataTypes {
  id: string;
  email: string;
  emailProvider: string;
  status: string;
  contact: string;
  company: string;
  pauseUntil: string;
}

export default function LeadsTab() {
  const router = useRouter();
  const params = useParams();
  const campaignId = params.id;

  //states
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [data, setData] = useState<LeadTableDataTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  //navigate to add new lead page handler
  const handleAddNew = () => {
    router.push(`/dashboard/campaigns/${campaignId}/leads/new`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://67f4be1ecbef97f40d2f2dcf.mockapi.io/api/v1/leads"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="flex justify-between items-center">
        <Button variant="primary" size="lg" onClick={handleAddNew}>
          <CirclePlus className="text-xl" />
          Add new
        </Button>

        <div className="relative">
          <Input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 lg:w-[310px] w-full"
          />
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            size={20}
          />
        </div>
      </div>
      <div className="flex justify-between items-center mt-3">
        {/* stats bar */}
        <StatsBar stats={statsBarData} />

        {/* all status select */}
        <Select
          value={selectedStatus}
          onValueChange={setSelectedStatus}
        >
          <SelectTrigger className="lg:max-w-[310px] w-full md:flex-grow">
            <SelectValue placeholder="All Statuses">
              {statusDropdownOptions.find(option => option.value === selectedStatus) && (
                <LeadStatusItem
                  label={statusDropdownOptions.find(option => option.value === selectedStatus)!.label}
                  icon={statusDropdownOptions.find(option => option.value === selectedStatus)!.icon}
                  color={statusDropdownOptions.find(option => option.value === selectedStatus)!.color}
                  fill={statusDropdownOptions.find(option => option.value === selectedStatus)!.fill}
                />
              )}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {statusDropdownOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                <LeadStatusItem
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

      <div className="mt-4">
        <LeadTable data={data} loading={loading} />
      </div>
    </div>
  )
}
