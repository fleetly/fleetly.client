import { Color, Source } from '@fleetly/common/dist/enums';

declare namespace Avatar {
  interface Classes extends ExtendedClasses {
    photo?: string;
    plug?: string;
    source?: string;
  }

  interface Props {
    alt?: string;
    aura?: boolean;
    classes?: Classes;
    color?: Color;
    sourceType?: Source;
    src?: string;
    toColor?: string;
  }
}

export = Avatar;
export as namespace Avatar;
