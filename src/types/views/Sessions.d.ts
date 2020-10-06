declare namespace Sessions {
  import ISession from '@interface/session.interface';

  namespace Table {
    interface Props {
      data: ISession[];
      onDelete(id: string): void;
    }
  }
}

export = Sessions;
export as namespace Sessions;
