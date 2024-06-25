import * as types from "./ActionTypes";

const init = { Money: 0, Balance: null };

export const Reducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.DEPOSIT:
      return {
        ...state,
        Money: state.Money + payload
      };

    case types.WITHDRAWN:
      return {
        ...state,
        Money: state.Money - payload
      };

    case types.BALANCE:
      return {
        ...state,
        Balance: payload
      };

    default:
      return state;
  }
};
