import {
  CornerDownLeft,
  Filter,
  Link,
  LucideIcon,
  MailOpen,
  RefreshCw,
  Send,
} from "lucide-react";

export interface FilterOption {
  value: string;
  label: string;
  icon: LucideIcon;
  color?: string;
  fill?: string;
}

interface ActivityItems {
  id: string;
  type: "sent" | "replied" | "auto-reply";
  email: string;
  sender: string;
  timestamp: string;
  step: number;
}

const ICON_COLOR_BLUE = "#1d4ed8";
const INACTIVE_COLOR = "#6b7280";
const ICON_COLOR_YELLOW = "#e9a616";
const ICON_COLOR_RED = "#e96016";
const ICON_COLOR_PURPLE = "#a855f7";

export const activityData: ActivityItems[] = [
  {
    id: "1",
    type: "sent",
    email: "sschwanz@marketrep.com",
    sender: "testemail@gmail.com",
    timestamp: "14 hours ago",
    step: 3,
  },
  {
    id: "2",
    type: "sent",
    email: "sschwanz@marketrep.com",
    sender: "testemail@gmail.com",
    timestamp: "14 hours ago",
    step: 2,
  },
  {
    id: "3",
    type: "replied",
    email: "sschwanz@marketrep.com",
    sender: "testemail@gmail.com",
    timestamp: "14 hours ago",
    step: 3,
  },
  {
    id: "4",
    type: "sent",
    email: "sschwanz@marketrep.com",
    sender: "testemail@gmail.com",
    timestamp: "14 hours ago",
    step: 2,
  },
  {
    id: "5",
    type: "auto-reply",
    email: "sschwanz@marketrep.com",
    sender: "testemail@gmail.com",
    timestamp: "14 hours ago",
    step: 3,
  },
];

export const GET_ACTIVITY_ICONS = (type: string) => {
  switch (type) {
    case "sent":
      return <Send size={20} className="text-blue-500" />;
    case "replied":
      return <CornerDownLeft size={20} className="text-green-500" />;
    case "auto-reply":
      return <RefreshCw size={20} className="text-yellow-500" />;
    default:
      return <Send size={20} className="text-blue-500" />;
  }
};

export const GET_ACTIVITY_TYPE_LABEL = (type: string) => {
  switch (type) {
    case "sent":
      return "Sent";
    case "replied":
      return "Replied";
    case "auto-reply":
      return "Auto Reply";
    default:
      return "Sent";
  }
};

export const FILTER_OPTIONS: FilterOption[] = [
  {
    value: "no-filter",
    label: "No Filter",
    icon: Filter,
    color: INACTIVE_COLOR,
    fill: "none",
  },
  {
    value: "email-sent",
    label: "Email Sent",
    icon: Send,
    color: ICON_COLOR_BLUE,
    fill: "none",
  },
  {
    value: "email-opened",
    label: "Email Opened",
    icon: MailOpen,
    color: ICON_COLOR_YELLOW,
    fill: "none",
  },
  {
    value: "reply-received",
    label: "Reply Received",
    icon: CornerDownLeft,
    color: ICON_COLOR_RED,
    fill: "none",
  },
  {
    value: "link-clicked",
    label: "Link Clicked",
    icon: Link,
    color: ICON_COLOR_PURPLE,
    fill: "none",
  },
  {
    value: "auto-reply",
    label: "Auto Reply",
    icon: RefreshCw,
    color: ICON_COLOR_YELLOW,
    fill: "none",
  },
];
