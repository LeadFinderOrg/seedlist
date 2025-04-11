import { Controller, Control, FieldErrors } from 'react-hook-form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { UploadOptions } from './UploadOptions';
import { uploadOptionsData } from '@/utils/constants/uploadCSVData';

interface FormValues {
    leadOwner: string;
    campaigns: boolean;
    lists: boolean;
    workspace: boolean;
}

interface LeadOwnerSelectProps {
    control: Control<FormValues>;
    errors: FieldErrors<FormValues>;
}

export interface UploadOptionsTypes {
    value: string;
    label: string;
}

export default function LeadOwnerSelect({
    control,
    errors,
}: LeadOwnerSelectProps) {
    return (
        <div className='flex flex-col gap-1 items-start mt-4'>
            <p className='text-slate-800 text-sm font-medium'>Select the lead owner of the imported leads</p>
            <Controller
                name="leadOwner"
                control={control}
                render={({ field }) => (
                    <Select
                        value={field.value}
                        onValueChange={field.onChange}
                    >
                        <SelectTrigger className="max-w-full lg:max-w-[616px] w-full md:flex-grow">
                            <SelectValue placeholder="Select">
                                {uploadOptionsData.find((option) => option.value === field.value) && (
                                    <UploadOptions
                                        label={uploadOptionsData.find((option) => option.value === field.value)!.label}
                                    />
                                )}
                            </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            {uploadOptionsData.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    <UploadOptions label={option.label} />
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                )}
            />
            {errors.leadOwner && <p className="text-red-500 text-sm">{errors.leadOwner.message}</p>}
        </div>
    );
}