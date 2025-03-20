import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DownloadIcon, PauseIcon } from 'lucide-react'

export default function CampaignsTab() {
    return (
        <div className='mt-6 flex items-center justify-between'>
            <div>
                <Tabs defaultValue="analytics" className="w-[500px]">
                    <TabsList className="grid w-full grid-cols-5">
                        <TabsTrigger value="analytics">Analytics</TabsTrigger>
                        <TabsTrigger value="leads">Leads</TabsTrigger>
                        <TabsTrigger value="sequences">Sequences</TabsTrigger>
                        <TabsTrigger value="schedule">Schedule</TabsTrigger>
                        <TabsTrigger value="options">Options</TabsTrigger>
                    </TabsList>

                    <TabsContent value="analytics">
                        Analytics
                    </TabsContent>
                    <TabsContent value="leads">
                        Leads
                    </TabsContent>
                    <TabsContent value="sequences">
                        Sequences
                    </TabsContent>
                    <TabsContent value="schedule">
                        Schedule
                    </TabsContent>
                    <TabsContent value="options">
                        Options
                    </TabsContent>
                </Tabs>
            </div>
            <div>
                <div className="flex gap-2">
                    <Button variant="outline" className="flex items-center gap-2 border rounded">
                        <PauseIcon size={16} />
                        <span>Pause Campaign</span>
                    </Button>
                    <Button variant="outline" className="w-10 flex items-center justify-center">
                        <DownloadIcon size={16} />
                    </Button>
                </div>
            </div>
        </div>
    )
}
