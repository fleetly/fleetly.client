import React from 'react';

// Fleetly
import { BlockType } from '@fleetly/flow/dist/common/interfaces';

// Components
import ContextMenu, {
  MenuItem,
  MenuTitle,
  PropTypes as ContextMenuProps
} from '@components/ContextMenu';

interface PropTypes extends ContextMenuProps {
  onItemClick(event: React.SyntheticEvent): void;
}

const FlowBuilderBlockMenu: React.FC<PropTypes> = ({
  onItemClick,
  ...props
}) => (
  <ContextMenu {...props}>
    <MenuTitle>New Block</MenuTitle>

    <MenuItem
      data-block-type={BlockType.ACTION}
      color="yellow"
      icon="fas fa-bolt"
      onClick={onItemClick}
      title="Action"
    />

    <MenuItem
      data-block-type={BlockType.CONDITION}
      color="purple"
      icon="fas fa-filter"
      onClick={onItemClick}
      title="Condition"
    />

    <MenuItem
      data-block-type={BlockType.CONTENT}
      icon="fas fa-text"
      onClick={onItemClick}
      title="Content"
    />

    <MenuItem
      data-block-type={BlockType.RANDOMIZE}
      color="purple"
      icon="fas fa-random"
      onClick={onItemClick}
      title="Randomize"
    />
  </ContextMenu>
);

export default FlowBuilderBlockMenu;
