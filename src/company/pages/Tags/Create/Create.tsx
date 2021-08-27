import { ApolloError, useMutation } from '@apollo/client';
import React, { useCallback } from 'react';
import { Form } from 'react-final-form';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';

// Fleetly
import { Color } from '@fleetly/common/dist/enums';

// Components
import Button from '@components/Button';
import {
  Actions,
  Error,
  Field,
  Fieldset,
  gqlErrorHandler,
  yupValidator
} from '@components/Form';
import Modal from '@components/Modal';
import { Text } from '@components/Typography';

import { TagsCreateColor } from './components/Color';

// Constants
import { CREATE_TAG_MODAL } from '@constants';

// GraphQL
import CREATE_TAG from './graphql/createTag.gql';
import UPDATE_TAG from './graphql/updateTag.gql';

import GET_TAG_LIST from '../Table/graphql/getTagList.gql';

// Interfaces
import { ITag } from '@interfaces/tag.interface';

// Store
import { useModals } from '@store';

// Styles
import styles from './Create.scss';

export interface CreateTagFormValues {
  tag: {
    color?: Color;
    description?: string;
    title: string;
  };
  tagId?: string;
}

export const TagsCreate: React.FC = () => {
  // Setup
  const { closeModal } = useModals(CREATE_TAG_MODAL);
  const { companyId } = useParams<{ companyId: string }>();

  // Mutations
  const [createTag] = useMutation(CREATE_TAG, {
    refetchQueries: [{ query: GET_TAG_LIST, variables: { companyId } }]
  });

  const [updateTag] = useMutation(UPDATE_TAG, {
    refetchQueries: [{ query: GET_TAG_LIST, variables: { companyId } }]
  });

  // Handlers
  const handleFormSubmit = useCallback(
    async (values) => {
      try {
        values.tagId
          ? await updateTag({ variables: values })
          : await createTag({ variables: { ...values, companyId } });

        closeModal();
      } catch (error) {
        return gqlErrorHandler(error as ApolloError);
      }
    },
    [closeModal, companyId, createTag, updateTag]
  );

  return (
    <Modal id={CREATE_TAG_MODAL} title="Create tag">
      {({ data }: { data: ITag }) => (
        <Form
          initialValues={data}
          onSubmit={handleFormSubmit}
          validate={yupValidator(
            yup.object().shape({
              tag: yup.object().shape({ title: yup.string().required() })
            })
          )}
        >
          {({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit}>
              <Text className={styles.Description} component="div">
                Group your followers with unique tags!
              </Text>

              <Error />

              <Fieldset>
                <Field label="Title" name="tag.title" placeholder="Title" />

                <Field
                  label="Description"
                  name="tag.description"
                  placeholder="Description"
                />

                <TagsCreateColor />
              </Fieldset>

              <Actions>
                <Button
                  color="primary"
                  fullWidth
                  loaded={submitting}
                  type="submit"
                >
                  {data ? 'Update' : 'Create'}
                </Button>
              </Actions>
            </form>
          )}
        </Form>
      )}
    </Modal>
  );
};
