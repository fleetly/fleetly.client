import * as React from 'react';
import { useQuery } from 'react-apollo';

// Components
import Button from '@components/Button';
import { ColorCell } from '../../components/Color';

// GraphQL
import GET_TAG_LIST from '../../graphql/getTagList.gql';

const useTagsTable = ({ companyId, handleDeleteClick }: any) => {
  const { data } = useQuery(GET_TAG_LIST, { variables: { companyId } });

  const columns = React.useMemo(
    () => [
      {
        accessor: 'color',
        Cell: ({ value }: any) => <ColorCell color={value} />,
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
            color="danger"
            icon="far fa-trash-alt"
            onClick={handleDeleteClick.bind(null, value)}
            variant="outlined"
          />
        ),
        Header: '',
        maxWidth: 40
      }
    ],
    [handleDeleteClick]
  );

  return { columns, data: data?.tags || [] };
};

export { useTagsTable };
