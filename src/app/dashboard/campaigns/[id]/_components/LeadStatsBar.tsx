import React from 'react';
import { LucideIcon } from 'lucide-react';

type StatItem = {
    title: string;
    number: number;
    icon: LucideIcon;
    color?: string;
};

type StatsSectionProps = {
    stats: StatItem[];
};

export default function LeadStatsBar({ stats }: StatsSectionProps) {
    return (
        <div className="flex items-center justify-evenly bg-white border border-input rounded-md py-2 px-4">
            {stats.map((item, index) => (
                <div key={index} className="flex items-center justify-center">
                    <div className="flex items-center justify-center gap-2">
                        <div style={{ color: item.color }} className="h-5 w-5">
                            <item.icon className="h-full w-full" />
                        </div>

                        <h4 className="font-medium text-[14px]">{item.title}</h4>

                        <span style={{ color: item.color }} className="text-[14px] font-medium">
                            {item.number}
                        </span>
                    </div>

                    {index < stats.length - 1 && (
                        <div className="h-6 w-[1px] bg-input mx-4"></div>
                    )}
                </div>
            ))}
        </div>
    );
}