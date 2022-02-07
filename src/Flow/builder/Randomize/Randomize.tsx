import { useMutation } from '@apollo/client';
import classNames from 'classnames';
import React, { useCallback, useContext } from 'react';
import { NodeProps } from 'react-flow-renderer';

// API
import { ADD_ELEMENT } from '@flow/Flow.gql';

// Builder
import { Block, Button, BuilderContext, Elements } from '@flow/builder';

// Elements
import { BlockRandomizeVariant } from './Variant';

// Interfaces
import { ElementType } from '@flow/interfaces';

// Store
import { useNotifications } from '@store';

// Styles
import styles from './Randomize.scss';

export const Randomize: React.FC<NodeProps> = ({
  data: { elements, title },
  id,
  ...props
}) => {
  // Setup
  const { isEditable } = useContext(BuilderContext);
  const { handleApolloError } = useNotifications();

  // Mutations
  const [addElement] = useMutation(ADD_ELEMENT, {
    onError: handleApolloError
  });

  // Handlers
  const handleAddClick = useCallback(async () => {
    await addElement({
      variables: {
        blockId: id,
        element: {
          payload: { value: 1 },
          type: ElementType.RANDOMIZE_VARIANT
        }
      }
    });
  }, [addElement, id]);

  return (
    <Block
      {...props}
      color="purple"
      editable={isEditable}
      hasTarget
      icon="fas fa-random"
      id={id}
      subTitle="Randomize"
      title={title}
    >
      <Elements
        className={classNames(styles.Container, {
          [styles.ContainerIsEditable]: isEditable
        })}
      >
        {elements.map((element: any, index: number) => (
          <BlockRandomizeVariant {...element} key={element.id} index={index} />
        ))}
      </Elements>

      {isEditable && <Button onClick={handleAddClick}>Add Variant</Button>}
    </Block>
  );
};
