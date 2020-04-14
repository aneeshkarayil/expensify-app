import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("should set up remove expense action object", () => {
  const action = removeExpense({ id: "123abcd" });

  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abcd",
  });
});

test("should set up edit expense action object", () => {
  const action = editExpense("123abcd", { note: "Updated note" });

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abcd",
    updates: {
      note: "Updated note",
    },
  });
});

// test("should set up add expense action object for value passes", () => {
//   const expenseData = {
//     description: "rent",
//     amount: 100,
//     createdAt: 1000,
//     note: "This is rent"
//   };

//   const action = addExpense(expenseData);

//   expect(action).toEqual({
//     type: "ADD_EXPENSE",
//     expense: {
//       ...expenseData,
//       id: expect.any(String)
//     }
//   });
// });

test("should set up add expense action object for default", () => {});
