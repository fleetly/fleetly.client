import classNames from 'classnames';
import * as React from 'react';

// Components
import Button from '@components/Button';
import Loader from '@components/Loader';
import Tabs, { Tab } from '@components/Tabs';

// Containers
import Fields from './containers/Fields';
import Source from './containers/Source';
import Tags from './containers/Tags';

// Hooks
import { useSubscriber, VIEW } from './Subscriber.hooks';

// Styles
import styles from './Subscriber.scss';
import routes from '@routes';

// Utils
import { fillUrl } from '@utils/url';

const SubscriberContext = React.createContext<{
  companyId: string;
  subscriberId?: string;
}>({
  companyId: '',
  subscriberId: ''
});

const Subscriber = () => {
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
                onClick={handleCloseClick}
                variant="outlined"
              />

              {!subscriber ? (
                <Loader />
              ) : (
                <div className={styles.Content}>
                  {subscriber && <Source {...subscriber} />}

                  <div className={styles.Actions}>
                    <Button
                      color="primary"
                      fullWidth
                      to={fillUrl(routes.COMPANY.CHAT.DIALOG, {
                        chatId: subscriber.id,
                        companyId
                      })}
                    >
                      Start Chat
                    </Button>

                    <Button color="danger" disabled fullWidth>
                      Block
                    </Button>
                  </div>

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
                        <Tags tags={tags} values={subscriber?.tags} />
                      )}

                      {fields && fieldTypes && subscriber.fields && (
                        <Fields
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
export { SubscriberContext };