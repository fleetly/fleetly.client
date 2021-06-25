import React from 'react';

// Components
import ContextMenu, {
  MenuItem,
  MenuTitle,
  PropTypes as ContextMenuProps
} from '@components/ContextMenu';

// Styles
import styles from './Menu.scss';

const FlowBuilderConditionMenu: React.FC<ContextMenuProps> = ({
  onClose,
  ...props
}) => (
  <ContextMenu {...props} onClose={onClose}>
    <div className={styles.Root}>
      <div>
        <MenuTitle className={styles.Title}>Attribute</MenuTitle>

        <MenuItem icon="fab fa-vk" title="Text" />
      </div>
      <div>
        <MenuTitle className={styles.Title}>Comparison</MenuTitle>

        <MenuItem icon="fab fa-vk" title="Text" />
        <MenuItem icon="fab fa-vk" title="Text" />
        <MenuItem icon="fab fa-vk" title="Text" />
      </div>
      <div>
        <MenuTitle className={styles.Title}>Value</MenuTitle>

        <MenuItem title="Test Value" />
      </div>
    </div>
  </ContextMenu>
);

export default FlowBuilderConditionMenu;
