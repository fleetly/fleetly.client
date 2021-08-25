import { ApolloError } from 'apollo-boost';
import { SubmissionError } from 'redux-form';

// Utils
import { parseGQLError } from '@utils/graphql';

export const gqlErrorHandler = (error: ApolloError): void => {
  const { message, validationErrors } = parseGQLError(error);
  throw new SubmissionError({ ...validationErrors, _error: message });
};
