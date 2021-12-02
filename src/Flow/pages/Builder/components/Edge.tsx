import { useMutation } from '@apollo/client';
import classNames from 'classnames';
import React, { useCallback, useMemo } from 'react';
import {
  EdgeProps,
  getBezierPath,
  getEdgeCenter,
  getMarkerEnd
} from 'react-flow-renderer';

// Components
import Button from '@components/Button';

// GraphQL
import REMOVE_EDGE from '../graphql/removeEdge.gql';

// Store
import { useNotifications } from '@store';

// Styles
import styles from './Edge.scss';

const foreignObjectSize = 42;

export const BuilderEdge: React.FC<EdgeProps> = ({
  id,
  arrowHeadType,
  markerEndId,
  sourcePosition,
  sourceX,
  sourceY,
  targetPosition,
  targetX,
  targetY,
  selected,
  style = {}
}) => {
  // Setup
  const { handleApolloError } = useNotifications();

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
          [styles.PathIsSelected]: selected && !loading
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
