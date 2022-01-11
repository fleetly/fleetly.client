import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

// GraphQL
import { GET_FLOWS } from './Flows.gql';

// Interfaces
import { Flow } from '@flow/interfaces/flow.interface';

export const useFlows = () => {
  // Setup
  const { companyId } = useParams<{ companyId: string }>();

  // API
  const { data } = useQuery<{ flows: Flow[] }>(GET_FLOWS, {
    variables: { companyId }
  });

  return {
    companyId,
    data: data?.flows || []
  };
};
