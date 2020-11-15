import { get, set } from 'lodash';
import { GraphQLFormattedError } from 'graphql';
import { SubmissionError } from 'redux-form';

// Utils
import { capitalizeFirstLetter } from '@utils/string';

const formatValidationErrors = (validationErrors: any[]) => {
  const result: any = {};

  Object.keys(validationErrors).forEach((key: any) => {
    const error = validationErrors[key];

    result[key] =
      typeof error === 'string' ? error : formatValidationErrors(error);
  });

  return result;
};

export default ({ graphQLErrors, message, networkError }: any): void => {
  let errors = {};

  if (graphQLErrors && graphQLErrors.length > 0) {
    graphQLErrors.forEach(({ extensions, message }: GraphQLFormattedError) => {
      const validationErrors = get(
        extensions,
        'exception.response.validationErrors'
      );

      if (validationErrors) {
        const formattedErrors = formatValidationErrors(validationErrors);
        errors = { ...errors, ...formattedErrors };
      }

      if (message) {
        set(errors, '_error', capitalizeFirstLetter(message));
      }
    });
  } else if (message) {
    set(errors, '_error', capitalizeFirstLetter(message));
  }

  if (networkError) {
    set(errors, '_error', capitalizeFirstLetter(networkError.message));
  }

  throw new SubmissionError(errors);
};
