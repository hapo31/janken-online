import { handleActions } from "redux-actions";
import Actions from "../../Actions/UserName/UserName";

const initialState = {
  nameEntered: false,
  name: "No Name"
};

export const reducer = handleActions(
  {
    [Actions.changeUserName.toString()]: (state, action) => ({
      ...state,
      nameEntered: true,
      name: action.payload.name
    })
  },
  initialState
);

export type UserNameState = typeof initialState;
