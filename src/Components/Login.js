import React from "react";
import { useHistory } from "react-router-dom";

function Login(props) {
  let history = useHistory();

  function handleClick() {
      props.dispatch({type: 'logIn'});
      history.push("/content");
  }
  
    return (
      <div>
        <button onClick={handleClick}>
          Login
        </button>
      </div>
    );
  }

  export default Login;