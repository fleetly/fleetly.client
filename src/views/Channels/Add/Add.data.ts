// Fleetly
import { ChannelSource } from '@fleetly/provider/interfaces';

export const SOURCES = [
  {
    id: 'FB',
    icon: 'fab fa-facebook-f',
    isDisabled: true,
    title: 'Facebook'
  },
  {
    id: ChannelSource.TELEGRAM,
    icon: 'fab fa-telegram-plane',
    title: 'Telegram'
  },
  {
    id: ChannelSource.VK,
    icon: 'fab fa-vk',
    title: 'VK'
  },
  {
    id: 'INSTAGRAM',
    icon: 'fab fa-instagram',
    isDisabled: true,
    title: 'Instagram'
  },
  {
    id: 'WHATSAPP',
    icon: 'fab fa-whatsapp',
    isDisabled: true,
    title: 'WhatsApp'
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
