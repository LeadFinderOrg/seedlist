import { ChartLine, Inbox, List, Mail, Send } from "lucide-react";

export const MENU_ITEMS = [
  {
    href: "/dashboard/email-accounts",
    icon: <Mail color="#1d4ed8" strokeWidth={2.25} />,
    label: "Email Accounts",
  },
  {
    href: "/dashboard/campaigns",
    icon: <Send color="#1d4ed8" strokeWidth={2.25} />,
    label: "Campaign",
  },
  {
    href: "/dashboard/lead-list",
    icon: <List color="#1d4ed8" strokeWidth={2.25} />,
    label: "Lead List",
  },
  {
    href: "/dashboard/omnibox",
    icon: <Inbox color="#1d4ed8" strokeWidth={2.25} />,
    label: "Omnibox",
  },
  {
    href: "/dashboard/analytics",
    icon: <ChartLine color="#1d4ed8" strokeWidth={2.25} />,
    label: "Analytics",
  },
];
