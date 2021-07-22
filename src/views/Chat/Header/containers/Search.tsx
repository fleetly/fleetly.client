import classNames from 'classnames';
import React from 'react';
import { InjectedFormProps, Field, reduxForm } from 'redux-form';

// Components
import Button from '@components/Button';
import Form from '@components/Form';

// Styles
import styles from './Search.scss';

export interface ChatHeaderSearchProps {
  onCancel(): void;
}

const ChatHeaderSearch: React.FC<
  ChatHeaderSearchProps & InjectedFormProps<{ search: string }>
> = ({ handleSubmit, onCancel }) => (
  <Form
    classes={{ root: styles.Root, container: styles.Container }}
    onSubmit={handleSubmit}
  >
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
  </Form>
);

export default reduxForm<any, any>({ form: 'chatHeaderSearch' })(
  ChatHeaderSearch
);
