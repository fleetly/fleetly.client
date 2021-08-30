import { ApolloError } from '@apollo/client';
import { FORM_ERROR } from 'final-form';

// Utils
import { parseGQLError } from '@utils/graphql';

export const gqlErrorHandler = (error: ApolloError) => {
  const { message, validationErrors } = parseGQLError(error);

  return {
    [FORM_ERROR]: message,
    ...validationErrors
  };
};
