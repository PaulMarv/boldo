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
        outline: 'border lg:border-[2px] border-[1px] border-primary text-primary hover:bg-slate-100 hover:opacity-100',
    };
    const sizes = {
        sm: 'lg:px-[20px] px-[10px] lg:h-[20px] h-[10px] lg:font-sansBold lg:text-[14px] text-[12px]',
        md: 'lg:px-[40px] px-[20px] lg:h-[40px] h-[20px] lg:sansExtraBold font-sansBold lg:text-[16px] text-[14px]',
        lg: 'lg:px-[56px] px-[28px] lg:h-[60px] h-[40px] lg:sansExtraBold font-sansBold lg:text-[20px] text-[18px]'
    }

    const buttonClasses = cn(baseStyles, variants[variant], sizes[size], className);

    return (
        <button onClick={onClick} className={buttonClasses}>
            {children}
        </button>
    );
};

export default Button;
