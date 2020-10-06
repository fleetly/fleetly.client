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

  namespace Fieldset {
    interface Props {
      classes?: ExtendedClasses;
    }
  }

  namespace Input {
    interface Classes extends ExtendedClasses {
      container?: string;
      error?: string;
      header?: string;
      hint?: string;
      input?: string;
      label?: string;
    }

    interface Props extends FieldBase {
      classes?: Classes;
      hint?: React.ReactNode;
      placeholder?: string;
      type?: string;
    }
  }
}

export = Form;
export as namespace Form;
