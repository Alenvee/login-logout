import React from "react";
import { useHistory } from "react-router-dom";


function Header(props) {
    let history = useHistory();

    function handleClick() {
        props.dispatch({type: 'logOut'});
        history.push("/");
    }

  return (
    <header>
        <div>
            Maildroppa App logo 
        </div>
        <button onClick={handleClick}>
            Sign out
        </button>
    </header>
  );
}

export default Header;
