import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cva } from 'class-variance-authority';

type ColorVariants = 'blue-600' | 'purple-600' | 'orange-600' | 'pink-600' | 'green-600';

export type StatItemTypes = {
    title: string;
    number: number;
    icon: LucideIcon;
    color: ColorVariants;
};

type StatsSectionProps = {
    stats: StatItemTypes[];
};

const iconColor = cva('h-5 w-5', {
    variants: {
        color: {
            'blue-600': 'text-blue-600',
            'purple-600': 'text-purple-600',
            'orange-600': 'text-orange-600',
            'pink-600': 'text-pink-600',
            'green-600': 'text-green-600',
        },
    },
});

const numberColor = cva('text-sm font-medium', {
    variants: {
        color: {
            'blue-600': 'text-blue-600',
            'purple-600': 'text-purple-600',
            'orange-600': 'text-orange-600',
            'pink-600': 'text-pink-600',
            'green-600': 'text-green-600',
        },
    },
});

export default function StatusBar({ stats }: StatsSectionProps) {
    return (
        <div className="flex items-center justify-evenly bg-white border border-input rounded-md py-2 px-4">
            {stats.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div key={index} className="flex items-center justify-center">
                        <div className="flex items-center justify-center gap-2">
                            <div className={iconColor({ color: item.color })}>
                                <Icon className="h-full w-full" />
                            </div>

                            <h4 className="font-medium text-sm">{item.title}</h4>

                            <span className={numberColor({ color: item.color })}>
                                {item.number}
                            </span>
                        </div>

                        {index < stats.length - 1 && (
                            <div className="h-6 w-[1px] bg-input mx-4"></div>
                        )}
                    </div>
                )
            })}
        </div>
    );
}