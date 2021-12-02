import React, { useMemo } from 'react';

export type ImageSize = '1x' | '2x' | '3x';
export type ImageType = 'image/webp';

export interface ImageProps {
  alt?: string;
  className?: string;
  media?: string;
  src: string;
  srcSet?: Partial<Record<ImageSize, string>>;
  type?: string;
}

export const Image: React.FC<ImageProps> = ({
  alt,
  className,
  media,
  src,
  srcSet,
  type
}) => {
  // Memo
  const set = useMemo(
    () =>
      srcSet &&
      Object.keys(srcSet || {})
        .map((key) => `${(srcSet as any)[key]} ${key}`)
        .join(', '),
    [srcSet]
  );

  return media || type ? (
    <source media={media} srcSet={set || src} type={type} />
  ) : (
    <img alt={alt} className={className} src={src} srcSet={set} />
  );
};
