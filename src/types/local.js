// @flow

// local represent types local to this project only, ie. not used in any
// APIs or referenced externally.
//
// These are often utility types or custom types derived from API types.

// ReducerFunc represents a single function within a kea reducer which may
// mutate state
export type ReducerFunc<S, A> = (state: S, payload: A) => S;

// ApiRequestState represents state for each async call via fetch in our
// reducers
export type ApiRequestState = {
  error: boolean | string,
  loading: boolean,
};
