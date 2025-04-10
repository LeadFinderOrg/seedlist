import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Copy, Info } from "lucide-react";
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "./SettingsTab";

interface CustomTrackingProps {
    form: UseFormReturn<FormValues>;
}

const CustomTracking: React.FC<CustomTrackingProps> = ({
    form
}) => {
    const [copySuccess, setCopySuccess] = useState(false);

    const handleCopyClick = () => {
        navigator.clipboard.writeText("prox.itrackly.com");
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
    };

    return (
        <>
            <div className="bg-gray-50 rounded-xl mb-6">
                <div className="p-4">
                    <h3 className="text-slate-800 font-medium pb-1 border-b border-gray-300">
                        Custom Tracking Domain
                    </h3>

                    <div className="w-full mt-4">
                        <FormField
                            control={form.control}
                            name="customTracking.customTrackingDomain"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-center space-x-2 mb-4">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            id="useCustomDomain"
                                        />
                                    </FormControl>
                                    <FormLabel htmlFor="useCustomDomain" className="text-sm font-medium !mt-0">
                                        Use custom tracking domain
                                    </FormLabel>
                                </FormItem>
                            )}
                        />

                        <>
                            <h3 className="text-slate-800 font-medium pb-1 flex items-center gap-2">
                                Add a new CNAME record to your tracking domain or subdomain
                                <Info className="h-4 w-4 text-gray-500" />
                            </h3>

                            <div className="my-3 bg-gray-100 p-4 rounded-md">
                                <div className="grid grid-cols-1 gap-2">
                                    <h3 className="text-sm text-slate-500"><span className="text-slate-800 font-semibold">Record Type:</span> CNAME</h3>
                                    <h3 className="text-sm text-slate-500"><span className="text-slate-800 font-semibold">Host:</span> inst</h3>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-4">
                                            <h3 className="text-sm text-slate-500"><span className="text-slate-800 font-semibold">Value:</span> prox.itrackly.com</h3>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8"
                                                onClick={handleCopyClick}
                                                type="button"
                                            >
                                                <Copy className="h-4 w-4" />
                                            </Button>
                                            {copySuccess && <span className="text-xs text-green-600">Copied!</span>}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="customTracking.subDomain"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor="trackingDomain" className="text-sm text-gray-500 mb-2 block">
                                                Your tracking domain or subdomain:
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="trackingDomain"
                                                    {...field}
                                                    className="w-full bg-white h-9"
                                                    placeholder="e.g., track.yourdomain.com"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button variant="outline" className="w-fit" type="button">
                                    Check Status
                                </Button>

                                <div className="flex justify-end">
                                    <Button variant="link" className="text-blue-500 p-0" type="button">
                                        Need assistance?
                                    </Button>
                                </div>
                            </div>
                        </>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomTracking;