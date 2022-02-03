import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "../src/styles/styles.scss";

const store = configureStore();
store.dispatch(
  addExpense({ description: "Water Bill", amount: 100, createdAt: -21000 })
);
store.dispatch(
  addExpense({ description: "Electric Bill", amount: 200, createdAt: 12500 })
);
store.dispatch(setTextFilter("bill"));
const state = store.getState();
const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpense)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
