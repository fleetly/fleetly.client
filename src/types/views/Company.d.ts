import { match } from 'react-router-dom';

declare namespace Company {
  interface Props {
    match: match;
  }

  namespace Info {
    interface Props {
      companyId: string;
    }
  }

  namespace Menu {
    interface Props {
      companyId: string;
    }
  }
}

export = Company;
export as namespace Company;
