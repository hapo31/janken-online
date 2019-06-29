import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { reducer, State } from "./Reducers/Reducer";
import { Provider, useDispatch, useSelector } from "react-redux";
import Actions from "./Actions/Actions";

import H1 from "./Components/Atom/h1";
import EnterName from "./Components/EnterName";
import AlignCenter from "./Components/Atom/AlignCenter";

const store = createStore(reducer);

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: State) => state);
  return (
    <div
      style={{
        width: "500px"
      }}
    >
      <H1>Janken Online</H1>
      <div>ver 0.1</div>
      {state.UserName.nameEntered ? (
        <AlignCenter>{state.UserName.name}</AlignCenter>
      ) : (
        <EnterName
          defaultName={state.UserName.name}
          onEnterName={name => {
            dispatch(Actions.changeUserName(name));
            dispatch(Actions.createSession(`${name}-${new Date().getTime()}`));
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
