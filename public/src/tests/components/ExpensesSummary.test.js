import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("Should correctly render expenses summary with 1 expense", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={201.2} />
  );

  expect(wrapper).toMatchSnapshot();
});

test("Should correctly render expenses summary with multiple expenses", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={23} expensesTotal={201.2} />
  );

  expect(wrapper).toMatchSnapshot();
});
