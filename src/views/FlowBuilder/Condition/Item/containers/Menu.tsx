import React from 'react';

// Components
import ContextMenu, {
  ContextMenuProps,
  MenuColumn,
  MenuItem,
  MenuTitle
} from '@components/ContextMenu';

const FlowBuilderConditionItemMenu: React.FC<ContextMenuProps> = (props) => (
  <ContextMenu {...props}>
    <MenuColumn>
      <MenuTitle>Attribute</MenuTitle>

      <MenuItem icon="fab fa-vk" title="First name" />
      <MenuItem icon="fab fa-vk" title="Last name" />
    </MenuColumn>

    <MenuColumn>
      <MenuTitle>Comparsion</MenuTitle>
      <MenuItem icon="fab fa-vk" title="Is" />
      <MenuItem icon="fab fa-vk" title="Contain" />
      <MenuItem icon="fab fa-vk" title="Not" />
    </MenuColumn>

    <MenuColumn>
      <MenuTitle>Value</MenuTitle>
    </MenuColumn>
  </ContextMenu>
);

export default FlowBuilderConditionItemMenu;
