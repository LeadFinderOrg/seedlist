import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Zap } from "lucide-react";

type SelectItemData = {
    label: string;
    value: string;
    placeholder: string;
};

const mockItems: SelectItemData[] = [
    { label: "First Name", value: "firstName", placeholder: "{{firstName}}" },
    { label: "Last Name", value: "lastName", placeholder: "{{lastName}}" },
    { label: "Company Name", value: "companyName", placeholder: "{{companyName}}" },
    { label: "Signature", value: "signature", placeholder: "{{signature}}" },
    { label: "pause_until", value: "pauseUntil", placeholder: "{{pause_until}}" },
];

export const ZapDropDown: React.FC = () => {
    return (
        <Select>
            <SelectTrigger className="[&>svg:not(.text-customBlue)]:hidden">
                <Zap className="w-5 h-5 text-customBlue" />
            </SelectTrigger>

            <SelectContent>
                {mockItems.map((item, index) => (
                    <div key={item.value}>
                        <SelectItem value={item.value}>
                            <span className="text-xs font-medium text-gray-600">{item.label}</span>
                            <span className="text-xs text-gray-400 ml-1">{item.placeholder}</span>
                        </SelectItem>
                        {index < mockItems.length - 1 && (
                            <hr className="my-1 border-gray-200" />
                        )}
                    </div>
                ))}
            </SelectContent>
        </Select>
    );
};
