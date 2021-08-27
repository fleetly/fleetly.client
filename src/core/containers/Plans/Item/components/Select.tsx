import classNames from 'classnames';
import React, { useCallback } from 'react';

// Styles
import styles from './Select.scss';

interface Plan {
  id: string;
  price: number;
  title: string;
}

export interface PlansItemSelectProps {
  onSelect(plan?: Plan): void;
  plans: Plan[];
  value: Plan;
}

const PlansItemSelect: React.FC<PlansItemSelectProps> = ({
  onSelect,
  plans,
  value
}) => {
  // Setup
  const currentIndex = plans.findIndex(({ id }) => id === value.id);

  // Handlers
  const handlePointClick = useCallback(
    (event: React.SyntheticEvent<HTMLDivElement>) =>
      onSelect(
        plans.find(({ id }) => id === event.currentTarget.dataset.planId)
      ),
    [onSelect, plans]
  );

  return (
    <div className={styles.Root}>
      {plans.length > 1 && (
        <>
          <div className={styles.Track}>
            <div
              className={styles.Bar}
              style={{ width: `${(currentIndex / (plans.length - 1)) * 100}%` }}
            />
          </div>

          <div className={styles.List}>
            {plans.map(({ id }, index) => (
              <div
                className={classNames(styles.Point, {
                  [styles.PointIsColored]: currentIndex >= index,
                  [styles.PointIsSelected]: id === value.id
                })}
                data-plan-id={id}
                key={id}
                onClick={handlePointClick}
                role="button"
                tabIndex={0}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PlansItemSelect;
