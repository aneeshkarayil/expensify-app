import React from "react";
import { Switch, Route, Router, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import HelpPage from "../components/HelpPage";
import ExpenseDashboardPage from "../components/DashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditPage from "../components/EditPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import LoginPage from "../components/LoginPage";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header></Header>
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route
          path="/dashboard"
          component={ExpenseDashboardPage}
          exact={true}
        />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
