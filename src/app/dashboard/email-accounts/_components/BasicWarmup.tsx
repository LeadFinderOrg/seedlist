import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { HelpCircle, Info, RotateCcw } from "lucide-react";

export default function BasicWarmup() {

    return (
        <>
            <div className="bg-gray-50 rounded-xl mb-6 mt-4">
                <div className="p-4">
                    <h3 className="text-slate-800 font-medium pb-1 border-b border-gray-300">
                        Warmup Settings Basic
                    </h3>

                    <h3 className="text-slate-800 font-medium flex items-center gap-2 mt-5">
                        Warmup filter tag   <Info size={18} color="#475569" strokeWidth={1} />
                    </h3>

                    <section className="w-full mb-3">
                        <div className="flex justify-between items-center mb-4">
                            <div className="space-y-1 mt-3">
                                <div className="relative">
                                    <Input
                                        id="custom-tag"
                                        placeholder="Custom tag"
                                        className="h-9 w-full"
                                    />
                                    <button className="absolute right-2 top-[18px] transform -translate-y-1/2">
                                        <RotateCcw className="h-4 w-4" />
                                    </button>
                                    <div className="text-xs text-slate-800 mt-2">Default: 1TDJK90</div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <Label htmlFor="increase-per-day" className="text-base font-medium text-slate-800">Increase per day</Label>
                                <div className="text-xs text-slate-800">Suggested 1</div>
                                <Input
                                    id="increase-per-day"
                                    type="number"
                                    defaultValue="1"
                                    className="h-9"
                                />

                                <div className="mt-2 flex items-center gap-2">
                                    <Checkbox id="disable-slow-warmup" className="h-4 w-4" />
                                    <Label htmlFor="disable-slow-warmup" className="text-sm font-medium text-slate-800">Disable slow warmup</Label>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <HelpCircle className="h-4 w-4 text-gray-400" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className="text-xs">Provides information about disabling slow warmup</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <Label htmlFor="daily-warmup" className="text-base font-medium text-slate-800">Daily warmup limit</Label>
                                <div className="text-xs text-slate-800">Suggested 10</div>
                                <Input
                                    id="daily-warmup"
                                    type="number"
                                    defaultValue="10"
                                    className="h-9"
                                />
                            </div>

                            <div className="space-y-1">
                                <Label htmlFor="reply-rate" className="text-base font-medium text-slate-800">Reply rate %</Label>
                                <div className="text-xs text-slate-800">Suggested 30</div>
                                <Input
                                    id="reply-rate"
                                    type="number"
                                    defaultValue="40"
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
