import axios from "axios";

const initialState = {
  email: null,
  firstName: null,
  lastName: null
};

const REQUEST_USER_DATA = "REQUEST_USER_DATA";

export const requestUserData = () => {
  let data = axios.get("/auth/user-data").then(res => res.data);
  return {
    type: REQUEST_USER_DATA,
    payload: data
  };
};

export default function Reducer(state = initialState, action) {
  const { type, payload } = action;
  const { user } = payload;
  switch (type) {
    case REQUEST_USER_DATA + "_FULFILLED":
      const { email, firstName, lastName } = user;
      return { email, firstName, lastName };
    default:
      return state;
  }
}
