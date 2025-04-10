import { ActivityTypes } from "@/app/dashboard/campaigns/[id]/_components/ActivitiesTab";
import { StatusOptionTypes } from "@/app/dashboard/campaigns/[id]/_components/lead/LeadsTab";
import { LeadDrawerOptionTypes } from "@/app/dashboard/campaigns/[id]/_components/lead/LeadTableDrawer";
import { AddLeadsOptionTypes } from "@/app/dashboard/campaigns/[id]/leads/add-new/_components/LeadsOptions";
import { StatItemTypes } from "@/components/ui/statusbar";

import { CircleCheck, FileUp, ListChecks, Mail, MailOpen, Plus, Reply, UserCheck, Users, Zap } from "lucide-react";

const google = "/images/google.png";


const statsBarData: StatItemTypes[] = [
    {
        title: 'Leads Created',
        number: 3428,
        icon: Users,
        color: 'blue-600',
    },
    {
        title: 'Leads Contacted',
        number: 3428,
        icon: UserCheck,
        color: 'purple-600',
    },
    {
        title: 'Leads Opened',
        number: 0,
        icon: MailOpen,
        color: 'orange-600',
    },
    {
        title: 'Leads Replied',
        number: 24,
        icon: Reply,
        color: 'pink-600',
    },
    {
        title: 'Completed Leads',
        number: 2985,
        icon: CircleCheck,
        color: 'green-600',
    }
];

const activitiesData: ActivityTypes[] = [
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

const statusDropdownOptions: StatusOptionTypes[] = [
    {
        value: 'all',
        label: 'All Statuses',
        icon: ListChecks,
        color: '#6b7280',
        fill: 'none'
    },
    {
        value: 'reply-received',
        label: 'Reply Received',
        icon: null,
        color: '#2184C6',
        fill: '#2184C6'
    },
    {
        value: 'link-clicked',
        label: 'Link Clicked',
        icon: null,
        color: '#6b7280',
        fill: 'none'
    },
    {
        value: 'completed-no-reply',
        label: 'Completed, No Reply',
        icon: null,
        color: '#e9a616',
        fill: 'none'
    },
    {
        value: 'email-opened-no-reply',
        label: 'Email Opened, No Reply',
        icon: null,
        color: '#e96016',
        fill: 'none'
    },
    {
        value: 'no-emails-opened',
        label: 'No Emails Opened',
        icon: null,
        color: '#e96016',
        fill: 'none'
    }
];

const leadDrawerDropdownOptions: LeadDrawerOptionTypes[] = [
    {
        value: 'lead',
        label: 'Lead',
        icon: Zap,
        color: '#6b7280',
        fill: 'none'
    },
    {
        value: 'interested',
        label: 'Interested',
        icon: Zap,
        color: '#22C55E',
        fill: '#22C55E'
    },
    {
        value: 'out-of-office',
        label: 'Out of Office',
        icon: Zap,
        color: '#F59E0B',
        fill: '#F59E0B'
    },
    {
        value: 'wrong-person',
        label: 'Wrong Person',
        icon: Zap,
        color: '#F97316',
        fill: '#F97316'
    },
    {
        value: 'not-interested',
        label: 'Not Interested',
        icon: Zap,
        color: '#EF4444',
        fill: '#EF4444'
    },
    {
        value: 'create-new',
        label: 'Create a new label',
        icon: Plus,
        color: '#2184C6',
        fill: '#2184C6'
    }
];

const addLeadsOptionData: AddLeadsOptionTypes[] = [
    {
        icon: <FileUp className="h-6 w-6 text-slate" />,
        title: "Upload CSV",
        slug: "upload-csv"
    },
    {
        icon: <Mail className="h-6 w-6 text-slate" />,
        title: "Enter Emails Manually",
        slug: "enter-emails-manually"
    },
    {
        image: google,
        title: "Use Google Sheets",
        slug: "use-google-sheets"
    }
];

export {
    statsBarData,
    activitiesData,
    statusDropdownOptions,
    leadDrawerDropdownOptions,
    addLeadsOptionData
}