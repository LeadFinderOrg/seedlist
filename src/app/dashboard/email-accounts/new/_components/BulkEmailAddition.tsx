"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { Upload } from "lucide-react";

export default function BulkEmailUpload() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
    },
  });

  return (
    <div className="bg-gray-100 p-6 rounded-2xl mt-6">
      <h2 className="text-xl font-semibold mb-6 text-slate-800">
        Bulk Email Addition
      </h2>
      <div className="flex flex-col gap-6 md:flex-row">
        <div
          {...getRootProps()}
          className={`flex w-full flex-col items-center justify-center rounded-md border-2 border-dashed border-blue-600 bg-blue-50 p-8 transition-colors
          ${isDragActive ? "bg-gray-100" : ""}
          md:w-1/2
        `}
        >
          <input {...getInputProps()} />
          <Upload className="h-8 w-8 text-gray-400 mb-4" />
          <p className="font-medium text-gray-600">
            Drag &amp; drop your <code>.csv</code> file here
          </p>
          <p className="text-gray-400 my-2">or</p>
          <p className="mt-2 text-sm text-blue-500 underline cursor-pointer">
            Choose file
          </p>
        </div>

        <div className="flex w-full flex-col gap-4 md:w-1/2">2</div>
      </div>
      <p className="text-sm font-normal mt-3 text-blue-500 cursor-pointer">
        See a sample CSV file{" "}
      </p>
    </div>
  );
}
