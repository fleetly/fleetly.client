import { get, set } from 'lodash';

interface ISchema {
  validate: (values: any, options: any) => Promise<any>;
}

interface IError {
  message: string;
  path: string;
}

export default (schema: ISchema) => (values: object) =>
  schema.validate(values, { abortEarly: false }).catch((error: object[]) => {
    const errors = {};

    get(error, 'inner', []).forEach(({ message, path }: IError) => {
      set(errors, path, message);
    });

    throw errors;
  });
