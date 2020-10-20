interface SourceListItem {
  id: string;
  icon: string;
  isDisabled?: boolean;
  title: string;
}

export const SOURCE_LIST: SourceListItem[] = [
  {
    id: 'FB',
    icon: 'fab fa-facebook-f',
    isDisabled: true,
    title: 'Facebook'
  },
  {
    id: 'TELEGRAM',
    icon: 'fab fa-telegram-plane',
    title: 'Telegram'
  },
  {
    id: 'VK',
    icon: 'fab fa-vk',
    title: 'VK'
  },
  {
    id: 'TWITCH',
    icon: 'fab fa-twitch',
    isDisabled: true,
    title: 'Twitch'
  },
  {
    id: 'DISCORD',
    icon: 'fab fa-discord',
    isDisabled: true,
    title: 'Discord'
  }
];
