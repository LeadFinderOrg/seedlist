import { LucideIcon } from "lucide-react";

interface LeadStatusItemPropsTypes {
    label: string;
    icon: LucideIcon | null;
    color?: string;
    fill?: string;
};

export const LeadStatusItem: React.FC<LeadStatusItemPropsTypes> = ({ label, icon: Icon, color, fill }) => (
    <div className="flex items-center space-x-2">
        {Icon && <Icon
            size={20}
            color={color || 'currentColor'}
            fill={fill || 'none'}
            strokeWidth={2}
        />}
        <span>{label}</span>
    </div>
);