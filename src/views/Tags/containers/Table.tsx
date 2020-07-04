import * as React from 'react';
import { useQuery } from 'react-apollo';
import { matchPath, withRouter } from 'react-router-dom';

// Components
import Table from '@components/Table';

// GraphQL
import GET_TAG_LIST from '@graphql/getTagList.gql';

// Routes
import ROUTES from '@routes';

type PropTypes = {
  location: any;
};

const COLUMNS = [
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
    accessor: 'action',
    Header: 'Action'
  }
];

const TagsTable: React.FunctionComponent<PropTypes> = ({ location }) => {
  const companyId: string = React.useMemo(() => {
    const match: any = matchPath(location.pathname, {
      path: ROUTES.COMPANY.TAGS.path
    });

    return match?.params?.companyId;
  }, [location]);

  const { data } = useQuery(GET_TAG_LIST, { variables: { companyId } });

  return (
    <div>
      <Table columns={COLUMNS} data={data?.tags || []} />
    </div>
  );
};

export default withRouter(TagsTable);
