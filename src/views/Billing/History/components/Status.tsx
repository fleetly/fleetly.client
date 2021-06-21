import React, { useMemo } from 'react';

// Fleetly
import { PaymentStatus } from '@fleetly/core/dist/common/interfaces';

// Components
import Icon from '@components/Icon';

interface BillingHistoryStatusProps {
  readonly value: PaymentStatus;
}

const BillingHistoryStatus: React.FC<BillingHistoryStatusProps> = ({
  value
}) => {
  const { color, icon }: { color: Color; icon: string } = useMemo(() => {
    switch (value) {
      case PaymentStatus.FAILED:
        return { color: 'red', icon: 'fas fa-ban' };
      case PaymentStatus.REFUNDED:
        return { color: 'gray', icon: 'fas fa-undo' };
      case PaymentStatus.SUCCEEDED:
        return { color: 'green', icon: 'fas fa-check' };
    }
  }, [value]);

  return <Icon color={color} icon={icon} variant="outlined" />;
};

export default BillingHistoryStatus;
