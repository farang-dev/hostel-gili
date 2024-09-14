import React from 'react';

interface AvatarProps {
  children: React.ReactNode;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ children, className }) => {
  return <div className={`avatar ${className}`}>{children}</div>;
};

interface AvatarImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const AvatarImage: React.FC<AvatarImageProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={`avatar-image ${className}`} />;
};

interface AvatarFallbackProps {
  children: React.ReactNode;
  className?: string;
}

export const AvatarFallback: React.FC<AvatarFallbackProps> = ({ children, className }) => {
  return <div className={`avatar-fallback ${className}`}>{children}</div>;
};
