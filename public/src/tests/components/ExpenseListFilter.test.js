import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";
import ExpenseLineItem from "../../components/ExpenseListItem";
import moment from "moment";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();

  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test("should render Expense list filter ", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render Expense list filter with alt filter ", () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  const value = "bills";
  wrapper.find("input").simulate("change", {
    target: {
      value
    }
  });

  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("should handle sort by date", () => {
  const value = "date";
  wrapper.setProps({
    filters: altFilters
  });

  wrapper.find("select").simulate("change", {
    target: {
      value
    }
  });

  expect(sortByDate).toHaveBeenLastCalledWith();
});

test("should handle sort by amount", () => {
  const value = "amount";

  wrapper.find("select").simulate("change", {
    target: {
      value
    }
  });
  expect(sortByAmount).toHaveBeenLastCalledWith();
});
test("should handle date changes", () => {
  const startDate = moment(0).add(4, "years");
  const endDate = moment(0).add(8, "years");

  wrapper.find("DateRangePicker").prop("onDateChange")({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(endDate).toHaveBeenLastCalledWith(endDate);
});

test("", () => {});
