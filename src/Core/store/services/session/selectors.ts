export const isAuthorized = (state: Store.State): boolean =>
  state.session.isAuthorized;
