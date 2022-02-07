export const deserialize = (str: string) => {
  const result: any[] = [];

  str.split('\n').forEach((line: string) => {
    const matches = line.split(/({{[^}]+}})/gi);

    result.push({
      type: 'paragraph',
      children: matches.map((text) => {
        if (/{{[^}]+}}/.test(text)) {
          return {
            children: [{ text: '' }],
            type: 'variable',
            variable: text.replace(/{{|}}/gi, '')
          };
        } else {
          return { text };
        }
      })
    });
  });

  return result;
};
