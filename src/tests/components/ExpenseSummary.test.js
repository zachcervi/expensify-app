import React from "react";
import { shallow } from "enzyme";
import { ExpenseSummary } from "../../components/ExpenseSummary";
import expenses from "../fixtures/expenses";


test('should correctly render ExpensesSummary with 1 expense', () => {
const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235}/>)
expect(wrapper).toMatchSnapshot()
})

test("should correctly render ExpensesSummary with multiple expenses", () => {
    const wrapper = shallow(
      <ExpenseSummary expenseCount={23} expensesTotal={230512315} />
    );
    expect(wrapper).toMatchSnapshot();
});