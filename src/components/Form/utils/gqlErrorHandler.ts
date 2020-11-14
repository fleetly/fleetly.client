import { get, set } from 'lodash';
import { GraphQLFormattedError } from 'graphql';
import { SubmissionError } from 'redux-form';

// Utils
import { capitalizeFirstLetter } from '@utils/string';

export default ({ graphQLErrors, message, networkError }: any): void => {
  const errors = {};

  if (graphQLErrors && graphQLErrors.length > 0) {
    graphQLErrors.forEach(({ extensions, message }: GraphQLFormattedError) => {
      const validationErrors = get(
        extensions,
        'exception.response.validationErrors'
      );

      if (validationErrors) {
        Object.keys(validationErrors).forEach((key: string) => {
          set(errors, key, capitalizeFirstLetter(validationErrors[key]));
        });
      } else if (message) {
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
