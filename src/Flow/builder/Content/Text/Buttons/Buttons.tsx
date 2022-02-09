import React, { useCallback } from 'react';
import { useForm } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';

// Builder
import { Button } from '@flow/builder';

// Components
import { ContentTextButtonsField } from './components/Field';

// Styles
import styles from './Buttons.scss';

export interface ContentTextButtonsProps {
  readOnly?: boolean;
}

export const ContentTextButtons: React.FC<ContentTextButtonsProps> = ({
  readOnly
}) => {
  // Setup
  const {
    mutators: { push }
  } = useForm();

  // Handlers
  const handleAddClick = useCallback(() => {
    push('keyboard', { text: 'Button', type: 'CONTENT' });
  }, [push]);

  return (
    <FieldArray name="keyboard">
      {({ fields }) => (
        <div className={styles.Root}>
          {!readOnly && (
            <div className={styles.Add}>
              <Button icon="fas fa-plus" onClick={handleAddClick}>
                Add Button
              </Button>
            </div>
          )}

          {!!fields.length && fields.length > 0 && (
            <div className={styles.List}>
              {fields.map((name, index) => (
                <ContentTextButtonsField
                  key={index}
                  name={name}
                  readOnly={readOnly}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </FieldArray>
  );
};
