import React from "react";

import { Info } from "lucide-react";

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  subValue?: string;
  hasInfoIcon?: boolean;
  disabled?: boolean;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  icon,
  title,
  value,
  subValue,
  hasInfoIcon = false,
  disabled = false,
}) => {
  return (
    <div className="p-4 flex flex-col items-center">
      <div className="mb-3">{icon}</div>

      <div className="flex items-center mb-[10px] gap-2">
        <span className="text-slate-700 text-base">{title}</span>
        {hasInfoIcon && (
          <Info size={18} className="text-slate-700" strokeWidth={1} />
        )}
      </div>

      <div className="flex items-center">
        <span
          className={`text-xl text-slate-800 font-medium ${disabled ? "underline" : ""}`}
        >
          {disabled ? "Disabled" : value}
        </span>
        {subValue && (
          <span className="ml-2 text-slate-700 text-sm border-l border-slate-300 pl-2">
            {subValue}
          </span>
        )}
      </div>
    </div>
  );
};
