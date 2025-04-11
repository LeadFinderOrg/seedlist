"use client"

import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'
import GoogleSheetsRoot from './_components/GoogleSheetsRoot';

export default function GoogleSheetsPage() {
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

            <GoogleSheetsRoot />
        </div>
    )
}
