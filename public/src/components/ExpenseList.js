import React from "react";
import { connect } from "react-redux";
import ExpenseLineItem from "./ExpenseListItem";
import selectExpense from "../selectors/expenses";

export const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map(expense => {
      return <ExpenseLineItem key={expense.id} {...expense} />;
    })}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpense(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
