import { handleActions } from "redux-actions";
import Actions from "../../Actions/Session/Session";
import { WebSocketAPIServer } from "../../config";
import IAction from "../IAction";

const initialState: {
  websocket: WebSocket | null;
} = {
  websocket: null
};

export const reducer = handleActions(
  {
    // 型が間違っているのでIAction型を当てるワークアラウンド
    [Actions.createSession.toString()]: (state, action: IAction) => {
      console.log(action);
      const ws = new WebSocket(WebSocketAPIServer);
      ws.addEventListener("open", _ => {
        ws.send(`join_matching {"id": "${action.payload.id}"}`);
      });

      ws.addEventListener("message", event => {
        console.log(event.data);
      });
      return {
        ...state,
        websocket: ws
      };
    }
  },
  initialState
);

export type SessionState = typeof initialState;
