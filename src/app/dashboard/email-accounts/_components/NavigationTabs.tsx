import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import DomainAuthentication from "./DomainAuthentication";
import HealthScoreChart from "./HealthScoreChart";
import WarmupEmailsChart from "./WarmupEmailsChart";
import EmailWarmupStats from "./EmailWarmupStats";
import CampaignsTab from "./CampaignsTab";

const NavigationTabs = () => {
  return (
    <Tabs defaultValue="warmup">
      <div className="w-full border-b border-gray-500">
        <TabsList className="w-80 grid grid-cols-3 mb-4">
          <TabsTrigger value="warmup">Warmup</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="warmup" className="w-full">
        <EmailWarmupStats />
        <DomainAuthentication />
        <WarmupEmailsChart />
        <HealthScoreChart />
      </TabsContent>
      <TabsContent value="settings" className="w-full">
        Settings
      </TabsContent>
      <TabsContent value="campaigns" className="w-full">
        <CampaignsTab />
      </TabsContent>
    </Tabs>
  );
};

export default NavigationTabs;
