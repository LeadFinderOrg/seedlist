import React from "react";

import { Clock } from "lucide-react";

import {
  GET_ACTIVITY_ICONS,
  GET_ACTIVITY_TYPE_LABEL,
  activityData,
} from "@/utils/constants/analytics-activityData";

const AnalyticsActivity: React.FC = () => {
  return (
    <div className="mt-4">
      {activityData?.map((email) => (
        <div key={email.id} className="mb-2">
          <div className="hover:bg-gray-100 bg-gray-100 flex items-center justify-between rounded-lg">
            <div className="py-4 px-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center">
                  {GET_ACTIVITY_ICONS(email.type)}
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium text-slate-800">
                    {GET_ACTIVITY_TYPE_LABEL(email.type)}
                  </div>
                  <div className="text-xs text-gray-500">{email.sender}</div>
                </div>
              </div>
            </div>
            <div className="px-4 py-4 whitespace-nowrap text-sm text-slate-800">
              {email.email}
            </div>
            <div className="px-4 py-4 whitespace-nowrap text-right">
              <div className="flex items-center justify-end">
                <Clock size={14} className="text-gray-500 mr-1" />
                <span className="text-xs text-gray-500">{email.timestamp}</span>
              </div>
            </div>
            <div className="px-4 py-4 whitespace-nowrap text-sm text-right">
              <span className="">Step {email.step}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnalyticsActivity;
