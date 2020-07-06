import * as React from 'react';

// Components
import Table from '@components/Table';

// Hooks
import { useTags } from '../../Tags.hooks';
import { useTagsTable } from './Table.hooks';

const TagsTable = () => {
  const { companyId, handleDeleteClick, handleEditClick } = useTags();
  const { columns, data } = useTagsTable({ companyId, handleDeleteClick });

  return (
    <div>
      <Table columns={columns} data={data} onTrClick={handleEditClick} />
    </div>
  );
};

export default TagsTable;
