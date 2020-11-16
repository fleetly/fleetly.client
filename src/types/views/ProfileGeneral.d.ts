declare namespace ProfileGeneral {
  interface UpdateFormValues {
    profile?: {
      firstname?: string;
      lastname?: string;
    };
    username: string;
  }
}

export = ProfileGeneral;
export as namespace ProfileGeneral;
