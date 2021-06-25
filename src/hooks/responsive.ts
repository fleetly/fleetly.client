import { useMediaQuery } from 'react-responsive';

const useResponsive = () => {
  const isDesktop = useMediaQuery({ minDeviceWidth: 1025 });
  const isMobile = useMediaQuery({ maxDeviceWidth: 767 });
  const isTablet = useMediaQuery({ maxDeviceWidth: 1024, minDeviceWidth: 768 });

  return {
    isDesktop,
    isMobile,
    isTablet
  };
};

export { useResponsive };
