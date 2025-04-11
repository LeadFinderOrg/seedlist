import React from 'react';
import { useDropzone } from '@/components/ui/dropzone';
import { cn } from '@/lib/utils';
import { CircleX, Image as ImageIcon, Pointer, Plus } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export interface UniversalDropzoneProps {
  onUpload: (file: File) => Promise<{ success: boolean; error?: string }>;
  onRemove?: (fileId: string) => void;
  onAllUploaded?: () => void;
  accept?: {
    [key: string]: string[];
  };
  maxSize?: number; // in bytes
  minSize?: number; // in bytes
  maxFiles?: number;
  multiple?: boolean;
  className?: string;
  disabled?: boolean;
  label?: string;
  description?: string;
}

const isImageFile = (file: File) => {
  return file.type.startsWith('image/');
};

export default function UniversalDropzone({
  onUpload,
  onRemove,
  onAllUploaded,
  accept,
  maxSize = 10 * 1024 * 1024, // 10MB default
  minSize = 0,
  maxFiles = 1,
  multiple = false,
  className,
  disabled = false,
  label = 'Drag & drop your file here',
  description = 'or',
}: UniversalDropzoneProps) {
  const {
    getRootProps,
    getInputProps,
    onRemoveFile,
    fileStatuses,
    isDragActive,
    rootError,
  } = useDropzone<{ success: boolean; error?: string }, string>({
    onDropFile: async (file) => {
      try {
        const result = await onUpload(file);
        if (result.success) {
          return { status: 'success', result: result };
        } else {
          return { status: 'error', error: result.error || 'Upload failed' };
        }
      } catch (error) {
        return { status: 'error', error: error instanceof Error ? error.message : 'Upload failed' };
      }
    },
    onRemoveFile: onRemove,
    onAllUploaded,
    validation: {
      accept,
      maxSize,
      minSize,
      maxFiles: multiple ? maxFiles : 1,
    },
  });

  const handleCancel = (fileId: string) => {
    onRemoveFile(fileId);
  };

  const renderFilePreview = (file: File) => {
    if (isImageFile(file)) {
      return (
        <div className="relative w-24 h-24">
          <Image
            src={URL.createObjectURL(file)}
            alt={file.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      );
    }
    return null;
  };

  const renderFileInfo = (file: File) => {
    return (
      <div className='flex flex-col items-center justify-center gap-1 w-full md:w-[380px]'>
        <div className="flex items-start gap-2">
          {isImageFile(file) && (
            <ImageIcon className="h-5 w-5 text-blue-600" />
          )}
          <p className="font-medium text-slate-600 text-center">
            {file.name}
          </p>
        </div>
        <p className="text-slate-500 text-xs">
          {Math.round(file.size / 1024)} KB
        </p>
      </div>
    );
  };

  return (
    <div className={cn('w-full', className)}>
      {fileStatuses.length === 0 ? (
        <div
          {...getRootProps()}
          className={`flex w-full md:w-[616px] cursor-pointer flex-col items-center justify-center mx-auto rounded-[20px] border-2 border-dashed border-blue-600 bg-blue-50 p-8 transition-colors ${isDragActive ? 'bg-gray-100' : ''}`}
        >
          <input {...getInputProps()} disabled={disabled} />
          <Pointer className="h-9 w-9 text-blue-600 my-6" />
          <p className="font-medium text-base text-slate-600">
            {label}
          </p>
          <p className="text-slate-500 my-2">{description}</p>
          <p className="mt-2 mb-6 text-sm text-blue-600 underline cursor-pointer">
            Choose file
          </p>
          {accept && (
            <p className="text-xs text-slate-500">
              Accepted file types: {Object.values(accept).flat().join(', ')}
            </p>
          )}
          {maxSize && (
            <p className="text-xs text-slate-500">
              Maximum file size: {Math.round(maxSize / 1024 / 1024)}MB
            </p>
          )}
          {multiple && (
            <p className="text-xs text-slate-500">
              Maximum {maxFiles} files allowed
            </p>
          )}
          {rootError && (
            <p className="text-xs text-red-500 mt-2">{rootError}</p>
          )}
        </div>
      ) : (
        <div className='w-full md:w-[616px] mx-auto flex flex-col items-center justify-center gap-4'>
          {fileStatuses.map((file) => (
            <div key={file.id} className="relative w-full flex items-center justify-center rounded-[20px] border-2 border-dashed border-blue-600 bg-blue-50 p-8 transition-colors">
              {renderFilePreview(file.file)}
              {renderFileInfo(file.file)}
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2"
                onClick={() => handleCancel(file.id)}
              >
                <CircleX className='h-5 w-5 text-red-500' />
              </button>
            </div>
          ))}

          {multiple && fileStatuses.length < maxFiles && (
            <div
              {...getRootProps()}
              className="flex w-full cursor-pointer flex-col items-center justify-center rounded-[20px] border-2 border-dashed border-blue-600 bg-blue-50 p-4 transition-colors hover:bg-blue-100"
            >
              <input {...getInputProps()} disabled={disabled} />
              <Button variant="ghost" className="flex items-center gap-2 hover:bg-blue-100">
                <Plus className="h-5 w-5 text-blue-600" />
                <span className="text-blue-600">Upload Another</span>
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
