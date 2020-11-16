export const parseOS = (os: string = 'windows') => {
  const PATTERN = {
    ANDROID: 'android',
    IOS: 'ios',
    MAC_OS: 'mac',
    WINDOWS: 'windows'
  };

  const formattedOS = os.toLowerCase();

  const isAndroid = formattedOS.indexOf(PATTERN.ANDROID) > -1;
  const isIOs = formattedOS.indexOf(PATTERN.IOS) > -1;
  const isMac = formattedOS.indexOf(PATTERN.MAC_OS) > -1;
  const isWindows = formattedOS.indexOf(PATTERN.WINDOWS) > -1;

  return {
    isAndroid,
    isApple: isIOs || isMac,
    isDesktop: !isAndroid && !isIOs,
    isMobile: isAndroid || isIOs,
    isIOs,
    isMac,
    isWindows
  };
};
