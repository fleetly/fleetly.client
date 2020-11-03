import { Role } from '@fleetly/common/dist/enums';

// Interfaces
import { ICollaborator } from '@interfaces/collaborator.interface';

declare namespace Collaborators {
  namespace Table {
    interface Props {
      data: ICollaborator[];
      onDelete(id: string): void;
    }
  }

  interface AddFormValues {
    userId: string;
  }

  interface RoleFormProps {
    disabled?: boolean;
  }

  interface RoleFormValues {
    collaboratorId: string;
    newRole: Role;
  }
}

export = Collaborators;
export as namespace Collaborators;
