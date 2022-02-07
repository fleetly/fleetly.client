export enum StartKeywordOperator {
  BEGINS = 'BEGINS',
  CONTAINS = 'CONTAINS',
  IS = 'IS',
  REGEXP = 'REGEXP'
}

export const OPERATOR_TITLE = {
  [StartKeywordOperator.BEGINS]: 'Message begins',
  [StartKeywordOperator.CONTAINS]: 'Message contains',
  [StartKeywordOperator.IS]: 'Message is',
  [StartKeywordOperator.REGEXP]: 'Reg Exp'
};

export const OPERATOR_LIST = [
  {
    icon: 'fad fa-equals',
    title: OPERATOR_TITLE.IS,
    value: StartKeywordOperator.IS
  },
  {
    icon: 'fad fa-search-plus',
    title: OPERATOR_TITLE.CONTAINS,
    value: StartKeywordOperator.CONTAINS
  },
  {
    icon: 'fad fa-step-backward',
    title: OPERATOR_TITLE.BEGINS,
    value: StartKeywordOperator.BEGINS
  },
  {
    icon: 'fad fa-function',
    title: OPERATOR_TITLE.REGEXP,
    value: StartKeywordOperator.REGEXP
  }
];
