import classNames from 'classnames';
import React from 'react';
import ReactFlow from 'react-flow-renderer';

// Components
import Card, { CardHeader } from '@components/Card';

// Styles
import styles from './Flow.scss';

const TestNode: React.FC<any> = ({ selected }) => (
  <Card
    className={classNames(styles.Root, { [styles.RootIsSelected]: selected })}
  >
    <CardHeader
      avatar={<div className={styles.Avatar} />}
      subTitle="Start"
      title="Starting step"
    />
  </Card>
);

const nodeTypes = {
  testNode: TestNode
};

const Flow = () => {
  const elements = React.useMemo(
    () => [
      {
        id: '1',
        type: 'input',
        data: { label: 'Node 1' },
        position: { x: 400, y: 400 }
      },
      {
        id: '2',
        data: { label: <div>Node 2</div> },
        position: { x: 500, y: 500 },
        type: 'testNode'
      },
      { id: 'e1-2', source: '1', target: '2', animated: true }
    ],
    []
  );

  return <ReactFlow elements={elements} nodeTypes={nodeTypes} />;
};

export default Flow;
