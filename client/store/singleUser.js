import axios from "axios";
const TOKEN = 'token'

const SET_USER = "SET_USER";

export const setUser = (user) => {
  return {
    type: SET_USER,
    user,
  };
};

export const fetchUser = (userId) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if(token){
      const { data }  = await axios.get(`/api/users/${userId}`,{
      headers: {
        authorization: token
      }
      })
      dispatch(setUser(data));
    }
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = {};

export default function singleUser(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
}
