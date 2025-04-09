import React from 'react'
import UploadFile from './UploadFile'

export default function UploadCSVRoot() {
    return (
        <div className='my-6'>
            <h3 className='text-lg lg:text-2xl font-semibold text-slate'>Upload CSV</h3>

            <UploadFile />
        </div>
    )
}
