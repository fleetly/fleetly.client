import { Source } from '@fleetly/common/dist/enums';

declare namespace Avatar {
  interface Classes extends ExtendedClasses {
    photo?: string;
    source?: string;
  }

  interface Props {
    alt?: string;
    classes?: Classes;
    sourceType?: Source;
    src: string;
  }
}

export = Avatar;
export as namespace Avatar;
