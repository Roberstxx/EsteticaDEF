import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const Textarea = ({ className = '', ...props }: TextareaProps) => {
  return (
    <textarea 
      className={`textarea ${className}`}
      {...props}
    />
  );
};
