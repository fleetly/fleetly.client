// Interfaces
import { ICompany } from '@interfaces/company.interface';

declare namespace Main {
  interface CompaniesProps {
    data?: ICompany[];
  }

  interface CreateFormValues {
    name: string;
    title: string;
  }
}

export = Main;
export as namespace Main;
