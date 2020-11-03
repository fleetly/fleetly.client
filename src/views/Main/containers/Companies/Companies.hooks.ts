import * as React from 'react';
import { useMutation, useQuery } from 'react-apollo';
import { useDispatch } from 'react-redux';

// Components
import { gqlErrorHandler } from '@components/Form';

// Constants
import { CREATE_COMPANY_MODAL } from '@constants';

// GraphQL
import CREATE_COMPANY from '../../graphql/createCompany.gql';
import GET_COMPANY_LIST from '../../graphql/getCompanyList.gql';

// Interfaces
import { ICompany } from '@interfaces/company.interface';

// Store
import { closeModal, openModal } from '@store';

const useCompanies = () => {
  // Setup
  const dispatch = useDispatch();

  // Data
  const { data } = useQuery<{ companies: ICompany[] }>(GET_COMPANY_LIST);
  const companies = data?.companies || [];

  // Mutations
  const [createCompany] = useMutation(CREATE_COMPANY, {
    refetchQueries: [{ query: GET_COMPANY_LIST }]
  });

  // Handlers
  const handleClick = React.useCallback(
    () => dispatch(openModal(CREATE_COMPANY_MODAL)),
    [dispatch]
  );

  const handleSubmit = React.useCallback(
    async (variables) => {
      try {
        await createCompany({ variables });
        return dispatch(closeModal(CREATE_COMPANY_MODAL));
      } catch (error) {
        return gqlErrorHandler(error);
      }
    },
    [createCompany, dispatch]
  );

  return {
    companies,
    handleClick,
    handleSubmit
  };
};

export { useCompanies };
