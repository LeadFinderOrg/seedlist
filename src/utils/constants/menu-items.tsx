import { ChartLine, Inbox, List, Mail, Send } from "lucide-react";

const ICON_COLOR = "#1d4ed8";

export const MENU_ITEMS = [
  {
    href: "/dashboard/email-accounts",
    icon: <Mail color={ICON_COLOR} strokeWidth={2.25} />,
    label: "Email Accounts",
  },
  {
    href: "/dashboard/campaigns",
    icon: <Send color={ICON_COLOR} strokeWidth={2.25} />,
    label: "Campaign",
  },
  {
    href: "/dashboard/lead-list",
    icon: <List color={ICON_COLOR} strokeWidth={2.25} />,
    label: "Lead List",
  },
  {
    href: "/dashboard/omnibox",
    icon: <Inbox color={ICON_COLOR} strokeWidth={2.25} />,
    label: "Omnibox",
  },
  {
    href: "/dashboard/analytics",
    icon: <ChartLine color={ICON_COLOR} strokeWidth={2.25} />,
    label: "Analytics",
  },
];
