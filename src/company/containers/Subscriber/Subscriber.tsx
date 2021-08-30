import classNames from 'classnames';
import * as React from 'react';

// Components
import Button from '@components/Button';
import Loader from '@components/Loader';
import Tabs, { Tab } from '@components/Tabs';

// Containers
import { SubscriberFields } from './Fields';
import { SubscriberSource } from './Source';
import { SubscriberTags } from './Tags';

// Hooks
import { useSubscriber, VIEW } from './Subscriber.hooks';

// Styles
import styles from './Subscriber.scss';

export const SubscriberContext = React.createContext<{
  companyId: string;
  subscriberId?: string;
}>({
  companyId: '',
  subscriberId: ''
});

export const Subscriber = () => {
  const {
    companyId,
    currentView,
    fields,
    fieldTypes,
    handleCloseClick,
    handleSelectTab,
    isOpened,
    subscriber,
    tags
  } = useSubscriber();

  const { rootClassName } = React.useMemo(
    () => ({
      rootClassName: classNames(styles.Root, {
        [styles.RootIsOpened]: isOpened
      })
    }),
    [isOpened]
  );

  return (
    <SubscriberContext.Provider
      value={{ companyId, subscriberId: subscriber?.id }}
    >
      <div className={rootClassName}>
        <div className={styles.Wrapper}>
          {isOpened && (
            <>
              <Button
                classes={{ root: styles.Close }}
                icon="fas fa-times"
                onClick={handleCloseClick as any}
                variant="outlined"
              />

              {!subscriber ? (
                <Loader />
              ) : (
                <div className={styles.Content}>
                  {subscriber && <SubscriberSource {...subscriber} />}

                  <Tabs
                    classes={{ root: styles.Tabs }}
                    onSelect={handleSelectTab}
                    value={currentView}
                  >
                    <Tab label="Tags" value={VIEW.TAGS} />
                    <Tab label="Fields" value={VIEW.FIELDS} />
                  </Tabs>

                  <div
                    className={classNames(styles.Slider, {
                      [styles.SliderVariantFields]: currentView === VIEW.FIELDS
                    })}
                  >
                    <div className={styles.Track}>
                      {tags && subscriber.tags && (
                        <SubscriberTags tags={tags} values={subscriber?.tags} />
                      )}

                      {fields && fieldTypes && subscriber.fields && (
                        <SubscriberFields
                          fields={fields}
                          fieldTypes={fieldTypes}
                          values={subscriber?.fields}
                        />
                      )}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </SubscriberContext.Provider>
  );
};

export default Subscriber;
