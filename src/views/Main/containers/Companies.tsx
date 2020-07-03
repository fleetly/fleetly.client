import { get } from 'lodash';
import * as React from 'react';
import { useQuery } from 'react-apollo';

// Components
import Company from '../components/Company';

// GraphQL
import GET_COMPANY_LIST from '@graphql/getCompanyList.gql';

// Interfaces
import { ICompany } from '@interfaces/company.interface';

// Styles
import styles from './Companies.scss';

const MainCompanies = () => {
  const { data } = useQuery(GET_COMPANY_LIST);
  const companies = get(data, 'companies', []);

  return (
    <div className={styles.Root}>
      {companies.map((company: ICompany) => (
        <Company {...company} key={company.id} />
      ))}
    </div>
  );
};

export default MainCompanies;
