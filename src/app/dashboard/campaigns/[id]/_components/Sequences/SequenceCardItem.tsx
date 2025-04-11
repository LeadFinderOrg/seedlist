import { FC } from "react";
import { Switch } from "@/components/ui/switch";
import { Trash } from "lucide-react";

interface CardItemProps {
    label: string;
    description: string;
    switchChecked?: boolean;
    onSwitchChange?: (checked: boolean) => void;
    onDelete?: () => void;
}

const SequenceCardItem: FC<CardItemProps> = ({
    label,
    description,
    switchChecked = true,
    onSwitchChange,
    onDelete,
}) => {
    return (
        <div className="bg-white rounded-[12px] p-4 border border-slate-300 hover:border-2 hover:border-blue-600">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center h-[76px] border-r border-gray-300">
                    <p className="text-lg font-semibold text-slate-800 pr-4">{label}</p>
                </div>
                <div className="flex items-center gap-4">
                    <p className="text-sm font-medium text-slate-800">{description}</p>
                    <div className="flex items-center justify-center gap-2">
                        <Switch
                            id={label.toLowerCase()}
                            defaultChecked={switchChecked}
                            onCheckedChange={onSwitchChange}
                        />
                        <Trash
                            className="h-5 w-5 text-slate-500 cursor-pointer"
                            onClick={onDelete}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SequenceCardItem;
