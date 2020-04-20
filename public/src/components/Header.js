import React from "react";
import { Switch, Route, BrowserRouter, Link, NavLink } from "react-router-dom";
import { startLogout } from "../actions/auth";
import { connect } from "react-redux";

export const Header = ({ startLogout }) => (
  <div>
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>
        Dashboard
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        Create Expense
      </NavLink>
      <NavLink to="/help" activeClassName="is-active">
        Help
      </NavLink>
      <button onClick={startLogout}>Log out</button>
    </header>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
