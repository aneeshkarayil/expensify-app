import React from "react";
import { Switch, Route, BrowserRouter, Link, NavLink } from "react-router-dom";
import { startLogout } from "../actions/auth";
import { connect } from "react-redux";

export const Header = ({ startLogout }) => (
  <div>
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link to="/dashboard" exact={true} className="header__title">
            <h1>Expensify</h1>
          </Link>
          <button onClick={startLogout} className="button button--link">
            Log out
          </button>
        </div>
      </div>
    </header>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
