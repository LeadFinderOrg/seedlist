import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
  
  interface AdvanceWarmupProps {
    form: any
}

const AdvanceWarmup: React.FC<AdvanceWarmupProps> = ({
    form
}) => {
    return (
      <>
        <div className="bg-gray-50 rounded-xl mb-16 mt-4">
          <div className="p-4">
            <h3 className="text-slate-800 font-medium pb-1 border-b border-gray-300">
              Warmup Settings Advanced
            </h3>
  
            <FormField
              control={form.control}
              name="advancedWarmup.weekdaysOnly"
              render={({ field }) => (
                <FormItem className="my-6">
                  <div className="flex justify-between gap-4">
                    <div>
                      <FormLabel htmlFor="weekdays-only" className="text-slate-800 font-medium">
                        Weekends Only
                      </FormLabel>
                      <p className="text-slate-600 text-sm min-w-40 mt-1">
                        Only send warmup emails on weekdays for a more natural sending pattern.
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FormControl>
                        <Switch 
                          id="weekdays-only"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <Label htmlFor="weekdays-only" className="text-sm font-medium">Enable</Label>
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
  
            <FormField
              control={form.control}
              name="advancedWarmup.readEmulation"
              render={({ field }) => (
                <FormItem className="my-6">
                  <div className="flex justify-between gap-4">
                    <div>
                      <FormLabel htmlFor="read-emulation" className="text-slate-800 font-medium">
                        Read emulation
                      </FormLabel>
                      <p className="text-slate-600 text-sm min-w-40 mt-1">
                        Spend time and scroll though your warmup to emulate human-like reading.
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FormControl>
                        <Switch 
                          id="read-emulation"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <Label htmlFor="read-emulation" className="text-sm font-medium">Enable</Label>
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
  
            <FormField
              control={form.control}
              name="advancedWarmup.warmCustomTrackingDomain"
              render={({ field }) => (
                <FormItem className="my-6">
                  <div className="flex justify-between gap-4">
                    <div>
                      <FormLabel htmlFor="warm-custom-tracking-domain" className="text-slate-800 font-medium">
                        Warm custom tracking domain
                      </FormLabel>
                      <p className="text-slate-600 text-sm min-w-40 mt-1">
                        Including your custom tracking domain in your warmup emails to improve deliverability.
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FormControl>
                        <Switch 
                          id="warm-custom-tracking-domain"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <Label htmlFor="warm-custom-tracking-domain" className="text-sm font-medium">Enable</Label>
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
  
            <FormField
              control={form.control}
              name="advancedWarmup.openRate"
              render={({ field }) => (
                <FormItem className="my-6">
                  <div className="flex justify-between gap-4">
                    <div>
                      <FormLabel htmlFor="open-rate" className="text-slate-800 font-medium">
                        Open Rate
                      </FormLabel>
                      <p className="text-slate-600 text-sm min-w-40 mt-1">
                        How many of your warm up emails should be opened?
                      </p>
                    </div>
                    <FormControl>
                      <Slider
                        id="open-rate"
                        max={100}
                        min={0}
                        step={1}
                        className="w-2/5"
                        value={[field.value]}
                        onValueChange={([value]) => field.onChange(value)}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
  
            <FormField
              control={form.control}
              name="advancedWarmup.spamProtection"
              render={({ field }) => (
                <FormItem className="my-6">
                  <div className="flex justify-between gap-4">
                    <div>
                      <FormLabel htmlFor="spam-protection" className="text-slate-800 font-medium">
                        Spam Protection
                      </FormLabel>
                      <p className="text-slate-600 text-sm min-w-40 mt-1">
                        How many of your warm up emails to save from spam folder?
                      </p>
                    </div>
                    <FormControl>
                      <Slider
                        id="spam-protection"
                        max={100}
                        min={0}
                        step={1}
                        className="w-2/5"
                        value={[field.value]}
                        onValueChange={([value]) => field.onChange(value)}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
  
            <FormField
              control={form.control}
              name="advancedWarmup.markImportant"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <div className="flex justify-between gap-4">
                    <div>
                      <FormLabel htmlFor="mark-important" className="text-slate-800 font-medium">
                        Mark Important
                      </FormLabel>
                      <p className="text-slate-600 text-sm min-w-40 mt-1">
                        How many of your warm up emails to mark as important?
                      </p>
                    </div>
                    <FormControl>
                      <Slider
                        id="mark-important"
                        max={100}
                        min={0}
                        step={1}
                        className="w-2/5"
                        value={[field.value]}
                        onValueChange={([value]) => field.onChange(value)}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </>
    );
  };

  export default AdvanceWarmup;