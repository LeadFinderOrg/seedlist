import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import UniversalDropzone from '@/components/UniversalDropzone/UniversalDropzone';
import FileUploadSuccess from './FileUploadSuccess';
import DuplicateCheckOptions, { CheckOption } from './DuplicateCheckOptions';
import LeadOwnerSelect from './LeadOwnerSelect';
import ImportButton from './ImportButton';

// Zod schema for validation
const schema = z.object({
    leadOwner: z.string().min(1, 'Lead owner is required'),
    campaigns: z.boolean(),
    lists: z.boolean(),
    workspace: z.boolean(),
});

type FormValues = z.infer<typeof schema>;

const duplicateCheckOptions: CheckOption[] = [
    { id: 'campaigns', label: 'Campaigns', name: 'campaigns' },
    { id: 'lists', label: 'Lists', name: 'lists' },
    { id: 'workspace', label: 'The Workspace', name: 'workspace' }
];

export default function UploadFile() {
    const [fileDetails, setFileDetails] = useState<{ name: string; size: number } | null>(null);

    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            leadOwner: '',
            campaigns: true,
            lists: true,
            workspace: true,
        },
    });

    const handleUpload = async (file: File) => {
        try {
            setFileDetails({ name: file.name, size: file.size });
            return { success: true };
        } catch (error) {
            console.log(error);
            setFileDetails(null);
            return { success: false, error: 'Upload failed' };
        }
    };

    const handleRemove = () => {
        setFileDetails(null);
    };

    const onSubmit = (data: FormValues) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-100 rounded-[24px] p-10 mt-3">
            <div className="flex flex-col items-center justify-center">
                <UniversalDropzone
                    onUpload={handleUpload}
                    onRemove={handleRemove}
                    accept={{
                        'text/csv': ['.csv']
                    }}
                    maxSize={5 * 1024 * 1024} // 5MB
                    label="Drag & drop your .csv file here"
                    description="or"
                    className="w-full md:w-[616px] mx-auto"
                />
            </div>

            {fileDetails && (
                <div className='w-full md:w-[616px] mx-auto'>
                    <FileUploadSuccess fileCount={61} />

                    <LeadOwnerSelect
                        control={control}
                        errors={errors}
                    />

                    <DuplicateCheckOptions
                        control={control}
                        options={duplicateCheckOptions}
                    />

                    <div className='mt-6 flex items-center justify-center'>
                        <ImportButton />
                    </div>
                </div>
            )}
        </form>
    );
}