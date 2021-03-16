import React, { useReducer } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./Components/Header";
import NoMatch from "./Components/NoMatch";
import Login from "./Components/Login";
import Content from "./Components/Content";


const initialState = {status: false};

function reducer(state, action) {
  switch (action.type) {
    case 'logIn':
      return {status: true};
    case 'logOut':
      return {count: false};
    case 'hi, Marcus':
      return {count: true};
    default:
      throw new Error();
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          state.status ? ( <>
            <Header dispatch={dispatch} />
            {children} 
            </>
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }


  return (
    <Router>
    <Switch>
      <Route exact path="/">
          <Login dispatch={dispatch} state={state} />
      </Route>
      <PrivateRoute path="/content">
          <Content state={state} />
      </PrivateRoute>
      <PrivateRoute path="*">
          <NoMatch state={state} />
      </PrivateRoute>
    </Switch>
  </Router>
  );
}


export default App;
