import { StatusItemProps } from "./TableDataFilter";

export const StatusItem: React.FC<StatusItemProps> = ({ label, icon: Icon, color, fill }) => (
    <div className="flex items-center space-x-2">
        <Icon
            size={20}
            color={color || 'currentColor'}
            fill={fill || 'none'}
            strokeWidth={2}
        />
        <span>{label}</span>
    </div>
);