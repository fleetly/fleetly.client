import React from 'react';

// Fleetly
import { StartKeywordOperator } from '@fleetly/flow/dist/common/interfaces/elements';

// Components
import { Element } from '../../Common';

interface PropTypes {
  id: string;
  blockId: string;
  operator: StartKeywordOperator;
  value: string;
}

const FlowBuilderStartKeyword: React.FC<PropTypes> = ({
  operator,
  value,
  ...props
}) => (
  <Element
    {...props}
    color="green"
    icon="fas fa-font"
    subTitle={`Message ${operator.toLowerCase()}`}
    title={value}
  />
);

export default FlowBuilderStartKeyword;
