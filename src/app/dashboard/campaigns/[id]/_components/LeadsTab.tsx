import React, { useState } from 'react'
import { useParams, useRouter } from "next/navigation";
import { Button } from '@/components/ui/button';
import { CirclePlus, ListChecks, LucideIcon, Search, CircleCheck, MailOpen, Reply, UserCheck, Users } from 'lucide-react';
import { Input } from '@/components/ui/input';
import LeadStatsBar from './LeadStatsBar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { LeadStatusItem } from './LeadStatusItem';

interface StatusOption {
  value: string;
  label: string;
  icon: LucideIcon | null;
  color?: string;
  fill?: string;
};

export interface LeadStatusItemProps {
  label: string;
  icon: LucideIcon | null;
  color?: string;
  fill?: string;
};

const StatsBarItem = [
  {
      title: 'Leads Created',
      number: 3428,
      icon: Users,
      color: '#2563EB',
  },
  {
      title: 'Leads Contacted',
      number: 3428,
      icon: UserCheck,
      color: '#9333EA',
  },
  {
      title: 'Leads Opened',
      number: 0,
      icon: MailOpen,
      color: '#EA580C',
  },
  {
      title: 'Leads Replied',
      number: 24,
      icon: Reply,
      color: '#DB2777',
  },
  {
      title: 'Completed Leads',
      number: 2985,
      icon: CircleCheck,
      color: '#16A34A'
  }
]

export default function LeadsTab() {
  const router = useRouter();
  const params = useParams();
  const campaignId = params.id;

  //states
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const statusOptions: StatusOption[] = [
    {
      value: 'all',
      label: 'All Statuses',
      icon: ListChecks,
      color: '#6b7280',
      fill: 'none'
    },
    {
      value: 'reply-received',
      label: 'Reply Received',
      icon: null,
      color: '#2184C6',
      fill: '#2184C6'
    },
    {
      value: 'link-clicked',
      label: 'Link Clicked',
      icon: null,
      color: '#6b7280',
      fill: 'none'
    },
    {
      value: 'completed-no-reply',
      label: 'Completed, No Reply',
      icon: null,
      color: '#e9a616',
      fill: 'none'
    },
    {
      value: 'email-opened-no-reply',
      label: 'Email Opened, No Reply',
      icon: null,
      color: '#e96016',
      fill: 'none'
    },
    {
      value: 'no-emails-opened',
      label: 'No Emails Opened',
      icon: null,
      color: '#e96016',
      fill: 'none'
    }
  ];

  //navigate to add new lead page handler
  const handleAddNew = () => {
    router.push(`/dashboard/campaigns/${campaignId}/leads/new`);
  };
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
        <LeadStatsBar stats={StatsBarItem} />

        {/* all status select */}
        <Select
          value={selectedStatus}
          onValueChange={setSelectedStatus}
        >
          <SelectTrigger className="lg:max-w-[310px] w-full md:flex-grow">
            <SelectValue placeholder="All Statuses">
              {statusOptions.find(option => option.value === selectedStatus) && (
                <LeadStatusItem
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
    </div>
  )
}
