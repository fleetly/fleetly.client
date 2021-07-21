import classNames from 'classnames';
import moment from 'moment';
import React, { useCallback } from 'react';

// Fleetly
import { StatsRange } from '@fleetly/provider/interfaces';

// Components
import { Text } from '@components/Typography';

// Styles
import styles from './Range.scss';

export interface ChannelStatsRangeProps {
  onSelect(value: StatsRange): void;
  value: StatsRange;
}

const ChannelStatsRange: React.FC<ChannelStatsRangeProps> = ({
  onSelect,
  value
}) => {
  // Handlers
  const handleClick = useCallback(
    (event: React.SyntheticEvent<HTMLButtonElement>) =>
      onSelect(event.currentTarget.dataset.rangeId as StatsRange),
    [onSelect]
  );

  return (
    <div className={styles.Root}>
      <div className={styles.Actions}>
        {Object.values(StatsRange).map((range: string) => (
          <button
            className={classNames(styles.Button, {
              [styles.ButtonIsSelected]: range === value
            })}
            data-range-id={range}
            key={range}
            onClick={handleClick}
            type="button"
          >
            {range}
          </button>
        ))}
      </div>

      <Text className={styles.Range} component="div" medium>
        {value !== StatsRange.DAY &&
          moment()
            .add(
              -1,
              value.toLowerCase() as moment.unitOfTime.DurationConstructor
            )
            .format('DD.MM.YYYY')}
        {value !== StatsRange.DAY && ' – '}
        {moment().format('DD.MM.YYYY')}
      </Text>
    </div>
  );
};

export default ChannelStatsRange;
