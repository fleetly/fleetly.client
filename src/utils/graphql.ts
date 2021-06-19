import { ApolloError } from 'apollo-client';
import get from 'lodash/get';

// Utils
import { capitalizeFirstLetter } from '@utils/string';

export const parseGQLError = (error: ApolloError) => {
  let message = error.networkError?.message || error.message;
  let validationErrors: Record<string, string> = {};

  const formatValidationErrors = (validationErrors: any[]) => {
    const result: any = {};

    Object.keys(validationErrors).forEach((key: any) => {
      const error = validationErrors[key];

      result[key] =
        typeof error === 'string' ? error : formatValidationErrors(error);
    });

    return result;
  };

  if (error.graphQLErrors && error.graphQLErrors.length > 0) {
    // @todo - Then expand on many errors
    const { extensions, message: eMessage } = error.graphQLErrors[0];

    validationErrors = formatValidationErrors(
      get(extensions, 'exception.response.validationErrors', [])
    );

    message = eMessage;
  }

  return {
    message: capitalizeFirstLetter(message),
    validationErrors
  };
};
