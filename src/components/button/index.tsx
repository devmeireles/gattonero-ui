import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  rounded?: boolean;
  roundedSize?: string;
  backgroundColor?: string;
  backgroundColorHover?: string;
  textColor?: string;
  textColorHover?: string;
  bordered?: boolean;
  borderColor?: string;
  borderColorHover?: string;
  outlined?: boolean;
  disabled?: boolean;
  loading?: boolean;
  size?: 'sm' | 'md' | 'lg';
  prependIcon?: React.ReactNode;
  appendIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  rounded = false,
  roundedSize = 'rounded',
  textColor = 'text-white',
  textColorHover = 'text-black',
  backgroundColor = 'bg-black',
  backgroundColorHover = 'bg-white',
  bordered = false,
  borderColor = 'border-black',
  borderColorHover = 'border-slate-500',
  outlined = false,
  loading = false,
  size,
  prependIcon,
  appendIcon,
  ...props
}) => {
  const getButtonSize = () => {
    switch (size) {
      case 'sm':
        return 'px-2 py-1 text-sm';
      case 'md':
        return 'px-4 py-2 text-base';
      case 'lg':
        return 'px-6 py-3 text-lg';
      default:
        return 'px-4 py-2 text-base';
    }
  };

  return (
    <button
      type="button"
      className={twMerge(
        props.className,
        `px-4 py-2 flex items-center`,
        getButtonSize(),
        `${backgroundColor} hover:${backgroundColorHover}`,
        `${textColor} hover:${textColorHover}`,
        bordered && `${borderColor} border hover:${borderColorHover}`,
        rounded && roundedSize,
        outlined &&
          `bg-transparent border ${borderColor} hover:${borderColorHover}`,
        props.disabled
          ? 'opacity-50 cursor-not-allowed'
          : 'hover:opacity-80 hover:shadow-md',
        loading && 'opacity-50 cursor-wait',
        'transition-colors duration-200 ease-in-out'
      )}
      {...props}
    >
      {prependIcon && <span className="mr-2">{prependIcon}</span>}
      {children}
      {appendIcon && <span className="ml-2">{appendIcon}</span>}
    </button>
  );
};
