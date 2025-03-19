import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const NavigationTabs = () => {
    return (
        <Tabs defaultValue="Warmup" className="w-80">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="Warmup">Warmup</TabsTrigger>
                <TabsTrigger value="Settings">Settings</TabsTrigger>
                <TabsTrigger value="Campaigns">Campaigns</TabsTrigger>
            </TabsList>
            <TabsContent value="Warmup">
                Warmup
            </TabsContent>
            <TabsContent value="Settings">
                Settings
            </TabsContent>
            <TabsContent value="Campaigns">
                Campaigns
            </TabsContent>
        </Tabs>
    );
};

export default NavigationTabs;