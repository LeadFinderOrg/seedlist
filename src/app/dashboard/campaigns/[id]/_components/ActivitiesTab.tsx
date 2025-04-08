import { Send, Timer } from 'lucide-react'
import React from 'react'

type Activity = {
    title: string;
    email: string;
    timeAgo: string;
    step: string;
};

const activities: Activity[] = [
    {
        title: 'Sent',
        email: 'john@example.com',
        timeAgo: '2 hours ago',
        step: 'Step 1',
    },
    {
        title: 'Sent',
        email: 'jane@example.com',
        timeAgo: '6 hours ago',
        step: 'Step 2',
    },
    {
        title: 'Sent',
        email: 'alex@example.com',
        timeAgo: '14 hours ago',
        step: 'Step 3',
    },
];

const ActivityCard: React.FC<Activity> = ({ title, email, timeAgo, step }) => (
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
            {activities.map((activity, index) => (
                <ActivityCard key={index} {...activity} />
            ))}
        </div>
    )
}
