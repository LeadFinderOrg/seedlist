import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import AdvanceWarmup from "./AdvanceWarmup";
import BasicWarmup from "./BasicWarmup";
import CampaignSettings from "./CampaignSettings";
import CustomTracking from "./CustomTracking";
import SenderName from "./SenderName";

const formSchema = z.object({
    senderName: z.object({
        firstName: z.string().min(1, "First name is required"),
        lastName: z.string().min(1, "Last name is required"),
        tags: z.string().optional(),
    }),
    campaignSettings: z.object({
        dailyCampaignLimit: z.number().min(1, "Must be at least 1").max(100, "Cannot exceed 100"),
        minimumWaitTime: z.number().min(1, "Must be at least 1"),
        campaignSlowRamp: z.boolean().default(true),
        replyToAddress: z.string().email("Invalid email address").optional().or(z.literal("")),
        dailyInboxPlacementLimit: z.number().min(1, "Must be at least 1").max(50, "Cannot exceed 50"),
    }),
    basicWarmup: z.object({
        customTag: z.string().optional(),
        increasePerDay: z.number().min(1, "Must be at least 1"),
        disableSlowWarmup: z.boolean().default(false),
        dailyWarmupLimit: z.number().min(1, "Must be at least 1").max(100, "Cannot exceed 100"),
        replyRate: z.number().min(0, "Must be at least 0").max(100, "Cannot exceed 100%"),
    }),
    advancedWarmup: z.object({
        weekdaysOnly: z.boolean().default(false),
        readEmulation: z.boolean().default(false),
        warmCustomTrackingDomain: z.boolean().default(false),
        openRate: z.number().min(0, "Must be at least 0").max(100, "Cannot exceed 100%"),
        spamProtection: z.number().min(0, "Must be at least 0").max(100, "Cannot exceed 100%"),
        markImportant: z.number().min(0, "Must be at least 0").max(100, "Cannot exceed 100%"),
    }),
    customTracking: z.object({
        customTrackingDomain: z.boolean().default(false),
        subDomain: z.string().optional(),
    }),
});


export type FormValues = z.infer<typeof formSchema>;

export default function SettingsTab() {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            senderName: {
                firstName: "",
                lastName: "",
                tags: "",
            },
            campaignSettings: {
                dailyCampaignLimit: 25,
                minimumWaitTime: 8,
                campaignSlowRamp: true,
                replyToAddress: "",
                dailyInboxPlacementLimit: 10,
            },
            basicWarmup: {
                customTag: "1TDJK90",
                increasePerDay: 1,
                disableSlowWarmup: false,
                dailyWarmupLimit: 10,
                replyRate: 40,
            },
            advancedWarmup: {
                weekdaysOnly: false,
                readEmulation: false,
                warmCustomTrackingDomain: false,
                openRate: 100,
                spamProtection: 100,
                markImportant: 100,
            },
            customTracking: {
                customTrackingDomain:false,
                subDomain:"",
            },
        },
    });

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);
        console.log("Form submitted with data:", data);
        setIsSubmitting(false);

    };

    const handleCancel = () => {
        form.reset();
        console.log("Form reset to default values.");
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div>
                    <SenderName form={form} />
                    <CampaignSettings form={form} />
                    <CustomTracking form={form} />
                    <BasicWarmup form={form} />
                    <AdvanceWarmup form={form} />

                    {/* Button */}
                    <div className="w-full bg-gray-100 p-4 flex gap-4 fixed bottom-0 ml-[-24px]">
                        <Button
                            type="submit"
                            className="bg-[#2184C6] hover:bg-[#2184C6]/90"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Saving..." : "Save"}
                        </Button>
                        <Button
                            type="button"
                            onClick={handleCancel}
                            disabled={isSubmitting}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    );
}