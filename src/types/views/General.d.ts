import { Color } from '@fleetly/common/dist/enums';

declare namespace General {
  interface LogoFieldProps extends Form.FieldBase {
    alt?: string;
    color?: Color;
  }

  interface SectionProps {
    children?: React.ReactNode;
    description?: string;
    label?: string;
    title: React.ReactNode;
  }

  interface UpdateFormValues {
    companyId: string;
    location?: string;
    timezone?: string;
    title: string;
  }

  interface UpdateNameFormValues {
    newName: string;
  }
}

export = General;
export as namespace General;
