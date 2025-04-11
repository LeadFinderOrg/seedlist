import React from 'react'
import { addLeadsOptionData } from '@/utils/constants/leadsTabData';
import Image from 'next/image';
import { LucideIcon } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

export interface AddLeadsOptionTypes {
    icon?: LucideIcon | React.ReactNode;
    image?: string;
    title: string;
    slug: string;
}

export default function LeadsOptions() {
    const router = useRouter();
    const params = useParams();
    const campaignId = params.id;

    const handleClick = (slug: string) => {
        switch (slug) {
            case 'upload-csv':
                router.push(`/dashboard/campaigns/${campaignId}/leads/upload-csv`);
                break;
            case 'enter-emails-manually':
                router.push(`/dashboard/campaigns/${campaignId}/leads/manual-entry`);
                break;
            case 'use-google-sheets':
                router.push(`/dashboard/campaigns/${campaignId}/leads/google-sheets`);
                break;
            default:
                break;
        }
    }
    return (
        <div className='bg-gray-100 rounded-[24px] p-8 mt-3'>
            <div className="flex flex-col items-center justify-center gap-4">
                {addLeadsOptionData.map((lead, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center gap-2 bg-white min-w-full lg:min-w-[698px] p-4 rounded-xl border border-gray-400 cursor-pointer"
                        onClick={() => handleClick(lead.slug)}
                    >
                        {lead.icon && React.isValidElement(lead.icon) ? (React.cloneElement(lead.icon)) : (
                            lead.image && (
                                <Image
                                    src={lead.image}
                                    alt={lead.title}
                                    width={24}
                                    height={24}
                                    className="text-slate text-2xl lg:text-4xl"
                                />
                            )
                        )}
                        <h4 className="text-base lg:text-xl font-semibold text-slate">{lead.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}
