import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { reducer, State } from "./Reducers/Reducer";
import { Provider, useDispatch, useSelector } from "react-redux";

import EnterName from "./Components/EnterName";
import Actions from "./Actions/Actions";

const store = createStore(reducer);

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: State) => state);
  return (
    <div>
      <div>Janken Online</div>
      <div>ver 0.1</div>
      {state.UserName.nameEntered ? (
        <div>{state.UserName.name}</div>
      ) : (
        <EnterName
          defaultName={state.UserName.name}
          onEnterName={name => {
            dispatch(Actions.changeUserName(name));
          }}
        />
      )}
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
