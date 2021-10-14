export const isWEBPSupported = () => {
  const $canvas = document.createElement('canvas');

  return (
    $canvas.getContext &&
    $canvas.getContext('2d') &&
    $canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
  );
};
