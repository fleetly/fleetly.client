// Components
import { ButtonProps } from '@components/Button';

export interface ConfirmButton extends ButtonProps {
  role: 'reject' | 'resolve';
}

export interface ConfirmData {
  buttons?: ConfirmButton[];
  description?: string;
  icon?: {
    color?: Color;
    name: string;
  };
  onReject?(): void;
  onResolve?(): void;
  title: string;
}
