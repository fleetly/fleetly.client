import { useMutation } from '@apollo/client';
import classNames from 'classnames';
import React, { useCallback } from 'react';
import { Form } from 'react-final-form';
import { Position } from 'react-flow-renderer';

// API
import { REMOVE_BLOCK, UPDATE_BLOCK } from '@flow/Flow.gql';

// Components
import Button from '@components/Button';
import Card, { CardHeader } from '@components/Card';
import { Actions, Field } from '@components/Form';
import Icon from '@components/Icon';
import Modal from '@components/Modal';
import { Caption } from '@components/Typography';

import { BlockHandle } from '../Common/components';

// Contexts
import { BuilderBlockContext } from './Block.context';

// Store
import { useModals, useNotifications } from '@store';

// Styles
import styles from './Block.scss';

// Utils
import { getClassName } from '@utils/styles';

export interface BuilderBlockProps {
  className?: string;
  color: Color;
  editable?: boolean;
  hasSource?: boolean;
  hasTarget?: boolean;
  icon?: string;
  id: string;
  selected?: boolean;
  subTitle?: string;
  title: string;
}

export const BuilderBlock: React.FC<BuilderBlockProps> = ({
  children,
  color = 'blue',
  editable = true,
  hasSource,
  hasTarget,
  icon,
  id,
  selected,
  subTitle,
  title
}) => {
  // Setup
  const modal = useModals(`flow-block-${id}`);
  const { handleApolloError } = useNotifications();

  // Mutations
  const [removeBlock] = useMutation(REMOVE_BLOCK, {
    onError: handleApolloError
  });

  const [updateBlock] = useMutation(UPDATE_BLOCK, {
    onError: handleApolloError
  });

  // Handlers
  const handleFormSubmit = useCallback(
    async (block) => {
      editable && (await updateBlock({ variables: { blockId: id, block } }));
      modal.closeModal();
    },
    [editable, id, modal, updateBlock]
  );

  const handleRemoveClick = useCallback(async () => {
    editable && (await removeBlock({ variables: { blockId: id } }));
  }, [editable, id, removeBlock]);

  return (
    <BuilderBlockContext.Provider value={{ blockId: id, color }}>
      <div
        className={classNames(
          styles.Root,
          getClassName('color', { collection: styles, value: color }),
          { [styles.RootIsSelected]: selected }
        )}
      >
        <Card className={styles.Card}>
          {hasTarget && (
            <BlockHandle
              className={styles.Target}
              position={Position.Left}
              type="target"
            />
          )}

          <CardHeader
            avatar={icon && <Icon color={color} icon={icon} />}
            subTitle={subTitle}
            title={title}
          />

          {children}

          {hasSource && (
            <Caption className={styles.Next} component="div">
              Next Step
              <BlockHandle
                className={styles.Source}
                position={Position.Right}
                type="source"
              />
            </Caption>
          )}
        </Card>

        {editable && (
          <div className={styles.Actions}>
            <Button
              className={styles.Action}
              icon="far fa-cog"
              onClick={modal.openModal}
              variant="outlined"
            />

            <Button
              className={styles.Action}
              color="red"
              icon="far fa-trash-alt"
              onClick={handleRemoveClick}
              variant="outlined"
            />

            <Modal id={modal.id!} title="Edit block">
              <Form initialValues={{ title }} onSubmit={handleFormSubmit}>
                {({ handleSubmit, submitting }) => (
                  <form onSubmit={handleSubmit}>
                    <Field label="Title" name="title" />

                    <Actions>
                      <Button color="blue" loaded={submitting} type="submit">
                        Save
                      </Button>
                    </Actions>
                  </form>
                )}
              </Form>
            </Modal>
          </div>
        )}
      </div>
    </BuilderBlockContext.Provider>
  );
};
