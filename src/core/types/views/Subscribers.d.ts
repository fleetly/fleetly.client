import { ISubscriber } from '@interfaces/subscriber.interface';

declare namespace Subscribers {
  namespace Table {
    interface Props {
      data: ISubscriber[];
    }
  }
}

export = Subscribers;
export as namespace Subscribers;
