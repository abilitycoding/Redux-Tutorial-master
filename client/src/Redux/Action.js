import * as types from "./ActionTypes";
import axios from "axios";

export const DepositAction = (Money) => {
  console.log("Money: ", Money);
  return {
    type: types.DEPOSIT,
    payload: Money
  };
};

export const WithdrawnAction = (Money) => {
  console.log("Money: ", Money);
  return {
    type: types.WITHDRAWN,
    payload: Money
  };
};

export const CheckBalanceAction = (userData) => {
  axios
    .post("", userData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    type: types.BALANCE,
    payload: userData
  };
};
