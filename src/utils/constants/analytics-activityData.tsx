import { CornerDownLeft, RefreshCw, Send } from "lucide-react";

interface ActivityItems {
  id: string;
  type: "sent" | "replied" | "auto-reply";
  email: string;
  sender: string;
  timestamp: string;
  step: number;
}

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
