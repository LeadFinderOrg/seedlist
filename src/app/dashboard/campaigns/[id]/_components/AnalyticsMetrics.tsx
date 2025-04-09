import {
  Lightbulb,
  Mail,
  MousePointer,
  RefreshCw,
  Reply,
  User,
} from "lucide-react";

import { MetricCard } from "./MetricCard";

export default function AnalyticsMetrics() {
  return (
    <div className="md:w-1/3 w-full border border-gray-300 rounded-lg grid grid-cols-2 p-2">
      <div className="border-b border-r">
        <MetricCard
          icon={<User className="w-8 h-8 text-gray-800" />}
          title="Leads Contacted"
          value={4355}
          hasInfoIcon={true}
        />
      </div>

      <div className="border-b">
        <MetricCard
          icon={<Mail className="w-8 h-8 text-gray-800" />}
          title="Open Rate"
          value="1.72%"
          subValue="32 total"
          hasInfoIcon={true}
        />
      </div>

      <div className="border-b border-r">
        <MetricCard
          icon={<MousePointer className="w-8 h-8 text-gray-800" />}
          title="Click Rate"
          value="Disabled"
          hasInfoIcon={true}
          disabled={true}
        />
      </div>

      <div className="border-b">
        <MetricCard
          icon={<RefreshCw className="w-8 h-8 text-gray-800" />}
          title="Bounce Rate"
          value="-"
          subValue="0 total"
          hasInfoIcon={true}
        />
      </div>

      <div className="border-r">
        <MetricCard
          icon={<Reply className="w-8 h-8 text-gray-800" />}
          title="Reply Rate"
          value="-"
          subValue="0 total"
          hasInfoIcon={true}
        />
      </div>

      <div>
        <MetricCard
          icon={<Lightbulb className="w-8 h-8 text-gray-800" />}
          title="Opportunities"
          value={0}
          subValue="$0"
          hasInfoIcon={true}
        />
      </div>
    </div>
  );
}
