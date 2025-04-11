import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Import } from 'lucide-react'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
    link: z
        .string()
        .url({ message: 'Please enter a valid URL' })
        .includes('docs.google.com/spreadsheets', {
            message: 'Must be a Google Sheets link',
        }),
})

type FormValues = z.infer<typeof formSchema>

export default function GoogleSheetsForm() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            link: '',
        },
    })

    const onSubmit = (data: FormValues) => {
        console.log('Form submitted:', data)
        // Handle your logic here
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8 mt-6'>
            <div>
                <p className='text-slate-800 text-sm font-medium'>Paste your Google Sheet link here</p>
                <Controller
                    name="link"
                    control={control}
                    render={({ field }) => (
                        <Input
                            {...field}
                            className='mt-1'
                            placeholder='Link'
                        />
                    )}
                />
                {errors.link && (
                    <p className='text-red-500 text-sm mt-1'>{errors.link.message}</p>
                )}
            </div>

            {/* submit button */}
            <div className='flex items-center justify-center'>
                <Button type="submit" className="bg-customBlue hover:bg-customBlue/90">
                    <Import className='text-white h-5 w-5' />
                    <span className='text-sm font-medium'>Import emails</span>
                </Button>
            </div>
        </form>
    )
}
