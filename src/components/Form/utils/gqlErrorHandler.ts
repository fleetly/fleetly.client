import { set } from 'lodash';
import { GraphQLFormattedError } from 'graphql';
import { SubmissionError } from 'redux-form';

// Utils
import { capitalizeFirstLetter } from '@utils/string';

export default ({ graphQLErrors, message }: any): void => {
  const errors = {};

  if (graphQLErrors && graphQLErrors.length > 0) {
    graphQLErrors.forEach(({ message: error }: GraphQLFormattedError) => {
      const { message, validationErrors }: any = error;

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

  throw new SubmissionError(errors);
};
