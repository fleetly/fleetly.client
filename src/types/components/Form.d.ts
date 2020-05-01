import { WrappedFieldMetaProps, WrappedFieldInputProps } from 'redux-form';

declare namespace Form {
  interface Classes extends ExtendedClasses {
    container?: string;
  }

  interface Props {
    children: React.Node;
    classes?: Classes;
    onSubmit(event: React.SyntheticEvent<HTMLFormElement>): void;
  }

  interface ReduxFieldAdapter {
    // @todo - so bad
    children(props: any): React.SFC;
    input: WrappedFieldInputProps;
    meta: WrappedFieldMetaProps;
  }

  interface ReduxFieldProps extends WrappedFieldInputProps {
    id: string;
    error?: string;
    label?: string;
    name: string;
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

    interface Props extends ReduxFieldProps {
      classes?: Classes;
      hint?: React.ReactNode;
      placeholder?: string;
      type?: string;
    }
  }
}

export = Form;
export as namespace Form;
