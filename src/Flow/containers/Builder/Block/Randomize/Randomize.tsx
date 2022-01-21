import { useMutation } from '@apollo/client';
import React, { useCallback, useContext } from 'react';
import { NodeProps } from 'react-flow-renderer';

// API
import { ADD_ELEMENT } from '@flow/Flow.gql';

// Components
import { BuilderButton } from '@flow/containers/Builder/Common/components';

// Contexts
import { BuilderContext } from '../../Builder.context.ts';

// Elements
import { BlockRandomizeVariant } from './Variant';

// Fragments
import { BuilderBlock } from '../../Block';
import { BuilderElements } from '../../Elements';

// Store
import { useNotifications } from '@store';

// Styles
import styles from './Randomize.scss';
import { ElementType } from '@flow/interfaces';

export const BlockRandomize: React.FC<NodeProps> = ({
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
    <BuilderBlock
      {...props}
      color="purple"
      editable={isEditable}
      hasTarget
      icon="fas fa-random"
      id={id}
      subTitle="Randomize"
      title={title}
    >
      <BuilderElements className={styles.Container}>
        {elements.map((element: any, index: number) => (
          <BlockRandomizeVariant {...element} key={element.id} index={index} />
        ))}
      </BuilderElements>

      <BuilderButton onClick={handleAddClick}>Add Variant</BuilderButton>
    </BuilderBlock>
  );
};
