import * as React from 'react';
import { useQuery } from 'react-apollo';

// Components
import { Caption, H5 } from '@components/Typography';

// GraphQL
import GET_COMPANY_BY_ID from '@graphql/getCompanyById.gql';

// Styles
import styles from './Info.scss';

const CompanyInfo: React.FC<Company.Info.Props> = ({ companyId }) => {
  const { data } = useQuery(GET_COMPANY_BY_ID, { variables: { companyId } });

  return (
    <div className={styles.Root}>
      <div className={styles.Logo} />

      <div className={styles.Content}>
        <H5 className={styles.Title} component="div">
          {data?.company?.title}
        </H5>
        <Caption className={styles.Description}>Software project</Caption>
      </div>
    </div>
  );
};

export default CompanyInfo;
