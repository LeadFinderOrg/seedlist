import { Button } from '@/components/ui/button';
import { Import } from 'lucide-react';

interface ImportButtonProps {
    type?: 'submit' | 'button' | 'reset';
    className?: string;
}

export default function ImportButton({ type = 'submit', className = 'bg-customBlue hover:bg-customBlue/90' }: ImportButtonProps) {
    return (
        <Button type={type} className={className}>
            <Import className='text-white h-5 w-5' />
            <span className='text-sm font-medium'>Import emails</span>
        </Button>
    );
} 