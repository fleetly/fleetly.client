import * as React from 'react';

// Components
import Table from '@components/Table';

// Hooks
import { useTags } from '../../Tags.hooks';
import { useTagsTable } from './Table.hooks';

const TagsTable = () => {
  const { companyId, handleDeleteClick, handleEditClick } = useTags();
  const { columns, data } = useTagsTable({ companyId, handleDeleteClick });

  return <Table columns={columns} data={data} onTrClick={handleEditClick} />;
};

export default TagsTable;
