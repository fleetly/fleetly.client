import ICompany from '@interface/conpany.interface';

declare namespace Collaboration {
  interface CompaniesProps {
    data: ICompany[];
  }
}

export = Collaboration;
export as namespace Collaboration;
