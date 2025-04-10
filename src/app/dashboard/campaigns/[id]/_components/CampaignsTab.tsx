import { DownloadIcon, PauseIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import AnalyticsTab from "./AnalyticsTab";
import OptionsTab from "./OptionsTab";
import ScheduleTab from "./ScheduleTab";
import LeadsTab from "./Leads/LeadsTab";
import SequencesTab from "./Sequences/SequencesTab";

interface TabItemTypes {
  value: string;
  label: string;
}

const tabItems: TabItemTypes[] = [
  { value: "analytics", label: "Analytics" },
  { value: "leads", label: "Leads" },
  { value: "sequences", label: "Sequences" },
  { value: "schedule", label: "Schedule" },
  { value: "options", label: "Options" },
];

export default function CampaignsTab() {
  return (
    <Tabs defaultValue="analytics">
      <div className="my-6 flex items-center justify-between pb-2 border-b-2 border-gray-100 relative">
        <TabsList className="w-[500px] grid grid-cols-5">
          {tabItems.map(({ value, label }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="relative data-[state=active]:before:content-[''] data-[state=active]:before:absolute data-[state=active]:before:h-[2px] data-[state=active]:before:w-full data-[state=active]:before:bg-blue-500 data-[state=active]:before:bottom-[-13.75px]"
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex items-center gap-2 border rounded"
          >
            <PauseIcon size={16} />
            <span>Pause Campaign</span>
          </Button>
          <Button
            variant="outline"
            className="w-10 flex items-center justify-center"
          >
            <DownloadIcon size={16} />
          </Button>
        </div>
      </div>

      {tabItems.map(({ value }) => (
        <TabsContent key={value} value={value}>
          {value === "analytics" && <AnalyticsTab />}
          {value === "leads" && <LeadsTab />}
          {value === "sequences" && <SequencesTab />}
          {value === "schedule" && <ScheduleTab />}
          {value === "options" && <OptionsTab />}
        </TabsContent>
      ))}
    </Tabs>
  );
}
