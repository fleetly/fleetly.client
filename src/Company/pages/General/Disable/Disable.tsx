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

export const GeneralDisable: React.FC<ICompany> = () => (
  <Form onSubmit={window.location.reload}>
    {() => (
      <form className={styles.Form}>
        <div className={styles.Content}>
          <H3>Disable company</H3>

          <Text className={styles.Description} component="div">
            All incoming information will no longer be processed.
          </Text>
        </div>

        <Actions className={styles.Actions}>
          <Button color="red" disabled variant="outlined">
            Disable
          </Button>
        </Actions>
      </form>
    )}
  </Form>
);
