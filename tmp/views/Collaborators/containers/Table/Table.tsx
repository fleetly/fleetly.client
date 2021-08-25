import * as React from 'react';

// Components
import Table from '@components/Table';

// Hooks
import { useCollaboratorsTable } from './Table.hooks';

const CollaboratorsTable: React.FC<any> = () => {
  const { columns, data } = useCollaboratorsTable();
  return <Table columns={columns} data={data} />;
};

export default CollaboratorsTable;
