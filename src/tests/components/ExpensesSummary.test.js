import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpenseSummary with one expense ', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={235} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpenseSummary with multiple expenses ', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expenseTotal={5778965} />);
  expect(wrapper).toMatchSnapshot();
});