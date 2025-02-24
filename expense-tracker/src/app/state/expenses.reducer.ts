import { IExpense } from '../models/i-expense';
import { createReducer, on } from '@ngrx/store';
import {
  addExpense,
  deleteExpense,
  setCategoryFilter,
  updateExpense,
} from './expenses.actions';
import { Category } from '../models/category';

export interface ExpenseState {
  expenses: IExpense[];
  selectedCategory: Category | 'All';
}

const initialState: ExpenseState = {
  expenses: [],
  selectedCategory: 'All',
};

export const expensesReducer = createReducer(
  initialState,

  // add expense
  on(addExpense, (state, { expense }) => ({
    ...state,
    expenses: [...state.expenses, expense],
  })),

  // set category filter
  on(setCategoryFilter, (state, { category }) => ({
    ...state,
    selectedCategory: category,
  })),

  // delete expense
  on(deleteExpense, (state, { id }) => ({
    ...state,
    expenses: [...state.expenses.filter((expense) => expense.id !== id)],
  })),

  // update expense
  on(updateExpense, (state, { updatedExpense }) => ({
    ...state,
    expenses: state.expenses.map((expense) =>
      expense.id === updatedExpense.id ? updatedExpense : expense
    ),
  }))
);
