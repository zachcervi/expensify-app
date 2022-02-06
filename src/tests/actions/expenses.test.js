import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("123abc", { description: "A test description" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: { description: "A test description" },
  });
});

test("should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "This is a description",
    note: "This is an expense",
    amount: 12300,
    createdAt: 1000,
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test("should setup add expense action object with default values", () => {
  const defaultExpenseData = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0,
  };

  const action = addExpense();

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...defaultExpenseData,
      id: expect.any(String),
    },
  });
});
