

import { Button } from "@/components/ui/button";
import AdvanceWarmup from "./AdvanceWarmup";
import BasicWarmup from "./BasicWarmup";
import CustomTracking from "./CustomTracking";
import SenderName from "./SenderName";
import CampaignSettings from "./CampaignSettings";

export default function SettingsTab() {

    return (
        <div>
            <SenderName />

            <CampaignSettings />

            <CustomTracking />

            <BasicWarmup />

            <AdvanceWarmup />

            {/* Button */}
            <div className="w-full bg-gray-100 p-4 flex gap-4 fixed bottom-0 ml-[-24px]">
                <Button variant="primary" onClick={() => console.log("Save clicked")}>
                    Save
                </Button>
                <Button onClick={() => console.log("Cancel clicked")}>Cancel</Button>
            </div>
        </div>
    );
}
