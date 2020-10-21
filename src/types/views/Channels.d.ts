declare namespace Channels {
  interface FormValues {
    sourceType: string;
    token: string;
  }

  interface SourceListItem {
    id: string;
    icon: string;
    isDisabled?: boolean;
    title: string;
  }
}

export = Channels;
export as namespace Channels;
