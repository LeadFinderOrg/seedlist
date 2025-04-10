import { LucideIcon } from "lucide-react";

export interface FilterItemProps {
  label: string;
  icon: LucideIcon;
  color?: string;
  fill?: string;
}
export const FilterItem: React.FC<FilterItemProps> = ({
  label,
  icon: Icon,
  color,
  fill,
}) => (
  <div className="flex items-center space-x-2">
    <Icon
      size={20}
      color={color || "currentColor"}
      fill={fill || "none"}
      strokeWidth={2}
    />
    <span>{label}</span>
  </div>
);
