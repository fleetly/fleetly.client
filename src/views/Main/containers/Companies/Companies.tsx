import * as React from 'react';

// Components
import Button from '@components/Button';
import Modal from '@components/Modal';
import Company from '../../components/Company';

// Constants
import { CREATE_COMPANY_MODAL } from '@constants';

// Containers
import CreateForm from '../CreateForm';

// Interfaces
import { ICompany } from '@interfaces/company.interface';

// Hooks
import { useCompanies } from './Companies.hooks';

// Styles
import styles from './Companies.scss';

const MainCompanies = () => {
  const { companies, handleClick, handleSubmit } = useCompanies();

  return (
    <div className={styles.Root}>
      {companies.map((company: ICompany) => (
        <Company {...company} key={company.id} />
      ))}

      <div className={styles.Create}>
        <Button icon="fas fa-plus" onClick={handleClick} />
      </div>

      <Modal id={CREATE_COMPANY_MODAL} title="Create Company">
        <CreateForm onSubmit={handleSubmit} />
      </Modal>
    </div>
  );
};

export default MainCompanies;
