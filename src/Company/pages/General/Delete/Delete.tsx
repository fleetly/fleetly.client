import React from 'react';
import { Form } from 'react-final-form';

// Components
import Button from '@components/Button';
import { Actions } from '@components/Form';
import { H3, Text } from '@components/Typography';

// Interfaces
import { ICompany } from '@interfaces/company.interface';

// Styles
import styles from '../General.scss';

export const GeneralDelete: React.FC<ICompany> = ({ title }) => (
  <Form onSubmit={window.location.reload}>
    {() => (
      <form className={styles.Form}>
        <div className={styles.Content}>
          <H3>
            Delete <span className={styles.Blue}>«{title}»</span>
          </H3>

          <Text className={styles.Description} component="div">
            Delete your company can have unintended side effects.
          </Text>
        </div>

        <Actions className={styles.Actions}>
          <Button color="red" disabled variant="outlined">
            Delete
          </Button>
        </Actions>
      </form>
    )}
  </Form>
);
