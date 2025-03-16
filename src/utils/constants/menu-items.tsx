import { ChartLine, Inbox, List, Mail, Send } from "lucide-react";

export const MENU_ITEMS = [
  {
    href: "/dashboard/email-accounts",
    icon: <Mail color="#1d4ed8" strokeWidth={2.25} />,
    label: "Mail",
  },
  {
    href: "/dashboard/campaigns",
    icon: <Send color="#1d4ed8" strokeWidth={2.25} />,
    label: "Campaigns",
  },
  {
    href: "/dashboard/settings",
    icon: <List color="#1d4ed8" strokeWidth={2.25} />,
    label: "List",
  },
  {
    href: "/dashboard/packages",
    icon: <Inbox color="#1d4ed8" strokeWidth={2.25} />,
    label: "Packages",
  },
  {
    href: "/dashboard/analytics",
    icon: <ChartLine color="#1d4ed8" strokeWidth={2.25} />,
    label: "Analytics",
  },
];
