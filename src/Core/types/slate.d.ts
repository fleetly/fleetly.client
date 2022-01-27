import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';

declare module 'slate' {
  type CustomElement = { type: string; children: CustomText[] };
  type CustomText = { text: string };

  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
