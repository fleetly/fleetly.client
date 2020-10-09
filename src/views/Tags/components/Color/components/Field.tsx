import { Color } from '@fleetly/common/dist/enums';
import classNames from 'classnames';
import { keys } from 'lodash';
import * as React from 'react';

// Decorators
import { withReduxForm } from '@components/Form';

// Styles
import styles from './Field.scss';

// Utils
import { getClassName } from '@utils/styles';

const TagsColorField: React.FC<Form.FieldBase> = ({
  name,
  onChange,
  value
}: any) => (
  <div className={styles.Root}>
    <select className={styles.Select} onChange={onChange} name={name}>
      {keys(Color).map((key) => (
        <option key={key} value={key}>
          {key}
        </option>
      ))}
    </select>

    {keys(Color).map((key) => (
      <div
        className={classNames(
          styles.Item,
          getClassName('color', {
            collection: styles,
            prefix: 'item',
            value: key
          }),
          {
            [styles.ItemIsSelected]: value === key
          }
        )}
        key={key}
        onClick={onChange.bind(null, key)}
        role="button"
        tabIndex={0}
      />
    ))}
  </div>
);

export default withReduxForm<Form.FieldBase>()(TagsColorField);
