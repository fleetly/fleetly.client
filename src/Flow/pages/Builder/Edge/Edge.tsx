import { useMutation } from '@apollo/client';
import classNames from 'classnames';
import React, { useCallback, useMemo } from 'react';
import {
  EdgeProps,
  getBezierPath,
  getEdgeCenter,
  getMarkerEnd,
  useStoreState
} from 'react-flow-renderer';

// API
import { REMOVE_EDGE } from '@flow/Flow.gql';

// Components
import Button from '@components/Button';

// Store
import { useNotifications } from '@store';

// Styles
import styles from './Edge.scss';

const foreignObjectSize = 42;

export const BuilderEdge: React.FC<EdgeProps> = ({
  id,
  arrowHeadType,
  markerEndId,
  source,
  sourcePosition,
  sourceX,
  sourceY,
  target,
  targetPosition,
  targetX,
  targetY,
  selected,
  style = {}
}) => {
  // Setup
  const { handleApolloError } = useNotifications();
  const selectedElements = useStoreState(
    ({ selectedElements }) => selectedElements || []
  );

  // Mutation
  const [removeEdge, { loading }] = useMutation(REMOVE_EDGE, {
    onError: handleApolloError
  });

  // Handlers
  const handleRemoveClick = useCallback(async () => {
    await removeEdge({ variables: { edgeId: id } });
  }, [id, removeEdge]);

  // Memo
  const edgePath = useMemo(
    () =>
      getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition
      }),
    [sourcePosition, sourceX, sourceY, targetPosition, targetX, targetY]
  );

  const [edgeCenterX, edgeCenterY] = useMemo(
    () =>
      getEdgeCenter({
        sourceX,
        sourceY,
        targetX,
        targetY
      }),
    [sourceX, sourceY, targetX, targetY]
  );

  const isSelected = useMemo(
    () =>
      selectedElements.filter(({ id }) => id === source || id === target)
        .length > 0,
    [selectedElements, source, target]
  );

  const markerEnd = useMemo(() => getMarkerEnd(arrowHeadType, markerEndId), [
    arrowHeadType,
    markerEndId
  ]);

  return (
    <>
      <path
        id={id}
        className={classNames('react-flow__edge-path', styles.Path, {
          [styles.PathIsLoaded]: loading,
          [styles.PathIsSelected]: isSelected || (selected && !loading)
        })}
        d={edgePath}
        markerEnd={markerEnd}
        style={style}
      />

      <foreignObject
        className="edgebutton-foreignobject"
        height={foreignObjectSize}
        requiredExtensions="http://www.w3.org/1999/xhtml"
        width={foreignObjectSize}
        x={edgeCenterX - foreignObjectSize / 2}
        y={edgeCenterY - foreignObjectSize / 2}
      >
        <body
          className={classNames(styles.Root, {
            [styles.RootIsLoaded]: loading
          })}
        >
          <Button
            className={styles.Button}
            color="red"
            icon="far fa-times"
            loaded={loading}
            onClick={handleRemoveClick}
            variant="outlined"
          />
        </body>
      </foreignObject>
    </>
  );
};
