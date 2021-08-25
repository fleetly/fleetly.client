import React from 'react';

// Components
import Avatar from '@components/Avatar';
import { CardHeader } from '@components/Card';
import Link from '@components/Link';

// Interface
import { ICompany } from '@interfaces/company.interface';

// Routes
import ROUTES from '@routes';

// Styles
import styles from './Info.scss';

// Utils
import { fillUrl } from '@utils/url';

export const CompanyInfo: React.FC<ICompany> = ({ id, title }) => (
  <div className={styles.Root}>
    <Link to={fillUrl(ROUTES.COMPANY.DASHBOARD, { companyId: id })}>
      <CardHeader
        avatar={
          <Avatar alt={title} classes={{ root: styles.Avatar }} toColor={id} />
        }
        subTitle="Software porject"
        title={title}
      />
    </Link>
  </div>
);
