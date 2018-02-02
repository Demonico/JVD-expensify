import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const action = { type: '@@INIT' };
  const state = expensesReducer(undefined, action);
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add expense', () => {
  const expense = {
    id: '111',
    description: 'Movie Ticket',
    note: '',
    amount: 1125,
    createdAt: moment().subtract(1, 'day')
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit expense', () => {
  const note = 'new note value';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      note
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state[1].note).toBe(note);
});

test('should not edit expesne if id not found', () => {
  const amount = '1200';
  const action = {
    type: 'EDIT_EXPENSE',
    id: '34',
    updates: {
      amount
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});