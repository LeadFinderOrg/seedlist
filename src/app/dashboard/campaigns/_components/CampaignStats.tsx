import { Mail, Send, Share2, User } from "lucide-react";
import { Campaign } from "./CampaignTable";

export default function CampaignStats({ stats }: { stats: Campaign["stats"] }) {
    return (
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 w-20">
                <User className="h-4 w-4 text-gray-500" />
                <span>{stats.users}</span>
            </div>
            <div className="flex items-center gap-2 w-20">
                <Send className="h-4 w-4 text-gray-500" />
                <span>{stats.sent}</span>
            </div>
            <div className="flex items-center gap-2 w-20">
                <Mail className="h-4 w-4 text-gray-500" />
                <span>{stats.emails}</span>
            </div>
            <div className="flex items-center gap-2 w-20">
                <Share2 className="h-4 w-4 text-gray-500" />
                <span>{stats.shares}</span>
            </div>
        </div>
    )
}
