"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { Upload } from "lucide-react";
import EmailConnectionOptions from "./EmailConnectionOptions";

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
      <h2 className="text-xl font-semibold mb-4 text-slate-800">
        Bulk Email Addition
      </h2>
      <div className="flex flex-col gap-6 md:flex-row">
        <section className="w-full md:w-1/2 md:border-r md:border-b-0 border-b border-gray-300 md:pr-6 pb-6 md:pb-0">
          <div
            {...getRootProps()}
            className={`flex w-full cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-blue-600 bg-blue-50 p-8 transition-colors
          ${isDragActive ? "bg-gray-100" : ""}
        `}
          >
            <input {...getInputProps()} />
            <Upload className="h-8 w-8 text-gray-400 my-6" />
            <p className="font-medium text-base text-gray-600">
              Drag &amp; drop your .csv file here
            </p>
            <p className="text-gray-400 my-2">or</p>
            <p className="mt-2 mb-6 text-sm text-blue-500 underline cursor-pointer">
              Choose file
            </p>
          </div>
          <p className="text-sm font-normal mt-4 text-blue-500 cursor-pointer">
            See a sample CSV file{" "}
          </p>
        </section>

        <div className="flex w-full flex-col gap-4 md:w-1/2">
          <EmailConnectionOptions />
        </div>
      </div>

    </div>
  );
}
