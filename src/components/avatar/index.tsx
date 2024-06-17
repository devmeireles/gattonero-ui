import React from 'react';

export interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  backgroundColor?: string;
  textColor?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 'md', onClick }) => {
  return (
    <img
      onClick={onClick}
      src={src}
      alt={alt}
      className={`rounded-full ${
        size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10'
      }`}
    />
  );
};

export default Avatar;
