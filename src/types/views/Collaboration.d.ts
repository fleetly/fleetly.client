declare namespace Collaboration {
  import ICompany from '@interface/conpany.interface';

  namespace Table {
    interface Props {
      data: ICompany[];
      onLeave(id: string): void;
    }
  }
}
