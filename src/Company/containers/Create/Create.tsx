import { ApolloError, useMutation } from '@apollo/client';
import React, { useCallback } from 'react';
import { Form } from 'react-final-form';
import * as yup from 'yup';

// Assets
import rocketImage1x from './assets/rocket@1x.png';
import rocketImage2x from './assets/rocket@2x.png';

// Components
import Button from '@components/Button';
import { Hero } from '@components/Hero';
import {
  Actions,
  Error,
  Field,
  gqlErrorHandler,
  yupValidator
} from '@components/Form';
import Image from '@components/Image';
import Modal from '@components/Modal';

// GraphQL
import CREATE_COMPANY from './graphql/createCompany.gql';
import GET_COMPANY_LIST from '@company/Company.gql';

// Styles
import styles from './Create.scss';

export interface CompanyCreateProps {
  opened?: boolean;
}

export interface CompanyCreateFormValues {
  name: string;
}

export const CompanyCreate: React.FC<CompanyCreateProps> = ({ opened }) => {
  // Mutations
  const [createCompany] = useMutation(CREATE_COMPANY, {
    refetchQueries: [{ query: GET_COMPANY_LIST }]
  });

  // Handlers
  const handleFormSubmit = useCallback(
    async (variables: CompanyCreateFormValues) => {
      try {
        await createCompany({ variables });
      } catch (error) {
        return gqlErrorHandler(error as ApolloError);
      }
    },
    [createCompany]
  );

  return (
    <Modal
      classes={{ content: styles.Container }}
      id="CREATE_COMPANY"
      opened={opened}
    >
      <Hero
        description="Let's start our adventure with the name of the starship! What about my-best-company?"
        image={
          <Image
            src={rocketImage1x}
            srcSet={{ '1x': rocketImage1x, '2x': rocketImage2x }}
          />
        }
        title="A new adventure!"
      />

      <Form
        onSubmit={handleFormSubmit}
        validate={yupValidator(
          yup.object().shape({ name: yup.string().required() })
        )}
      >
        {({ handleSubmit, submitting }) => (
          <form className={styles.Form} onSubmit={handleSubmit}>
            <Error />

            <Field label="Site name" name="name" post=".fleetly.it" />

            <Actions>
              <Button color="blue" loaded={submitting} type="submit">
                Create company
              </Button>
            </Actions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
