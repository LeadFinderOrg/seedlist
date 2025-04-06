import { DownloadIcon, PauseIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CampaignsTab() {
  return (
    <Tabs defaultValue="analytics">
      <div className="mt-6 flex items-center justify-between">
        <TabsList className="w-[500px] grid grid-cols-5">
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="leads">Leads</TabsTrigger>
          <TabsTrigger value="sequences">Sequences</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="options">Options</TabsTrigger>
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
      <TabsContent value="analytics">
        Analytics erum officia voluptate vero, sapiente exercitationem.
      </TabsContent>
      <TabsContent value="leads">Leads</TabsContent>
      <TabsContent value="sequences">Sequences</TabsContent>
      <TabsContent value="schedule">Schedule</TabsContent>
      <TabsContent value="options">Options</TabsContent>
    </Tabs>
  );
}
