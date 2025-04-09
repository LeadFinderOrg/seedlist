import { Badge } from "@/components/ui/badge";
import { Campaign } from "./CampaignTable";


export default function StatusBadge({ status }: { status: Campaign["status"] }) {
    const styles = {
        Active: "bg-customBlue hover:bg-customBlue rounded-full",
        Completed: "bg-green-500 hover:bg-green-500 rounded-full",
        Paused: "bg-gray-400 hover:bg-gray-400 rounded-full",
    };
    return (
        <div><Badge className={styles[status]}>{status}</Badge></div>
    )
}
