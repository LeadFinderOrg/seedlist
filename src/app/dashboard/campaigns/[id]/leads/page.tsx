'use client'

import { useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'

export default function LeadsPage() {
    const router = useRouter()
    const params = useParams()

    useEffect(() => {
        const id = params?.id as string
        if (id) {
            router.replace(`/dashboard/campaigns/${id}`)
        }
    }, [params, router])

    return <div className="p-6 flex justify-center items-center">Redirecting...</div>
}
