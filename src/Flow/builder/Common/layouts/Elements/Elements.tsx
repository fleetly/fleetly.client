import classNames from 'classnames';
import React, { Children, useCallback } from 'react';
import { Form } from 'react-final-form';

// Components
import { ElementsForm } from './components/Form';

// Styles
import styles from './Elements.scss';

export interface ElementsProps {
  className?: string;
}

export const Elements: React.FC<ElementsProps> = ({ children, className }) => {
  // Handlers
  const handleFormSubmit = useCallback(async () => true, []);

  return (
    <div className={classNames(className, styles.Root)}>
      {Children.map(children, (child: any) => {
        const { id, payload } = child.props;

        return (
          <Form initialValues={{ id, ...payload }} onSubmit={handleFormSubmit}>
            {() => (
              <ElementsForm
                children={child}
                key={id}
                id={id}
                payload={payload}
              />
            )}
          </Form>
        );
      })}
    </div>
  );
};
