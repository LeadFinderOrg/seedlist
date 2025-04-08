import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { HelpCircle, Info, RotateCcw } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "./SettingsTab";

interface BasicWarmupProps {
    form: UseFormReturn<FormValues>;
}

const BasicWarmup: React.FC<BasicWarmupProps> = ({
    form
}) => {

    return (
        <>
        <div className="bg-gray-50 rounded-xl mb-6 mt-4">
          <div className="p-4">
            <h3 className="text-slate-800 font-medium pb-1 border-b border-gray-300">
              Warmup Settings Basic
            </h3>
  
            <h3 className="text-slate-800 font-medium flex items-center gap-2 mt-5">
              Warmup filter tag <Info size={18} color="#475569" strokeWidth={1} />
            </h3>
  
            <section className="w-full mb-3">
              <div className="flex justify-between items-center mb-4">
                <FormField
                  control={form.control}
                  name="basicWarmup.customTag"
                  render={({ field }) => (
                    <FormItem className="space-y-1 mt-3 w-full">
                      <FormControl>
                        <div className="relative">
                          <Input
                            id="custom-tag"
                            placeholder="Custom tag"
                            className="h-9 w-full bg-white"
                            {...field}
                          />
                          <button 
                            type="button"
                            className="absolute right-2 top-[18px] transform -translate-y-1/2"
                            onClick={() => form.setValue("basicWarmup.customTag", "1TDJK90")}
                          >
                            <RotateCcw className="h-4 w-4" />
                          </button>
                        </div>
                      </FormControl>
                      <FormDescription className="text-xs text-slate-800 mt-2">
                        Default: 1TDJK90
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
  
              <div className="grid grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="basicWarmup.increasePerDay"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel htmlFor="increase-per-day" className="text-base font-medium text-slate-800">
                        Increase per day
                      </FormLabel>
                      <FormDescription className="text-xs text-slate-800">
                        Suggested 1
                      </FormDescription>
                      <FormControl>
                        <Input
                          id="increase-per-day"
                          type="number"
                          className="h-9 bg-white"
                          {...field}
                          onChange={(e) => field.onChange(Number(e.target.value))}
                        />
                      </FormControl>
                      <FormMessage />
  
                      <div className="mt-2 flex items-center gap-2">
                        <FormField
                          control={form.control}
                          name="basicWarmup.disableSlowWarmup"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center space-x-2">
                              <FormControl>
                                <Checkbox 
                                  id="disable-slow-warmup mt-2" 
                                  className="h-4 w-4"
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <FormLabel htmlFor="disable-slow-warmup" className="text-sm font-medium text-slate-800 !mt-0">
                                Disable slow warmup
                              </FormLabel>
                              <Tooltip>
                                <TooltipTrigger>
                                  <HelpCircle className="h-4 w-4 text-gray-400" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="text-xs">Provides information about disabling slow warmup</p>
                                </TooltipContent>
                              </Tooltip>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </FormItem>
                  )}
                />
  
                <FormField
                  control={form.control}
                  name="basicWarmup.dailyWarmupLimit"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel htmlFor="daily-warmup" className="text-base font-medium text-slate-800">
                        Daily warmup limit
                      </FormLabel>
                      <FormDescription className="text-xs text-slate-800">
                        Suggested 10
                      </FormDescription>
                      <FormControl>
                        <Input
                          id="daily-warmup"
                          type="number"
                          className="h-9 bg-white"
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
                  name="basicWarmup.replyRate"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel htmlFor="reply-rate" className="text-base font-medium text-slate-800">
                        Reply rate %
                      </FormLabel>
                      <FormDescription className="text-xs text-slate-800">
                        Suggested 30
                      </FormDescription>
                      <FormControl>
                        <Input
                          id="reply-rate"
                          type="number"
                          className="h-9 bg-white"
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
    )
};
export default BasicWarmup;
