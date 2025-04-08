import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Info } from "lucide-react";

export default function CampaignSettings() {
    return (
        <>
            <div className="bg-gray-50 rounded-xl mb-6 mt-4">
                <div className="p-4">
                    <h3 className="text-slate-800 font-medium pb-1 border-b border-gray-300">
                        Campaign Settings
                    </h3>

                    <section className="w-full mb-3">
                        <div className="grid grid-cols-2 gap-6 mt-4">
                            <div className="space-y-1">
                                <Label htmlFor="daily-campaign-limit" className="text-base font-medium text-slate-800">Daily Campaign Limit</Label>
                                <div className="text-xs text-slate-800">Daily sending limit</div>
                                <Input
                                    id="daily-campaign-limit"
                                    type="number"
                                    defaultValue="25"
                                    className="h-9"
                                />
                            </div>

                            <div className="space-y-1">
                                <Label htmlFor="minimum-wait-time" className="text-base font-medium text-slate-800">Minimum wait time</Label>
                                <div className="text-xs text-slate-800">When used with multiple campaigns</div>
                                <Input
                                    id="minimum-wait-time"
                                    type="number"
                                    defaultValue="8"
                                    className="h-9"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="campaign-slow-ramp" className="text-base font-medium text-slate-800 flex items-center gap-2">Campaign Slow Ramp<Info size={18} color="#475569" strokeWidth={1} /></Label>
                                <div className="text-xs text-slate-800">Gradually increase the number of campaign emails sent per day</div>
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-3">
                                        <Switch id="enable-toggle" />
                                        <Label htmlFor="enable-toggle" className="text-sm font-medium">Enable</Label>
                                    </div>
                                    <Badge variant="primaryBlue">Recommended</Badge>
                                </div>
                            </div>


                            <div className="space-y-1">
                                <Label htmlFor="reply-to-address" className="text-base font-medium text-slate-800">Reply-to Address</Label>
                                <div className="text-xs text-slate-800">Set a reply-to email address (optional)</div>
                                <Input
                                    id="reply-to-address"
                                    type="email"
                                    placeholder="Enter email"
                                    className="h-9"
                                />
                            </div>

                            <div className="space-y-1">
                                <Label htmlFor="daily-inbox-placement" className="text-base font-medium text-slate-800">Daily Inbox Placement test limit</Label>
                                <div className="text-xs text-slate-800">maximum number of inbox placement tests per day</div>
                                <Input
                                    id="daily-inbox-placement"
                                    type="number"
                                    defaultValue="10"
                                    className="h-9"
                                />
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
