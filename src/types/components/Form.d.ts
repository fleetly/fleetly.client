import { ActionMeta, ValueType } from 'react-select';
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

  interface FieldBase extends WrappedFieldInputProps {
    disabled?: boolean;
    id: string;
    error?: string;
    label?: string;
    name: string;
    withoutRedux?: boolean;
  }

  interface Props {
    children: React.Node;
    classes?: Classes;
    error?: string;
    onSubmit(event: React.SyntheticEvent<HTMLFormElement>): void;
  }

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
    isMulti?: boolean;
    onChange?(
      value: ValueType<SelectOptionType>,
      action: ActionMeta<SelectOptionType>
    ): void;
    options: SelectOptionType[];
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
