type rootState = {};

type Action = {
  type: string;
  payload?: string;
};

export const rootReducer = (state: rootState = {}, action: Action) => {
  return state;
};
