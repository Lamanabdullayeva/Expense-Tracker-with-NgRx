import { IExpense } from '../models/i-expense';
import { createReducer, on } from '@ngrx/store';
import { addExpense, setCategoryFilter } from './expenses.actions';
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
  on(addExpense, (state, { expense }) => ({
    ...state,
    expenses: [...state.expenses, expense],
  })),
  on(setCategoryFilter, (state, { category }) => ({
    ...state,
    selectedCategory: category,
  }))
);
