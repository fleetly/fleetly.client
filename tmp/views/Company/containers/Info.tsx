import * as React from 'react';
import { useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';

// Components
import Avatar from '@components/Avatar';
import Link from '@components/Link';
import { Caption, H5 } from '@components/Typography';

// GraphQL
import GET_COMPANY_BY_ID from '@graphql/getCompanyById.gql';

// Interface
import { ICompany } from '@interfaces/company.interface';

// Routes
import ROUTES from '@routes';

// Styles
import styles from './Info.scss';

// Utils
import { fillUrl } from '@utils/url';

const CompanyInfo: React.FC<{}> = () => {
  const { companyId } = useParams<{ companyId: string }>();
  const { data } = useQuery<{ company: ICompany }>(GET_COMPANY_BY_ID, {
    variables: { companyId }
  });

  const { id, title } = data?.company || {};

  return (
    <Link
      className={styles.Root}
      to={fillUrl(ROUTES.COMPANY.DASHBOARD, { companyId })}
    >
      <Avatar alt={title} classes={{ root: styles.Avatar }} toColor={id} />

      <div className={styles.Content}>
        <H5 className={styles.Title} component="div">
          {data?.company?.title}
        </H5>

        <Caption className={styles.Description}>Software project</Caption>
      </div>
    </Link>
  );
};

export default CompanyInfo;
