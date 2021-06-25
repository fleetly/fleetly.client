import get from 'lodash/get';
import set from 'lodash/set';
import { ValidationError, Schema } from 'yup';

// Utils
import { capitalizeFirstLetter } from '@utils/string';

export default (schema: Schema<any>) => (values: Map<string, any>) =>
  schema
    .validate(values, { abortEarly: false })
    .catch((error: ValidationError) => {
      const errors = {};

      get(error, 'inner', []).forEach(
        ({ message = '', path }: ValidationError) => {
          set(errors, path, capitalizeFirstLetter(message.toLowerCase()));
        }
      );

      throw errors;
    });
