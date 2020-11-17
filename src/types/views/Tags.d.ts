import { Color } from '@fleetly/common/dist/enums';

declare namespace Tags {
  import Form from '../components/Form.d.ts';
  import ITag from '@interfaces/tag.interface';

  interface FormValues {
    tag: {
      color?: Color;
      description?: string;
      title: string;
    };
    tagId: string;
  }

  interface ModalProps {
    initialValues?: FormValues;
  }

  namespace Color {
    namespace Cell {
      interface Props {
        color: Color;
      }
    }
  }

  namespace Table {
    interface Props {
      data: ITag[];
      onDelete(id: string): void;
      onEdit(tag: ITag): void;
    }
  }
}

export = Tags;
export as namespace Tags;
