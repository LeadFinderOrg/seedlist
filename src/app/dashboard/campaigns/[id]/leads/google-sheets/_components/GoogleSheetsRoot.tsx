import { CircleAlert } from 'lucide-react'
import React from 'react'
import GoogleSheetsForm from './GoogleSheetsForm'

export default function GoogleSheetsRoot() {
    return (
        <div className='my-6'>
            <h3 className='text-lg lg:text-2xl font-semibold text-slate-800'>Use Google Sheets</h3>

            <div className='py-3 px-5 bg-gray-100 rounded-md flex items-center gap-2 mt-4'>
                <CircleAlert className='w-5 h-5 text-slate-800' />
                <span className='text-slate-800 font-medium'>Make sure your Google Sheet is publicly accessible</span>
            </div>

            <GoogleSheetsForm />
        </div>
    )
}
