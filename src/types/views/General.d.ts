declare namespace General {
  interface UCNFormValues {
    companyId: string;
    newName: string;
  }

  interface UpdateFormValues {
    companiId: string;
    location: string;
    timezone: string;
    title: string;
  }
}

export = General;
export as namespace General;
