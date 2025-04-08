import { Badge } from "@/components/ui/badge";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Info } from "lucide-react";
interface CampaignSettingsProps {
    form: any
}

const CampaignSettings: React.FC<CampaignSettingsProps> = ({
    form
}) => {
  return (
    <>
      <div className="bg-gray-50 rounded-xl mb-6 mt-4">
        <div className="p-4">
          <h3 className="text-slate-800 font-medium pb-1 border-b border-gray-300">
            Campaign Settings
          </h3>

          <section className="w-full mb-3">
            <div className="grid grid-cols-2 gap-6 mt-4">
              <FormField
                control={form.control}
                name="campaignSettings.dailyCampaignLimit"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel htmlFor="daily-campaign-limit" className="text-base font-medium text-slate-800">
                      Daily Campaign Limit
                    </FormLabel>
                    <FormDescription className="text-xs text-slate-800">
                      Daily sending limit
                    </FormDescription>
                    <FormControl>
                      <Input
                        id="daily-campaign-limit"
                        type="number"
                        className="h-9"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="campaignSettings.minimumWaitTime"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel htmlFor="minimum-wait-time" className="text-base font-medium text-slate-800">
                      Minimum wait time
                    </FormLabel>
                    <FormDescription className="text-xs text-slate-800">
                      When used with multiple campaigns
                    </FormDescription>
                    <FormControl>
                      <Input
                        id="minimum-wait-time"
                        type="number"
                        className="h-9"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="campaignSettings.campaignSlowRamp"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel htmlFor="campaign-slow-ramp" className="text-base font-medium text-slate-800 flex items-center gap-2">
                      Campaign Slow Ramp<Info size={18} color="#475569" strokeWidth={1} />
                    </FormLabel>
                    <FormDescription className="text-xs text-slate-800">
                      Gradually increase the number of campaign emails sent per day
                    </FormDescription>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-3">
                        <FormControl>
                          <Switch 
                            id="enable-toggle"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel htmlFor="enable-toggle" className="text-sm font-medium">Enable</FormLabel>
                      </div>
                      <Badge variant="primaryBlue">Recommended</Badge>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="campaignSettings.replyToAddress"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel htmlFor="reply-to-address" className="text-base font-medium text-slate-800">
                      Reply-to Address
                    </FormLabel>
                    <FormDescription className="text-xs text-slate-800">
                      Set a reply-to email address (optional)
                    </FormDescription>
                    <FormControl>
                      <Input
                        id="reply-to-address"
                        type="email"
                        placeholder="Enter email"
                        className="h-9"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="campaignSettings.dailyInboxPlacementLimit"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel htmlFor="daily-inbox-placement" className="text-base font-medium text-slate-800">
                      Daily Inbox Placement test limit
                    </FormLabel>
                    <FormDescription className="text-xs text-slate-800">
                      Maximum number of inbox placement tests per day
                    </FormDescription>
                    <FormControl>
                      <Input
                        id="daily-inbox-placement"
                        type="number"
                        className="h-9"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default CampaignSettings;