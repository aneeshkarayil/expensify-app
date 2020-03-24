import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });

  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set sort by amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });

  expect(state.sortBy).toBe("amount");
});

test("should set sort by to date", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount"
  };

  const state = filtersReducer(currentState, { type: "SORT_BY_DATE" });

  expect(state.sortBy).toBe("date");
});
