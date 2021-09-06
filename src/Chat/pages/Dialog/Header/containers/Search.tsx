import React from 'react';
import { Form, Field } from 'react-final-form';

// Components
import Button from '@components/Button';
import Icon from '@components/Icon';

// Styles
import styles from './Search.scss';

export interface ChatHeaderSearchProps {
  onCancel(): void;
}

export const DialogHeaderSearch: React.FC<any> = ({ onCancel, onSubmit }) => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit }) => (
      <form className={styles.Root} onSubmit={handleSubmit}>
        <Icon className={styles.Icon} color="gray" icon="far fa-search" />

        <Field
          className={styles.Input}
          component="input"
          name="search"
          placeholder="Search"
        />

        <div className={styles.Actions}>
          <Button color="blue" type="submit">
            Search
          </Button>

          <Button onClick={onCancel} variant="outlined">
            Cancel
          </Button>
        </div>
      </form>
    )}
  </Form>
);
