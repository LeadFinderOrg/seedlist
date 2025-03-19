import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const NavigationTabs = () => {
    return (
        <Tabs defaultValue="warmup" className="w-80">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="warmup">Warmup</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
                <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            </TabsList>
            <TabsContent value="warmup">
                Warmup
            </TabsContent>
            <TabsContent value="settings">
                Settings
            </TabsContent>
            <TabsContent value="campaigns">
                Campaigns
            </TabsContent>
        </Tabs>
    );
};

export default NavigationTabs;