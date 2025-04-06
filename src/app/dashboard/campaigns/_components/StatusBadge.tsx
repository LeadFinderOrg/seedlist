import { Badge } from "@/components/ui/badge";
import { Campaign } from "./CampaignTable";


export default function StatusBadge({ status }: { status: Campaign["status"] }) {
    const styles = {
        Active: "bg-blue-500 hover:bg-blue-600",
        Completed: "bg-green-500 hover:bg-green-600",
        Paused: "bg-gray-500 hover:bg-gray-600",
    };
    return (
        <div><Badge className={styles[status]}>{status}</Badge></div>
    )
}
