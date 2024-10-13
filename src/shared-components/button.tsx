import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
    variant?: 'outline' | 'fill';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

// Button component
const Button: React.FC<ButtonProps> = ({ variant = 'fill', size = 'lg', children, className, onClick }) => {

    const baseStyles = 'px-4 py-2 h-[60px] flex items-center justify-center px-[56px] rounded-full transition-all hover:shadows-sm';
    const variants = {
        fill: 'bg-primary text-white hover:bg-[#3E414C] hover:opacity-100',
        outline: 'border border-[2px] border-primary text-primary hover:bg-slate-100 hover:opacity-100',
    };
    const sizes = {
        sm: 'px-[20px] h-[20px] font-sansBold text-[14px]',
        md: 'px-[40px] h-[40px] sansExtraBold text-[16px]',
        lg: 'px-[56px] h-[60px] sansExtraBold text-[20px]'
    }

    const buttonClasses = cn(baseStyles, variants[variant], sizes[size], className);

    return (
        <button onClick={onClick} className={buttonClasses}>
            {children}
        </button>
    );
};

export default Button;
