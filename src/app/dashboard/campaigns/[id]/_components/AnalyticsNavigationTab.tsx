import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import AnalyticsActivity from "./AnalyticsActivity";
import StepAnalytics from "./StepAnalytics";

interface TabItemTypes {
  value: string;
  label: string;
}

const tabItems: TabItemTypes[] = [
  { value: "step-analytics", label: "Step Analytics" },
  { value: "activity", label: "Activity" },
];

export default function AnalyticsNavigationTab() {
  return (
    <Tabs defaultValue="step-analytics">
      <div className="flex items-center justify-between pb-2 border-b-2 border-gray-100 relative">
        <TabsList className="w-[250px] grid grid-cols-2">
          {tabItems.map(({ value, label }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="relative data-[state=active]:before:content-[''] data-[state=active]:before:absolute data-[state=active]:before:h-[2px] data-[state=active]:before:w-full data-[state=active]:before:bg-[#3B82F6] data-[state=active]:before:bottom-[-13.75px]"
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {tabItems.map(({ value }) => (
        <TabsContent key={value} value={value}>
          {value === "step-analytics" && <StepAnalytics />}
          {value === "activity" && <AnalyticsActivity />}
        </TabsContent>
      ))}
    </Tabs>
  );
}
