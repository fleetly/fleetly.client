import ICompany from '@interface/conpany.interface';

declare namespace ProfileCollaboration {
  interface TableProps {
    data: ICompany[];
  }
}

export = ProfileCollaboration;
export as namespace ProfileCollaboration;
