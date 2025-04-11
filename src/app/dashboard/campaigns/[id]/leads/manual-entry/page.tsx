"use client"

import React from 'react'
import ManualEntryRoot from './_components/ManualEntryRoot'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function ManualEntryPage() {
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

            <ManualEntryRoot />
        </div>
    )
}
