import { Checkbox } from '@/components/ui/checkbox';
import { Controller, Control } from 'react-hook-form';

type FormFieldName = 'campaigns' | 'lists' | 'workspace';

export interface CheckOption {
    id: string;
    label: string;
    name: FormFieldName;
}

interface FormValues {
    leadOwner: string;
    campaigns: boolean;
    lists: boolean;
    workspace: boolean;
}

interface DuplicateCheckOptionsProps {
    control: Control<FormValues>;
    options: CheckOption[];
    label?: string;
    className?: string;
    labelClassName?: string;
    checkboxClassName?: string;
}

export default function DuplicateCheckOptions({
    control,
    options,
    label = 'Check for duplicates across all',
    className = 'flex items-center gap-4 mt-4',
    labelClassName = 'text-sm font-medium text-slate-800',
    checkboxClassName = 'text-sm font-medium text-slate-800'
}: DuplicateCheckOptionsProps) {
    return (
        <div className={className}>
            <span className={labelClassName}>{label}</span>

            {options.map((option) => (
                <div key={option.id} className="flex items-center gap-2">
                    <Controller
                        name={option.name}
                        control={control}
                        render={({ field }) => (
                            <div className="flex items-center gap-2">
                                <Checkbox
                                    id={option.id}
                                    checked={field.value as boolean}
                                    onCheckedChange={(checked) => field.onChange(checked)}
                                />
                                <label htmlFor={option.id} className={checkboxClassName}>
                                    {option.label}
                                </label>
                            </div>
                        )}
                    />
                </div>
            ))}
        </div>
    );
}