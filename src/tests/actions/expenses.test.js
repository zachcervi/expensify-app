import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";
import { ref, onValue, getDatabase } from "firebase/database";

const createMockStore = configureMockStore([thunk]);

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
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2],
  });
});

test("should add expense to database and store", (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: "Mouse",
    amount: 3000,
    note: "This one is cool",
    createdAt: 1000,
  };
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseData,
      },
    });

    const db = getDatabase();
    const expensesRef = ref(db, `expenses/${actions[0].expense.id}`);
    onValue(expensesRef, (snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
  });
});

test("should add expense with defaults to database and store", (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0,
  };
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseData,
      },
    });

    const db = getDatabase();
    const expensesRef = ref(db, `expenses/${actions[0].expense.id}`);
    onValue(expensesRef, (snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
  });
});
