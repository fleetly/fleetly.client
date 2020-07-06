import { Color } from '@fleetly/common/dist/enums';

declare namespace Tags {
  import Form from '../components/Form.d.ts';

  namespace Color {
    namespace Cell {
      interface Props {
        color: Color;
      }
    }
  }
}

export = Tags;
export as namespace Tags;
