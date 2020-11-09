import * as React from 'react';

// Components
import Button from '@components/Button';
import Tabs, { Tab } from '@components/Tabs';

// Containers
import Fields from './containers/Fields';
import Source from './containers/Source';

// Hooks
import { useSubscriber } from './Subscriber.hooks';

// Styles
import styles from './Subscriber.scss';

const Subscriber = () => {
  const { currentTab, fields, handleSelectTab, subscriber } = useSubscriber();

  return (
    <div className={styles.Root}>
      <Button
        classes={{ root: styles.Close }}
        icon="fas fa-times"
        variant="outlined"
      />

      <div className={styles.Content}>
        {subscriber && <Source {...subscriber} />}

        <div className={styles.Actions}>
          <Button color="primary" fullWidth>
            Start Chat
          </Button>

          <Button color="danger" disabled fullWidth>
            Block
          </Button>
        </div>

        <Tabs
          classes={{ root: styles.Tabs }}
          onSelect={handleSelectTab}
          value={currentTab}
        >
          <Tab label="Tags" value="tags" />
          <Tab label="Fields" value="fields" />
        </Tabs>

        <Fields fields={fields} />
      </div>
    </div>
  );
};

export default Subscriber;
