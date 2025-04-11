import { CircleCheckBig } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FileUploadSuccessProps {
    fileCount?: number;
    className?: string;
}

export default function FileUploadSuccess({ fileCount, className }: FileUploadSuccessProps) {
    return (
        <div className={cn("flex flex-col gap-3 mt-6", className)}>
            <div className="flex items-center justify-center gap-2">
                <CircleCheckBig className='w-6 h-6 text-green-600' />
                <p className="text-green-600 font-medium">File processed successfully</p>
            </div>
            <div className="flex items-center justify-center gap-2">
                <CircleCheckBig className='w-6 h-6 text-green-600' />
                <p className="text-green-600 font-medium">
                    Detected {fileCount || 0} data row{fileCount !== 1 ? 's' : ''}
                </p>
            </div>
        </div>
    );
}