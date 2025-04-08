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
    <div className='py-2 px-4 bg-[#F1F5F9] rounded-md flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
            <Send className='h-5 w-5 text-[#2563EB]' />
            <div>
                <h3 className='font-medium'>{title}</h3>
                <p className='text-sm text-[#64748B]'>{email}</p>
            </div>
        </div>

        <div className='flex gap-2 items-center'>
            <Timer className='h-5 w-5 text-[#64748B]' />
            <p className='font-medium text-[#64748B]'>{timeAgo}</p>
        </div>

        <p className='font-medium text-[#64748B]'>{step}</p>
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
