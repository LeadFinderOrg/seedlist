import React from 'react'
import BulkInstructions from './BulkInstructions'
import BulkForm from './BulkForm'

export default function ManualEntryRoot() {
    return (
        <div className='my-6'>
            <h3 className='text-lg lg:text-2xl font-semibold text-slate'>Bulk Insert Manually</h3>

            <BulkInstructions />
            <BulkForm />
        </div>
    )
}
