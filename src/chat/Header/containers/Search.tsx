import classNames from 'classnames';
import React from 'react';
import { Form, Field } from 'react-final-form';

// Components
import Button from '@components/Button';

// Styles
import styles from './Search.scss';

export interface ChatHeaderSearchProps {
  onCancel(): void;
}

export const ChatHeaderSearch: React.FC<any> = ({ onCancel, onSubmit }) => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit }) => (
      <form className={styles.Root} onSubmit={handleSubmit}>
        <i className={classNames(styles.Icon, 'far fa-search')} />

        <Field
          className={styles.Input}
          component="input"
          name="search"
          placeholder="Search"
        />

        <div className={styles.Actions}>
          <Button color="primary" type="submit">
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
