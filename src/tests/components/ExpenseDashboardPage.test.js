import React from "react";
import ExpenseDashboardPage from "../../components/ExpenseDashboardPage";
import { shallow } from "enzyme";

test("should render the Expense Dashboard Page", () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
