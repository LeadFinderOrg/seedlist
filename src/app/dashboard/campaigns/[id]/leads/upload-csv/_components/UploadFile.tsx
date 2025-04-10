import { Button } from '@/components/ui/button';
import { CircleCheckBig, CircleX, Import, Pointer } from 'lucide-react';
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { UploadOptions } from './UploadOptions';
import { Checkbox } from '@/components/ui/checkbox';
import { useForm, Controller, } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { uploadOptionsData } from '@/utils/constants/uploadCSVData';

// Zod schema for validation
const schema = z.object({
    leadOwner: z.string().min(1, 'Please select a lead owner'),
    campaigns: z.boolean(),
    lists: z.boolean(),
    workspace: z.boolean(),
});

type FormValues = {
    leadOwner: string;
    campaigns: boolean;
    lists: boolean;
    workspace: boolean;
};

export interface UploadOptionsTypes {
    value: string;
    label: string;
}

export default function UploadFile() {
    const [fileDetails, setFileDetails] = useState<{ name: string; size: number } | null>(null);
    const [selectedStatus, setSelectedStatus] = useState<string>('');

    // Initialize the form
    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            leadOwner: '',
            campaigns: true,
            lists: true,
            workspace: true,
        },
    });

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (file) {
            setFileDetails({ name: file.name, size: file.size });
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'text/csv': ['.csv'],
        },
    });

    const handleCancel = () => {
        setFileDetails(null);
    };

    const onSubmit = (data: FormValues) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-100 rounded-[24px] p-10 mt-3">
            {!fileDetails ? (
                <div
                    {...getRootProps()}
                    className={`flex w-full md:w-[616px] cursor-pointer flex-col items-center justify-center mx-auto rounded-[20px] border-2 border-dashed border-blue-600 bg-blue-50 p-8 transition-colors ${isDragActive ? 'bg-gray-100' : ''}`}
                >
                    <input {...getInputProps()} />
                    <Pointer className="h-9 w-9 text-blue-600 my-6" />
                    <p className="font-medium text-base text-slate-600">
                        Drag &amp; drop your .csv file here
                    </p>
                    <p className="text-slate-500 my-2">or</p>
                    <p className="mt-2 mb-6 text-sm text-blue-600 underline cursor-pointer">
                        Choose file
                    </p>
                </div>
            ) : (
                <div className='w-full md:w-[616px] mx-auto flex flex-col items-center justify-center gap-4'>
                    <div className="relative w-full flex items-center justify-center rounded-[20px] border-2 border-dashed border-blue-600 bg-blue-50 p-8 transition-colors">
                        <div className='flex flex-col items-center justify-center gap-1 w-full md:w-[380px]'>
                            <p className="font-medium text-slate-600 text-center">
                                {fileDetails.name}
                            </p>
                            <p className="text-slate-500 text-xs">
                                {Math.round(fileDetails.size / 1024)} KB
                            </p>
                        </div>

                        <button
                            className="absolute top-1/2 right-4 transform -translate-y-1/2"
                            onClick={handleCancel}
                        >
                            <CircleX className='h-5 w-5 text-red-500' />
                        </button>
                    </div>

                    <div className="flex items-center justify-center gap-2">
                        <CircleCheckBig className='w-6 h-6 text-green-600' />
                        <p className="text-green-600 font-medium">File processed successfully</p>
                    </div>

                    <div className="flex items-center justify-center gap-2">
                        <CircleCheckBig className='w-6 h-6 text-green-600' />
                        <p className="text-green-600 font-medium">Detected 61 data rows</p>
                    </div>

                    <div className='w-full mx-auto'>
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
                                                {uploadOptionsData.find((option) => option.value === selectedStatus) && (
                                                    <UploadOptions
                                                        label={uploadOptionsData.find((option) => option.value === selectedStatus)!.label}
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
                            <Button variant="primary" type="submit">
                                <Import className='text-white h-5 w-5' />
                                <span className='text-sm font-medium'>Import emails</span>
                            </Button>
                        </div>

                    </div>
                </div>
            )}
        </form>
    );
}