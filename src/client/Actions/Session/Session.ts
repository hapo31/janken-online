import { createAction } from "redux-actions";

export const CREATE_SESSION = "Session/CREATE_SESSION";

export default {
  createSession: createAction(CREATE_SESSION, (id: string) => ({ id }))
};
