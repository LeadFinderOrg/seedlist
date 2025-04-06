import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import CampaignsTab from "./CampaignsTab";
import DomainAuthentication from "./DomainAuthentication";
import EmailWarmupStats from "./EmailWarmupStats";
import HealthScoreChart from "./HealthScoreChart";
import WarmupEmailsChart from "./WarmupEmailsChart";
import { EmailTableData } from "./EmailAccountsRoot";

interface NavigationTabsProps {
  defaultTab?: string;
  selectedRow: EmailTableData | null;
}


const NavigationTabs: React.FC<NavigationTabsProps> = ({
  defaultTab = "warmup",
  selectedRow,
}) => {
  return (
    <>
      <Tabs defaultValue={defaultTab}>
        <div className="w-full border-b border-gray-500">
          <TabsList className="w-80 grid grid-cols-3 mb-4">
            <TabsTrigger value="warmup">Warmup</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="warmup" className="w-full">
          <EmailWarmupStats selectedRow={selectedRow} />
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
    </>
  );
};

export default NavigationTabs;
