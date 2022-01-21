import React, { useCallback, useContext } from 'react';
import { useField } from 'react-final-form';

// Components
import {
  ContextMenu,
  ContextMenuColumn,
  ContextMenuItem,
  ContextMenuTitle,
  useContextMenu
} from '@components/ContextMenu';
import { Field } from '@components/Form';

import { BuilderElement } from '../../../Common/components';

// Contexts
import { BuilderContext } from '@flow/containers/Builder';

// Data
import {
  OPERATOR_LIST,
  OPERATOR_TITLE,
  StartKeywordOperator
} from './Keyword.data';

export interface BlockStartKeywordProps {
  id: string;
  payload: {
    operator: any;
    value: string;
  };
}

export const BlockStartKeyword: React.FC<BlockStartKeywordProps> = ({ id }) => {
  // Setup
  const { isEditable } = useContext(BuilderContext);
  const [menuProps, { handleMenuOpen }] = useContextMenu();

  const { input: operatorInput } = useField('operator');
  const { input: valueInput } = useField('value');

  // Handlers
  const handleItemClick = useCallback(
    (event: React.SyntheticEvent<HTMLDivElement>) => {
      operatorInput.onChange(event.currentTarget.dataset.value);
    },
    [operatorInput]
  );

  return (
    <>
      <div onClick={isEditable ? handleMenuOpen : undefined}>
        <BuilderElement
          id={id}
          color="green"
          icon="fad fa-text"
          subTitle={valueInput.value}
          title={OPERATOR_TITLE[operatorInput.value as StartKeywordOperator]}
        />
      </div>

      {isEditable && (
        <ContextMenu {...menuProps} position="bottom">
          <ContextMenuColumn>
            <ContextMenuTitle>Operator</ContextMenuTitle>

            {OPERATOR_LIST.map(({ icon, title, value }) => (
              <ContextMenuItem
                data-value={value}
                color="green"
                icon={icon}
                key={value}
                onClick={handleItemClick}
                selected={value === operatorInput.value}
                title={title}
              />
            ))}
          </ContextMenuColumn>

          <ContextMenuColumn>
            <ContextMenuTitle>Value</ContextMenuTitle>
            <Field name="value" placeholder="Keyword" />
          </ContextMenuColumn>
        </ContextMenu>
      )}
    </>
  );
};
