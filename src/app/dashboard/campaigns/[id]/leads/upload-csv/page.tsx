"use client"

import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'
import UploadCSVRoot from './_components/UploadCSVRoot';

export default function UploadCSVPage() {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };
    return (
        <div className="p-6">
            <Button variant="outline" size="lg" onClick={handleBack}>
                <ChevronLeft className="text-xl" />
                Back
            </Button>

            <UploadCSVRoot />
        </div>
    )
}
