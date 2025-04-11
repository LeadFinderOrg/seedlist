import { Button } from '@/components/ui/button'
import { Eye } from 'lucide-react'
import React from 'react'
import { ZapDropDown } from './ZapDropDown'

export default function CommonInput() {
    return (
        <div className='flex items-center justify-between gap-4'>
            <div className='w-full flex items-center gap-2'>
                <span className='font-medium text-slate-800'>Subject:</span>
                <input type="text" placeholder='Write subject' className='w-full border-none focus:outline-none focus:ring-0 active:outline-none active:ring-0 font-medium text-slate-800 rounded-[8px] h-[40px] px-2' />
            </div>

            <div className='flex items-center gap-3 pl-4 h-[40px] border-l border-slate-200'>
                <ZapDropDown />

                <Button variant="outline" className='h-full'>
                    <Eye className="w-5 h-5 text-customBlue" />
                    <span className='text-sm text-customBlue font-medium'>Preview</span>
                </Button>
            </div>
        </div>
    )
}
