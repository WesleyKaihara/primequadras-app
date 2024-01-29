import {
  AboutIcon,
  CommentsIcon,
  GavelIcon,
  LeaveIcon,
  WhatsappIcon,
} from '@icons';

export interface IconProps {
  name: IconName;
  color?: string;
  size?: number;
  onPress?: () => void;
}

export interface IconBase {
  size?: number;
  color?: string;
}

export const iconRegistry = {
  leave: LeaveIcon,
  about: AboutIcon,
  whatsapp: WhatsappIcon,
  gavel: GavelIcon,
  comments: CommentsIcon,
};

type IconType = typeof iconRegistry;

export type IconName = keyof IconType;
