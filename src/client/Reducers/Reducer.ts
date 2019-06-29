import { combineReducers } from "redux";
import { reducer as UserName, UserNameState } from "./UserName/UserName";

export const reducer = combineReducers({ UserName });
export type State = {
  UserName: UserNameState;
};
