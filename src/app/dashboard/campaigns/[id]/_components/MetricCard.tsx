import React from "react";

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
      <div className="mb-4">{icon}</div>

      <div className="flex items-center mb-[10px]">
        <span className="text-slate-700 text-sm">{title}</span>
        {hasInfoIcon && (
          <div className="ml-1 rounded-full border border-gray-300 w-4 h-4 flex items-center justify-center">
            <span className="text-xs text-gray-500">i</span>
          </div>
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
