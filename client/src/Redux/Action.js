import * as types from "./ActionTypes";
import axios from "axios";

export const DepositAction = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`http://localhost:5000/deposit`, payload);
      dispatch({
        type: types.DEPOSIT,
        payload: res.data.user
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const WithdrawnAction = (payload) => {
  console.log("Money: ", payload);
  return {
    type: types.WITHDRAWN,
    payload: payload
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
