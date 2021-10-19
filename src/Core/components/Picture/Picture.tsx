import React from 'react';

// Components
import { Image, ImageProps } from './components/Image';

export interface PictureProps {
  alt?: string;
  className?: string;
  images: ImageProps[];
}

export const Picture: React.FC<PictureProps> = ({ alt, className, images }) => (
  <picture>
    {images.map((image, index) => (
      <Image {...image} alt={alt} className={className} key={index} />
    ))}
  </picture>
);
