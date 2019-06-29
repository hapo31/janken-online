import { combineReducers } from "redux";
import { reducer as UserName, UserNameState } from "./UserName/UserName";
import { reducer as Session, SessionState } from "./Session/Session";

export const reducer = combineReducers({ UserName, Session });
export type State = {
  UserName: UserNameState;
  Session: SessionState;
};
