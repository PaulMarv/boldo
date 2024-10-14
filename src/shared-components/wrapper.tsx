import React from 'react';
import { cn } from '@/lib/utils';

interface WrapperProps {
  children: React.ReactNode; 
  className?: string; 
}

// Wrapper component
const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  const defaultStyles = 'mx-auto max-w-[1440px]';
  const wrapperClasses = cn(defaultStyles, className);

  return <div className={wrapperClasses}>{children}</div>;
};

export default Wrapper;
