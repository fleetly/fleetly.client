declare namespace Sessions {
  import ISession from '@interface/session.interface';

  interface TableProps {
    data: ISession[];
    onDelete(id: string): void;
  }
}

export = Sessions;
export as namespace Sessions;
