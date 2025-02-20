import { IExpense } from '../models/i-expense';
import { createReducer, on } from '@ngrx/store';
import { addExpense } from './expenses.actions';

export interface ExpenseState {
  expenses: IExpense[];
}

const initialState: ExpenseState = {
  expenses: [],
};

export const expensesReducer = createReducer(
  initialState,
  on(addExpense, (state, { expense }) => ({
    ...state,
    expenses: [...state.expenses, expense], // Add new expense to state
  }))
);
