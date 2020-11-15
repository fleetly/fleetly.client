import { Color } from '@fleetly/common/dist/enums';
import { GroupType } from 'react-select';
import { WrappedFieldMetaProps, WrappedFieldInputProps } from 'redux-form';

declare namespace Form {
  interface Classes extends ExtendedClasses {
    container?: string;
    error?: string;
  }

  interface FieldAdapter {
    // @todo - so bad
    children(props: any): React.SFC;
    input: WrappedFieldInputProps;
    meta: WrappedFieldMetaProps;
  }

  interface FieldBase {
    children?: React.Node;
    disabled?: boolean;
    id?: string;
    error?: string;
    label?: string;
    loaded?: boolean;
    name: string;
    placeholder?: string;
    withoutRedux?: boolean;
  }

  interface Props {
    children: React.Node;
    classes?: Classes;
    error?: string;
    onSubmit(event: React.SyntheticEvent<HTMLFormElement>): void;
  }

  // Actions
  type ActionsOrientation = 'horizontal' | 'vertical';

  interface ActionsProps {
    children: React.ReactNode;
    classes?: ExtendedClasses;
    orientation?: ActionsOrientation;
  }
  // End Actions

  // Avatar
  interface AvatarProps extends FieldBase {
    alt?: string;
    color?: Color;
  }

  // End Avatar

  // Fieldset
  interface FieldsetProps {
    classes?: ExtendedClasses;
  }
  // End Fieldset

  // Input
  interface InputClasses extends ExtendedClasses {
    container?: string;
    error?: string;
    header?: string;
    hint?: string;
    input?: string;
    label?: string;
  }

  interface InputProps extends FieldBase {
    classes?: InputClasses;
    hint?: React.ReactNode;
    placeholder?: string;
    type?: string;
  }
  // End Input

  // Select
  interface SelectClasses extends ExtendedClasses {
    option?: SelectOptionClasses;
    value?: SelectValueClasses;
  }

  interface SelectProps extends FieldBase {
    classes?: any;
    hint?: React.ReactNode;
    multiplied?: boolean;
    options: SelectOptionType[] | GroupType<SelectOptionType>[];
    variant?: 'filled' | 'outlined';
  }

  // Select Option
  interface SelectOptionClasses extends ExtendedClasses {
    control?: string;
    description?: string;
    icon?: string;
    label?: string;
  }

  interface SelectOptionType {
    avatar?: Avatar.Props;
    color?: Color;
    description?: string;
    info?: string;
    isDisabled?: boolean;
    isFixed?: boolean;
    label: string;
    value: any;
  }
  // End Select Option

  // Select Value
  interface SelectValueClasses extends ExtendedClasses {
    label?: string;
    remove?: string;
    removeIcon?: string;
  }
  // End Select Value
  // End Select
}

export = Form;
export as namespace Form;
