import { Badge } from "@/components/ui/badge";

import { CHART_VALUE } from "@/utils/constants/campaignChartData";

import AnalyticsChart from "./AnalyticsChart";
import AnalyticsMetrics from "./AnalyticsMetrics";

export default function AnalyticsTab() {
  return (
    <>
      <section className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h1 className="font-semibold text-slate-800">Status:</h1>
          <Badge className="bg-customBlue hover:bg-customBlue rounded-full">
            Active
          </Badge>
        </div>

        <div>
          <p className="text-slate-500">Campaign created on</p>
          <p className="text-slate-800 font-medium">February 17, 2025</p>
        </div>
      </section>
      <section className="border border-gray-400 rounded-lg p-4 mt-4">
        <div className="flex justify-between items-center gap-4">
          <AnalyticsMetrics />
          <AnalyticsChart chartData={CHART_VALUE} />
        </div>
      </section>
    </>
  );
}
