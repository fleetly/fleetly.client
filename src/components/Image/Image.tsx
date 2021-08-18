import React, { useMemo } from 'react';

export type ImageSize = '1x' | '2x' | '3x';
export type ImageType = 'image/webp';

export interface ImageProps {
  alt?: string;
  className?: string;
  src: string;
  srcSet?: Partial<Record<ImageSize, string>>;
  source?: boolean;
}

const Image: React.FC<ImageProps> = ({
  alt,
  className,
  src,
  srcSet,
  source
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

  return source ? (
    <source src={src} srcSet={set} />
  ) : (
    <img alt={alt} className={className} src={src} srcSet={set} />
  );
};

export default Image;
