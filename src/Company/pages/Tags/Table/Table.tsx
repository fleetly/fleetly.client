import { useMutation, useQuery } from '@apollo/client';
import React, { useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';

// Components
import Button from '@components/Button';
import Status from '@components/Status';
import Table from '@components/Table';

// Constants
import { CREATE_TAG_MODAL } from '@constants';

// GraphQl
import DELETE_TAG from './graphql/deleteTag.gql';
import GET_TAG_LIST from './graphql/getTagList.gql';

// Interfaces
import { ITag } from '@interfaces/tag.interface';

// Store
import { useModals } from '@store';

export const TagsTable: React.FC = () => {
  // Setup
  const { openModal } = useModals(CREATE_TAG_MODAL);
  const { companyId } = useParams<{ companyId: string }>();

  // Data
  const { data } = useQuery<{ tags: ITag[] }>(GET_TAG_LIST, {
    variables: { companyId }
  });

  // Mutations
  const [deleteTag] = useMutation(DELETE_TAG, {
    refetchQueries: [{ query: GET_TAG_LIST, variables: { companyId } }]
  });

  // Handlers
  const handleDeleteClick = useCallback(
    (event: React.SyntheticEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      deleteTag({ variables: { tagId: event.currentTarget.dataset.tagId } });
    },
    [deleteTag]
  );

  const handleTrClick = useCallback(
    ({ id, ...tag }: ITag) =>
      openModal({ data: { tagId: id, tag }, title: 'Update tag' }),
    [openModal]
  );

  // Memo
  const columns = useMemo(
    () => [
      {
        accessor: 'color',
        Cell: ({ value }: any) => <Status color={value} />,
        Header: '',
        maxWidth: 32
      },
      {
        accessor: 'title',
        Header: 'Name'
      },
      {
        accessor: 'description',
        Header: 'Description'
      },
      {
        accessor: 'subscribers',
        Cell: () => 0,
        Header: 'Subscribers'
      },
      {
        accessor: 'id',
        Cell: ({ value }: any) => (
          <Button
            data-tag-id={value}
            color="red"
            icon="far fa-trash-alt"
            onClick={handleDeleteClick}
            variant="outlined"
          />
        ),
        Header: '',
        maxWidth: 40
      }
    ],
    [handleDeleteClick]
  );

  return (
    <Table
      columns={columns}
      data={data?.tags || []}
      onTrClick={handleTrClick}
    />
  );
};
