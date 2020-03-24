const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];

    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => {
        return id !== action.id;
      });

    case "EDIT_EXPENSE":
      return state.map(expense => {
        return {
          ...expense,
          ...action.updates
        };
      });

    default:
      return state;
  }
};

export default expensesReducer;
