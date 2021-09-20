import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { useField, useForm } from 'react-final-form';

// Fleetly
import { ChannelSource } from '@fleetly/provider/interfaces';

// Card
import Avatar from '@components/Avatar';
import { CardHeader } from '@components/Card';
import { Hero } from '@components/Hero';

// Styles
import styles from './Facebook.scss';

const { REACT_APP_FACEBOOK_APP_ID = '' } = process.env;

export interface ChannelsAddFacebookPage {
  id: string;
  accessToken: string;
  name: string;
  photo: string;
  title: string;
}

export const ChannelsAddFacebook: React.FC = () => {
  // Setup
  const { getState } = useForm();
  const {
    input: { onChange, value }
  } = useField('token');

  const { values } = getState();

  // State
  const [pages, setPages] = useState<ChannelsAddFacebookPage[]>();

  // Handlers
  const handleFacebookLogin = useCallback(
    (response) => {
      const pages = (response?.accounts?.data || [])
        .filter(
          (page: any) =>
            (values.sourceType === ChannelSource.INSTAGRAM &&
              page.instagram_business_account.id) ||
            values.sourceType === ChannelSource.FACEBOOK
        )
        .map((account: any) => ({
          id: account.id,
          accessToken: account.access_token,
          name: account.page_token,
          photo: account.picture?.data?.url,
          title: account.name
        }));

      setPages(pages);
    },
    [values.sourceType]
  );

  const handleItemClick = useCallback(
    (event: React.SyntheticEvent<HTMLDivElement>) => {
      const id = event.currentTarget.dataset.id;
      const { accessToken } =
        (pages || []).find((page) => page.id === id) || {};

      accessToken && onChange(accessToken);
    },
    [onChange, pages]
  );

  return (
    <div className={styles.Root}>
      {pages && pages.length > 0 && (
        <div className={styles.List}>
          {pages.map(({ id, accessToken, name, photo, title }) => (
            <div
              className={classNames(styles.Item, {
                [styles.ItemIsSelected]: accessToken === value
              })}
              data-id={id}
              key={id}
              onClick={handleItemClick}
              role="button"
              tabIndex={0}
            >
              <CardHeader
                avatar={
                  <Avatar
                    alt={title}
                    sourceType={values.sourceType}
                    src={photo}
                  />
                }
                className={styles.Page}
                title={title}
                subTitle={name}
              />
            </div>
          ))}
        </div>
      )}

      {(!pages || pages.length === 0) && (
        <Hero
          actions={
            <FacebookLogin
              appId={REACT_APP_FACEBOOK_APP_ID}
              autoLoad={false}
              callback={handleFacebookLogin}
              cssClass={styles.Button}
              icon={
                <i className={classNames(styles.Icon, 'fab fa-facebook')} />
              }
              fields="accounts{id,access_token,instagram_business_account,name,page_token,picture}"
              scope="pages_show_list,instagram_basic"
            />
          }
          description="We will check which pages can be connected"
          title="Please login!"
        />
      )}
    </div>
  );
};
