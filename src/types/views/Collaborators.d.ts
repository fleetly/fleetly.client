declare namespace Collaborators {
  import ICollaborator from '@interfaces/collaborator.interface';

  namespace Table {
    interface Props {
      data: ICollaborator[];
      onDelete(id: string): void;
    }
  }

  interface FormValues {
    userId: string;
  }
}

export = Collaborators;
export as namespace Collaborators;
