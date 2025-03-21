import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import WarmupEmailsChart from './WarmupEmailsChart';

const NavigationTabs = () => {
    return (
        <Tabs defaultValue="warmup">
            <TabsList className="w-80 grid grid-cols-3">
                <TabsTrigger value="warmup">Warmup</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
                <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            </TabsList>
            <TabsContent value="warmup" className="w-full">
                <WarmupEmailsChart />
            </TabsContent>
            <TabsContent value="settings" className="w-full">
                Settings
            </TabsContent>
            <TabsContent value="campaigns" className="w-full">
                Campaigns
            </TabsContent>
        </Tabs>

    );
};

export default NavigationTabs;