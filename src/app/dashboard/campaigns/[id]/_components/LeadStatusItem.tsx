import { LeadStatusItemProps } from "./LeadsTab";


export const LeadStatusItem: React.FC<LeadStatusItemProps> = ({ label, icon: Icon, color, fill }) => (
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