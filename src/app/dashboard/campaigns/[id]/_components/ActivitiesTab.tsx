import { activitiesData } from '@/utils/constants/leadsTabData';
import { Send, Timer } from 'lucide-react'
import React from 'react'

export type ActivityTypes = {
    title: string;
    email: string;
    timeAgo: string;
    step: string;
};

const ActivityCard: React.FC<ActivityTypes> = ({ title, email, timeAgo, step }) => (
    <div className='py-2 px-4 bg-slate-100 rounded-md flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
            <Send className='h-5 w-5 text-blue-600' />
            <div>
                <h3 className='font-medium text-slate-800'>{title}</h3>
                <p className='text-sm text-slate-500'>{email}</p>
            </div>
        </div>

        <div className='flex gap-2 items-center'>
            <Timer className='h-5 w-5 text-slate-700' />
            <p className='font-medium text-slate-500'>{timeAgo}</p>
        </div>

        <p className='font-medium text-slate-800'>{step}</p>
    </div>
);

export default function ActivitiesTab() {
    return (
        <div className='flex flex-col gap-3'>
            {activitiesData.map((activity, index) => (
                <ActivityCard key={index} {...activity} />
            ))}
        </div>
    )
}
