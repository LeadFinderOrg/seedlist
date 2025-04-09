import React from 'react'

export default function BulkInstructions() {
    return (
        <div className='bg-gray-100 rounded-[24px] p-6 mt-3'>
            <p className='text-slate-800'>To add emails with names, you can use one of the following formats:</p>

            <div className='mt-3'>
                <p className='text-slate-800'>{'"John Doe" <john@doe.com>'}</p>
                <p className='text-slate-800'>{'"Jane Smith" <jane@smith.com>'}</p>
            </div>
        </div>
    )
}
