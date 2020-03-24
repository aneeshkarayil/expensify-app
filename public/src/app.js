import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css"; //css

const store = configureStore();
store.dispatch(
  addExpense({ description: "Water Bill", amount: 100, createdAt: 1000 })
);

store.dispatch(
  addExpense({ description: "Gas Bill", amount: 500, createdAt: 2000 })
);

store.dispatch(
  addExpense({ description: "Rent", amount: 10500, createdAt: 300 })
);

//store.dispatch(setTextFilter("bill"));

const state = store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
