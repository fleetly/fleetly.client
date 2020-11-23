import * as React from 'react';
import { useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';

// Components
import Avatar from '@components/Avatar';
import { Caption, H5 } from '@components/Typography';

// GraphQL
import GET_COMPANY_BY_ID from '@graphql/getCompanyById.gql';

// Interface
import { ICompany } from '@interfaces/company.interface';

// Styles
import styles from './Info.scss';

// Utils
import { convertToColor } from '@utils/string';

const CompanyInfo: React.FC<{}> = () => {
  const { companyId } = useParams<{ companyId: string }>();
  const { data } = useQuery<{ company: ICompany }>(GET_COMPANY_BY_ID, {
    variables: { companyId }
  });

  const { id, title } = data?.company || {};
  const color = React.useMemo(() => convertToColor(id), [id]);

  return (
    <div className={styles.Root}>
      <Avatar alt={title} classes={{ root: styles.Avatar }} color={color} />

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
