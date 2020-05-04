import React from "react";
import { connect } from "react-redux";
import ExpenseLineItem from "./ExpenseListItem";
import selectExpense from "../selectors/expenses";

export const ExpenseList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    {props.expenses.map((expense) => {
      return <ExpenseLineItem key={expense.id} {...expense} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpense(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
