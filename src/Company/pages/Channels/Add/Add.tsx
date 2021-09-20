import { ApolloError, useMutation } from '@apollo/client';
import classNames from 'classnames';
import React, { useCallback, useMemo, useState } from 'react';
import { Form, FormSpy } from 'react-final-form';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';

// Fleetly
import { ChannelSource } from '@fleetly/provider/interfaces';

// Components
import Button from '@components/Button';
import {
  Actions,
  Error,
  gqlErrorHandler,
  yupValidator
} from '@components/Form';
import Modal from '@components/Modal';

import { ChannelsAddSource } from './components/Source';

// Constants
import { ADD_CHANNEL_MODAL } from '@constants';

// Containers
import { ChannelsAddFacebook } from './containers/Facebook';
import { ChannelsAddManual } from './containers/Manual';

// Data
import { SOURCES } from './Add.data';

// GraphQL
import CREATE_CHANNEL from './Add.gql';

// Styles
import styles from './Add.scss';

export interface ChannelAddFormValues {
  sourceType?: ChannelSource;
  token: string;
}

export const ChannelAdd: React.FC = () => {
  // Setup
  const { companyId } = useParams<{ companyId: string }>();

  // State
  const [sourceType, setSourceType] = useState<ChannelSource>();

  // Mutations
  const [createChannel] = useMutation(CREATE_CHANNEL);

  // Handlers
  const handleFormChange = useCallback(
    ({ values }: { values: ChannelAddFormValues }) => {
      setSourceType(values.sourceType);
    },
    []
  );

  const handleFormSubmit = useCallback(
    async ({ sourceType, token }: ChannelAddFormValues) => {
      try {
        await createChannel({ variables: { companyId, sourceType, token } });
      } catch (error) {
        return gqlErrorHandler(error as ApolloError);
      }
    },
    [companyId, createChannel]
  );

  // Memo
  const Component = useMemo(() => {
    switch (sourceType) {
      case ChannelSource.FACEBOOK:
      case ChannelSource.INSTAGRAM:
        return ChannelsAddFacebook;
      default:
        return ChannelsAddManual;
    }
  }, [sourceType]);

  return (
    <Modal id={ADD_CHANNEL_MODAL} title="Add channel">
      <Form
        onSubmit={handleFormSubmit}
        validate={yupValidator(
          yup.object().shape({ token: yup.string().required() })
        )}
      >
        {({ handleSubmit, form, submitting, valid, values }) => (
          <form className={styles.Root} onSubmit={handleSubmit}>
            <FormSpy
              onChange={handleFormChange}
              subscription={{ values: true }}
            />

            <div
              className={classNames(styles.Track, {
                [styles.TrackIsMoved]: !!values.sourceType
              })}
            >
              <div>
                <ChannelsAddSource name="sourceType" sources={SOURCES} />
              </div>

              <div className={styles.Form}>
                <Error />

                <div className={styles.Content}>
                  <Component />
                </div>

                <Actions className={styles.Actions}>
                  <Button
                    className={styles.Back}
                    icon="fas fa-arrow-left"
                    onClick={form.change.bind(null, 'sourceType', undefined)}
                    variant="outlined"
                  />

                  <Button
                    color="blue"
                    disabled={!valid}
                    fullWidth
                    loaded={submitting}
                    type="submit"
                  >
                    Add Channel
                  </Button>
                </Actions>
              </div>
            </div>
          </form>
        )}
      </Form>
    </Modal>
  );
};
