import React from "react";
import { Switch, Route, Router, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import HelpPage from "../components/HelpPage";
import ExpenseDashboardPage from "../components/DashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditPage from "../components/EditPage";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "./PrivateRoute";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <PrivateRoute
          path="/dashboard"
          component={ExpenseDashboardPage}
          exact={true}
        />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditPage} />
        <PrivateRoute path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
