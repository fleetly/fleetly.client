import * as React from 'react';

// Components
import Button from '@components/Button';
import Modal from '@components/Modal';
import { P } from '@components/Typography';

import Company from '../../components/Company';

// Constants
import { CREATE_COMPANY_MODAL } from '@constants';

// Containers
import CreateForm from '../CreateForm';

// Hooks
import { useCompanies } from './Companies.hooks';

// Styles
import styles from './Companies.scss';

const MainCompanies: React.FC<{}> = () => {
  const { companies, handleClick, handleSubmit } = useCompanies();

  return (
    <div className={styles.Root}>
      {companies.map((company) => (
        <Company {...company} key={company.id} />
      ))}

      <div className={styles.Create}>
        <Button icon="fas fa-plus" onClick={handleClick} />
      </div>

      <Modal
        classes={{ container: styles.Container }}
        id={CREATE_COMPANY_MODAL}
        title="Create a company"
      >
        <P className={styles.Description}>
          Create a company and start communicating with your customers!
        </P>
        <CreateForm onSubmit={handleSubmit} />
      </Modal>
    </div>
  );
};

export default MainCompanies;
