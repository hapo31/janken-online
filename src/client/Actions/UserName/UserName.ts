import { createAction } from "redux-actions";

export const CHANGE_USER_NAME = "UserName/CHANGE_USER_NAME";

export default {
  changeUserName: createAction(CHANGE_USER_NAME, (name: string) => ({ name }))
};
