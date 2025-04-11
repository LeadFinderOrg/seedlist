import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { BulkOptions } from './BulkOptions';
import { Import } from 'lucide-react';
import { bulkOptionsData } from '@/utils/constants/bulkInsertManualData';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

// Zod schema for validation
const schema = z.object({
    emails: z.string().min(1, 'Please enter at least one email address'),
    leadOwner: z.string().min(1, 'Please select a lead owner'),
    campaigns: z.boolean(),
    lists: z.boolean(),
    workspace: z.boolean(),
});

type FormValues = {
    emails: string;
    leadOwner: string;
    campaigns: boolean;
    lists: boolean;
    workspace: boolean;
};

export interface BulkOptionsTypes {
    value: string;
    label: string;
}

export default function BulkForm() {
    const [selectedStatus, setSelectedStatus] = useState<string>('');

    // Initialize the form
    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            emails: '',
            leadOwner: '',
            campaigns: true,
            lists: true,
            workspace: true,
        },
    });

    const onSubmit = (data: FormValues) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8 mt-6'>
            {/* textarea */}
            <div>
                <p className='text-slate-800 text-sm font-medium'>Type or paste email addresses (one email per line)</p>
                <Controller
                    name="emails"
                    control={control}
                    render={({ field }) => (
                        <Textarea
                            {...field}
                            className='mt-1'
                            placeholder='Add your emails here'
                            rows={10}
                        />
                    )}
                />
                {errors.emails && <p className="text-red-500 text-sm">{errors.emails.message}</p>}
            </div>

            <div className='w-[616px] mx-auto'>
                {/* select */}
                <div className='flex flex-col gap-1 items-start'>
                    <p className='text-slate-800 text-sm font-medium'>Select the lead owner of the imported leads</p>
                    <Controller
                        name="leadOwner"
                        control={control}
                        render={({ field }) => (
                            <Select {...field} value={selectedStatus} onValueChange={(value) => setSelectedStatus(value)}>
                                <SelectTrigger className="max-w-full lg:max-w-[616px] w-full md:flex-grow">
                                    <SelectValue placeholder="Select">
                                        {bulkOptionsData.find((option) => option.value === selectedStatus) && (
                                            <BulkOptions
                                                label={bulkOptionsData.find((option) => option.value === selectedStatus)!.label}
                                            />
                                        )}
                                    </SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    {bulkOptionsData.map((option) => (
                                        <SelectItem key={option.value} value={option.value}>
                                            <BulkOptions label={option.label} />
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.leadOwner && <p className="text-red-500 text-sm">{errors.leadOwner.message}</p>}
                </div>

                {/* checkbox */}
                <div className="flex items-center gap-4 mt-4">
                    <span className="text-sm font-medium text-slate-800">Check for duplicates across all</span>

                    <div className="flex items-center gap-2">
                        <Controller
                            name="campaigns"
                            control={control}
                            render={({ field }) => (
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={(checked) => field.onChange(checked)}
                                        id="campaigns"
                                    />
                                    <label htmlFor="campaigns" className="text-sm font-medium text-slate-800">
                                        Campaigns
                                    </label>
                                </div>
                            )}
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <Controller
                            name="lists"
                            control={control}
                            render={({ field }) => (
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        id="lists"
                                        checked={field.value}
                                        onCheckedChange={(checked) => field.onChange(checked)}
                                    />
                                    <label htmlFor="lists" className="text-sm font-medium text-slate-800">
                                        Lists
                                    </label>
                                </div>
                            )}
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <Controller
                            name="workspace"
                            control={control}
                            render={({ field }) => (
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        id="workspace"
                                        checked={field.value}
                                        onCheckedChange={(checked) => field.onChange(checked)}
                                    />
                                    <label htmlFor="workspace" className="text-sm font-medium text-slate-800">
                                        The Workspace
                                    </label>
                                </div>
                            )}
                        />
                    </div>
                </div>

                {/* submit button */}
                <div className='mt-6 flex items-center justify-center'>
                    <Button type="submit" className="bg-customBlue hover:bg-customBlue/90">
                        <Import className='text-white h-5 w-5' />
                        <span className='text-sm font-medium'>Import emails</span>
                    </Button>
                </div>

            </div>
        </form>
    );
}