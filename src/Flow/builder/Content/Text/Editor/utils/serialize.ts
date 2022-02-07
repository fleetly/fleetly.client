import { Node } from 'slate';

export const serialize = (nodes: Node[]): string => {
  const str = nodes.reduce<string>((accum = '', node: any) => {
    switch (node.type) {
      case 'paragraph':
        return accum + `${serialize(node.children)}\n`;
      case 'variable':
        return accum + `{{${node.variable}}}`;
      default:
        return accum + node.text;
    }
  }, '');

  return str.trim();
};
